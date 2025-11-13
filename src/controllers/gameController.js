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
import { pickNextQuestion, apply5050 } from "../utils/helpers.js";

const MAX_INDEX = PRIZES.length - 1;

/**
* Obtém e valida o estado do jogo a partir da sessão.
* Se não existir jogo na sessão, redireciona para a home.
*
* @function getGameOrRedirect
*/
function getGameOrRedirect(req, res) {
const game = req.session?.game;
if (!game) {
//Sem sessão, logo redireciona
res.redirect("/");
return null;
}
return game;
}

/**
* GET /
* Renderiza a página inicial com o botão "Começar".
*
* @function showHome
*
*/

export function showHome(_req, res) {
res.render("pages/home", { title: "Quem Quer Ser Milionário" });
}

/**
* GET /game
* Mostra a pergunta atual, as respostas e o estado da torre de prémios.
*
* @function showQuestion
*/

export function showQuestion(req, res) {
const game = getGameOrRedirect(req, res);
if (!game) return;

const showHint =
game.used["hint"] && game.hintQuestionId === game.currentQuestion.id; // ← só mostra na pergunta onde foi usada

// Render da página principal do jogo
res.render("pages/game", {
    title: "Em jogo",
    q: game.currentQuestion,
    index: game.currentIndex,
    prizes: game.prizes,
    used: game.used,
    removedOptions: game.removedOptions,
    showHint,
    inGame: true,
    });
}

/**
* POST /start
* Inicializa o estado do jogo na sessão e escolhe a primeira pergunta.
* Redireciona para /game.
*
* @function startGame
**/

export function startGame(req, res) {
req.session.game = {
currentIndex: 0, // Prémio atual (começa no zero)
prizes: PRIZES, // Array de prémios
remainingQuestions: [...QUESTIONS], // Perguntas restantes
currentQuestion: null, // Definido mais à frente
used: { 5050: false, hint: false, swap: false }, // ajudas
removedOptions: [], // índice de opções removidas pelo 50/50
safePrizeIndex: 4, // patamar de segurança
hintQuestionId: null, // ID da pergunta para a qual a dica foi dada
};
req.session.game.currentQuestion = pickNextQuestion(req.session.game);
res.redirect("/game");
}

/**
 * POST /answer
 * Verifica se a opção submetida corresponde a resposta correta.
 * - Se acertar:
 *  - Se estiver no último nível - vitória.
 *  - Caso contrário, avança o nível e escolhe nova pergunta.
 * - Se falhar:
 *  - Termina o jogo com o patamar de segurança, se aplicável.
 * @function submitAnswer
 */

export function submitAnswer(req, res) {
    const game = getGameOrRedirect(req, res);
    if (!game) { return; }

    // Ir busvar a opção do user e a resposta correta
    const escolhida = Number(req.body.option);
    const correta = game.currentQuestion.correctIndex;

    if (escolhida === correta) {
        return endGame(req, res, "win", game.prizes[game.currentIndex]);
    
    game.correctIndex += 1;
    game.removedOptions = [];
    game.used["hint"] = false;
    game.hintQuestionId = null;
    game.currentQuestion  = pickNextQuestion(game);
    return res.redirect("/game"); 
    }
    return endGame(req, res, "lose", game.prizes[game.currentIndex]);
}