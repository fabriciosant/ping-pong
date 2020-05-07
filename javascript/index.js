//variaveis bolinha
var xBolinha = 400;
var yBolinha = 300;
var diamentro = 20;
var raio = diamentro / 2;

//velocidade da bolinha
var velocidadeXbolinha = 12;
var velocidadeYbolinha = 12;

//Variaveis da raquete
var xRaquete = 5;
var yRaquete = 250;
var comprimento = 10;
var altura = 90;

//Variaveis Oponente
var xRaqueteOponente = 785;
var yRaqueteOponente = 250;
var velocidadeYOponetne;

//variavel biblioteca
var colidiu = false;

//placar do jogo
var meusPontos = 0;
var pontosOponente = 0;


function setup(){
    createCanvas(800, 600);
    //trilha.loop();

}
//funcão que recebe os parametros das outras funções***********
function draw(){
    background(0);
    mostrarBolinha();
    movimentaBolinha();
    verificaColisaoBordas();
    mostraRaquete(xRaquete, yRaquete);
    movimentaRaquete();
    //verificaColisaoRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    incluirPlacar();
    marcaPonto();
    verificaPontos();
}



function movimentaBolinha(){
    xBolinha += velocidadeXbolinha;
    yBolinha += velocidadeYbolinha;

}

function verificaPontos(){
    if(pontosOponente > 3){
        //alert('VOCE PERDEU!!!');
        //confirm('Deseja reiniciar a aplicação?')
    }
}

function verificaColisaoBordas (){
    if(xBolinha + raio > width || xBolinha - raio < 0){
        velocidadeXbolinha *= -1;
    }
    if(yBolinha + raio > height || yBolinha - raio < 0){
        velocidadeYbolinha *= -1;
    }
}

function mostraRaquete(x, y){
    rect(x, y, comprimento, altura);
}

function movimentaRaquete(){
    if(keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    }
    if(keyIsDown(DOWN_ARROW)){
        yRaquete += 10;
    }
}

function verificaColisaoRaquete(){
    if(xBolinha - raio < xRaquete + comprimento 
        && yBolinha - raio < yRaquete + altura
        && yBolinha + raio > yRaquete){
            velocidadeXbolinha *= -1;
            //raquetada.play();
    }
}

//função importada de outra biblioteca********
function verificaColisaoRaquete(x, y){
    colidiu = collideRectCircle(x, y, comprimento, altura, xBolinha, yBolinha, raio);
    if(colidiu){
        velocidadeXbolinha *= -1;
        //raquetada.play();
    }
}


function movimentaRaqueteOponente(){
    velocidadeYOponetne = yBolinha - yRaqueteOponente - comprimento / 2  -30;
    yRaqueteOponente += velocidadeYOponetne;
}

function incluirPlacar(){
    stroke(255);
    textAlign(CENTER);
    textSize(28);
    fill(color(255,140,0));
    rect(145, 2, 50, 30);
    fill(255);
    text(meusPontos, 170, 26 );
    fill(color(255,140,0));
    rect(645, 2,50,30);
    fill(255);
    text(pontosOponente, 670, 26)
}

function marcaPonto(){
    if(xBolinha > 790){
        meusPontos += 1;
    }
    if(xBolinha < 10){
        pontosOponente += 1;
    }
}


