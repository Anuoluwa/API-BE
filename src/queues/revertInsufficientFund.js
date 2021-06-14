import redisConnection from './connection';
import { reverseTransaction24HoursTimeline } from '../../helpers/marketHelper/transactionReversal';

export const tradePayment24HoursQueue = new Queue('sendTradeReport', {
  redis: {
    host: redisConnection.options.host,
    port: redisConnection.options.port
  }
});
