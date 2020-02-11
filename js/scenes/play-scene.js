class PlayScene extends Phaser.Scene {
  constructor() {
    super('PlayScene');
  }

  create() {
    const
      w = window.innerWidth,
      h = window.innerHeight;

    console.log(w,h);

    this.logo = this.add.image(0, 0, 'logo');
    this.logo.setScale(0.5);

    Phaser.Display.Align.In.Center(
      this.logo,
      this.add.zone(w/2, h/2, w, h),
    );

    this.tweens.add({
      targets: this.logo,
      y:450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1,
    });
  }
}