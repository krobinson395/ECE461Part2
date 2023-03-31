import {Request, Response} from 'express';
import {log} from '../../controllers/utils/misc';
const UserSchema = require('../../controllers/db/user-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = function (express: any) {
  var router = express.Router();

  /*@hasansultan92*/
  router.post('/testFunction', (req: Request, res: Response) => {
    console.log('hello');
    res.json({msg: 'Hello World'});
  });

  router.put('/authenticate', (req: Request, res: Response) => {
    const {User, Secret} = req.body;
    console.log(User, Secret, typeof User.isAdmin);
    // Check the password witth the database

    // create a auth token based on the is admin parameter
    res.contentType('application/json');
    res.json({msg: 'Hello World'});
  });

  router.post('/register', async (req: Request, res: Response, next: any) => {
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

      // Create token
      const token = jwt.sign(
        {username: user.first_name},
        process.env.TOKEN_KEY,
        {
          expiresIn: '90h',
        }
      );

      // save user token
      user.token = token;

      // return new user
      res.contentType('application/json');
      res.status(200).json(user);
    } catch (e: any) {
      log(e, e, 1);
      res.status(400).json('bad Req');
    }
  });
  return router;
};
