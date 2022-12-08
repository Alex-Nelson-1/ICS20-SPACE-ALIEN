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

    this.background = null;
    this.ship = null;
    this.fireMissile = false;
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff");
  }
  //Displays "Game Scene" in the console
  preload() {
    console.log("Game Scene");

    this.load.image("starBackground", "./assets/starBackground.png");
    this.load.image("spaceShip", "./assets/spaceShip.png");
    this.load.image("missile", "./assets/missile.png");
  }
  create(data) {
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0);
    this.background.setOrigin(0, 0);

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "spaceShip");

    this.missileGroup = this.physics.add.group();
  }
  update(time, delta) {
    const keyLeftObj = this.input.keyboard.addKey("LEFT");
    const keyRightObj = this.input.keyboard.addKey("RIGHT");
    const keyDObj = this.input.keyboard.addKey("D");
    const keyAObj = this.input.keyboard.addKey("A");
    const keySpaceObj = this.input.keyboard.addKey("SPACE");

    //Allows the ship to move left when the left arrow key is pressed
    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15;
      if (this.ship.x < 0) {
        this.ship.x = 0;
      }
    }
    //Allows the ship to move right when the right arrow key is pressed
    if (keyRightObj.isDown === true) {
      this.ship.x += 15;
      if (this.ship.x > 1920) {
        this.ship.x = 1920;
      }
    }
    //Allows the ship to move left when the A key is pressed. The && stops the space ship from going super fast when holding down both D and left arrow keys
    if (keyDObj.isDown === true && keyRightObj.isDown === false) {
      this.ship.x += 15;
      if (this.ship.x > 1920) {
        this.ship.x = 1920;
      }
    }
    //Allows the ship to move right when the D arrow key is pressed. The && stops the space ship from going super fast when holding down both A and right arrow keys
    if (keyAObj.isDown === true && keyLeftObj.isDown === false) {
      this.ship.x -= 15;
      if (this.ship.x < 0) {
        this.ship.x = 0;
      }
    }
    //When key space is pressed, a missile will be place where the spaceship is
    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        this.fireMissile = true;
        const newMissile = this.physics.add.sprite(
          this.ship.x,
          this.ship.y,
          "missile"
        );
        this.missileGroup.add(newMissile);
      }
    }
    //If the space key is not being pressed do not fire a missile
    if (keySpaceObj.isUp === true) {
      this.fireMissile = false;
    }
  }
}

export default GameScene;
