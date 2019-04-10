
// importa configuração do Express e do banco de dados
const app = require('./config/express')();
var path = require('path')
var serveStatic = require('serve-static')
require('./config/database');

require('dotenv').config()

app.use(express.static(__dirname + "/dist/"));
    
app.get(/.*/, function(req, res){
    res.sendfile(__dirname + "/dist/index.html")
})

var app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))

// passa a porta definida no Express e levantamento do servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor rodando na porta ${app.get('port')}`)
});