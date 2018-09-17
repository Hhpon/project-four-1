const express = require('express');
const bodyParser = require('body-parser');
const Article = require('./article-db');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/article', (req, res) => {

    Article.create({
        articleTitle: req.body.title,
        articleAuthor: req.body.author,
        articleContent: req.body.content
    }, (err, doc) => {
        if (err) {
            res.end('no')
        } else {
            res.end('ok');
        }
    });

})

app.get('/getArticle', (req, res) => {
    Article.find((err, doc) => {
        console.log(doc);
        res.json(doc)
    });
})

app.listen(3000, () => console.log('服务器正在监听 3000 端口'));