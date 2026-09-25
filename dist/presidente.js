"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presidente = void 0;
const esfera_1 = require("./esfera");
const politicoexecutivo_1 = require("./politicoexecutivo");
class Presidente extends politicoexecutivo_1.PoliticoExecutivo {
    constructor(nome, partido, localTrabalho, endereco, remuneracao, quantidadeMinistros) {
        super(nome, partido, esfera_1.esfera.federal, localTrabalho, endereco, remuneracao);
        this._quantidadeMinistros = 0;
        this.quantidadeMinistros = quantidadeMinistros;
    }
    get quantidadeMinistros() { return this._quantidadeMinistros; }
    set quantidadeMinistros(valor) {
        if (valor < 0)
            throw new Error("Quantidade inválida");
        this._quantidadeMinistros = valor;
    }
    getCargo() { return "Presidente da República"; }
    imprimirMandato() {
        console.log("Mandato do Presidente: propõe, sanciona e veta leis e edita medidas provisórias.");
    }
    nomearMinistros() { return "Nomeia Ministros de Estado."; }
    exonerarMinistros() { return "Exonera Ministros de Estado."; }
    comandarForcasArmadas() { return "Comanda as Forças Armadas."; }
    representarPais() { return "Representa o país em eventos internacionais."; }
    elaborarPPA() { return "Elabora e envia ao Congresso o Plano Plurianual nacional (PPA)."; }
    elaborarLDO() { return "Elabora e envia ao Congresso a Lei de Diretrizes Orçamentárias nacional (LDO)."; }
    elaborarLOA() { return "Elabora e envia ao Congresso a proposta de Lei Orçamentária Anual nacional (LOA)."; }
    listarAcoes() {
        return [
            this.nomearMinistros(),
            this.exonerarMinistros(),
            this.comandarForcasArmadas(),
            this.representarPais(),
            this.elaborarPPA(),
            this.elaborarLDO(),
            this.elaborarLOA(),
        ];
    }
    apresentar() {
        super.apresentar();
        console.log(`Ministros: ${this.quantidadeMinistros}`);
    }
}
exports.Presidente = Presidente;
