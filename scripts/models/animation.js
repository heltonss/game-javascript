class Animation {
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
    this.matriz = matriz;
    this.image = image;
    this.widthCharacter = widthCharacter;
    this.heightCharacter = heightCharacter;
    this.positionX = positionX;
    this.positionVariationY = positionVariationY;
    this.positionY = height - this.heightCharacter - this.positionVariationY;
    this.widthSprite = widthSprite;
    this.heightSprite = heightSprite;
    this.positionCurrent = 0;
  }

  show() {
    image(
      this.image,
      this.positionX,
      this.positionY,
      this.widthCharacter,
      this.heightCharacter,
      this.matriz[this.positionCurrent][0],
      this.matriz[this.positionCurrent][1],
      this.widthSprite,
      this.heightSprite
    );

    this.animate();
  }

  animate() {
    this.positionCurrent++;

    if (this.positionCurrent >= this.matriz.length - 1) {
      this.positionCurrent = 0;
    }
  }
}
