const Express = require('express');
const Router = Express.Router();

const loginController = require('../controllers/loginController');

Router.get('/login', loginController.getLogin);
Router.post('/login', loginController.getSecureRoute);
Router.get('/bad-login', loginController.getInvalidLogin);

module.exports = Router;
