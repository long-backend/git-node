const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

const mongooseDelete = require('mongoose-delete');
const CourseSchema = new Schema({

    name: { type: String, required: true },
    description: { type: String },
    slug: { type: String, slug: "name", unique: true },
    video: { type: String },
    hobby: { type: String }

}, {
    timestamps: true,
});
// custome qurey helpers
CourseSchema.query.sortable = function(req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidtype = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidtype ? req.query.type : 'desc',
        })
    }
    return this
}




mongoose.plugin(slug);

CourseSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Course', CourseSchema);