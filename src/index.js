const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
// http logger
const morgan = require('morgan');
const route = require('./routes');
//template engine
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

//xml http request, fetch,

const port = 3000;
app.use(morgan('combined'));

//app.engine('handlebars', handlebars());
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () =>
  console.log(`example app listening at http://localhost:${port}`),
);
