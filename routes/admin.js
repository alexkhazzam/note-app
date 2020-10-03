const Express = require('express');
const Router = Express.Router();

const adminController = require('../controllers/adminController');

Router.get('/secure/:tokenId', adminController.getNotes);
Router.post('/secure/:tokenId', adminController.postNoteInformation);

module.exports = Router;
