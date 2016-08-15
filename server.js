var express = require('express');
var BodyParser = require('body-parser');
var handlebars = require('express-handlebars');

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(BodyParser.urlencoded({
	extended:false
}));

app.engine('handlebars', handlebars({
	defaultLayout: 'main'
}));

app.set('view engine', handlebars);

//home page
app.get('/', function(req, res){
	res.render('new');

})
//form page
app.get('/new-post', function(req, res){
	res.render('index');
	
})


app.get('/posts/:id', function(req, res){
	res.render('post');
	
})




var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('connected to ', port);
});