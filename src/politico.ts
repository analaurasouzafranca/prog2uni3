import { esfera } from "./esfera";
import { poder } from "./poder";



export abstract class Politico {
   
    private _nome: string = "";
    private _partido: string;
    private _esfera: esfera;
    private _poder: poder;
    private _localTrabalho: string;
    private _enderecoLocalTrabalho: string;
    private _remuneracao: number = 0;
    private _projetos: string[] = []; 



    
    
    protected constructor(
        nome: string,
        partido: string,
        esfera: esfera,
        poder: poder,
        localTrabalho: string,
        enderecoLocalTrabalho: string,
        remuneracao: number
    ) {
        this.nome = nome; 
        this._partido = partido;
        this._esfera = esfera;
        this._poder = poder;
        this._localTrabalho = localTrabalho;
        this._enderecoLocalTrabalho = enderecoLocalTrabalho;
        this.remuneracao = remuneracao;
    }







    
    get nome(): string { return this._nome; }
    set nome(valor: string) {
        if (valor.trim() === "") throw new Error("Nome obrigatório");
        this._nome = valor;
    }




    get partido(): string { return this._partido; }
    set partido(valor: string) { this._partido = valor; }





    get esfera(): esfera { return this._esfera; }
    get poder(): poder { return this._poder; }





    get localTrabalho(): string { return this._localTrabalho; }
    set localTrabalho(valor: string) { this._localTrabalho = valor; }





    get enderecoLocalTrabalho(): string { return this._enderecoLocalTrabalho; }
    set enderecoLocalTrabalho(valor: string) { this._enderecoLocalTrabalho = valor; }





    get remuneracao(): number { return this._remuneracao; }
    set remuneracao(valor: number) {
        if (valor < 0) throw new Error("Remuneração não pode ser negativa");
        this._remuneracao = valor;
    }

    adicionarProjeto(titulo: string): void { this._projetos.push(titulo); }
    



    get projetos(): string[] { return [...this._projetos]; }

    




    abstract getCargo(): string;
    abstract imprimirMandato(): void;
    abstract listarAcoes(): string[];

    apresentar(): void {
        console.log(`=== ${this.getCargo()}: ${this.nome} (${this.partido}) ===`);
        console.log(`esfera: ${this.esfera} | poder: ${this.poder}`);
        console.log(`Local de trabalho: ${this.localTrabalho} - ${this.enderecoLocalTrabalho}`);
        console.log(`Remuneração: R$ ${this.remuneracao.toFixed(2)}`);
        console.log(`Projetos: [${this.projetos.join(", ")}]`);
    }
}