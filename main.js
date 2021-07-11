function preload(){
mustache=loadImage("https://i.postimg.cc/BQ9ZTBZ6/mustache-img-removebg-preview-1.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
     poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
noseX=0;
noseY=0;

function modelLoaded() {
    console.log('PoseNet Is Intialized');
}

function draw()
{
image(video,0,0,300,300);
image(mustache, noseX, noseY, 30, 30); 
}

function take_snapshot(){
    save('myFilterImage.png');
 }
 
 function gotPoses(results)
 {
     
     if(results.length > 0)
     {
         console.log(results);
         noseX=results[0].pose.nose.x-15;
         noseY=results[0].pose.nose.y+1;
         console.log("nose x = " + noseX );
         console.log("nose y = " + noseY );
 
     }
 }

