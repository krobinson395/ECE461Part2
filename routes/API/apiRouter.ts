import {Request, Response} from 'express';
module.exports = function (express: any) {
  var router = express.Router();

  /*@hasansultan92*/
  router.post('/testFunction', (req: Request, res: Response) => {
    console.log('hello');
    res.json({msg: 'Hello World'});
  });

  return router;
};
