
// importa configuração do Express e do banco de dados
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app.use(serveStatic(__dirname));

app.get('*', function (req, res) {
    const index = path.join(__dirname, 'index.html');
    console.log(index);
    res.sendFile(index)
});

// passa a porta definida no Express e levantamento do servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor rodando na porta ${app.get('port')}`)
});