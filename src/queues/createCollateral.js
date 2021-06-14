import Queue from 'bull';
import redisConnection from './connection';
import { createCollateral } from '../../afexAPI/afexService';

export const createCollateralQueue = new Queue('sendTradeReport', {
  redis: {
    host: redisConnection.options.host,
    port: redisConnection.options.port
  }
});

createCollateralQueue.process(async (job) => {
  return await createCollateralAfex(
    job.data.tid,
    job.data.commodity_code,
    job.data.warehouse_code,
    job.data.grade,
    job.data.cid,
    job.data.op_type,
    job.data.volume
  );
});

export const createCollateralAfex = async (report) => {
  const afexResponse = await createCollateral(report);
  const options = {
    delay: 60000,
    attempts: 2
  };

  const data = {
    ...report
  };
  createCollateralQueue.add(data, options);
};
