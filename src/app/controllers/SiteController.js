const Course = require('../model/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
// require(src/app/controller/siteController)
// require(src/app/model/courses)
//require(src/util/mongoose)
class SiteController {
    // get news
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);

        // Course.find({}, function(err, courses) {

        //     if (!err) {
        //         res.json(courses);
        //     } else {
        //         res.status(400).json({ error: 'ERROR !!!!' });
        //     }
        // });
        // res.render('search');

    }
    search(req, res) {
        res.render('long');
    }
}
module.exports = new SiteController();