"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliticoExecutivo = void 0;
const poder_1 = require("./poder");
const politico_1 = require("./politico");
class PoliticoExecutivo extends politico_1.Politico {
    constructor(nome, partido, esfera, localTrabalho, endereco, remuneracao) {
        super(nome, partido, esfera, poder_1.poder.executivo, localTrabalho, endereco, remuneracao);
    }
}
exports.PoliticoExecutivo = PoliticoExecutivo;
