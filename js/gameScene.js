/* Global Phaser */
//
//Created by: Alex Nelson
//Created on: Nov 2022
//This is the Game Scenes file

/**
 * This class is the Game scene
 */
class GameScene extends Phaser.Scene {
  /**
   * Method for constructor
   */
  constructor() {
    super({ key: "gameScene" });
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff");
  }
  //Displays "Game Scene" in the console
  preload() {
    console.log("Game Scene");
  }
  create(data) {
    //pass
  }
  update(time, delta) {
    //pass
  }
}

export default GameScene;
