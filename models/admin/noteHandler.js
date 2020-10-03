const fs = require('fs');
const path = require('path');

exports.NoteHandler = class {
  constructor(title, note, subject, token, imgUrl, date) {
    this.title = title;
    this.subject = subject;
    this.note = note;
    this.token = token;
    this.noteUrl = imgUrl;
    this.date = date;
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
};
