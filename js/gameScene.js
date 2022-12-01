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
    super({ key: "gameScene" })
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }
  //Displays "Game Scene" in the console
  preload() {
    console.log("Game Scene")

    this.load.image("starBackground", "./assets/starBackground.png")
    this.load.image("spaceShip", "./assets/spaceShip.png")
  }
  create(data) {
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "spaceShip")
  }
  update(time, delta) {
    //pass
  }
}

export default GameScene
