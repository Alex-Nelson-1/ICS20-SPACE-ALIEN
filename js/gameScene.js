/* Global Phaser */
//
//Created by: Alex Nelson
//Created on: Nov 2022
//This is the Game Scenes file

/**
 * This class is the Game scene
 */
class GameScene extends Phaser.Scene {
  //create an alien
  createAlien() {
    const alienLocationX = Math.floor(Math.random() * 1920) + 1; //Gets a random number between 1 and 1920
    let alienVelocityX = Math.floor(Math.random() * 50) + 1; //Gets a random number between 1 and 50
    alienVelocityX *= Math.floor(Math.random()) ? 1 : -1; //half of the aliens will
    const anAlien = this.physics.add.sprite(alienLocationX, -100, "alien");
    anAlien.body.velocity.y = 200;
    anAlien.body.velocity.x = alienVelocityX;
    this.alienGroup.add(anAlien);
  }

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

    //Preloads the images
    this.load.image("starBackground", "./assets/starBackground.png");
    this.load.image("spaceShip", "./assets/spaceShip.png");
    this.load.image("missile", "./assets/missile.png");
    this.load.image("missile", "./assets/missile.png");
    this.load.image("alien", "./assets/alien.png");

    //preloads sounds
    this.load.audio("laser", "./assets/laser1.wav");
  }
  create(data) {
    //adds the background
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0);
    this.background.setOrigin(0, 0);

    //adds the spaceship
    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "spaceShip");

    //Creates a group for the missiles
    this.missileGroup = this.physics.add.group();

    //Load alien
    this.alienGroup = this.add.group();
    this.createAlien();
  }
  update(time, delta) {
    //Variables to call for the arrow keys, a & d keys, as well as the space bar.
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
        this.sound.play("laser");
      }
    }
    //If the space key is not being pressed do not fire a missile
    if (keySpaceObj.isUp === true) {
      this.fireMissile = false;
    }
    //Makes each missile go foreward
    this.missileGroup.children.each(function (item) {
      item.y = item.y - 15;
      if (item.y < 0) {
        item.destroy();
      }
    });
  }
}

export default GameScene;
