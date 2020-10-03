const note = require('../models/admin/noteHandler');

exports.getNotes = (req, res, next) => {
  res.render('admin/add-note', { token: req.params.tokenId });
};

exports.postNoteInformation = (req, res, next) => {
  const date = new Date().toISOString().toString();
  const noteHandler = new note.NoteHandler(
    req.body.title,
    req.body.subject,
    req.body.note,
    req.params.tokenId,
    req.body.imgUrl,
    date
  );
  noteHandler.storeInformation();
};
