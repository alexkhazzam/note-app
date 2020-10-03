const Express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');

const app = Express();

dotenv.config({ path: './config.env' });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(Express.static(path.join(__dirname, 'public', 'css')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');
const adminRoutes = require('./routes/admin');

app.use(loginRoutes);
app.use(registerRoutes);
app.use(adminRoutes);

app.use('/', (req, res, next) => {
  res.redirect('/register');
});
app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found!</h1>');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening to requests on port ${PORT}`);
});
