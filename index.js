/**
 * @file index.js
 * @description Ponto de entrada da aplicação. Lê variáveis de ambiente (se existirem),
 * importa a app Express e arranca o servidor HTTP. Mantém o ficheiro minimalista
 * para que a configuração do Express viva em `src/app.js`.
 *
 * @module index
 */

import app from "./src/app.js";

/**
 * Obtém a porta a utilizar a partir do ambiente ou usa 3000 como valor por defeito.
 * @type {number}
 */
const PORT = 3000;

/**
 * Arranca o servidor HTTP do Express a escutar em `PORT`.
 * Inclui handlers de sucesso/erro para logs mais claros em desenvolvimento.
 * @function startServer
 * @returns {void}
 */
function startServer() {
    // `.listen` devolve a instância do servidor HTTP — podemos usar eventos "listening"/"error"
    const server = app.listen(PORT, () => {
        console.log(`Servidor a correr em http://localhost:${PORT}`);
    });

    // Em caso de erro ao abrir a porta (ex.: EADDRINUSE), mostramos uma mensagem amigável
    server.on("error", (err) => {
        console.error("Erro ao iniciar o servidor:", err.message);
        // Dica pedagógica: em produção, poderíamos fazer process.exit(1)
    });
}

// Arranque efetivo
startServer();
