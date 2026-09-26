import { deputadoestadual } from "./deputadoestadual";
import { deputadofederal } from "./deputadofederal";
import { governador } from "./governador";
import { Politico } from "./politico";
import { Presidente } from "./presidente";
import { Senador } from "./senador";






const ESTADO = "pernambuco";


const politicos: Politico[] = [];





// 1 presidente 
const presidente = new Presidente(
    "Pres. Luís Inácio Lula da Silva", "Partido dos Trabalhadores", "Palácio do Planalto",
    "Praça dos Três Poderes, Brasília-DF", 46366.19, 38
);
presidente.adicionarProjeto("Reforma da Infraestrutura Nacional");
politicos.push(presidente);









// 2 governadores: do meu estado e de outro
const gov1 = new governador(
    "Governadora Raquel Lyra", "Partido Social Democrático", ESTADO,
    `Palácio do Governo de ${ESTADO}`, `Praça da República, s/n - Santo Antônio - ${ESTADO}`, 60800.0, 27
);
gov1.adicionarProjeto("Programa Estadual de Rodovias");
const gov2 = new governador(
    "Governador Tarcisio de Freitas", "Partido Republicanos", "São Paulo",
    `Palácio do Governo de ${"São Paulo"}`, `Avenida Morumbi, 4500 - Morumbi, São Paulo - SP`, 36301.53, 25
);
gov2.adicionarProjeto("Saúde Mais Perto");
politicos.push(gov1, gov2);









// 5 deputados federais 
const endCamara = "Praça dos Três Poderes, Brasília-DF";
politicos.push(
    new deputadofederal("Túlio Gadêlha", "Partido Social Democrático", "Câmara dos Deputados", endCamara, 46366.19, "Ruralista"),
    new deputadofederal("Pedro Campos", "Partido Socialista Brasileiro", "Câmara dos Deputados", endCamara, 46366.19, "Ambientalista"),
    new deputadofederal("Carlos Veras", "Partido dos Trabalhadores", "Câmara dos Deputados", endCamara, 46366.19, "Governista"),
    new deputadofederal("Guilherme Boulos", "Partido Socialismo e Liberdade", "Câmara dos Deputados", endCamara, 46366.19, "Ruralista"),
    new deputadofederal("Eduardo Bolsonaro", "Partido Liberal", "Câmara dos Deputados", endCamara, 46366.19, "Ambientalista")
);










// 5 deputados estaduais 
const endAssA = `Rua da Assembleia, 1 - ${ESTADO}`;
const endAssB = `Rua da Assembleia, 2 - ${ESTADO}`;
politicos.push(
    new deputadoestadual("Pastor Júnior Tércio", "Partido Progressista", ESTADO, endAssA, 25322.25, "Comissão de Educação"),
    new deputadoestadual("Delegada Gleide Angelo", "Partido Socialista Brasileiro", ESTADO, endAssA, 25322.25, "Comissão de Saúde"),
    new deputadoestadual("Coronel Alberto Feitosa", "Partido Liberal", ESTADO, endAssA, 25322.25, "Comissão de Finanças"),
    new deputadoestadual("Eduardo Matarazzo", "Partido dos Trabalhadores", "São Paulo", endAssB, 25322.25, "Comissão de Educação"),
    new deputadoestadual("Carlos Giannazi", "Partido Socialismo e Liberdade", "São Paulo", endAssB, 25322.25, "Comissão de Saúde")
);









// 3 senadores 
const endSenado = "Praça dos Três Poderes, Brasília-DF";
politicos.push(
    new Senador("Humberto Costa", "Partido dos Trabalhadores", ESTADO, "Senado Federal", endSenado, 46366.19, 2022),
    new Senador("Maria Teresa", "Partido dos Trabalhadores", ESTADO, "Senado Federal", endSenado, 46366.19, 2018),
    new Senador("Marcos Pontes", "Partido Liberal", "São Paulo", "Senado Federal", endSenado, 46366.19, 2022)
);






// imprimir políticos


for (const p of politicos) {
    p.apresentar();
    p.imprimirMandato();
    console.log("Ações:");
    for (const acao of p.listarAcoes()) {
        console.log(`  - ${acao}`);
    }
    console.log("");
}
console.log(`Total de políticos cadastrados: ${politicos.length}`);