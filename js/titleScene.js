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
    this.titleSceneBackgroundImage = null;
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff");
  }
  //loads splash scene and displays this in the console
  preload() {
    console.log("Title Scene");
    this.load.image(
      "titleScreenBackground",
      "./assets/aliens_screen_image2.jpg"
    );
  }
  create(data) {
    this.titleSceneBackgroundImage = this.add
      .sprite(0, 0, "titleSceneBackground")
      .setScale(2.75);
    this.titleSceneBackgroundImage.x = 1920 / 2;
    this.titleSceneBackgroundImage.y = 1080 / 2;
  }
  update(time, delta) {
    //pass
  }
}

export default TitleScene;
