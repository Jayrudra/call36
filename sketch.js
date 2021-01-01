
var database;
var gameState=0;
var game;
var form ;
var player,playerCount;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
   
}

function draw(){
    background("white");
    
    drawSprites();
}

