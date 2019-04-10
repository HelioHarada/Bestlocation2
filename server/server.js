
// importa configuração do Express e do banco de dados
const app = require('./config/express')();
const serveStatic = require("serve-static");
const path = require('path');
require('./config/database');

require('dotenv').config()

app.use(serveStatic(path.join(__dirname, 'dist')));

// passa a porta definida no Express e levantamento do servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor rodando na porta ${app.get('port')}`)
});