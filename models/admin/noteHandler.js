const fs = require('fs');
const path = require('path');

exports.NoteHandler = class {
  constructor(title, subject, note, token, imgUrl, date, noteId) {
    this.title = title;
    this.subject = subject;
    this.note = note;
    this.token = token;
    this.noteUrl = imgUrl;
    this.date = date;
    this.noteId = noteId;
  }
  storeInformation() {
    console.log(this.date);
    const accountInfo = fs.readFileSync(
      path.join(__dirname, '../', '../', 'data', 'accounts.json')
    );
    const parsedAccountInfo = [...JSON.parse(accountInfo)];
    const userObj = {
      ...parsedAccountInfo.find((acc) => acc.id === this.token),
    };
    const newNoteObj = {
      date: this.date,
      noteId: Math.random(),
      noteImgUrl: this.noteUrl,
      title: this.title,
      subject: this.subject,
      note: this.note,
    };
    userObj.noteInformation.push(newNoteObj);

    fs.writeFile(
      path.join(__dirname, '../', '../', 'data', 'accounts.json'),
      JSON.stringify(parsedAccountInfo),
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
  }
  fetchCredentials() {
    let dataObj = {};
    const userData = fs.readFileSync(
      path.join(__dirname, '../', '../', 'data', 'accounts.json')
    );
    const parsedUserData = [...JSON.parse(userData)];
    console.log;
    parsedUserData.forEach((acc) => {
      if (acc.id === this.token) {
        dataObj = { ...acc };
      }
    });
    return dataObj;
  }
  fetchAllNotes() {
    let noteArr = [];
    const userData = fs.readFileSync(
      path.join(__dirname, '../', '../', 'data', 'accounts.json')
    );
    const parsedUserData = [...JSON.parse(userData)];
    console.log;
    parsedUserData.forEach((acc) => {
      if (acc.id === this.token) {
        noteArr = [...acc.noteInformation];
      }
    });
    return noteArr;
  }
  fetchNoteContent() {
    let noteInfo = null;
    let correctNote = null;
    const noteData = fs.readFileSync(
      path.join(__dirname, '../', '../', 'data', 'accounts.json')
    );
    const parsedNoteData = [...JSON.parse(noteData)];
    parsedNoteData.forEach((account) => {
      if (account.id === this.token) {
        correctNote = [...account.noteInformation];
      }
    });
    correctNote.forEach((note) => {
      if (note.noteId == this.noteId) {
        noteInfo = note.subject;
        console.log(noteInfo);
      }
    });
    return noteInfo;
  }
};
