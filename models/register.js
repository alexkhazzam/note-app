const fs = require('fs');
const path = require('path');

exports.CheckCreds = class {
  constructor(user, pass) {
    this.username = user;
    this.password = pass;
  }
  usernameExists() {
    let userExists = false;
    const usernames = fs.readFileSync(
      path.join(__dirname, '../', 'data', 'usernames.json')
    );
    const parsedUsernames = [...JSON.parse(usernames)];
    parsedUsernames.forEach((obj) => {
      if (obj.username === this.username) {
        userExists = true;
      }
    });
    return userExists;
  }
  saveCreds() {
    const accounts = fs.readFileSync(
      path.join(__dirname, '../', 'data', 'accounts.json')
    );
    const parsedAccounts = [...JSON.parse(accounts)];
    parsedAccounts.push({
      username: this.username,
      password: this.password,
      id: Math.random().toString(),
      noteInformation: [],
    });
    fs.writeFile(
      path.join(__dirname, '../', 'data', 'accounts.json'),
      JSON.stringify(parsedAccounts),
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
    const usernames = fs.readFileSync(
      path.join(__dirname, '../', 'data', 'usernames.json')
    );
    const parsedUsernames = [...JSON.parse(usernames)];
    parsedUsernames.push({ username: this.username });
    fs.writeFile(
      path.join(__dirname, '../', 'data', 'usernames.json'),
      JSON.stringify(parsedUsernames),
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
  }
};
