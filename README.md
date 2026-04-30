# Campo Minado JS

Projeto de Campo Minado feito com JavaScript puro, HTML e CSS, com foco em praticar manipulacao do DOM, controle de estado, organizacao modular e regras classicas de um jogo em grid.

## Visao geral

O projeto roda direto no navegador, sem framework, usando modulos ES.

O objetivo nao e apenas ter o jogo funcionando, mas tambem usar o projeto para estudar conceitos como:

- matriz(grid)
- manipulacao do DOM
- controle de estado
- organizacao de modulos no frontend
- algoritmo de vizinhanca
- recursao para abertura de areas vazias
- regras de vitoria e derrota

No estado atual, o jogo possui:

- menu inicial com selecao de dificuldade
- loading antes da exibicao do tabuleiro
- geracao dinamica do grid
- distribuicao aleatoria de bombas
- calculo de bombas vizinhas
- revelacao recursiva de areas vazias
- sistema de vidas por dificuldade
- regra de vitoria
- regra de derrota
- reset automatico da interface e do estado ao fim da partida

## Dificuldades

As dificuldades atualmente disponiveis sao:

- `easy`: tabuleiro `6x6`, `5` bombas, `6` vidas
- `medium`: tabuleiro `10x10`, `15` bombas, `4` vidas
- `hard`: tabuleiro `14x14`, `29` bombas, `2` vidas

As bombas sao geradas automaticamente com base em cerca de `15%` do total de celulas.

## Como funciona

Fluxo atual da aplicacao:

1. o usuario escolhe uma dificuldade no menu
2. o estado do jogo e atualizado com tamanho e vidas da dificuldade
3. ao clicar em `Iniciar Jogo`, o menu e ocultado e o loading aparece
4. o tabuleiro e criado dinamicamente com `data-row` e `data-col`
5. cada clique revela a celula correspondente
6. se a celula for bomba, o jogador perde uma vida
7. se a celula nao tiver bombas vizinhas, a abertura se propaga para as vizinhas
8. quando todas as celulas seguras sao reveladas, o jogo termina com vitoria
9. quando as vidas chegam a zero, o jogo termina com derrota

## Estrutura

```text
.
|-- index.html
|-- README.md
`-- src
    |-- assets
    |   `-- bombear.png
    |-- js
    |   |-- board.js
    |   |-- cell.js
    |   |-- game.js
    |   |-- main.js
    |   `-- utils.js
    |-- state
    |   `-- gameState.js
    `-- styles
        `-- styles.css
```

## Responsabilidades dos modulos

- `main.js`: inicializacao da aplicacao e binding do botao de iniciar
- `game.js`: ciclo principal da partida, renderizacao do tabuleiro, clique nas celulas, fim de jogo e reset
- `cell.js`: logica de revelacao de celulas, incluindo bombas, vizinhos e expansao recursiva
- `board.js`: criacao das celulas, sorteio das bombas e contagem de vizinhos
- `utils.js`: helpers de DOM, loading, selecao de dificuldade e sincronizacao visual
- `gameState.js`: configuracoes, vidas por dificuldade e estado central da partida

## Estado da aplicacao

O estado atual do jogo e centralizado em `src/state/gameState.js`.

Hoje ele controla:

- `initialized`
- `difficulty`
- `config`
- `lifes`
- `board`

Tambem existe um `initialGameState`, usado para restaurar o jogo ao padrao quando a partida termina.

## Interface

A interface atual e dividida em duas partes principais:

- menu com titulo, descricao, dificuldades e botao de inicio
- area do tabuleiro, exibida somente durante a partida

O loading fica preso dentro do `section`, sem vazar para o `main`, acompanhando apenas a area visual do jogo.

## Como executar

Como o projeto usa `type="module"`, o ideal e abrir com um servidor local.

Opcao com Python:

```bash
python -m http.server 8000
```

Depois abra:

```text
http://localhost:8000
```

Se preferir, tambem funciona com extensoes como Live Server no VS Code.

## Proximos passos

Melhorias naturais para a evolucao do projeto:

- adicionar bandeiras nas celulas
- exibir contador visual de vidas durante a partida
- exibir contador visual de bombas restantes
- adicionar botao explicito de reiniciar
- melhorar feedback visual para bomba, vitoria e derrota
- ajustar textos com acentuacao para garantir encoding consistente
- adicionar testes para regras do tabuleiro e da abertura recursiva
