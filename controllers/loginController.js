const authenticate = require('../models/login');

exports.getLogin = (req, res, next) => {
  res.render('login');
};

exports.getSecureRoute = (req, res, next) => {
  const authorizeUser = new authenticate.Authenticate(
    req.body.password,
    req.body.username,
    req.params.token
  );
  const verified = authorizeUser.authCredentials();
  if (verified.verified && verified.tokenId !== null) {
    res.redirect(`/secure/home/${verified.tokenId}`);
  } else {
    return res.redirect('/bad-login');
  }
};

exports.getInvalidLogin = (req, res, next) => {
  res.send(
    "<h1>Invalid Credentials. Click <a href='login'>here</a> to login again, or <a href='/register'>here</a> to create a new account.</h1>"
  );
};
