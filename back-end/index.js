const express = require('express')
const mongoose = require('mongoose')
const configs = require('./configs/database.js');
const BlogModel = require('./model/model.js');
const app = express();
const port = 3000;

mongoose.Promise = global.Promise 
mongoose.connect(configs.mongouri, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

app.use(express.json())

app.get('/test', async(req, res) => {
    try {
        let a = new BlogModel({ title : "DED" })
        await a.save()
        const result = await BlogModel.find()
        res.send(result)
    }
    catch (err) {
        err
    }
})

app.listen(port, () => {
    console.log(`run on port ${ port }`)
})
