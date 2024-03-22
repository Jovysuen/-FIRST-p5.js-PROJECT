function setup(){
    canvas=createCanvas(600,400)
    canvas.position(120,250)
    video=createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video,0,0,600,400)
    fill("red")
    stroke("black")
    rect(50,40,500,20)
    rect(50,350,500,20)
    rect(50,40,20,300)
    rect(550,40,20,300)
    fill("green")
    stroke("black")
    circle(50,350,50)
    circle(550,350,50)
    circle(50,50,50)
    circle(550,50,50)

}

function take_snapshot(){
    save ("filter.png")
}