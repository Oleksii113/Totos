/**
 * @file src/data/questions.js
 * @description Conjunto de perguntas do jogo "Quem Quer Ser Milionário".
 *
 * Cada pergunta é um objeto com:
 *  - id: identificador único
 *  - text: enunciado da pergunta
 *  - options: lista de quatro respostas possíveis (A–D)
 *  - correctIndex: índice da opção correta (0–3)
 *  - hint: dica que pode ser usada na ajuda “Dica”
 *
 * As perguntas cobrem temas de:
 *  - Programação (JavaScript, Python, HTML, lógica)
 *  - Conceitos de informática e internet
 *  - Cultura geral tecnológica
 *
 * @module data/questions
 */

const QUESTIONS = [
    // -------------------------------------------------------------------------
    // Programação básica
    // -------------------------------------------------------------------------
    {
        id: 1,
        text: "Em JavaScript, qual é o resultado de 2 + '2'?",
        options: ["4", "'22'", "NaN", "Erro de tipo"],
        correctIndex: 1,
        hint: "A soma entre número e string faz concatenação, não soma aritmética.",
    },
    {
        id: 2,
        text: "Qual destas opções é uma estrutura de repetição em Python?",
        options: ["loop()", "iterate()", "while", "repeat()"],
        correctIndex: 2,
        hint: "Pensa na estrutura que se repete enquanto uma condição for verdadeira.",
    },
    {
        id: 3,
        text: "Qual destes símbolos é usado para comentar uma linha em JavaScript?",
        options: ["<!-- -->", "#", "//", "/* */"],
        correctIndex: 2,
        hint: "Em JS é igual ao C# — dois traços.",
    },
    {
        id: 4,
        text: "Em Python, qual destas palavras é usada para criar uma função?",
        options: ["function", "def", "func", "lambda"],
        correctIndex: 1,
        hint: "É uma palavra curta de três letras, usada no início da linha.",
    },
    {
        id: 5,
        text: "Em JavaScript, o que significa 'const'?",
        options: [
            "Uma variável cujo valor não muda",
            "Um tipo de função",
            "Uma constante de loop",
            "Uma palavra reservada para comentários",
        ],
        correctIndex: 0,
        hint: "É usada quando queremos garantir que o valor permanece fixo.",
    },

    // -------------------------------------------------------------------------
    // Web e Node.js
    // -------------------------------------------------------------------------
    {
        id: 6,
        text: "Qual o comando para iniciar um novo projeto Node.js com um package.json?",
        options: ["node init", "npm start", "npm init", "node create"],
        correctIndex: 2,
        hint: "É o comando mais comum ao começar qualquer projeto Node.",
    },
    {
        id: 7,
        text: "No Express, qual destes métodos é usado para tratar pedidos GET?",
        options: ["app.route()", "app.get()", "app.use()", "app.send()"],
        correctIndex: 1,
        hint: "Corresponde ao verbo HTTP mais usado para mostrar páginas.",
    },
    {
        id: 8,
        text: "O que faz o comando 'npm install'?",
        options: [
            "Instala Node.js",
            "Instala as dependências listadas no package.json",
            "Inicia o servidor Express",
            "Cria uma base de dados local",
        ],
        correctIndex: 1,
        hint: "É usado logo após clonar um projeto Node.",
    },
    {
        id: 9,
        text: "Qual destes métodos é usado no Express para servir ficheiros estáticos?",
        options: [
            "express.static()",
            "express.files()",
            "express.public()",
            "express.load()",
        ],
        correctIndex: 0,
        hint: "Permite disponibilizar CSS, imagens e JS ao cliente.",
    },
    {
        id: 10,
        text: "Em HTML, qual destas tags é usada para criar um link?",
        options: ["<p>", "<a>", "<link>", "<href>"],
        correctIndex: 1,
        hint: "É usada com o atributo 'href'.",
    },

    // -------------------------------------------------------------------------
    // Conceitos de Informática
    // -------------------------------------------------------------------------
    {
        id: 11,
        text: "O que significa a sigla 'CPU'?",
        options: [
            "Central Processing Unit",
            "Computer Personal Utility",
            "Control Panel Unit",
            "Central Program Unit",
        ],
        correctIndex: 0,
        hint: "É o 'cérebro' do computador.",
    },
    {
        id: 12,
        text: "Qual destes dispositivos é usado para entrada de dados?",
        options: ["Monitor", "Altifalante", "Rato", "Impressora"],
        correctIndex: 2,
        hint: "Usado para mover o cursor e clicar.",
    },
    {
        id: 13,
        text: "O que é o sistema operativo?",
        options: [
            "Um programa que controla o hardware e gere recursos",
            "Um antivírus",
            "Um programa de edição de texto",
            "Um motor de pesquisa",
        ],
        correctIndex: 0,
        hint: "É o software base que gere todo o computador.",
    },
    {
        id: 14,
        text: "Qual destes é um sistema operativo de código aberto?",
        options: ["Windows", "macOS", "Linux", "MS-DOS"],
        correctIndex: 2,
        hint: "É um sistema gratuito, muito usado em servidores.",
    },
    {
        id: 15,
        text: "O que é a RAM?",
        options: [
            "Um tipo de disco rígido",
            "Memória temporária usada pelo processador",
            "Uma placa gráfica",
            "Um tipo de processador",
        ],
        correctIndex: 1,
        hint: "É memória volátil (perde os dados quando desligamos).",
    },

    // -------------------------------------------------------------------------
    // Lógica e algoritmos
    // -------------------------------------------------------------------------
    {
        id: 16,
        text: "Qual é o resultado de 3 > 2 and 2 > 5 em Python?",
        options: ["True", "False", "Erro", "None"],
        correctIndex: 1,
        hint: "Ambas as condições têm de ser verdadeiras para o resultado ser True.",
    },
    {
        id: 17,
        text: "O que faz o operador '%' em linguagens de programação?",
        options: [
            "Divide dois números",
            "Dá o resto da divisão",
            "Converte um número em percentagem",
            "Comenta uma linha",
        ],
        correctIndex: 1,
        hint: "É o operador 'módulo'.",
    },
    {
        id: 18,
        text: "Em pseudocódigo, o que significa 'Enquanto ... fazer'?",
        options: [
            "Executa apenas uma vez",
            "Executa enquanto a condição for verdadeira",
            "Executa se a condição for falsa",
            "Executa um número fixo de vezes",
        ],
        correctIndex: 1,
        hint: "É equivalente ao 'while' das linguagens de programação.",
    },
    {
        id: 19,
        text: "Qual é o resultado de not (True or False)?",
        options: ["True", "False", "Erro", "None"],
        correctIndex: 1,
        hint: "O operador 'not' inverte o resultado lógico.",
    },
    {
        id: 20,
        text: "Se uma função 'f' devolve sempre o mesmo resultado para os mesmos argumentos, dizemos que é…",
        options: ["imutável", "pura", "recursiva", "determinística"],
        correctIndex: 1,
        hint: "Funções assim são ideais para testes unitários.",
    },

    // -------------------------------------------------------------------------
    // Cultura geral tecnológica
    // -------------------------------------------------------------------------
    {
        id: 21,
        text: "Quem é o criador da World Wide Web (WWW)?",
        options: [
            "Steve Jobs",
            "Tim Berners-Lee",
            "Bill Gates",
            "Mark Zuckerberg",
        ],
        correctIndex: 1,
        hint: "É um cientista britânico e criou o primeiro browser em 1989.",
    },
    {
        id: 22,
        text: "Qual destas empresas criou o sistema Android?",
        options: ["Apple", "Samsung", "Google", "Microsoft"],
        correctIndex: 2,
        hint: "A mesma empresa que criou o Gmail e o Chrome.",
    },
    {
        id: 23,
        text: "O que é o 'GitHub'?",
        options: [
            "Um jogo online",
            "Uma rede social para programadores",
            "Um editor de texto",
            "Um motor de busca",
        ],
        correctIndex: 1,
        hint: "Permite guardar e partilhar código em repositórios.",
    },
    {
        id: 24,
        text: "O que significa 'AI' em tecnologia?",
        options: [
            "Automated Input",
            "Advanced Internet",
            "Artificial Intelligence",
            "Analytical Interface",
        ],
        correctIndex: 2,
        hint: "Campo da ciência que tenta imitar a inteligência humana.",
    },
    {
        id: 25,
        text: "Qual destes browsers foi o primeiro a ser amplamente usado?",
        options: [
            "Internet Explorer",
            "Netscape Navigator",
            "Firefox",
            "Chrome",
        ],
        correctIndex: 1,
        hint: "Dominou os anos 90 antes da guerra dos browsers.",
    },
];

// -----------------------------------------------------------------------------
// Exportação principal
// -----------------------------------------------------------------------------
export default QUESTIONS;

/**
 *  Exemplo de uso:
 *
 * import QUESTIONS from "./data/questions.js";
 * const primeira = QUESTIONS[0];
 * console.log(primeira.text);
 */
