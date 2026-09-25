"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deputadoestadual = void 0;
const esfera_1 = require("./esfera");
const politicoLegislativo_1 = require("./politicoLegislativo");
class deputadoestadual extends politicoLegislativo_1.PoliticoLegislativo {
    constructor(nome, partido, estado, enderecoAssembleia, remuneracao, primeiraComissao) {
        super(nome, partido, esfera_1.esfera.estadual, `Assembleia Legislativa de ${estado}`, enderecoAssembleia, remuneracao);
        this._comissoes = [];
        this._estado = estado;
        this.adicionarComissao(primeiraComissao);
    }
    get estado() { return this._estado; }
    get comissoes() { return [...this._comissoes]; }
    adicionarComissao(comissao) {
        if (comissao.trim() === "")
            throw new Error("Comissão inválida");
        this._comissoes.push(comissao);
    }
    removerComissao(comissao) {
        if (this._comissoes.length <= 1) {
            throw new Error("Precisa participar de ao menos uma comissão");
        }
        this._comissoes = this._comissoes.filter((c) => c !== comissao);
    }
    getCargo() { return "Deputado(a) Estadual"; }
    imprimirMandato() {
        console.log("Mandato do Deputado Estadual: legisla sobre assuntos de interesse do estado " +
            "e fiscaliza o governador.");
    }
    // ações 
    votarPPA() { return "Vota o PPA do estado."; }
    votarLDO() { return "Vota a LDO do estado."; }
    votarLOA() { return "Vota a LOA do estado."; }
    proporEmendaConstituicaoEstadual() { return "Propõe emendas à constituição estadual."; }
    criarCPIEstadual() { return "Cria CPI estadual."; }
    listarAcoes() {
        return [
            this.votarPPA(),
            this.votarLDO(),
            this.votarLOA(),
            this.proporEmendaConstituicaoEstadual(),
            this.criarCPIEstadual(),
        ];
    }
    apresentar() {
        super.apresentar();
        console.log(`Estado: ${this.estado} | Comissões: [${this.comissoes.join(", ")}]`);
    }
}
exports.deputadoestadual = deputadoestadual;
