// importação módulo mongoose
var mongoose = require('mongoose');

// guardando valor de mongoose.Schema (apenas para facilitar na hora de escrever)
const Schema = mongoose.Schema;

// objeto instância do Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

// registrando model utilizando objeto criado
mongoose.model('User', UserSchema);