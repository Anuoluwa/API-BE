import mongoose from 'mongoose';
import options from '../config';
import chalk from 'chalk';
// import mongoose from 'mongoose';
// import options from '../config'

// export const connect = (url = options.dbUrl, opts = {}) => {
//   return mongoose.connect(url, { ...opts, useNewUrlParser: true });
// };

export const connect = async (url = options.dbUrl) => {
  try {
    return await mongoose.connect(
      url,
      { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
      () => {
        console.log(chalk.blue.bold('DB connected!.'));
      }
    );
  } catch (err) {
    mongoose.connection.on('error', (err) => {
      console.log(chalk.red(`DB connection error: ${err.message}`));
    });
  }
};