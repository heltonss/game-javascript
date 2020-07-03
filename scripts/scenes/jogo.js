class Jogo {
  constructor() {
    this.enemyCurrent = 0;
    this.index = 0;
    this.maps = fita.maps;
  }

  setup() {
    scenario = new Scenario(imageScenario, 3);
    pontuation = new Pontuation();

    life = new Life(
      fita.configurations.lifesTotal,
      fita.configurations.lifesInitial
    );

    character = new Character(
      heroMatriz,
      imageCharacter,
      0,
      30,
      110,
      135,
      220,
      270
    );

    const enemyTroll = new Enemy(
      matrizInimigoGrande,
      imageEnemyTroll,
      width,
      0,
      200,
      200,
      400,
      400,
      10
    );

    const enemyDout = new Enemy(
      enemyMatriz,
      imageEnemyDout,
      width - 52,
      30,
      52,
      52,
      104,
      104,
      10
    );

    const enemyDoutSky = new Enemy(
      matrizInimigoVoador,
      imageEnemyDoutSky,
      width - 52,
      350,
      100,
      75,
      200,
      150,
      10
    );

    enemies.push(enemyDoutSky);
    enemies.push(enemyDout);
    enemies.push(enemyDout);
    enemies.push(enemyTroll);
  }

  keyPressed() {
    if (key === "ArrowUp") {
      character.jump();
      soundJump.play();
    }
  }

  draw() {
    scenario.show();
    scenario.move();
    pontuation.show();
    pontuation.addPoints();
    life.show();

    character.show();
    character.applyGravity();
    const lineCurrent = this.maps[this.index];
    const enemy = enemies[lineCurrent.enemy];
    enemy.changeSpeed(lineCurrent.speed);
    const enemyVisible = enemy.positionX < -enemy.widthCharacter;

    enemy.show();
    enemy.move();

    if (enemyVisible) {
      this.index++;
      enemy.reShow();
      if (this.index > this.maps.length - 1) {
        this.index = 0;
      }
    }

    if (character.beCollide(enemy)) {
      console.log("colidiu");
      life.removeLife();
      character.stayInvencible();

      if (life.lifes === 0) {
        image(imageGameOver, width / 2 - 200, height / 2);
        noLoop();
      }
    }
  }
}
