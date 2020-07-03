function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  // soundGame.loop();
  jogo = new Jogo();
  jogo.setup();
  sceneInitial = new SceneInitial();

  scenes = {
    jogo: jogo,
    sceneInitial: sceneInitial,
  };

  actions = new Actions("Start", width / 2, 300);
}

function keyPressed() {
  jogo.keyPressed();
}

function draw() {
  scenes[sceneCurrent].draw();
}
