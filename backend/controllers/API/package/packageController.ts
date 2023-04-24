const packageSchema = require('../../Database/package-model');
import {log} from '../../utils/misc';
import {
  successHandler,
  errorHandler,
  CustomError,
} from '../../utils/responseHandler';
import {isAuthValid} from '../authenticate/AuthenticateFunctions';

export const createPackage = async (req: any, res: any) => {
  try {
    const {Content, URL, JSProgram} = req.body;
    //console.log(req.headers['x-authorization'])
    if (!(URL || JSProgram)) {
      errorHandler(400, 'The fields were not populated', req, res);
      return;
    }

    const authToken: string = req.headers['x-authorization'];
    if (authToken != undefined) {
      // Send out error about the token not existing
      errorHandler(400, 'Authorization token was not found', req, res);
      return;
    }
    const valid: boolean = isAuthValid(authToken);
    if (!valid) {
      //const error : Error = CustomError('asdas', 500)
      errorHandler(400, 'Authorization token in valid', req, res);
      return;
    }

    // Create the packeg information
  } catch (e:any) {
    log(
      'Something went wrong when trying to create the package',
      e,
      parseInt(process.env.LOG_LEVEL!)
    );
  } finally {
    return;
  }
};

export const findByRegex = async (req: any, res: any) => {};

export const findById = async (req: any, res: any) => {};

export const deletePackage = async (req: any, res: any) => {
  // Find the package
  const authToken: string = req.headers['x-authorization'];
  const tokenValid: boolean = isAuthValid(authToken);

  if (!tokenValid) {
    errorHandler(400, 'You are not true', req, res);
    return;
  }

  // might need to fix this potentially
  const packageInfo = await packageSchema.findOneAndRemove({
    name: req.params.name,
  });
  successHandler(200, {}, req, res);
  return;
};
