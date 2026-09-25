import { esfera } from "./esfera";
import { PoliticoExecutivo } from "./politicoexecutivo";







export class governador extends PoliticoExecutivo {
    private _estado: string;
    private _quantidadeSecretarios: number = 0;






    constructor(
        nome: string,
        partido: string,
        estado: string,
        localTrabalho: string,
        endereco: string,
        remuneracao: number,
        quantidadeSecretarios: number
    ) {
        super(nome, partido, esfera.estadual, localTrabalho, endereco, remuneracao);
        this._estado = estado;
        this.quantidadeSecretarios = quantidadeSecretarios;
    }







    get estado(): string { return this._estado; }
    get quantidadeSecretarios(): number { return this._quantidadeSecretarios; }
    set quantidadeSecretarios(valor: number) {
        if (valor < 0) throw new Error("Quantidade inválida");
        this._quantidadeSecretarios = valor;
    }







    override getCargo(): string { return "Governador(a)"; }

    override imprimirMandato(): void {
        console.log(
            "Mandato do Governador: sanciona leis estaduais, veta leis estaduais, " +
            "decreta estado de calamidade e envia PEC à Assembleia Legislativa."
        );
    }






    //  ações 
    gerirPoliciaMilitar(): string { return "Gere a polícia militar."; }
    administrarRodovias(): string { return "Administra as rodovias estaduais."; }
    coordenarEducacaoESaude(): string { return "Coordena a educação e a saúde do estado."; }
    override elaborarPPA(): string { return "Elabora e envia à Assembleia Legislativa o PPA estadual."; }
    override elaborarLDO(): string { return "Elabora e envia à Assembleia Legislativa a LDO estadual."; }
    override elaborarLOA(): string { return "Elabora e envia à Assembleia Legislativa a proposta de LOA estadual."; }





    override listarAcoes(): string[] {
        return [
            this.gerirPoliciaMilitar(),
            this.administrarRodovias(),
            this.coordenarEducacaoESaude(),
            this.elaborarPPA(),
            this.elaborarLDO(),
            this.elaborarLOA(),
        ];
    }




    
    override apresentar(): void {
        super.apresentar();
        console.log(`Estado: ${this.estado} | Secretários: ${this.quantidadeSecretarios}`);
    }
}