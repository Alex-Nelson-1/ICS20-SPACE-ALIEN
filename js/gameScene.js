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
    //loads background and spaceship
    this.load.image("starBackground", "./assets/starBackground.png")
    this.load.image("spaceShip", "./assets/spaceShip.png")
  }
  create(data) {
    //Displays background and Spaceship
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "spaceShip")
  }
  update(time, delta) {
    //Const variables for left and right arrow keys, as well as A and D keys
    const keyLeftObj = this.input.keyboard.addKey("LEFT")
    const keyRightObj = this.input.keyboard.addKey("RIGHT")
    const keyDObj = this.input.keyboard.addKey("D")
    const keyAObj = this.input.keyboard.addKey("A")

    //Allows the ship to move left when the left arrow key is pressed
    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15
      if (this.ship.x < 0) {
        this.ship.x = 0
      }
    }
    //Allows the ship to move right when the right arrow key is pressed
    if (keyRightObj.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 1920) {
        this.ship.x = 1920
      }
    }
    //Allows the ship to move left when the A key is pressed
    if (keyDObj.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 1920) {
        this.ship.x = 1920
      }
    }
    //Allows the ship to move right when the D arrow key is pressed
    if (keyAObj.isDown === true) {
      this.ship.x -= 15
      if (this.ship.x < 0) {
        this.ship.x = 0
      }
    }
  }
}

export default GameScene
