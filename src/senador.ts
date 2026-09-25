import { esfera } from "./esfera";
import { PoliticoLegislativo } from "./politicoLegislativo";







export class Senador extends PoliticoLegislativo {
    private _estado: string;
    private _anoEleicao: number;





    constructor(
        nome: string,
        partido: string,
        estado: string,
        localTrabalho: string,
        endereco: string,
        remuneracao: number,
        anoEleicao: number
    ) {
        super(nome, partido, esfera.federal, localTrabalho, endereco, remuneracao);
        this._estado = estado;
        this._anoEleicao = anoEleicao;
    }












    get estado(): string { return this._estado; }
    get anoEleicao(): number { return this._anoEleicao; }







    override getCargo(): string { return "Senador(a)"; }

    override imprimirMandato(): void {
        console.log(
            "Mandato do Senador: sabatina e aprova ministros do STF, Procurador-Geral da " +
            "República e presidentes do Banco Central; legisla sobre leis federais; " +
            "autoriza operações financeiras externas."
        );
    }






    // ações
    aprovarAutoridades(): string { return "Aprova autoridades de alto escalão."; }
    julgarCrimesResponsabilidade(): string { return "Julga crimes de responsabilidade."; }
    representarInteressesEstado(): string { return `Representa os interesses de ${this.estado}.`; }




    override listarAcoes(): string[] {
        return [
            this.aprovarAutoridades(),
            this.julgarCrimesResponsabilidade(),
            this.representarInteressesEstado(),
        ];
    }





    
    override apresentar(): void {
        super.apresentar();
        console.log(`Estado: ${this.estado} | Eleito em: ${this.anoEleicao}`);
    }
}