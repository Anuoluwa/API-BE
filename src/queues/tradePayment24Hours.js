// import redisConnection from './connection';
// import { reverseTransaction24HoursTimeline } from '../../helpers/marketHelper/transactionReversal'

// export const tradePayment24HoursQueue = new Queue('sendTradeReport', {
//     redis: {
//       host: redisConnection.options.host,
//       port: redisConnection.options.port
//     }
//   });

//   tradePayment24HoursQueue.process(async (job) => {
//     return await tradePayment24HoursSchedule(
//       job.data.,
//       job.data.,
//       job.data.,
//       job.data.,
//       job.data.,
//       job.data.,
//       job.data.
//     );
//   });

//   export const tradePayment24HoursSchedule = async (report) => {
//     const result = await reverseTransaction24HoursTimeline(report);
//     const options = {
//       delay: 86400000,  //24hours
//       attempts: 2
//     };

//     // const data = {
//     //   tid,
//     //   commodity_code,
//     //   warehouse_code,
//     //   grade,
//     //   buyer_cid,
//     //   seller_cid,
//     //   volume
//     // };
//     const data = {
//       ...report
//     };
//     tradePayment24HoursQueue.add(data, options);
//   };
