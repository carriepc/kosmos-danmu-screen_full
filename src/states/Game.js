/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
// import Emoji from '../sprites/Emoji'

import skygear from 'skygear'


  var banner = new Array(10000);
  // var mushroom = new Array(50);
  var count=0;
  var messageCount=0;

  function checkOverlap(spriteA, spriteB) {

    if(spriteA._bounds!=null){
      var boundsA = spriteA.getBounds();
      var boundsB = spriteB.getBounds();

      if( Phaser.Rectangle.intersects(boundsA, boundsB) ){
        spriteA.destroy();
        count++;
        console.log(count);
        
      }
    }

  }


export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {

    // const bannerText = '你好！'
    //  banner = this.add.text(this.world.width, 350, bannerText)
    // //let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    // banner.font = 'Arial'
    // banner.padding.set(10, 16)
    // banner.fontSize = 40
    // banner.fill = '#77BFA3'
    // banner.smoothed = false
    // banner.anchor.setTo(0.5)

    // for(var i=0;i<5;i++){
    //   mushroom[i]= new Mushroom({
    //     game: this,
    //     x: Math.random()*this.world.width,
    //     y: Math.random()*this.world.height,
    //     asset: 'mushroom'
    //   })
    //   this.game.add.existing(mushroom[i])
    // }
    //console.log(room);

    var room = localStorage.getItem("room");


    console.log(room);

     skygear.on('room/'+room, (data) => {

      if(data.type==='emoji'){
            this.emoji1 = new Mushroom({
            game: this,
            x: this.world.width,
            y: game.world.randomY,
            asset: data.content
        })

        this.game.add.existing(this.emoji1);
      }else{

      banner[messageCount] = this.add.text(this.world.width, game.world.randomY, data.sender+" : "+data.content);
      banner[messageCount].font = 'Arial'
      banner[messageCount].padding.set(10, 16)
      banner[messageCount].fontSize = 40
      banner[messageCount].fill = '#77BFA3'
      banner[messageCount].smoothed = false
      banner[messageCount].anchor.setTo(0)
      console.log(data.content);
      messageCount++;
      console.log(messageCount);
    } 



    });




    // this.mushroom2 = new Mushroom({
    //   game: this,
    //   x: this.world.centerX+100,
    //   y: this.world.centerY,
    //   asset: 'mushroom'
    // })

    // this.game.add.existing(this.mushroom)
    // this.game.add.existing(this.mushroom2)


    // this.emoji1 = new Emoji({
    //   game: this,
    //   x: this.world.centerX+50,
    //   y: this.world.centerY+200,
    //   asset: 'emoji1'
    // })

    //  this.emoji1.inputEnabled = true;
    //  this.emoji1.input.enableDrag();

    // this.game.add.existing(this.emoji1);

  }


  update () {

    for(var j=0;j<messageCount;j++){
        banner[j].x -= 5
       if(banner[j].x < banner[j].width*-1 )
         banner[j].destroy();
    }


    // if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    // {
    //     this.emoji1.x -= 4;
    // }
    // else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    // {
    //     this.emoji1.x += 4;
    // }

    // if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    // {
    //     this.emoji1.y -= 4;
    // }
    // else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    // {
    //     this.emoji1.y += 4;
    // }

    // for(var i=0;i<5;i++){
    //   checkOverlap(mushroom[i], this.emoji1);
    // }
 //   checkOverlap(this.mushroom, this.emoji1);
 //   checkOverlap(this.mushroom2, this.emoji1);


  }



  // render () {
  //   if (__DEV__) {
  //     this.game.debug.spriteInfo(this.mushroom, 100, 100)
  //   }
  // }
}
