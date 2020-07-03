class Life {
  constructor(total, start) {
    this.total = total;
    this.start = start;
    this.lifes = this.start;
    this.width = 25;
    this.height = 25;
    this.positionX = 20;
    this.positionY = 20;
  }

  show() {
    for (let i = 0; i < this.lifes; i++) {
      const margin = i * 10;
      const position = this.positionX * (i + 1);
      image(
        imageHeart,
        position + margin,
        this.positionY,
        this.width,
        this.height
      );
    }
  }

  addLife() {
    if (this.lifes <= this.total) {
      this.lifes++;
    }
  }

  removeLife() {
    this.lifes--;
  }
}
