import { esfera } from "./esfera";
import { PoliticoLegislativo } from "./politicoLegislativo";
import { votaorcamento } from "./votaorcamento";




export class deputadoestadual extends PoliticoLegislativo implements votaorcamento {
    private _estado: string;
    private _comissoes: string[] = [];



   
    constructor(
        nome: string,
        partido: string,
        estado: string,
        enderecoAssembleia: string,
        remuneracao: number,
        primeiraComissao: string
    ) {
        super(nome, partido, esfera.estadual, `Assembleia Legislativa de ${estado}`, enderecoAssembleia, remuneracao);
        this._estado = estado;
        this.adicionarComissao(primeiraComissao);
    }








    get estado(): string { return this._estado; }
    get comissoes(): string[] { return [...this._comissoes]; }



    adicionarComissao(comissao: string): void {
        if (comissao.trim() === "") throw new Error("Comissão inválida");
        this._comissoes.push(comissao);
    }

    removerComissao(comissao: string): void {
        if (this._comissoes.length <= 1) {
            throw new Error("Precisa participar de ao menos uma comissão");
        }
        this._comissoes = this._comissoes.filter((c) => c !== comissao);
    }






    override getCargo(): string { return "Deputado(a) Estadual"; }

    override imprimirMandato(): void {
        console.log(
            "Mandato do Deputado Estadual: legisla sobre assuntos de interesse do estado " +
            "e fiscaliza o governador."
        );
    }










    // ações 
    votarPPA(): string { return "Vota o PPA do estado."; }
    votarLDO(): string { return "Vota a LDO do estado."; }
    votarLOA(): string { return "Vota a LOA do estado."; }
    proporEmendaConstituicaoEstadual(): string { return "Propõe emendas à constituição estadual."; }
    criarCPIEstadual(): string { return "Cria CPI estadual."; }





    
    override listarAcoes(): string[] {
        return [
            this.votarPPA(),
            this.votarLDO(),
            this.votarLOA(),
            this.proporEmendaConstituicaoEstadual(),
            this.criarCPIEstadual(),
        ];
    }

    override apresentar(): void {
        super.apresentar();
        console.log(`Estado: ${this.estado} | Comissões: [${this.comissoes.join(", ")}]`);
    }
}