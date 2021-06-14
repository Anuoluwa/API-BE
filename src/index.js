/* eslint-disable no-console */
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import boolParser from 'express-query-boolean';
import chalk from 'chalk';
import config from './config';
// import swaggerSpec from '../docs/config/swaggerDef';
import router from './routes';
import { connect } from './utils/db';
//import seed from './seedings/seed'
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { signup, signin, protect } from './utils/auth'
import tryCatch from './helpers/tryCatch';

export const app = express();

dotenv.config();

app.use(helmet());
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(boolParser());
app.use(morgan('dev'));
app.use(compression());
app.use(cors());

// app.use('/api/v1/auth', rateLimiter);

app.get('/', (req, res) => {
  res.send('Welcome to Pharmaserv API ');
});

app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.post('/signup', tryCatch(signup));
app.post('/signin', tryCatch(signin));
// search
app.use('/api', protect);
app.use('/api/v1', router);
//app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use('*', (req, res) =>
  res.status(404).json({
    status: 404,
    message: 'No endpoint matches that URL'
  })
);

export const start = async () => {
  try {
    await connect();
    app.listen(config.port, () => {
      console.log(chalk.green.bold(`REST API on http://localhost:${config.port}/`));
    });
  } catch (error) {
    console.log(chalk.red(error));
  }
};
