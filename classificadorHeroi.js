// Define uma função para classificar o nível do herói.
// Isso torna o código mais organizado e reutilizável.
function classificarHeroi(nomeHeroi, xpHeroi) {
    // Declara uma variável para armazenar o nível do herói.
    let nivel;

    // Utiliza uma estrutura de decisão (if-else if-else) para determinar o nível
    // com base na quantidade de XP. A ordem das condições importa!
    // Começamos pelas menores ou maiores faixas para evitar que condições mais abrangentes
    // capturem valores antes das condições mais específicas.

    if (xpHeroi < 1000) {
        nivel = "Ferro";
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
        nivel = "Bronze";
    } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
        nivel = "Prata";
    } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
        nivel = "Ouro";
    } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
        nivel = "Platina";
    } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
        nivel = "Ascendente";
    } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
        nivel = "Imortal";
    } else { // Se não se encaixa em nenhuma das anteriores, só pode ser Radiante (>= 10001)
        nivel = "Radiante";
    }

    // Exibe a mensagem final com o nome e o nível do herói.
    // Usamos template literals (crases ``) para facilitar a concatenação de strings e variáveis.
    console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${nivel}**`);
}

// --- Exemplos de uso do Classificador de Nível de Herói ---

// Exemplo 1: Herói de nível Ferro
let nomeHeroi1 = "Arthur";
let xpHeroi1 = 950;
classificarHeroi(nomeHeroi1, xpHeroi1); // Saída: O Herói de nome **Arthur** está no nível de **Ferro**

// Exemplo 2: Herói de nível Bronze
let nomeHeroi2 = "Lara Croft";
let xpHeroi2 = 1500;
classificarHeroi(nomeHeroi2, xpHeroi2); // Saída: O Herói de nome **Lara Croft** está no nível de **Bronze**

// Exemplo 3: Herói de nível Prata
let nomeHeroi3 = "Gandalf";
let xpHeroi3 = 4000;
classificarHeroi(nomeHeroi3, xpHeroi3); // Saída: O Herói de nome **Gandalf** está no nível de **Prata**

// Exemplo 4: Herói de nível Ouro
let nomeHeroi4 = "Wonder Woman";
let xpHeroi4 = 6500;
classificarHeroi(nomeHeroi4, xpHeroi4); // Saída: O Herói de nome **Wonder Woman** está no nível de **Ouro**

// Exemplo 5: Herói de nível Platina
let nomeHeroi5 = "Link";
let xpHeroi5 = 7500;
classificarHeroi(nomeHeroi5, xpHeroi5); // Saída: O Herói de nome **Link** está no nível de **Platina**

// Exemplo 6: Herói de nível Ascendente
let nomeHeroi6 = "Ezio Auditore";
let xpHeroi6 = 8800;
classificarHeroi(nomeHeroi6, xpHeroi6); // Saída: O Herói de nome **Ezio Auditore** está no nível de **Ascendente**

// Exemplo 7: Herói de nível Imortal
let nomeHeroi7 = "Kratos";
let xpHeroi7 = 9999;
classificarHeroi(nomeHeroi7, xpHeroi7); // Saída: O Herói de nome **Kratos** está no nível de **Imortal**

// Exemplo 8: Herói de nível Radiante
let nomeHeroi8 = "Superman";
let xpHeroi8 = 12000;
classificarHeroi(nomeHeroi8, xpHeroi8); // Saída: O Herói de nome **Superman** está no nível de **Radiante**

// Um laço de repetição (opcional, mas bom para demonstrar uso de laços)
// Este laço simula vários heróis e suas XPs para testar o classificador
console.log("\n--- Testando múltiplos heróis com um laço ---");
const heroisParaTestar = [
    { nome: "Hulk", xp: 100 },
    { nome: "Viúva Negra", xp: 1001 },
    { nome: "Capitão América", xp: 3500 },
    { nome: "Thor", xp: 5001 },
    { nome: "Homem de Ferro", xp: 8000 },
    { nome: "Doutor Estranho", xp: 9500 },
    { nome: "Thanos", xp: 10001 }
];

for (let i = 0; i < heroisParaTestar.length; i++) {
    classificarHeroi(heroisParaTestar[i].nome, heroisParaTestar[i].xp);
}
