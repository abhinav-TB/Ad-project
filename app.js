const express = require('express');
const app = express();
const port = process.env.PORT | 5000;
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
app.listen(port, () => { console.log("Server started on port: " + port) });