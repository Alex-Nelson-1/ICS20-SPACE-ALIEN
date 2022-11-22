/* Global Phaser */
//
//Created by: Alex Nelson
//Created on: Nov 2022
//This is the phaser 3 configuration file

//Import Scenes
import SplashScene from "./splashScene.js";
import TitleScene from "./titleScene.js";

//Game Scenes
const splashScene = new SplashScene();
const titleScene = new TitleScene();

//Configure Game / Start Game
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  //set background color
  backgroundColor: 0x5f6e7a,
  //Places background in the middle
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};
const game = new Phaser.Game(config);
//console.log(game)

//load scenes
//Note: Any 'key' cannot be reused
game.scene.add("splashScene", splashScene);
game.scene.add("titleScene", titleScene);
//Start scene
game.scene.start("splashScene");
