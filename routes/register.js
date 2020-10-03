const Express = require('express');
const Router = Express.Router();

const registerController = require('../controllers/registerController');

Router.get('/register', registerController.getRegister);
Router.post('/register', registerController.postCredentials);

module.exports = Router;
