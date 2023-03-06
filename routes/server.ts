require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const router = require("./API/apiRouter")(express)
app.use('/api', router);

const server = app.listen(port, (req: any, res: any) => {
  console.log(`Server is active on Port : ${port}`);
});
