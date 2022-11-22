/* Global Phaser */
//
//Created by: Alex Nelson
//Created on: Nov 2022
//This is the Splash Scenes file

/**
 * This class is the Splash scene
 */
class SplashScene extends Phaser.Scene {
  /**
   * Method for constructor
   */
  constructor() {
    super({ key: "splashScene" });
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff");
  }
  preload() {
    console.log("Splash Scene");
  }
  create(data) {
    //pass
  }
  update(time, delta) {
    this.scene.switch("titleScene");
  }
}

export default SplashScene;
