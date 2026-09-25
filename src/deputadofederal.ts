import { esfera } from "./esfera";
import { PoliticoLegislativo } from "./politicoLegislativo";
import { votaorcamento } from "./votaorcamento";








export class deputadofederal extends PoliticoLegislativo implements votaorcamento {
    private _bancada: string;

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        endereco: string,
        remuneracao: number,
        bancada: string
    ) {
        super(nome, partido, esfera.federal, localTrabalho, endereco, remuneracao);
        this._bancada = bancada;
    }








    get bancada(): string { return this._bancada; }
    set bancada(valor: string) { this._bancada = valor; }





    override getCargo(): string { return "Deputado(a) Federal"; }

    override imprimirMandato(): void {
        console.log(
            "Mandato do Deputado Federal: legisla sobre o código penal, o código tributário " +
            "e as leis trabalhistas, e fiscaliza o presidente da república."
        );
    }






    //  ações 
    votarPECs(): string { return "Vota PECs (Propostas de Emenda à Constituição Federal)."; }
    criarCPINacional(): string { return "Cria CPI nacional."; }
    votarPPA(): string { return "Vota o PPA nacional."; }
    votarLDO(): string { return "Vota a LDO nacional."; }
    votarLOA(): string { return "Vota a LOA nacional."; }
    proporLeisComplementares(): string { return "Propõe leis complementares."; }









    
    override listarAcoes(): string[] {
        return [
            this.votarPECs(),
            this.criarCPINacional(),
            this.votarPPA(),
            this.votarLDO(),
            this.votarLOA(),
            this.proporLeisComplementares(),
        ];
    }

    override apresentar(): void {
        super.apresentar();
        console.log(`Bancada: ${this.bancada}`);
    }
}