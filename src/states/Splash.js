import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('mushroom', 'assets/images/mushroom2.png')
    this.load.image('emoji1','assets/images/emoji1.png')
    this.load.image('1f60a','assets/images/1f60a.png')
    this.load.image('1f60b','assets/images/1f60b.png')
    this.load.image('1f60c','assets/images/1f60c.png')
    this.load.image('1f60d','assets/images/1f60d.png')
    this.load.image('1f60e','assets/images/1f60e.png')
    this.load.image('1f60f','assets/images/1f60f.png')
    this.load.image('1f61a','assets/images/1f61a.png')
    this.load.image('1f61b','assets/images/1f61b.png')
    this.load.image('1f61c','assets/images/1f61c.png')
    this.load.image('1f61d','assets/images/1f61d.png')
    this.load.image('1f61e','assets/images/1f61e.png')
    this.load.image('1f61f','assets/images/1f61f.png')
    this.load.image('1f62a','assets/images/1f62a.png')
    this.load.image('1f62b','assets/images/1f62b.png')
    this.load.image('1f62c','assets/images/1f62c.png')
    this.load.image('1f62d','assets/images/1f62d.png')
    this.load.image('1f62e','assets/images/1f62e.png')
    this.load.image('1f62f','assets/images/1f62f.png')


  }

  create () {
    this.state.start('Game')
  }
}
