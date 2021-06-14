import Queue from 'bull';
import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

const { REDIS_URL } = process.env;

const redisConnection = process.env.REDIS_URL ? new Redis(process.env.REDIS_URL) : new Redis();

redisConnection.on('error', (error) => {
  console.log('Error initialising Redis Connection', error.message);
});

redisConnection.on('connect', async () => {
  console.log(
    `The connection to Redis initialized - 
    ${redisConnection.options.host}: ${redisConnection.options.port}`
  );
});

export default redisConnection;
