const newsRouter = require('./news.js');
const siteRouter = require('./site.js');
const coursesRouter = require('./courses.js');
const meRouter = require('./me.js');

function route(app) {
    app.use('/home', newsRouter);
    app.use('/', siteRouter);
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);

    // đưa vào mvc
}
module.exports = route;