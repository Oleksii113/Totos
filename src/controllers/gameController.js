/**
 * @file src/controllers/gameController.js
 * @description Controlador do jogo "Quem Quer Ser Milionário".
 * Contém as ações chamadas pelas rotas (MVC): render da home, início de jogo,
 * apresentação de pergunta, submissão de resposta, uso de ajudas e desistência.
 *
 * Conceitos-chave:
 * - O estado do jogo é guardado em `req.session.game` (sem base de dados).
 * - A pergunta atual, o nível (índice de prémio) e as ajudas usadas vivem nesse objeto.
 * - As vistas EJS recebem apenas os dados necessários para renderização.
 *
 */

import QUESTIONS from "../data/questions.js";
import PRIZES from "../data/prizes.js";

const MAX_INDEX = PRIZES.length - 1;

/**
 * GET /
 * Renderiza a página inicial com o botão "Começar".
 *
 * @function showHome
 *
 */
export function showHome(req, res) {
    res.render("pages/home", {
        title: "Quem quer ser milionário.",
    });
}
