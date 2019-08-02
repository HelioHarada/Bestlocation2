
// importa configuração do Express e do banco de dados
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express ();
app.use(serveStatic(__dirname));

app.get('*', function (req, res) {
    const index = path.join(__dirname, 'index.html');
    console.log(index);
    res.sendFile(index)
});

var port = process.env.PORT || 5000; 
// passa a porta definida no Express e levantamento do servidor
app.listen(port);
console.log ('Servidor client iniciado na porta ' + port + '.');