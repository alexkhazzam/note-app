const authLogin = require('../models/register');

exports.getRegister = (req, res, next) => {
  res.render('register', {});
};

exports.postCredentials = (req, res, next) => {
  const checkCreds = new authLogin.CheckCreds(
    req.body.username,
    req.body.password
  );
  if (!checkCreds.usernameExists()) {
    checkCreds.saveCreds();
    res.redirect('/login');
  } else {
    res.send(
      "<h1>That username is taken. Click <a href='register'>Here</a> to create another one.</h1>"
    );
  }
};
