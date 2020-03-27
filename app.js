const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//express app setup
const app = express();
const port = process.env.PORT | 5000;

//connect to mongo db
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise


// use body-parser middleware
app.use(bodyParser.json());


// initialize routes

app.use('/api', require('./routes/api'));


// error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

app.set('view engine', 'ejs');
app.use("/assets/css", express.static(__dirname + "/assets/css"));
app.use("/assets/img", express.static(__dirname + "/assets/img"));
app.use("/assets/img", express.static(__dirname + "/assets/scss"));
app.use("/assets/js", express.static(__dirname + "/assets/js"));

app.get('/', function(req, res) {
	res.render('home');
})
app.get('/Listings', function(req, res) {
	res.render('Listings');
})
app.use(express.static('public'));
app.listen(port, () => { console.log("Server started on port: " + port) });