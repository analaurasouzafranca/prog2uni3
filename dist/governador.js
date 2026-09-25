"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.governador = void 0;
const esfera_1 = require("./esfera");
const politicoexecutivo_1 = require("./politicoexecutivo");
class governador extends politicoexecutivo_1.PoliticoExecutivo {
    constructor(nome, partido, estado, localTrabalho, endereco, remuneracao, quantidadeSecretarios) {
        super(nome, partido, esfera_1.esfera.estadual, localTrabalho, endereco, remuneracao);
        this._quantidadeSecretarios = 0;
        this._estado = estado;
        this.quantidadeSecretarios = quantidadeSecretarios;
    }
    get estado() { return this._estado; }
    get quantidadeSecretarios() { return this._quantidadeSecretarios; }
    set quantidadeSecretarios(valor) {
        if (valor < 0)
            throw new Error("Quantidade inválida");
        this._quantidadeSecretarios = valor;
    }
    getCargo() { return "Governador(a)"; }
    imprimirMandato() {
        console.log("Mandato do Governador: sanciona leis estaduais, veta leis estaduais, " +
            "decreta estado de calamidade e envia PEC à Assembleia Legislativa.");
    }
    //  ações 
    gerirPoliciaMilitar() { return "Gere a polícia militar."; }
    administrarRodovias() { return "Administra as rodovias estaduais."; }
    coordenarEducacaoESaude() { return "Coordena a educação e a saúde do estado."; }
    elaborarPPA() { return "Elabora e envia à Assembleia Legislativa o PPA estadual."; }
    elaborarLDO() { return "Elabora e envia à Assembleia Legislativa a LDO estadual."; }
    elaborarLOA() { return "Elabora e envia à Assembleia Legislativa a proposta de LOA estadual."; }
    listarAcoes() {
        return [
            this.gerirPoliciaMilitar(),
            this.administrarRodovias(),
            this.coordenarEducacaoESaude(),
            this.elaborarPPA(),
            this.elaborarLDO(),
            this.elaborarLOA(),
        ];
    }
    apresentar() {
        super.apresentar();
        console.log(`Estado: ${this.estado} | Secretários: ${this.quantidadeSecretarios}`);
    }
}
exports.governador = governador;
