const mongoose = require('mongoose')


const blogSchema = new mongoose.Schema({
    created_by: {type: String, required: true, unique: true},
    created_at: {type: Date, required: true,},
    blog_title: {type: String, required: true, unique: true},
    blog_content: {type: String, required: true},
    blog_content: {type: String, required: true},
    private: {type: Boolean, required: true}
})

const blogModel = mongoose.model('Blog', blogSchema)

module.exports = blogModel