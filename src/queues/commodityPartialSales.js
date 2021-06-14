import Queue from 'bull';
import redisConnection from './connection';
import { CommodityPartialSales } from '../../../services/web3js/setterAPI';

export const commodityPartialSalesQueue = new Queue('commodityPartialSales', {
  redis: {
    host: redisConnection.options.host,
    port: redisConnection.options.port
  }
});

// let assetId = req.trade[0].assetId;
// let adminBlock = process.env.ADMIN_PASS;
// let adminPwd = process.env.ADMIN_PASS;
// let username = req.user.name;
// let userPhone = req.user.phone;
// let userBVN = req.user.bvn;
// let userClientId = req.user.clientId;
// let userBlockchainAcct = req.user.blockchainAcct;

commodityPartialSalesQueue.process(async (job) => {
  return await partialSales(
    job.data.adminBlock,
    job.data.assetId,
    job.data.adminPwd,
    job.data.volume,
    job.data.username,
    job.data.userPhone,
    job.data.userBVN,
    job.data.userClientId,
    job.data.commodityCode,
    job.data.warehouseCode,
    job.data.hexGrade,
    job.data.grade,
    job.data.userBlockchainAcct,
    job.data.adminPwd
  );
});

export const partialSales = async (salesData) => {
  const afexResponse = await CommodityPartialSales(salesData);
  const options = {
    delay: 60000,
    attempts: 2
  };

  // const data  = {
  //   adminBlock,
  //   assetId,
  //   adminPwd,
  //   volume,
  //   username,
  //   userPhone,
  //   userBVN,
  //   userClientId,
  //   commodityCode,
  //   warehouseCode,
  //   hexGrade,
  //   grade,
  //   userBlockchainAcct,
  //   adminPwd
  // };
  const data = {
    ...salesData
  };
  commodityPartialSalesQueue.add(data, options);
};
