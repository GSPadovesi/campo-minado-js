# Campo Minado JS

Projeto de Campo Minado feito com JavaScript puro, HTML e CSS, com foco em praticar logica de programacao, manipulacao do DOM e organizacao basica de modulos no frontend.

## Ideia do projeto

A proposta e construir uma versao simples de Campo Minado no navegador, sem framework, separando as responsabilidades entre:

- inicializacao da aplicacao
- regras do jogo
- geracao da estrutura do tabuleiro
- renderizacao visual no HTML

O objetivo nao e apenas ter o jogo funcionando, mas tambem usar o projeto para estudar conceitos como:

- Matriz (grid)
- Algoritmo de vizinhança
- Recursão (ou BFS/DFS)
- Controle de estado
- Condições complexas

## O que foi feito ate agora

No estado atual do projeto, ja existe:

- uma pagina HTML base com seletor de tamanho do tabuleiro
- carregamento do JavaScript principal via `type="module"`
- inicializacao da aplicacao em `main.js`
- modulo separado para iniciar o jogo em `game.js`
- funcao para criar a lista inicial de celulas em `utils.js`
- funcao para distribuir bombas aleatoriamente nas celulas criadas em `utils.js`
- renderizacao inicial do tabuleiro no DOM com base no tamanho selecionado
- criacao de botoes para cada celula com `data-row` e `data-col`

Hoje a estrutura das celulas geradas contem:

- `row`
- `col`
- `isBomb`
- `revealed`
- `count`

Hoje o projeto ja monta a grade visual do tabuleiro na tela e gera as celulas com linha, coluna e bombas distribuidas sem repeticao.

## Estrutura atual

```text
.
|-- index.html
`-- src
    |-- js
    |   |-- main.js
    |   |-- game.js
    |   `-- utils.js
    `-- styles
        `-- styles.css
```

## Proximos passos

Os proximos passos naturais para o projeto sao:

- calcular a quantidade de bombas vizinhas de cada celula
- permitir clique para revelar celulas
- diferenciar visualmente celulas reveladas e bombas
- limpar o tabuleiro ao trocar o tamanho antes de renderizar de novo
- implementar regra de derrota ao clicar em bomba
- implementar regra de vitoria
- adicionar marcacao de bandeiras
- adicionar reinicio de partida

## Como executar

Como o projeto usa modulos JavaScript no navegador, o ideal e executar com um servidor local, por exemplo com Live Server.

Tambem e possivel usar Python:

```bash
python -m http.server 8000
```

Depois, abra no navegador:

```text
http://localhost:8000
```
