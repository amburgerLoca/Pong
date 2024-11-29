//som
let musga;

//imagens
let fundoLAVA;

let colidiu = false;

//variaveis bolinha
let xBolinha = 200;
let yBolinha = 150;
let diametro = 20;
let raio = diametro/2;


//variaveis raquete
let xRaquete = 10;
let yRaquete = 143;
let Rcomprimento = 18;
let Raltura = 120;

//variaveis da raquete do oponente
let xOponente = 570;
let yOponente = 143;
let velocidadeOponente = 5;

let VxBolinha = 3;
let VyBolinha = 5;

let meusPontos = 0;
let pontosOponente = 0;

function preload(){    
  fundo = loadImage("fundodnv.avif");
  musga = loadSound("SOM/videoplayback.m4a");
}

function setup() {
  createCanvas(600, 400);
  musga.loop();
}

function draw() {
  background(fundo);
  bolinha();
  colisaoBolinha();
  movimentoBolinha();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xOponente, yOponente);
  andarRaquete();
  oponenteMovimento(); 
  bateuBolinha(xRaquete, yRaquete);
  bateuBolinha(xOponente, yOponente);
  incluirPontos();
  marcaPonto();
}

function bolinha(){

  let b = color(0, 255, 255);
  fill (b);
  circle(xBolinha,yBolinha,diametro);
}

function movimentoBolinha(){
  
   xBolinha += VxBolinha;
   yBolinha += VyBolinha;
  
}

function colisaoBolinha(){
  
  
    if(xBolinha + raio > width || xBolinha - raio < 0){
    
     VxBolinha *= -1
     
     }
  
    if(yBolinha + raio > height || yBolinha - raio < 0){
    
     VyBolinha *= -1
     
     }
}


function mostraRaquete(x, y){
  let awawa = color(0, 0, 10);
  fill (awawa);
  rect(x, y, Rcomprimento,Raltura);
}

function andarRaquete(){
  
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 5;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 5;
  }
}

function oponenteMovimento(){
   
  velocidadeOponente = yBolinha - yOponente - Rcomprimento / 2 - 30;
  
  yOponente += velocidadeOponente;
  
    
}

function bateuBolinha(xRaquete, yRaquete){
  
  colidiu = collideRectCircle(
  
  xRaquete, yRaquete, Rcomprimento, Raltura,xBolinha, yBolinha, raio 
  
  );
  
  if(colidiu){
    
    VxBolinha *= -1;
      
      }

}

function incluirPontos(){
  
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  fill(color(0,0,255));
  rect(268,10,20,20);
  text(meusPontos, 278,26);
  
  fill (color(0,0,255));
  rect (310,10,20,20);
  text (pontosOponente, 321, 26);
  
  
}

function marcaPonto(){
  
  if(xBolinha<10){
    pontosOponente += 1;
  }
  if(xBolinha>591){
    meusPontos +=1;
    
  }
  
}
