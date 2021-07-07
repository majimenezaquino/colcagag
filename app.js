const express = require("express")
const mongoose = require("mongoose") // new
const routes = require("./routes") // new
const port= process.env.PORT || 5000
const bodyParser = require('body-parser');
const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) 
app.use('/api', routes)
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
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