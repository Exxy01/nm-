meant_to_be = "";
dreams = "";
function preload(){
    meant_to_be = loadSound("meant to be.mp3");
    dreams = loadSound("dreams.mp3");
}
function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,400,400);
}
function play(){
    meant_to_be.play();
}