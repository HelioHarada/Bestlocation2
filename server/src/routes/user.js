// controller que deverá responder na rota configurada
const userController = require('../controllers/user');

// exportando a função anônima que representa as rotas da aplicação
module.exports = (app) => {

    // route invoca Expresse Router
    app.route('/api/users')
        .get(userController.allUsers)
        .post(userController.newUser);

    app.route('/api/users/:user_id')
        .get(userController.detailsUser)
        .delete(userController.deleteUser)
        .put(userController.updateUser);
}