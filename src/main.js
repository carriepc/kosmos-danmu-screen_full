import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'
import skygear from 'skygear'

import config from './config'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

    super(width, height, Phaser.AUTO, 'content', null,true)

    this.state.add('Boot', BootState, false)
    this.state.add('Splash', SplashState, false)
    this.state.add('Game', GameState, false)

    this.state.start('Boot')
  }
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


// function abc() {
//     console.log('connected');
// }



skygear.config(
        { "endPoint": "https://kosmos.skygeario.com/",
        "apiKey": "1cd2e53ee14b4d3f825369f769bde7f8" }
).then(function (){

    // var _signup = skygear.signupAnonymously();
    //  _signup.then(function() {
    //     console.log('signup');
    //  })

    var login = skygear.loginWithEmail('aowaihou@hotmail.com', 'aowaihou');
    login.then(function(){

        const Room = skygear.Record.extend('room');
        const query = new skygear.Query(Room);
        query.equalTo('code',getUrlVars()["code"]);
        skygear.publicDB.query(query).then((rooms) => {

           const gameRoom = rooms[0];
           localStorage.setItem("room", gameRoom._id);
            window.game = new Game();

        }, (error) => {
          
          console.error(error);
        });
    })



   


    // skygear.pubsub.onOpen(abc);

    // skygear.on('kosmos', (data) => {
    //   console.log(data);
    // });

})




