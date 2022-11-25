/* Global Phaser */
//
//Created by: Alex Nelson
//Created on: Nov 2022
//This is the Menu Scenes file

/**
 * This class is the Menu scene
 */
class MenuScene extends Phaser.Scene {
  /**
   * Method for constructor
   */
  constructor() {
    super({ key: "menuScene" }) 
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff") 
  }
  //loads splash scene and displays this in the console
  preload() {
    console.log("Menu Scene") 
  }
  create(data) {
    //pass
  }
  update(time, delta) {
    //pass
  }
}

export default MenuScene 
