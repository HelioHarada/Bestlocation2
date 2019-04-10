// configuração da palavra secreta utilizada para verificar token
jwtConfig = {
    'secret': process.env.SECRET
}

// exporta o módulo
module.exports = jwtConfig;