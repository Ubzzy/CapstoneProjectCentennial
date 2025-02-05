var materials = require('../controllers/materials.server.controller');

var express = require('express');
var router = express.Router();

module.exports = function (app) {
    app.post('/addMaterial', materials.create);
    app.get('/materials', materials.allMaterials);
    app.param('mId', materials.materialByID);
    app.route('/materials/:mId')
        .put(materials.update)
        .delete(materials.delete)
    
    app.param('m', materials.materialByMaterial)
    app.route('/specificMaterial/:m')
        .get(materials.read)
    app.route("/byId/:mId")
        .get(materials.byId)
};