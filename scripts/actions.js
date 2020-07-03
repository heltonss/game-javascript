class Actions {
  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;

    this.button = createButton(this.text);
    this.button.mousePressed(() => this.changeScene());
  }

  draw() {
    this.button.position(this.x, this.y);
    this.button.center("horizontal");
    this.button.addClass("botao-tela-inicial");
  }

  changeScene() {
    this.button.remove();
    sceneCurrent = "jogo";
  }
}
