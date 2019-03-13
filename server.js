// importa configuração do Express e do banco de dados
const app = require('./server/config/express')();
require('./server/config/database');

require('dotenv').config()

// passa a porta definida no Express e levantamento do servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor rodando na porta ${app.get('port')}`)
});