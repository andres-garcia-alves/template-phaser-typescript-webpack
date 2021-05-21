import 'phaser';

export default class Game extends Phaser.Scene
{
    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        this.load.image('logo', 'assets/images/miscellaneous/phaser3-logo.png');
        this.load.image('libs', 'assets/images/miscellaneous/libraries.png');
        this.load.glsl('bundle', 'assets/others/plasma-bundle.glsl.js');
        this.load.glsl('stars', 'assets/others/starfields.glsl.js');
    }

    create ()
    {
        this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0);
        this.add.shader('Plasma', 0, 412, 800, 172).setOrigin(0);
        this.add.image(400, 300, 'libs');
        const logo = this.add.image(400, 70, 'logo');

        this.tweens.add({
            targets: logo,
            y: 350,
            duration: 1500,
            ease: 'Sine.inOut',
            yoyo: true,
            repeat: -1
        })
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: Game
};

const game = new Phaser.Game(config);
