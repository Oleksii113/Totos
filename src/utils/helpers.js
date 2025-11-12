/**
 * @file src/utils/helpers.js
 * @description Funções utilitárias (helpers) usadas no jogo "Quem Quer Ser Milionário".
 *
 * Contém pequenas funções de apoio à lógica do jogo, como:
 * - escolher aleatoriamente a próxima pergunta (`pickNextQuestion`)
 * - aplicar a ajuda 50/50 (`apply5050`)
 *
 * Estas funções não dependem de Express, EJS ou do estado da sessão — são puras.
 *
 * @module utils/helpers
 */

/* ============================================================================
   Escolher a próxima pergunta
   ========================================================================== */

/**
 * Seleciona aleatoriamente uma pergunta a partir da lista `remainingQuestions`
 * do jogo, removendo-a da lista para evitar repetições.
 *
 * Também pode ser usado com a flag `{ forceSwap: true }` quando o jogador usa
 * a ajuda "Trocar Pergunta" (sem alterar o nível).
 *
 * @function pickNextQuestion
 * @param {import("../controllers/gameController.js").GameState} game - Estado atual do jogo
 * @param {{ forceSwap?: boolean }} [options={}] - Opções adicionais
 * @returns {import("../controllers/gameController.js").Question|null} A pergunta selecionada ou `null` se não houver mais perguntas
 *
 * @example
 * // Escolher próxima pergunta normal:
 * const q = pickNextQuestion(game);
 *
 * // Forçar troca de pergunta (ajuda "swap"):
 * const q2 = pickNextQuestion(game, { forceSwap: true });
 */
export function pickNextQuestion(game, { forceSwap = false } = {}) {
    // Se não houver perguntas disponíveis, devolve null (fim do baralho)
    if (game.remainingQuestions.length === 0) return null;

    // Seleciona um índice aleatório entre 0 e (tamanho - 1)
    const randomIndex = Math.floor(
        Math.random() * game.remainingQuestions.length
    );

    // Retira essa pergunta da lista de perguntas restantes
    const [question] = game.remainingQuestions.splice(randomIndex, 1);

    // Caso especial: "swap" ignora o nível (não mexe no índice de prémio)
    // mas escolhe uma nova pergunta válida.
    if (forceSwap) {
        return question;
    }

    return question;
}

/* ============================================================================
   Aplicar ajuda 50/50
   ========================================================================== */

/**
 * Aplica a ajuda "50/50" à pergunta atual.
 * Retorna um array com os índices de **duas opções erradas** que devem ser removidas.
 *
 * Estas opções são desativadas visualmente no EJS (botões `disabled`).
 *
 * @function apply5050
 * @param {import("../controllers/gameController.js").Question} question - Pergunta atual
 * @returns {number[]} Array com os índices das opções removidas (duas erradas)
 *
 * @example
 * const removidas = apply5050({ correctIndex: 1 });
 * // → Exemplo: [0, 2]
 */
export function apply5050(question) {
    // Índices de todas as respostas erradas
    const wrongIndexes = [0, 1, 2, 3].filter(
        (i) => i !== question.correctIndex
    );

    // Baralha o array de índices errados
    shuffle(wrongIndexes);

    // Retorna apenas duas opções para remover
    return wrongIndexes.slice(0, 2);
}

/* ============================================================================
   Função auxiliar: embaralhar arrays (Fisher-Yates)
   ========================================================================== */

/**
 * Baralha um array in-place (modifica o array original).
 *
 * Implementação do algoritmo de Fisher-Yates.
 *
 * @function shuffle
 * @param {any[]} arr - Array a baralhar
 * @returns {void}
 *
 * @example
 * const a = [1,2,3,4];
 * shuffle(a);
 * // → array baralhado (ex.: [3,1,4,2])
 */
export function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // troca posições
    }
}

/* ============================================================================
   4️⃣ Nota pedagógica
   ========================================================================== */
/**
 * Estas funções são **puras**, ou seja:
 * - não dependem do Express
 * - não acedem ao `req`, `res` nem à sessão
 * - devolvem sempre o mesmo resultado para os mesmos dados de entrada
 *
 * Isto facilita testes unitários e reutilização em outros projetos.
 */
