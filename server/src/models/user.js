// importação módulo mongoose
var mongoose = require('mongoose');

// guardando valor de mongoose.Schema (apenas para facilitar na hora de escrever)
const Schema = mongoose.Schema;

// objeto instância do Schema
let UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    tipo: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    passResetKey: String,
    passKeyExpires: Number,
    createdAt: {
        type: Date,
        required: false
    },
    updateAt: {
        type: Number,
        required: false
    }
// 'runSettersOnQuery' is used to implement the specifications in our model schema such as the 'trim' option.
}, {runSttersOnQuery: true} );

UserSchema.pre('save', function (next) {
    this.email = this
      .email
      .toLowerCase(); // ensure email are in lowercase
  
    var currentDate = new Date().getTime();
    this.updatedAt = currentDate;
    if (!this.created_at) {
      this.createdAt = currentDate;
    }
    next();
  })

// registrando model utilizando objeto criado
mongoose.model('User', UserSchema);