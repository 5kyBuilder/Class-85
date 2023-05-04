canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_height = 90;
rover_width = 100;

nasa_mars_images = ["nasa_image_1.jpg", "nasa_image_2.jpeg", "nasa_image_3.jpg", "nasa_image_4.jpg"];
random_number = Math.floor(Math.random() * 4);

background_img = nasa_mars_images[random_number];
console.log("image is " + background_img);

rover_img = "rover.png";

rover_x = 10;
rover_y = 10;

keypressed = "";

function add(){
    backgroundimg_tag = new Image();
    backgroundimg_tag.onload = UploadBackgroundImg;
    backgroundimg_tag.src = background_img;

    roverimg_tag = new Image();
    roverimg_tag.onload = UploadRoverImg;
    roverimg_tag.src = rover_img;
}

function UploadBackgroundImg(){
    ctx.drawImage(backgroundimg_tag, 0, 0, ctx.canvas.width, ctx.canvas.height);
}

function UploadRoverImg(){
    ctx.drawImage(roverimg_tag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){
    keypressed = e.keyCode;
    console.log(keypressed);

    if(keypressed == "37"){
        Left();
        console.log("Left"); 
    }else if(keypressed == "38"){
        Up();
        console.log("Up"); 
    }else if(keypressed == "39"){
        Right();
        console.log("Right"); 
    }else if(keypressed == "40"){
        Down();
        console.log("Down"); 
    }
}

function Up(){
    if (rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("The up arrow key is pressed, X - " + rover_x + " Y - " + rover_y);
        UploadBackgroundImg();
        UploadRoverImg();
    }
}

function Down(){
    if (rover_y <= 500){
        rover_y = rover_y + 10;
        console.log("The down arrow key is pressed, X - " + rover_x + " Y - " + rover_y);
        UploadBackgroundImg();
        UploadRoverImg();
    }
}

function Left(){
    if (rover_x >= 0){
        rover_x = rover_x - 10;
        console.log("The left arrow key is pressed, X - " + rover_x + " Y - " + rover_y);
        UploadBackgroundImg();
        UploadRoverImg();
    }
}

function Right(){
    if (rover_x <= 700){
        rover_x = rover_x + 10;
        console.log("The right arrow key is pressed, X - " + rover_x + " Y - " + rover_y);
        UploadBackgroundImg();
        UploadRoverImg();
    }
}