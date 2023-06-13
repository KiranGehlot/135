
function setup() {
    video = createCapture(VIDEO)
    video.size(550 , 550)
    canvas=createCanvas(550 , 550)
    canvas.center()
}

function start() {
    objectDetector = ml5.objectDetector('cocossd' , modelloaded)
    document.getElementById("status").innerHTML = "status: detecting object" 
}

function modelloaded() {
    console.log("model is loaded" )
    status=true;
}

function draw()  {
    image( video , 0 , 0 , 550 , 550)
}