var http = require('http');
var express = require('express');
var pug = require('pug');
var fileSys = require('fs');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', function(request, response){
    response.render('index', {
        articletitle1: "Tacos",
        articledata1: fileSys.readFileSync('./data/taco.txt'),
        articletitle2: "Burritos",
        articledata2: fileSys.readFileSync('./data/burrito.txt'),
        articletitle3: "Quesadillas",
        articledata3: fileSys.readFileSync('./data/quesadilla.txt')
    });
});
app.get('/random', function(request, response){
    response.render('random', {
        articletitle1: "My Code",
        articledata1: fileSys.readFileSync('./data/css.txt')
    });
});
app.get('/about', function(request, response){
    response.render('about', {
        articletitle1: "About me",
        articledata1: fileSys.readFileSync('./data/me.txt'),
        articledata2: fileSys.readFileSync('./data/alsome.txt'),
        articledata3: fileSys.readFileSync('./data/me2.txt')
    });
});

app.listen(8080);

console.log('Server running at http://127.0.0.1:8080/');