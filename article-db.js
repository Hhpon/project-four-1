const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/article',{useNewUrlParser: true}, (err) => {
    if (err) {
        console.log('数据库链接失败');
    } else {
        console.log('连接成功');
    }
})

const articleSchema = ({
    articletitle: String,
    articleauthor: String,
    articlecontent: String
})

module.exports = mongoose.model('article',articleSchema);