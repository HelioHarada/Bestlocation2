// importando módulos necessários
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

// atribuição do model registrado à variável modelUser
const modelUser = mongoose.model('User');

// inicializando objeto userController
let userController = {};

// GET
userController.allUsers = (req, res) => {

    modelUser.find()
        .then(results => res.json(results))
        .catch(err => res.send(err));
}

// POST
userController.newUser = (req, res) => {

    if (req.body.username && req.body.password) {
        if (req.body.password2 && req.body.password == req.body.password2) {

            modelUser.findOne({ 'username': req.body.username })
                .then(user => {

                    if (user) {
                        res.json({
                            success: false,
                            message: 'Nome de usuário indisponível'
                        });

                    } else {

                        // método hash --> senha enviada no corpo da req e número inteiro usado para encriptá-la
                        bcrypt.hash(req.body.password, 10)
                            .then(hash => {

                                // variável para guardar o retorno da promise(método hash acima)
                                let encryptedPassword = hash;

                                // objeto que representa modelo de usuário
                                let newUser = new modelUser({
                                    username: req.body.username,
                                    password: encryptedPassword,
                                    email: req.body.email,
                                    isAdmin: req.body.isAdmin
                                });

                                //método save mongoose: promise
                                newUser.save()
                                    .then(() => res.json({
                                        success: true,
                                        message: 'Usuário criado com sucesso',
                                        statusCode: 201
                                    }))
                                    .catch(err => res.json({
                                        success: false,
                                        message: err,
                                        statusCode: 500
                                    }));
                            })

                            .catch(err => res.json({
                                success: false,
                                message: err,
                                statusCode: 500
                            }));
                    }
                })

        } else {

            res.json({
                success: false,
                message: 'Senhas não correspondem',
                statusCode: 400
            });
        }

    } else {

        res.json({
            success: false,
            message: 'Usuário e Senha são obrigatórios',
            statusCode: 400
        });
    }
}

// GET
userController.detailsUser = (req, res) => {
    const id = req.params.user_id;

    modelUser.findById(id)
        .then(result => res.json(result))
        .catch(err => res.send(err));
}

// DELETE
userController.deleteUser = (req, res) => {
    modelUser.findByIdAndRemove(req.params.user_id, (err, user) => {
        if (err) return res.status(500).send(err);

        const response = {
            message: "Usuário removido com sucesso",
            id: user.id
        };
        return res.status(200).send(response);
    });
}

// UPDATE
userController.updateUser = (req, res) => {
    const id = req.params.user_id;

    modelUser.findById(id, (err, user) => {
        if (err) {
            res.status(500).json({
                message: "Erro ao encontrar o usuário: ID incorreto"
            });
        }
        else if (user == null) {
            res.status(400).json({
                message: "Usuário não encontrado"
            });
        }
        else {
            user.titulo = req.body.username;
            user.password = req.body.password;
            user.email = req.body.email;
            user.isAdmin = req.body.isAdmin;

            user.save(function (error) {
                if (error)
                    res.send("Erro ao atualizar o usuário: " + error);

                res.status(200).json({
                    message: "Usuário atualizado com sucesso"
                });
            });
        }
    });
}

// LOGIN
userController.loginUser = (req, res) => {
    let {emailLogar, passwordLogar} = req.body;
    modelUser.findOne({email: emailLogar}, 'email password', (err, userData) => {
    	if (!err) {
        	let passwordCheck = bcrypt.compareSync(passwordLogar, userData.password);
        	if (passwordCheck) { // usando o bcrypt para verificar o hash da senha do banco de dados em relação à senha fornecida pelo usuário
                 req.session.user = {
                   emailLogar: userData.email,
                   username: userData.username,
                   id: userData._id
                 }; // salvando os dados de alguns usuários na sessão do usuário
                 req.session.user.expires = new Date(
                   Date.now() + 3 * 24 * 3600 * 1000 // seção expira em 3 dias
                 );            
                res.status(200).send('Você está logado, bem vindo!');
            } else {
            	res.status(401).send('Senha incorreta');
            }
        } else {
        	res.status(401).send('Credenciais de login inválidas!')
        }
    });
}

// exporta o módulo
module.exports = userController;