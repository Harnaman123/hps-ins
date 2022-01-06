var edu
function preload(){
    edu=loadImage(edu,"edu.jfif")
}
function setup(){
    CreateCanvas(500,700)
    educ=createSprite(500,300)
    educ.addImage(edu)
}
function draw(){
    drawSprites()
}