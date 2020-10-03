const Express = require('express');
const Router = Express.Router();

const adminController = require('../controllers/adminController');

Router.get('/secure/add-note/:tokenId', adminController.getNote);
Router.post('/secure/add-note/:tokenId', adminController.postNoteInformation);
Router.get('/secure/notes/:tokenId', adminController.getAllNotes);
Router.get('/secure/home/:tokenId', adminController.getHome);
Router.get('/secure/note/:tokenId/:noteId', adminController.getNoteInfo);

module.exports = Router;
