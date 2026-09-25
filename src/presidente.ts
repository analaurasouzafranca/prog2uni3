import { esfera } from "./esfera";
import { PoliticoExecutivo } from "./politicoexecutivo";







export class Presidente extends PoliticoExecutivo {
    private _quantidadeMinistros: number = 0;




    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        endereco: string,
        remuneracao: number,
        quantidadeMinistros: number
    ) {
        super(nome, partido, esfera.federal, localTrabalho, endereco, remuneracao);
        this.quantidadeMinistros = quantidadeMinistros;
    }






    get quantidadeMinistros(): number { return this._quantidadeMinistros; }
    set quantidadeMinistros(valor: number) {
        if (valor < 0) throw new Error("Quantidade inválida");
        this._quantidadeMinistros = valor;
    }





    override getCargo(): string { return "Presidente da República"; }

    override imprimirMandato(): void {
        console.log("Mandato do Presidente: propõe, sanciona e veta leis e edita medidas provisórias.");
    }

   






    nomearMinistros(): string { return "Nomeia Ministros de Estado."; }
    exonerarMinistros(): string { return "Exonera Ministros de Estado."; }
    comandarForcasArmadas(): string { return "Comanda as Forças Armadas."; }
    representarPais(): string { return "Representa o país em eventos internacionais."; }
    override elaborarPPA(): string { return "Elabora e envia ao Congresso o Plano Plurianual nacional (PPA)."; }
    override elaborarLDO(): string { return "Elabora e envia ao Congresso a Lei de Diretrizes Orçamentárias nacional (LDO)."; }
    override elaborarLOA(): string { return "Elabora e envia ao Congresso a proposta de Lei Orçamentária Anual nacional (LOA)."; }






    override listarAcoes(): string[] {
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





    

    override apresentar(): void {
        super.apresentar(); 
        console.log(`Ministros: ${this.quantidadeMinistros}`);
    }
}