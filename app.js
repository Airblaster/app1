
/*var http = require('http');
var server = http.createServer(function(req, res){
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello');
});

server.listen(3000,'127.0.0.1');
*/

var express = require('express');

var app = express();

var port = process.env.PORT || 8080

app.use(express.static(__dirname));

app.get('/serebro', function(req, res){
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.end('Серебро');
});

app.get('/', function(req, res){
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.end('Домашняя страница');
});

app.listen(port, function () {
  console.log('Сервер запустился!');
});