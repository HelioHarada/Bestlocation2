// importação módulo mongoose
var mongoose = require('mongoose');

// guardando valor de mongoose.Schema (apenas para facilitar na hora de escrever)
const Schema = mongoose.Schema;

// objeto instância do Schema
const imovelSchema = new Schema ({
    titulo: {
        type: String,
        default: ''
    },
    endereco: {
        type: String,
        default: ''
    },
    cidade: {
        type: String,
        default: ''
    },
    numQuartos: {
        type: Number,
        default: ''
    },
    numBanheiros: {
        type: Number,
        default: ''
    },
    descricao: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        default: ''
    },
    preco: {
        type: String,
        default: '0.00'
    }
});

// registrando model utilizando objeto criado 
mongoose.model('Imovel', imovelSchema);