BUTTER_song="";
CANDY_song="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    PBUTTER_song = loadSound("Butter-BTS(PagalWorld).mp3");
    CANDY_song = loadSound("Candy Hindi Dhvani Bhanushali 128 Kbps.mp3");
}

function draw(){
    image(video,0,0,600,530);
}

