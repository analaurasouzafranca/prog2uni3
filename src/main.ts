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
    "Ana Presidente", "Partido Alfa", "Palácio do Planalto",
    "Praça dos Três Poderes, Brasília-DF", 46366.19, 38
);
presidente.adicionarProjeto("Reforma da Infraestrutura Nacional");
politicos.push(presidente);









// 2 governadores: do meu estado e de outro
const gov1 = new governador(
    "Carlos Governador", "Partido Beta", ESTADO,
    `Palácio do Governo de ${ESTADO}`, `Praça Central, s/n - ${ESTADO}`, 35000.0, 20
);
gov1.adicionarProjeto("Programa Estadual de Rodovias");
const gov2 = new governador(
    "Bia Governadora", "Partido Gama", ESTADO,
    `Palácio do Governo de ${ESTADO}`, `Av. Principal, 100 - ${ESTADO}`, 35000.0, 18
);
gov2.adicionarProjeto("Saúde Mais Perto");
politicos.push(gov1, gov2);









// 5 deputados federais 
const endCamara = "Praça dos Três Poderes, Brasília-DF";
politicos.push(
    new deputadofederal("Fed Um", "Partido Alfa", "Câmara dos Deputados", endCamara, 46366.19, "Ruralista"),
    new deputadofederal("Fed Dois", "Partido Beta", "Câmara dos Deputados", endCamara, 46366.19, "Ambientalista"),
    new deputadofederal("Fed Três", "Partido Gama", "Câmara dos Deputados", endCamara, 46366.19, "Governista"),
    new deputadofederal("Fed Quatro", "Partido Alfa", "Câmara dos Deputados", endCamara, 46366.19, "Ruralista"),
    new deputadofederal("Fed Cinco", "Partido Beta", "Câmara dos Deputados", endCamara, 46366.19, "Ambientalista")
);










// 5 deputados estaduais 
const endAssA = `Rua da Assembleia, 1 - ${ESTADO}`;
const endAssB = `Rua da Assembleia, 2 - ${ESTADO}`;
politicos.push(
    new deputadoestadual("Est Um", "Partido Alfa", ESTADO, endAssA, 25322.25, "Comissão de Educação"),
    new deputadoestadual("Est Dois", "Partido Beta", ESTADO, endAssA, 25322.25, "Comissão de Saúde"),
    new deputadoestadual("Est Três", "Partido Gama", ESTADO, endAssA, 25322.25, "Comissão de Finanças"),
    new deputadoestadual("Est Quatro", "Partido Alfa", ESTADO, endAssB, 25322.25, "Comissão de Educação"),
    new deputadoestadual("Est Cinco", "Partido Beta", ESTADO, endAssB, 25322.25, "Comissão de Saúde")
);









// 3 senadores 
const endSenado = "Praça dos Três Poderes, Brasília-DF";
politicos.push(
    new Senador("Sen Um", "Partido Alfa", ESTADO, "Senado Federal", endSenado, 46366.19, 2022),
    new Senador("Sen Dois", "Partido Beta", ESTADO, "Senado Federal", endSenado, 46366.19, 2018),
    new Senador("Sen Três", "Partido Gama", ESTADO, "Senado Federal", endSenado, 46366.19, 2022)
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