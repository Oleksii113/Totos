/**
 * @file src/routes/gameRoutes.js
 * @description Define as rotas HTTP do jogo "Quem Quer Ser Milionário".
 * Segue o padrão MVC: as rotas são finas e delegam a lógica ao controlador
 * (`gameController`). Também inclui uma pequena validação para o parâmetro
 * da ajuda (`:type`) antes de chegar ao controlador.
 */

/**
 *
 *   GET    /           → ecrã inicial (home)
 *   POST   /start      → inicia nova sessão de jogo
 *   GET    /game       → mostra pergunta atual + torre de prémios
 *   POST   /answer     → submete a resposta escolhida
 *   POST   /lifeline/:type → usa uma ajuda (50/50 | hint | swap)
 *   POST   /giveup     → desiste e termina o jogo
 *
 */

import { Router } from "express";

import { showHome } from "../controllers/gameController.js";

const router = Router();

// Rotas do jogo
/**
 * GET /
 * Ecrã inicial (landing). Mostra botão "Começar".
 */
router.get("/", showHome);

export default router;
