function preload() {
  fita = loadJSON("scripts/fita/fita.json");
  imageScenario = loadImage("imagens/cenario/floresta.png");
  imageCharacter = loadImage("imagens/personagem/correndo.png");
  imageGameOver = loadImage("imagens/assets/game-over.png");
  imageSceneInitial = loadImage("imagens/assets/telaInicial.png");
  fontSceneInitial = loadFont("imagens/assets/fonteTelaInicial.otf");
  imageEnemyDout = loadImage("imagens/inimigos/gotinha.png");
  imageEnemyTroll = loadImage("imagens/inimigos/troll.png");
  imageHeart = loadImage("imagens/assets/coracao.png");
  imageEnemyDoutSky = loadImage("imagens/inimigos/gotinha-voadora.png");
  soundGame = loadSound("sons/trilha_jogo.mp3");
  soundJump = loadSound("sons/somPulo.mp3");
}
