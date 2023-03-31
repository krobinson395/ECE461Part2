/**
 * The DefaultController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the ServiceController.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the ServiceController, and where response is handled.
 */


import {log} from '../controllers/utils/misc';
const UserSchema = require('./db/user-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


export const createAuthToken = async (user: any) => {
  // Create token
  const token = jwt.sign({username: user.first_name}, process.env.TOKEN_KEY, {
    expiresIn: '90h',
  });
  return token
};

/* Function to create a User in the database and store their Token
Token is valid for 90 Hours as of yet */
export const CreateUser = async (req: any, res: any) => {
  try {
    const {username, password} = req.body;
    // @TODO Validate User input
    // create a auth token based on the is admin parameter

    console.log(username, password);
    // Check the password witth the database
    if (!(username && password)) {
      res.status(400).send('No valid input was sent');
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await UserSchema.findOne({first_name: username});

    if (oldUser) {
      res.status(400).send('User Already Exist. Please Login');
      return;
    }

    //Encrypt user password
    let encryptedUserPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await UserSchema.create({
      first_name: username,
      password: encryptedUserPassword,
    });

    // save user token
    user.token = await createAuthToken(user);

    // return new user
    res.contentType('application/json');
    res.status(200).json(user);
  } catch (e: any) {
    log(e, e, 1);
    res.status(400).json('bad Req');
  }
};



export const randomFunc = async (req: any, res: any) => {
  const {User, Secret} = req.body;
  console.log(User, Secret, typeof User.isAdmin);
  // Check the password witth the database

  // create a auth token based on the is admin parameter
  res.contentType('application/json');
  res.json({msg: 'Hello World'});
};
/*
const packageByNameDelete = async (request: any, response: any) => {
  await ControllerClass.handleRequest(
    request,
    response,
    ServiceController.packageByNameDelete
  );
};

const packageByNameGet = async (request: any, response: any) => {
  await ControllerClass.handleRequest(
    request,
    response,
    ServiceController.packageByNameGet
  );
};

const packageByRegExGet = async (request: any, response: any) => {
  await ControllerClass.handleRequest(
    request,
    response,
    ServiceController.packageByRegExGet
  );
};

const packageCreate = async (request: any, response: any) => {
  await ControllerClass.handleRequest(
    request,
    response,
    ServiceController.packageCreate
  );
};

const packageDelete = async (request: any, response: any) => {
  await ControllerClass.handleRequest(
    request,
    response,
    ServiceController.packageDelete
  );
};

const packageRate = async (request: any, response: any) => {
  await ControllerClass.handleRequest(
    request,
    response,
    ServiceController.packageRate
  );
};

const packageRetrieve = async (request: any, response: any) => {
  await ControllerClass.handleRequest(
    request,
    response,
    ServiceController.packageRetrieve
  );
};

const packageUpdate = async (request: any, response: any) => {
  await ControllerClass.handleRequest(
    request,
    response,
    ServiceController.packageUpdate
  );
};

const packagesList = async (request: any, response: any) => {
  await ControllerClass.handleRequest(
    request,
    response,
    ServiceController.packagesList
  );
};

const registryReset = async (request: any, response: any) => {
  await ControllerClass.handleRequest(
    request,
    response,
    ServiceController.registryReset
  );
};

*/