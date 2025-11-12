/**
 * @file src/app.js
 * @description Configuração e criação da aplicação Express (motor de vistas EJS,
 * sessão, parsers, pasta pública e rotas). Exporta a instância `app` para ser
 * usada pelo ficheiro de arranque (`index.js`).
 */

import express from "express"; // Importa o módulo express
import path from "path"; // Importa o path para chegar às vistas
import session from "express-session";
import { fileURLToPath } from "url"; // // Importa os
// urls dos ficheiros das vistas

// Importar rotas
import gameRoutes from "./routes/gameRoutes.js";

// Vai buscar os nomes dos ficheiros das vistas
const __filename = fileURLToPath(import.meta.url);
// Cria o caminho para as vistas
const __dirname = path.dirname(__filename);

/**
 * Cria e configura a aplicação Express.
 * @function createApp
 * @returns {import("express").Express} Instância do Express configurada.
 */
function createAPP() {
    // Iniciar instância do Express
    const app = express();

    // Ativar o motor das vistas
    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "views"));

    // Aceder a conyeudos estaticos na pasta publica
    app.use(express.static(path.join(__dirname, "..", "public")));

    /* -----------------------------------------------------------------------
    5) Sessões (estado do jogo sem base de dados)
    - Usamos `express-session` para manter o progresso do jogador entre pedidos.
    - O cookie de sessão identifica o cliente; os dados vivem no servidor.
    - Em produção devemos usar um Session Store (ex.: Redis, Mongo).
    - Para a ficha (desenvolvimento/local), a "MemoryStore" é suficiente.
    ----------------------------------------------------------------------- */
    app.use(
        session({
            secret: "este-segredo-e-muito-secreto"
        })
    );

    // Usar rotas
    app.use("/", gameRoutes);

    // Erros 404 e 500
    app.use((req, res) => {
        res.status(404).render("pages/404", {
            title: "Página não encontrada",
        });
    });

    app.use((err, req, res, next) => {
        console.error("Erro interno: ", err);
        res.status(500).render("pages/500", {
            title: "Erro interno no servidor",
        });
    });

    return app;
}

const app = createAPP();
export default app;
