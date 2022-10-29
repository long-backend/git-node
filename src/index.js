const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path');
const SortMiddleware = require('./app/middlewares/SortMiddleware');


// http logger
const morgan = require('morgan');
const route = require('./routes');

const db = require('./config/db')
db.connect();
//template engine
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));
// custome middlewares
app.use(SortMiddleware);


app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    helpers: require('./helpers/handlebars')

}));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

//xml http request, fetch,

const port = 3001;
app.use(morgan('combined'));

//app.engine('handlebars', handlebars());
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () =>
    console.log(` app listening at http://localhost:${port}`),
);