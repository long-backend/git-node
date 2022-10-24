class SiteController {
  // get news
  index(req, res) {
    res.render('search');
  }
  search(req, res) {
    res.render('long');
  }
}
module.exports = new SiteController();
