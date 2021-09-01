## TODO

- [x] Limpar CRA
- [x] Organizar estrutura inicial
- [x] Eslint
- [x] React Router v6
- [x] Lazy Loading + Rotas privadas
- [x] Suspense + Fallback
- [x] Folder Structure
- [x] Folders com exemplos (hooks, types, constants, utils e etc)
- [x] Nested Router files
- [x] Axios + interceptors
- [x] .env + fonte unica de leitura dos env (perfomace)
- [x] Error Boundary
- [x] Global State (Context with useReducer + padrões do another todo)
- [x] Auth Provider With Context
- [ ] Melhor api.ts
- [x] Pasta LIB
- [ ] Test Setup + exemplos
- [ ] Webvitals
- [ ] ...
- [ ] manifest.json
- [ ] Eslint mais robusto
- [ ] Documentação
  - Arquivo de rotas por modulo (escalabilidade)
  - Usar apenas quando necessário um estado global, mas caso seja necessário, exemplo (auth)
  - Apontar as escolhas tomadas
  - link de referencias e etc.
- Release
- SEO
- Protect Router (role)
- Layout com menu e headers (links do menu)
- Listagem de usuarios dinamicamente e fetch de detalhes de usuários


Estruturas de pastas (pensar sobre context por modulos?)

<!-- Eslint
eslint-plugin-filenames
"plugins": ["filenames"],
"filenames/match-exported": [1, "pascal"]

https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
!-->
































<!-- 
/src
├── /app
|   ├──/common
|   |   ├── /components
|   |   |   ├── /router
|   |   |   |   ├── PrivateRoute.jsx
|   |   |   |   ├── ProtectedRoute.jsx
|   |   |   |   ├── ...
|   |   |   |   └── index.js
|   |   |   ├── /layout
|   |   |   |   ├── Header.jsx
|   |   |   |   ├── Container.jsx
|   |   |   |   ├── ...
|   |   |   |   └── index.js
|   |   |   ├── /form
|   |   |   |   ├── Input.jsx
|   |   |   |   ├── Select.jsx
|   |   |   |   ├── ...
|   |   |   |   └── index.js
|   |   |   └── ...
|   |   ├── /hooks
|   |   |   ├── useDebounce.js
|   |   |   ├── useWindowSize.js
|   |   |   ├── useFetch.js
|   |   |   ├── ...
|   |   |   └── index.js
|   |   ├── /context
|   |   |   ├── authContext.jsx
|   |   |   ├── sessionContext.jsx
|   |   |   ├── snackbarContext.jsx
|   |   |   ├── mixPanelContext.jsx
|   |   |   └── ...
|   |   └── /constants <!-- constants e enums / checar necessidade -->
|   |       ├── env.js
|   |       ├── contrato.js
|   |       ├── cotacao.js
|   |       ├── ...
|   |       └── index.js
|   |   
|   ├── /services
|   |   ├── api.js
|   |   └── interceptor.js
|   └── /modules
└── /lib
    ├── date.js
    ├── localStorage.js
    └── movidesk.js








/src
└── /app
    ├── ...
    ├── ...
    └── /styles
        ├── global.ts
        ├── theme.ts
        └── /tokens
            ├── breakpoints.ts
            ├── typography.ts
            ├── spacing.ts
            ├── shapes.ts
            ├── layers.ts
            └── colors.ts    -->