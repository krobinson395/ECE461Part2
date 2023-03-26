/**
 * The DefaultController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the ServiceController.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the ServiceController, and where response is handled.
 */

const ControllerClass = require('./Controller');
const ServiceController = require('./utils/DefaultService');
const createAuthToken = async (request: any, response: any) => {
  await ControllerClass.handleRequest(
    request,
    response,
    ServiceController.createAuthToken
  );
};

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

module.exports = {
  createAuthToken,
  packageByNameDelete,
  packageByNameGet,
  packageByRegExGet,
  packageCreate,
  packageDelete,
  packageRate,
  packageRetrieve,
  packageUpdate,
  packagesList,
  registryReset,
};
