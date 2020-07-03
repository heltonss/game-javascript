class Character extends Animation {
  constructor(
    matriz,
    image,
    positionX,
    positionVariationY,
    widthCharacter,
    heightCharacter,
    widthSprite,
    heightSprite
  ) {
    super(
      matriz,
      image,
      positionX,
      positionVariationY,
      widthCharacter,
      heightCharacter,
      widthSprite,
      heightSprite
    );

    this.positionVariationY = positionVariationY;
    this.positionInitiaY = height - heightCharacter - this.positionVariationY;
    this.positionY = this.positionInitiaY;
    this.speedJump = 0;
    this.gravity = 6;
    this.heightJump = -50;
    this.jumps = 0;
    this.invencible = false;
  }

  jump() {
    if (this.jumps < 2) {
      this.speedJump = this.heightJump;
      this.jumps++;
    }
  }

  applyGravity() {
    this.positionY = this.positionY + this.speedJump;
    this.speedJump = this.speedJump + this.gravity;

    if (this.positionY > this.positionInitiaY) {
      this.positionY = this.positionInitiaY;
      this.jumps = 0;
    }
  }

  stayInvencible() {
    this.invencible = true;

    setTimeout(() => {
      this.invencible = false;
    }, 1000);
  }

  beCollide(enemy) {
    const precision = 0.7;

    if (this.invencible) {
      return false;
    }

    const colisao = collideRectRect(
      this.positionX,
      this.positionY,
      this.widthCharacter * precision,
      this.heightCharacter * precision,
      enemy.positionX,
      enemy.positionY,
      enemy.widthCharacter * precision,
      enemy.heightCharacter * precision
    );
    return colisao;
  }
}
