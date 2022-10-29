const Course = require('../model/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObiect } = require('../../util/mongoose');

mongooseToObiect
// require(src/app/controller/siteController)
// require(src/app/model/courses)
//require(src/util/mongoose)
class CoursesController {
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
        //course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', {
                    course: mongooseToObiect(course)
                });
            })
            .catch(next)
    }
    create(req, res, next) {
        res.render('courses/create');
    }
    store(req, res, next) {

        req.body.hobby = 'music';
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(error => {

            });
    }
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(courses => res.render('courses/edit', {
                courses: mongooseToObiect(courses),
            }))
            .catch(next);

    }
    update(req, res, next) {
            Course.updateOne({
                    _id: req.params.id
                }, req.body)
                .then(() => res.redirect('/me/stored/courses'))
                .catch(next);
        }
        // [delete] /courses/:id
    destroy(req, res, next) {
        Course.delete({
                _id: req.params.id
            })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [delete] /courses/:id/force
    forcedestroy(req, res, next) {
        Course.deleteOne({
                _id: req.params.id
            })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [patch] /courses/:id/restore
    restore(req, res, next) {
            Course.restore({
                    _id: req.params.id
                })
                .then(() => res.redirect('back'))
                .catch(next);
        }
        // [post] /courses/handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({
                        _id: { $in: req.body.courseIds }
                    })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'no value in ' })
        }
    }

}


module.exports = new CoursesController();