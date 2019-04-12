// importando módulos necessários
var express = require('express');
const consign = require('consign');
var bodyParser = require('body-parser');

// exportando função de configuração que retorna a variável 'app'
module.exports = () => {
    var app = express();

    // app.use(express.static(__dirname + "/dist/"));
    app.use(express.static('bestlocation'));


    
    app.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
    });

    app.set('port', (process.env.PORT || 8080));

    app.use(bodyParser.urlencoded({ extended: true }));    // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));  
    app.use(express.static('public')); //definir a localização dos arquivos estáticos /public

    // injeção e autoload dos nossos scripts na nossa intância
    consign({cwd: 'server'})
            .include('../server/src/models')
            .include('../server/src/controllers')
            .then('../server/src/routes')

        .into(app);

    return app;
}