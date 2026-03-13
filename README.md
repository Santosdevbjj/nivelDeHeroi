## Formação Lógica de Programação · DIO

![DeveloperImagem001](https://github.com/user-attachments/assets/6ddad895-9b96-4558-92e9-72ce04783731)

---

# ⚔️ Classificador de Nível de Herói — Lógica de Classificação em JavaScript

## 1. Problema de Negócio

Sistemas que classificam entidades por faixas numéricas são um padrão recorrente no desenvolvimento de software: ranqueamento de clientes por LTV, categorização de produtos por estoque, segmentação de usuários por engajamento. O mecanismo por trás de todos eles é o mesmo — **uma estrutura de decisão que mapeia um valor numérico para uma categoria.**

O desafio aqui é implementar esse mecanismo com clareza, sem ambiguidade nas faixas, e com código organizado o suficiente para ser reutilizado — não apenas executado uma vez.

---

## 2. Contexto

O projeto foi desenvolvido como desafio prático do módulo de **Lógica de Programação** da DIO. A tarefa: construir um classificador que receba o nome e o XP de um herói e retorne seu nível dentro de uma hierarquia de 8 categorias — de Ferro a Radiante.

A decisão central de design foi **encapsular a lógica em uma função reutilizável** (`classificarHeroi`), em vez de escrever estruturas condicionais soltas no escopo global. Essa escolha reflete um princípio fundamental de engenharia: código que pode ser chamado com parâmetros diferentes é mais valioso do que código que roda uma única vez.

---

## 3. Premissas

- O parâmetro `xpHeroi` é numérico e representa a experiência acumulada do personagem.
- As faixas de classificação seguem o enunciado do desafio, com os seguintes limites definidos:

| Faixa de XP | Nível |
|-------------|-------|
| < 1.000 | Ferro |
| 1.001 – 2.000 | Bronze |
| 2.001 – 5.000 | Prata |
| 5.001 – 7.000 | Ouro |
| 7.001 – 8.000 | Platina |
| 8.001 – 9.000 | Ascendente |
| 9.001 – 10.000 | Imortal |
| ≥ 10.001 | Radiante |

- A saída é exibida via `console.log` com template literals, mantendo o formato exato especificado no desafio.
- O projeto inclui 8 chamadas individuais e um laço `for` sobre um array de objetos como suite de testes manuais.

---

## 4. Estratégia da Solução

A implementação seguiu uma progressão deliberada de complexidade:

**Etapa 1 — Definição da função:** toda a lógica de classificação foi encapsulada em `classificarHeroi(nomeHeroi, xpHeroi)`, recebendo os dois parâmetros necessários e mantendo o escopo limpo.

**Etapa 2 — Cadeia if-else if ordenada:** as condições foram escritas do menor para o maior valor de XP. A ordem importa — em uma cadeia `if-else if`, a primeira condição verdadeira encerra a avaliação. Inverter a ordem geraria classificações erradas.

**Etapa 3 — Template literals na saída:** o uso de crases e `${}` no `console.log` demonstra a forma moderna e legível de compor strings com variáveis em JavaScript, em contraste com concatenação por `+`.

**Etapa 4 — Cobertura de testes com laço:** além dos 8 exemplos individuais, um array `heroisParaTestar` com 7 entradas foi iterado com `for`, demonstrando que a função se comporta corretamente com qualquer combinação de nome e XP passada dinamicamente.

---

## 5. Insights Técnicos

A implementação revelou decisões de design que vão além do exercício em si:

- **Encapsulamento como hábito:** transformar a lógica em função, mesmo sendo um script simples, demonstra consciência de reusabilidade — a mesma função poderia alimentar uma API, um jogo ou um dashboard sem alteração.

- **A ordem das condicionais define a correção do algoritmo:** em cadeias `if-else if`, colocar a verificação de Radiante (`>= 10001`) no bloco `else` final só funciona corretamente porque todas as faixas anteriores foram verificadas em sequência. Isso é lógica proposicional aplicada à engenharia.

- **Gap intencional no enunciado:** o enunciado define Ferro como `< 1.000` e Bronze como `entre 1.001 e 2.000` — o valor exato `1.000 XP` tecnicamente não pertence a nenhuma faixa. A implementação adotou `< 1000` para Ferro e `>= 1001` para Bronze, fiel ao enunciado. Em um sistema de produção, esse gap seria um requisito a ser esclarecido antes da implementação.

- **Array de objetos como estrutura de dados:** usar `{ nome, xp }` dentro de um array e iterar com `for` introduz o padrão de coleção de entidades — o mesmo que aparece em respostas de APIs e bancos de dados no mundo real.

---

## 6. Resultados

O classificador entrega:

- Função reutilizável que cobre **8 níveis de classificação** com lógica sem ambiguidade
- Cobertura de **15 cenários de teste** — 8 chamadas individuais + 7 via laço — validando todas as faixas de XP
- Saída formatada com template literals no padrão exato especificado pelo desafio
- Código comentado que explica **por que** cada decisão foi tomada, não apenas **o que** o código faz

---

## 7. Próximos Passos

- Refatorar a cadeia `if-else if` para um objeto de mapeamento (`lookup table`), eliminando as condicionais e tornando a adição de novos níveis uma operação de uma linha.
- Adicionar **validação de entrada**: o que acontece se `xpHeroi` for negativo, string ou `null`? Tratar edge cases é o que separa código de exercício de código de produção.
- Evoluir para uma **interface web** com HTML e CSS: campo de input para nome e XP, botão de classificar, exibição visual do nível com ícone e cor correspondente à faixa.
- Publicar via **GitHub Pages** ou **Node.js** para tornar o classificador executável diretamente no browser, sem necessidade de ambiente local.

---

## 💻 Tecnologias Utilizadas

| Tecnologia | Uso no Projeto |
|------------|----------------|
| **JavaScript (ES6+)** | Lógica de classificação, funções, template literals, arrays e laços |
| **Node.js** | Execução do script via terminal |
| **Git / GitHub** | Controle de versão e hospedagem |

---

## ▶️ Como Executar

```bash
git clone https://github.com/Santosdevbjj/nivelDeHeroi.git
cd nivelDeHeroi
node classificadorHeroi.js
```

Saída esperada no terminal:

```
O Herói de nome **Arthur** está no nível de **Ferro**
O Herói de nome **Lara Croft** está no nível de **Bronze**
...
O Herói de nome **Superman** está no nível de **Radiante**

--- Testando múltiplos heróis com um laço ---
O Herói de nome **Hulk** está no nível de **Ferro**
...
O Herói de nome **Thanos** está no nível de **Radiante**
```

---

**Contato:**

[![Portfólio Sérgio Santos](https://img.shields.io/badge/Portfólio-Sérgio_Santos-111827?style=for-the-badge&logo=githubpages&logoColor=00eaff)](https://portfoliosantossergio.vercel.app)

[![LinkedIn Sérgio Santos](https://img.shields.io/badge/LinkedIn-Sérgio_Santos-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/santossergioluiz)


---
