# Ficha 4 - Template "Quem Quer Ser Milionário"

Template em Node.js e Express para suportar a ficha 4: uma versão web do jogo "Quem Quer Ser Milionário" com EJS, sessões e um tema escuro pronto a usar. O repositório fornece a camada de apresentação, os dados exemplificativos e utilitários que podes ligar aos teus controladores e rotas.

## Tecnologias principais

- Node.js 18+
- Express 5
- EJS como view engine
- express-session para guardar o estado do jogo
- Bootstrap 5.3 via CDN e estilos próprios em `public/css/styles.css`

## Requisitos

1. Node.js 18 ou superior (desenvolvido e testado com a versão LTS atual).
2. npm (instalado juntamente com o Node).

## Primeiros passos

```bash
npm install
npm start
```

O script `npm start` executa `node index.js`, portanto cria ou ajusta o ficheiro `index.js` na raiz para montar o servidor Express, ligar os middlewares e expor as rotas definidas em `src`.

## Scripts npm

- `npm start` - arranca o servidor Express definido no `index.js`.
- `npm test` - placeholder para futuros testes (atualmente falha propositadamente).

## Estrutura de pastas

```
Server/
|-- public/
|   |-- css/styles.css        # Tema escuro personalizado (podes adaptar cores e animações)
|   `-- img/logo.svg          # Logo usado no header
|-- src/
|   |-- controllers/          # Onde ficas com a lógica do jogo (ex.: gameController.js)
|   |-- data/
|   |   |-- prizes.js         # Torre de prémios (níveis 1 a 15 + patamar seguro)
|   |   `-- questions.js      # Conjunto de perguntas com texto, opções, respostas e dicas
|   |-- middlewares/          # Espaço para auth, guardas de sessão, etc.
|   |-- routes/               # Define aqui as rotas Express (home, jogo, ajudas, etc.)
|   |-- utils/helpers.js      # Funções puras: pickNextQuestion, apply5050 e shuffle
|   `-- views/
|       |-- pages/            # home, game, game-over, 404 e 500 em EJS
|       `-- partials/         # _head, _header e _footer com Bootstrap e recursos partilhados
|-- package.json
`-- package-lock.json
```

## Fluxo do jogo e rotas sugeridas

As páginas EJS e os formulários já apontam para os endpoints abaixo. Implementa-os nas tuas rotas/controladores para manter a experiência consistente:

| Método | Rota              | Objetivo |
| ------ | ----------------- | -------- |
| GET    | `/`               | Render da home com o botão para começar |
| POST   | `/start`          | Inicializa estado na sessão e redireciona para `/game` |
| GET    | `/game`           | Mostra a pergunta atual, torre de prémios e ajudas disponíveis |
| POST   | `/answer`         | Valida a resposta, atualiza o índice e decide entre próxima pergunta ou game over |
| POST   | `/lifeline/5050`  | Aplica `apply5050`, guarda indices removidos e volta a `/game` |
| POST   | `/lifeline/hint`  | Marca a ajuda de dica como usada e mostra `q.hint` |
| POST   | `/lifeline/swap`  | Recolhe nova pergunta com `pickNextQuestion(..., { forceSwap: true })` |
| POST   | `/giveup`         | Termina o jogo devolvendo o último patamar seguro atingido |

Os templates `404.ejs` e `500.ejs` estão prontos para serem usados em middlewares de erro do Express.

## Personalização rápida

- **Perguntas e dicas**: edita `src/data/questions.js`. Cada registo inclui id, texto, opções, índice correto e hint. Mantém quatro opções por pergunta para garantir a coerência dos botões A-D.
- **Torre de prémios**: ajusta `src/data/prizes.js`. O índice 4 está alinhado com o patamar seguro (1000 €) referido nos comentários.
- **Helpers**: `src/utils/helpers.js` expõe utilitários puros que podes testar à parte. Integra `pickNextQuestion` e `apply5050` no teu controlador para reduzir lógica duplicada.
- **Interface**: altera `public/css/styles.css` para trocar cores, fontes ou animações. O `_head.ejs` já carrega Google Fonts e Bootstrap.
- **Layout**: `_header.ejs` mostra o botão "Desistir" quando passas `inGame: true` para a renderização. `_footer.ejs` injeta o bundle JS do Bootstrap.

## Qualidade e testes

Neste template ainda não existem testes automatizados. O ficheiro `helpers.js` é totalmente determinístico (exceto pelo uso de `Math.random`), o que facilita a criação de pequenos testes unitários se quiseres acrescentar cobertura. Para fluxos completos, recomenda-se testar manualmente:

1. Arranque do servidor (`npm start`) e navegação entre home, jogo, game-over e páginas de erro.
2. Estados da sessão ao usar cada ajuda (50/50, Dica, Trocar).
3. Comportamento do patamar seguro ao responder errado ou desistir.

## Licença

Este projeto está licenciado sob ISC (ver `package.json`). Ajusta conforme as necessidades do teu curso ou instituição.
