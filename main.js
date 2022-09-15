song = "";
function preload()
{
    song1 = loadSound("Harry-Styles-As-It-Was.mp3");
    song2 = loadSound("BoyWithUke-Toxic.mp3");
}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 0, 0, 600, 500);
}
function play()
{
    song2.play();
}
