import {Request, Response} from 'express';
import {
  CreateUser,
  createAuthToken,
  randomFunc,
} from '../../controllers/GeneralController';
import {log} from '../../controllers/utils/misc';

module.exports = function (express: any) {
  var router = express.Router();

  
  router.post('/testFunction', (req: Request, res: Response) => {
    console.log('hello');
    res.json({msg: 'Hello World'});
  });

  router.put('/authenticate', async (req: Request, res: Response) => {
    await randomFunc(req, res);
  });

  router.post('/register', async (req: Request, res: Response, next: any) => {
    await CreateUser(req, res);
  });

  return router;
};
