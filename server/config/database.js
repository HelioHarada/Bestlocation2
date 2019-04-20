// importação módulo mongoose
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const url = process.env.MONGOLAB_URI;
console.log(url);
mongoose.connect('mongodb://bestadmin:Admin1@ds053449.mlab.com:53449/heroku_kmb7qhcw', { useNewUrlParser: true })
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
// conexão no banco
// mongoose.connect('mongodb://localhost/bdBestLocation', { useNewUrlParser: true } );

// ouvindo eventos que ocorrem em sucesso ou erro de conexão
mongoose.connection.on('connected', () => {
    console.log('Conectado ao banco de dados.');
});

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão: ' + err);
});

mongoose.connection.on('disconnect', (err) => {
    console.log('Desconectado :(');
});