/**
 * @file src/data/prizes.js
 * @description Torre de prémios do jogo "Quem Quer Ser Milionário".
 *
 * Convenção importante (coerente com o gameController):
 *  - O índice 0 representa o primeiro nível (mais baixo).
 *  - O índice 4 (nível 5) é o patamar de segurança → €1.000.
 *    Isto alinha com o `safePrizeIndex: 4` usado no controlador.
 *
 * Se alterares os valores/ordem, confirma que o `safePrizeIndex`
 * continua a apontar para o nível pretendido.
 *
 * @module data/prizes
 */

/**
 * Torre de prémios, do mais baixo (índice 0) ao mais alto (índice final).
 * Foi ajustada para que o nível 5 (índice 4) seja €1.000.
 *
 * @type {number[]}
 */
const PRIZES = [
    50, // 0  → Nível 1
    100, // 1  → Nível 2
    250, // 2  → Nível 3
    500, // 3  → Nível 4
    1000, // 4  → Nível 5  (Patamar de segurança sugerido)
    2000, // 5  → Nível 6
    5000, // 6  → Nível 7
    10000, // 7  → Nível 8
    15000, // 8  → Nível 9
    25000, // 9  → Nível 10
    50000, // 10 → Nível 11
    100000, // 11 → Nível 12
    250000, // 12 → Nível 13
    500000, // 13 → Nível 14
    1000000, // 14 → Nível 15 (prémio máximo)
];

export default PRIZES;

/*
 Notas:
- O controlador calcula o "patamar seguro" com base no índice:
    game.currentIndex >= game.safePrizeIndex ? PRIZES[game.safePrizeIndex] : 0
  Por isso, ao manter `safePrizeIndex: 4`, o patamar seguro = €1.000.

*/
