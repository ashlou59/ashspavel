var mikey=50;
var grow=50;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(230,115,230); //an RGB color for the canvas' background
  //circle
  stroke(250,140,140)// an RGB color for the circle's border
  strokeWeight(3) 
  fill(170,20,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,80,80); // center of canvas, 20px dia




  //stroke(59,0,57);
  //fill(54,255,255);
  //ellipse(random(mikey,250), random(375,mikey), 50,50);



  stroke(39,214,245);
  strokeWeight(1);
  fill(39,214,245,150);
  rect(150,30,grow,grow);
  grow=grow+1;
  frameRate(15);
if (grow>=175) {grow=0} else {grow=grow+1}
  grow=grow+1;


  







  


 


  stroke(71,0,68);
  fill(246,224,255);
  textFont('Impact');
  textSize(12);
  text("New York City, 1998!", 175,100,grow,grow);


}




function mousePressed(){
if (mikey>=255) {mikey=0} else {mikey=mikey+10}
  mikey=mikey+10;



}