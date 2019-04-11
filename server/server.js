
// importa configuração do Express e do banco de dados
const app = require('./config/express')();
var path = require('path')
var serveStatic = require('serve-static')
require('./config/database');

require('dotenv').config()


    
app.get('*', function(req, res){
    res.sendFile(__dirname + "../../bestlocation/index.html")
})

app.use(serveStatic(path.join(__dirname, 'dist')))
// app.get('*', function (req, res) {
//     const index = path.join(__dirname, '../../bestlocation', 'index.html');
//     res.sendFile(index);
//   });

// app.get('*', function (req, res) {
//     const index = path.join(__dirname, 'build', 'index.html');
//     res.sendFile(index);
//   });
 

// passa a porta definida no Express e levantamento do servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor rodando na porta ${app.get('port')}`)
});