require('dotenv').config();
import {log, retrieveEnvVariables} from '../controllers/utils/misc';
const envVars = retrieveEnvVariables();
const [logFilePath, level, mongoLink, port, github] = envVars;
console.log('here', logFilePath, level, mongoLink, port, github);
if (!mongoLink) {
  process.exit(1);
}
const connection: number = require('../controllers/db/database').connect(
  envVars[1],
  envVars[2]
);
connection ? 1 : process.exit(1);

// Express imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
//const port = envVars[3]; // Set port
console.log(port);
// retrive all environment variables
try {
  // Backend configuration
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.use(cors());

  //Initialize the route endpoint and modules being passed
  const router = require('./API/openapiRouter')(express);
  console.log(router);
  app.use('/api', router);

  // Run the backend (magic)
  const server = app.listen(port, (req: any, res: any) => {
    console.log(`Server is active on Port : ${port}`);
  });
} catch (error: any) {
  log('Soemthing went wrong in server.js', error.stack, 1);
}
