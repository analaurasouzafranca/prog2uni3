import { esfera } from "./esfera";
import { poder } from "./poder";
import { Politico } from "./politico";





export abstract class PoliticoExecutivo extends Politico {
    protected constructor(
        nome: string,
        partido: string,
        esfera: esfera,
        localTrabalho: string,
        endereco: string,
        remuneracao: number
    ) {
        super(nome, partido, esfera, poder.executivo, localTrabalho, endereco, remuneracao);
    }






    
    abstract elaborarPPA(): string;
    abstract elaborarLDO(): string;
    abstract elaborarLOA(): string;
}