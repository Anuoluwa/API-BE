import Queue from 'bull';
import redisConnection from './connection';
import { createTrade } from '../../afexAPI/afexService';

export const tradeReportQueue = new Queue('sendTradeReport', {
  redis: {
    host: redisConnection.options.host,
    port: redisConnection.options.port
  }
});

tradeReportQueue.process(async (job) => {
  return await reportTradeToAfex(
    job.data.tid,
    job.data.commodity_code,
    job.data.warehouse_code,
    job.data.grade,
    job.data.buyer_cid,
    job.data.seller_cid,
    job.data.volume
  );
});

export const reportTradeToAfex = async (report) => {
  const afexResponse = await createTrade(report);
  const options = {
    delay: 60000,
    attempts: 2
  };

  // const data = {
  //   tid,
  //   commodity_code,
  //   warehouse_code,
  //   grade,
  //   buyer_cid,
  //   seller_cid,
  //   volume
  // };
  const data = {
    ...report
  };
  tradeReportQueue.add(data, options);
};
