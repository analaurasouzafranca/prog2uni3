"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliticoLegislativo = void 0;
const poder_1 = require("./poder");
const politico_1 = require("./politico");
class PoliticoLegislativo extends politico_1.Politico {
    constructor(nome, partido, esfera, localTrabalho, endereco, remuneracao) {
        super(nome, partido, esfera, poder_1.poder.legislativo, localTrabalho, endereco, remuneracao);
    }
}
exports.PoliticoLegislativo = PoliticoLegislativo;
