var game;

class Game extends Phaser.Game {
  constructor(config) {
    super(config);
  }
}

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  scene: [BootScene, PlayScene],
};

window.addEventListener('load', () => {
  game = new Game(config);
});