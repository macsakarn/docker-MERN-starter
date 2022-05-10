const mongoose = require('mongoose')

const BlogSchema = mongoose.Schema({
    title : {
        type : String
    }
})

const BlogModel = mongoose.model('Takai', BlogSchema)

module.exports = BlogModel