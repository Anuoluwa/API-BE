import Queue from 'bull';
import redisConnection from './connection';
import { sendEmailNotification } from '../../helpers/marketHelper/emailNotificationHelper';

export const sendEmailQueue = new Queue('sendEmailNotification', {
  redis: {
    host: redisConnection.options.host,
    port: redisConnection.options.port
  }
});

sendEmailQueue.process(async (job) => {
  const result = await sendEmailNotification(
    job.data.recipient,
    job.data.sender,
    job.data.subject,
    job.data.createTradeTemplate
  );
  console.log(await result, 'Email Notification');
  return result;
});

// export const sendMailWorker = (recipient, sender, subject, createTradeTemplate) => {

// };
