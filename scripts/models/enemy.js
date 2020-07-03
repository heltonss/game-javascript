class Enemy extends Animation {
  constructor(
    matriz,
    image,
    positionX,
    positionVariationY,
    widthCharacter,
    heightCharacter,
    widthSprite,
    heightSprite,
    speed
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

    this.speed = speed;
    this.positionX = width;
  }

  move() {
    this.positionX = this.positionX - this.speed;
  }

  reShow() {
    this.positionX = width;
  }

  changeSpeed(newSpeed) {
    this.speed = newSpeed;
  }
}
