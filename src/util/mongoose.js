module.exports = {
    mutipleMongooseToObject: function(mongooses) {
        return mongooses.map(mongooses => mongooses.toObject())
    },
    mongooseToObiect: function(mongooses) {
        return mongooses ? mongooses.toObject() : mongooses;
    }
}