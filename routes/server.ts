require('dotenv').config();
import {log, retrieveEnvVariables} from '../controllers/utils/misc';
const envVars: any = retrieveEnvVariables();
const {logFilePath, level, mongoLink, port, github} = envVars; // retrive all environment variables

//console.log('here', logFilePath, typeof level, mongoLink, port);
if (!mongoLink) {
  log('URL for mongoDB not found', 'URL for mongoDB not found', level);
  process.exit(1);
}

import {connect} from '../controllers/db/database';
const connection: number = connect(level, mongoLink);
connection ? 1 : process.exit(1);

// Express imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

try {
  // Backend configuration
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.use(cors());

  //Initialize the route endpoint and modules being passed
  const router = require('./API/apiRouter')(express);
  app.use('/', router);

  // Run the backend (magic)
  const server = app.listen(port, (req: any, res: any) => {
    console.log(`Server is active on Port : ${port}`);
  });
} catch (error: any) {
  log('Soemthing went wrong in server.js', error.stack, level);
}
