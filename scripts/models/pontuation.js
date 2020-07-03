class Pontuation {
  constructor() {
    this.points = 0;
  }

  addPoints() {
    this.points = this.points + 0.1;
  }

  show() {
    textAlign(RIGHT);
    fill("#fff");
    textSize(50);

    text(parseInt(this.points), width - 30, 50);
  }
}
