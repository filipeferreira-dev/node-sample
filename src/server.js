const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const userController = require('./user/user.controller');
const authenticationController = require('./authentication/authentication.controller');

app.use(bodyParser.json());

//please, don't judge me
const TOKEN = '3C469E9D6C5875D37A43F353D4F88E61FCF812C66EEE3457465A40B0DA4153E0';
app.use((req, res, next) => {
  console.log(req);
  if (req.path != '/authenticate' && !req.headers.authorization && req.headers.authorization !== TOKEN) {
    return res.status(401).send();
  }
  return next();
});

userController(app);
authenticationController(app, TOKEN);

app.listen(process.env.PORT || '8080', () => {
  console.log('server started');
});