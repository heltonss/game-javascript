class SceneInitial {
  constructor() {}

  draw() {
    this._imageBackground();
    this._text();
    this._button();
  }

  _imageBackground() {
    image(imageSceneInitial, 0, 0, width, height);
  }

  _text() {
    textFont(fontSceneInitial);
    textAlign(CENTER);
    textSize(60);
    text("As aventuras de", width / 2, 180);
    textSize(80);
    text("Hipsta", width / 2, 230);
  }

  _button() {
    actions.y = (height / 7) * 5;
    actions.draw();
  }
}
