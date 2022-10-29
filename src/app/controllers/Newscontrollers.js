class Newscontroller {
    // get news
    index(req, res) {
        res.render('long');
    }
    show(req, res) {
        res.render('long');
    }
}
module.exports = new Newscontroller();