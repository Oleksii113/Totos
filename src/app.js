/**
 * @file src/app.js
 * @description Configuração e criação da aplicação Express (motor de vistas EJS,
 * sessão, parsers, pasta pública e rotas). Exporta a instância `app` para ser
 * usada pelo ficheiro de arranque (`index.js`).
 */

import express from "express"; // Importa o módulo express
import path from "path"; // Importa o path para chegar às vistas
import { fileURLToPath, fileURLToPathBuffer } from "url"; // // Importa os
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
