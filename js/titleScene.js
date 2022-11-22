/* Global Phaser */
//
//Created by: Alex Nelson
//Created on: Nov 2022
//This is the Title Scenes file

/**
 * This class is the Title scene
 */
class TitleScene extends Phaser.Scene {
  /**
   * Method for constructor
   */
  constructor() {
    super({ key: "titleScene" });
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff");
  }
  preload() {
    console.log("Title Scene");
  }
  create(data) {
    //pass
  }
  update(time, delta) {
    //pass
  }
}

export default TitleScene;
