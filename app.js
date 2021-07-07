const express = require("express")
const mongoose = require("mongoose") // new
const routes = require("./routes") // new
const port= process.env.PORT || 5000
const bodyParser = require('body-parser');
const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) 
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use('/api', routes)

mongoose.connect('mongodb+srv://majimenez:Abc123456.@cluster0.4qn6q.mongodb.net/profiles', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(db => {
    console.log('connect database')
}).catch(err => {
    console.log('error: to try connect ', err)
})
app.listen(port, () => {
    console.log(`connect on port: ${port}`)
})