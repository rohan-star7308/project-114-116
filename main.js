function preload(){
mustache=loadImage("https://i.postimg.cc/MTjF7XKH/mustache.jpg");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet initialized");
}
var nosex=0;
var nosey=0;
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log('nose x = '+results[0].pose.nose.x);
        console.log('nose y = '+results[0].pose.nose.y);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(mustache,nosex,nosey,50,30);
}
 function take_snapshot(){
     save('clown-nose.png');
 }