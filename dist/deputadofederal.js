"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deputadofederal = void 0;
const esfera_1 = require("./esfera");
const politicoLegislativo_1 = require("./politicoLegislativo");
class deputadofederal extends politicoLegislativo_1.PoliticoLegislativo {
    constructor(nome, partido, localTrabalho, endereco, remuneracao, bancada) {
        super(nome, partido, esfera_1.esfera.federal, localTrabalho, endereco, remuneracao);
        this._bancada = bancada;
    }
    get bancada() { return this._bancada; }
    set bancada(valor) { this._bancada = valor; }
    getCargo() { return "Deputado(a) Federal"; }
    imprimirMandato() {
        console.log("Mandato do Deputado Federal: legisla sobre o código penal, o código tributário " +
            "e as leis trabalhistas, e fiscaliza o presidente da república.");
    }
    //  ações 
    votarPECs() { return "Vota PECs (Propostas de Emenda à Constituição Federal)."; }
    criarCPINacional() { return "Cria CPI nacional."; }
    votarPPA() { return "Vota o PPA nacional."; }
    votarLDO() { return "Vota a LDO nacional."; }
    votarLOA() { return "Vota a LOA nacional."; }
    proporLeisComplementares() { return "Propõe leis complementares."; }
    listarAcoes() {
        return [
            this.votarPECs(),
            this.criarCPINacional(),
            this.votarPPA(),
            this.votarLDO(),
            this.votarLOA(),
            this.proporLeisComplementares(),
        ];
    }
    apresentar() {
        super.apresentar();
        console.log(`Bancada: ${this.bancada}`);
    }
}
exports.deputadofederal = deputadofederal;
