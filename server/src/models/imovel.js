// importação módulo mongoose
var mongoose = require('mongoose');

// guardando valor de mongoose.Schema (apenas para facilitar na hora de escrever)
const Schema = mongoose.Schema;

// objeto instância do Schema
const imovelSchema = new Schema ({
    titulo: {
        type: String,
        required: true,
        default: ''
    },
    endereco: {
        type: String,
        required: true,
        default: ''
    },
    numEndereco: {
        type: String,
        required: true,
        default: ''
    },
    complementoEndereco: {
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
    },
    area: {
        type: Number,
        default: ''
    },
    cep: {
        type: String,
        default: ''
    },
    bairro: {
        type: String,
        default: ''
    },
    uf: {
        type: String,
        default: ''
    }
});

// registrando model utilizando objeto criado 
mongoose.model('Imovel', imovelSchema);