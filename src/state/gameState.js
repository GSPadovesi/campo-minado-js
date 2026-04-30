export const configsGame = {
  easy: { size: 6, lifes: 6 },
  medium: { size: 10, lifes: 4 },
  hard: { size: 14, lifes: 2 }
};

export const gameState = {
  initialized: false,
  difficulty: 'easy',
  config: configsGame.easy,
  board: []
};
