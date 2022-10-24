const newsRouter = require('./news.js');
const siteRouter = require('./site.js');

function route(app) {
  app.use('/home', newsRouter);
  app.use('/', siteRouter);
  // đưa vào mvc
}
module.exports = route;
