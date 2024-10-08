var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Seja Bem vindo');
    res.end();
}).listen(8000, "127.0.0.1");
console.log("Servidor executando em http://127.0.0.1:8000/");