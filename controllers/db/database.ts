const mongoose = require('mongoose');
import {log} from '../utils/misc';

exports.connect = (logLevel: number, MongoUrl: string) => {
  // Connecting to the database
  let returnVal: number = 0; // Default value needs to be zero
  try {
    mongoose.connect(MongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    //   const db = mongoose.connection;
    //   if (mongoose.connection.readyState == !1)
    //     db.on('error', console.error.bind(console, 'connection error: '));
    //   db.once('open', function () {
    //     console.log('Connected successfully');
    //   });
    returnVal = 1;
  } catch (error: any) {
    log('Failure to connect with Database', error.stack, logLevel);
  } finally {
    return returnVal;
  }
};
