"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Senador = void 0;
const esfera_1 = require("./esfera");
const politicoLegislativo_1 = require("./politicoLegislativo");
class Senador extends politicoLegislativo_1.PoliticoLegislativo {
    constructor(nome, partido, estado, localTrabalho, endereco, remuneracao, anoEleicao) {
        super(nome, partido, esfera_1.esfera.federal, localTrabalho, endereco, remuneracao);
        this._estado = estado;
        this._anoEleicao = anoEleicao;
    }
    get estado() { return this._estado; }
    get anoEleicao() { return this._anoEleicao; }
    getCargo() { return "Senador(a)"; }
    imprimirMandato() {
        console.log("Mandato do Senador: sabatina e aprova ministros do STF, Procurador-Geral da " +
            "República e presidentes do Banco Central; legisla sobre leis federais; " +
            "autoriza operações financeiras externas.");
    }
    // ações
    aprovarAutoridades() { return "Aprova autoridades de alto escalão."; }
    julgarCrimesResponsabilidade() { return "Julga crimes de responsabilidade."; }
    representarInteressesEstado() { return `Representa os interesses de ${this.estado}.`; }
    listarAcoes() {
        return [
            this.aprovarAutoridades(),
            this.julgarCrimesResponsabilidade(),
            this.representarInteressesEstado(),
        ];
    }
    apresentar() {
        super.apresentar();
        console.log(`Estado: ${this.estado} | Eleito em: ${this.anoEleicao}`);
    }
}
exports.Senador = Senador;
