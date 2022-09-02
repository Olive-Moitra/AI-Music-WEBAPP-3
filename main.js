song1="";
song2="";
left_wrist_x=0;
left_wrist_y=0;
right_wrist_x=0;
right_wrist_y=0;

function preload()
{
    song1=loadSound("Butter.mp3");
    song2=loadSound("Dynamite.mp3");
}

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();

    camera=createCapture(VIDEO);
    camera.hide();

    poseNet = ml5.poseNet(camera, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw()
{
    image(camera, 0, 0, 600, 500);
}

function modelLoaded()
{
    console.log("poseNet is initialized successfully");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);

        left_wrist_x= results[0].pose.leftWrist.x;
        left_wrist_y= results[0].pose.leftWrist.y;
        console.log("LeftWrist_x = "+left_wrist_x+" LeftWrist_y"+left_wrist_y);
        right_wrist_x= results[0].pose.rightWrist.x;
        right_wrist_y= results[0].pose.rightWrist.y;
        console.log("RightWrist_x = "+right_wrist_x+" RightWrist_y"+right_wrist_y);
    }
}