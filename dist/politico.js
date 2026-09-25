"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Politico = void 0;
class Politico {
    constructor(nome, partido, esfera, poder, localTrabalho, enderecoLocalTrabalho, remuneracao) {
        this._nome = "";
        this._remuneracao = 0;
        this._projetos = [];
        this.nome = nome;
        this._partido = partido;
        this._esfera = esfera;
        this._poder = poder;
        this._localTrabalho = localTrabalho;
        this._enderecoLocalTrabalho = enderecoLocalTrabalho;
        this.remuneracao = remuneracao;
    }
    get nome() { return this._nome; }
    set nome(valor) {
        if (valor.trim() === "")
            throw new Error("Nome obrigatório");
        this._nome = valor;
    }
    get partido() { return this._partido; }
    set partido(valor) { this._partido = valor; }
    get esfera() { return this._esfera; }
    get poder() { return this._poder; }
    get localTrabalho() { return this._localTrabalho; }
    set localTrabalho(valor) { this._localTrabalho = valor; }
    get enderecoLocalTrabalho() { return this._enderecoLocalTrabalho; }
    set enderecoLocalTrabalho(valor) { this._enderecoLocalTrabalho = valor; }
    get remuneracao() { return this._remuneracao; }
    set remuneracao(valor) {
        if (valor < 0)
            throw new Error("Remuneração não pode ser negativa");
        this._remuneracao = valor;
    }
    adicionarProjeto(titulo) { this._projetos.push(titulo); }
    get projetos() { return [...this._projetos]; }
    apresentar() {
        console.log(`=== ${this.getCargo()}: ${this.nome} (${this.partido}) ===`);
        console.log(`esfera: ${this.esfera} | poder: ${this.poder}`);
        console.log(`Local de trabalho: ${this.localTrabalho} - ${this.enderecoLocalTrabalho}`);
        console.log(`Remuneração: R$ ${this.remuneracao.toFixed(2)}`);
        console.log(`Projetos: [${this.projetos.join(", ")}]`);
    }
}
exports.Politico = Politico;
