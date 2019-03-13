// importando módulos necessários
var express = require('express');
const consign = require('consign');
var bodyParser = require('body-parser');

// exportando função de configuração que retorna a variável 'app'
module.exports = () => {
    var app = express();
    app.set('port', (process.env.PORT || 8080));

    app.use(bodyParser.urlencoded({ extended: true }));    // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));  
    app.use(express.static('public')); //definir a localização dos arquivos estáticos /public

    // injeção e autoload dos nossos scripts na nossa intância
    consign({cwd: 'server'})
        .include('../src/models')
        .include('../src/controllers')
        .then('../src/routes')

        .into(app);

    return app;
}