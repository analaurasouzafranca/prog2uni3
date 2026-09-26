"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deputadoestadual_1 = require("./deputadoestadual");
const deputadofederal_1 = require("./deputadofederal");
const governador_1 = require("./governador");
const presidente_1 = require("./presidente");
const senador_1 = require("./senador");
const ESTADO = "pernambuco";
const politicos = [];
// 1 presidente 
const presidente = new presidente_1.Presidente("Pres. Luís Inácio Lula da Silva", "Partido dos Trabalhadores", "Palácio do Planalto", "Praça dos Três Poderes, Brasília-DF", 46366.19, 38);
presidente.adicionarProjeto("Reforma da Infraestrutura Nacional");
politicos.push(presidente);
// 2 governadores: do meu estado e de outro
const gov1 = new governador_1.governador("Governadora Raquel Lyra", "Partido Social Democrático", ESTADO, `Palácio do Governo de ${ESTADO}`, `Praça da República, s/n - Santo Antônio - ${ESTADO}`, 60800.0, 27);
gov1.adicionarProjeto("Programa Estadual de Rodovias");
const gov2 = new governador_1.governador("Governador Tarcisio de Freitas", "Partido Republicanos", "São Paulo", `Palácio do Governo de ${"São Paulo"}`, `Avenida Morumbi, 4500 - Morumbi, São Paulo - SP`, 36301.53, 25);
gov2.adicionarProjeto("Saúde Mais Perto");
politicos.push(gov1, gov2);
// 5 deputados federais 
const endCamara = "Praça dos Três Poderes, Brasília-DF";
politicos.push(new deputadofederal_1.deputadofederal("Túlio Gadêlha", "Partido Social Democrático", "Câmara dos Deputados", endCamara, 46366.19, "Ruralista"), new deputadofederal_1.deputadofederal("Pedro Campos", "Partido Socialista Brasileiro", "Câmara dos Deputados", endCamara, 46366.19, "Ambientalista"), new deputadofederal_1.deputadofederal("Carlos Veras", "Partido dos Trabalhadores", "Câmara dos Deputados", endCamara, 46366.19, "Governista"), new deputadofederal_1.deputadofederal("Guilherme Boulos", "Partido Socialismo e Liberdade", "Câmara dos Deputados", endCamara, 46366.19, "Ruralista"), new deputadofederal_1.deputadofederal("Eduardo Bolsonaro", "Partido Liberal", "Câmara dos Deputados", endCamara, 46366.19, "Ambientalista"));
// 5 deputados estaduais 
const endAssA = `Rua da Assembleia, 1 - ${ESTADO}`;
const endAssB = `Rua da Assembleia, 2 - ${ESTADO}`;
politicos.push(new deputadoestadual_1.deputadoestadual("Pastor Júnior Tércio", "Partido Progressista", ESTADO, endAssA, 25322.25, "Comissão de Educação"), new deputadoestadual_1.deputadoestadual("Delegada Gleide Angelo", "Partido Socialista Brasileiro", ESTADO, endAssA, 25322.25, "Comissão de Saúde"), new deputadoestadual_1.deputadoestadual("Coronel Alberto Feitosa", "Partido Liberal", ESTADO, endAssA, 25322.25, "Comissão de Finanças"), new deputadoestadual_1.deputadoestadual("Eduardo Matarazzo", "Partido dos Trabalhadores", "São Paulo", endAssB, 25322.25, "Comissão de Educação"), new deputadoestadual_1.deputadoestadual("Carlos Giannazi", "Partido Socialismo e Liberdade", "São Paulo", endAssB, 25322.25, "Comissão de Saúde"));
// 3 senadores 
const endSenado = "Praça dos Três Poderes, Brasília-DF";
politicos.push(new senador_1.Senador("Humberto Costa", "Partido dos Trabalhadores", ESTADO, "Senado Federal", endSenado, 46366.19, 2022), new senador_1.Senador("Maria Teresa", "Partido dos Trabalhadores", ESTADO, "Senado Federal", endSenado, 46366.19, 2018), new senador_1.Senador("Marcos Pontes", "Partido Liberal", "São Paulo", "Senado Federal", endSenado, 46366.19, 2022));
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
