class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    this.img = this.load.image('logo', 'assets/logo.png');
    console.log(this.img);
  }

  create() {
    this.scene.start('PlayScene');
  }
}
