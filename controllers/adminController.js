const note = require('../models/admin/noteHandler');

exports.getNote = (req, res, next) => {
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
    date,
    null
  );
  noteHandler.storeInformation();
  res.redirect(`/secure/notes/${req.params.tokenId}`);
};

exports.getAllNotes = (req, res, next) => {
  const noteHandler = new note.NoteHandler(
    null,
    null,
    null,
    req.params.tokenId,
    null,
    null,
    null
  );
  const notes = noteHandler.fetchAllNotes();
  console.log(notes);
  res.render('admin/notes', { token: req.params.tokenId, allNotes: notes });
};

exports.getHome = (req, res, next) => {
  const noteHandler = new note.NoteHandler(
    null,
    null,
    null,
    req.params.tokenId,
    null,
    null,
    null
  );
  const credentials = noteHandler.fetchCredentials();
  console.log(credentials);
  res.render('admin/home', {
    token: req.params.tokenId,
    username: credentials.username,
    password: credentials.password,
  });
};

exports.getNoteInfo = (req, res, next) => {
  const noteHandler = new note.NoteHandler(
    null,
    null,
    null,
    req.params.tokenId,
    null,
    null,
    req.params.noteId
  );
  const noteContent = noteHandler.fetchNoteContent();
  res.render('admin/note', { token: req.params.tokenId, note: noteContent });
};
