export const configsGame = {
  easy: { size: 6 },
  medium: { size: 10 },
  hard: { size: 14 }
};

export const lifesGame = {
  easy: 6,
  medium: 4,
  hard: 2
}

export const initialGameState = {
  initialized: false,
  difficulty: "easy",
  config: { ...configsGame.easy },
  lifes: lifesGame.easy,
  board: []
};

export const gameState = {
  ...initialGameState
};
