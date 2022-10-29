const Course = require('../model/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
// require(src/app/controller/siteController)
// require(src/app/model/courses)
//require(src/util/mongoose)
class meController {
    // get news
    storedCourses(req, res, next) {
            // res.json(res.locals._sort);
            Promise.all([
                    Course.find({}).sortable(req),
                    Course.countDocumentsDeleted()
                ])
                .then(([courses, deletedCount]) =>
                    res.render('me/stored-courses', {
                        deletedCount,
                        courses: mutipleMongooseToObject(courses)
                    })
                )
                .catch(() => {});
            // Course.countDocumentsDeleted()
            //     .then((deletedCount) => {
            //         console.log(deletedCount);
            //     })
            //     .catch(() => {});


            // Course.find({})
            //     .then(courses => res.render('me/stored-courses', {
            //         courses: mutipleMongooseToObject(courses)
            //     }))
            //     .catch(next);

        }
        //[get] me/trash/courses
    strashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash-courses', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next);

    }
}
module.exports = new meController();