// controller que deverá responder na rota configurada
const imovelController = require('../controllers/imovel');

// exportando a função anônima que representa as rotas da aplicação
module.exports = (app) => {

    // route invoca Expresse Router
    app.route('/api/imoveis')
        .get(imovelController.allImoveis)
        .post(imovelController.newImovel);

    app.route('/api/imoveis/:imovel_id')
        .get(imovelController.detailsImovel)
        .delete(imovelController.deleteImovel)
        .put(imovelController.updateImovel);

    app.route('/api/searchimovel')
        .get(imovelController.searchImovel);
}