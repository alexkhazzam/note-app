const fs = require("fs");
const path = require("path");

exports.Authenticate = class {
  constructor(user, pass) {
    (this.username = user), (this.password = pass);
  }
  authCredentials() {
    let verified = false;
    let tokenId = null;
    const registeredAccounts = fs.readFileSync(
      path.join(__dirname, "../", "data", "accounts.json")
    );
    const parsedAccounts = [...JSON.parse(registeredAccounts)];
    parsedAccounts.forEach((acc) => {
      if (this.username === acc.username && this.password === acc.password) {
        verified = true;
        tokenId = acc.id;
      } else {
        verified = false;
      }
    });

    let authObj = {};
    return (authObj = {
      verified,
      tokenId,
    });
  }
};
