const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/article', { useNewUrlParser: true });

const articleSchema = new mongoose.Schema({
    articleTitle: String,
    articleAuthor: String,
    articleContent: String
})

module.exports = mongoose.model('article', articleSchema);