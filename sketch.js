var sc,mn,hr,scAngle,mnAngle,hrAngle

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 angleMode(DEGREES)
}

function draw() {
  background(0);  
  fill("aquamarine")
  textSize(35)


text("Time",500,100)
fill("blue")
text(hr%12+": ",610,100)
fill("red")
text(mn+":  ",660,100)
fill( "#39FF14")
text(sc,715,100)

  sc= second()
  mn = minute()
  hr = hour()
  translate(200,200)
  rotate(-90)

  stroke("red")
  strokeWeight(8)
  scAngle = map(sc,0,60,0,360)

  stroke(" #39FF14")
  strokeWeight(8)
  mnAngle = map(mn,0,60,0,360)

  stroke("blue")
  strokeWeight(8)
  hrAngle = map(hr ,0,12,0,360)

  console.log(hrAngle)

  push()
  rotate(scAngle)
  stroke(" #39FF14")
  strokeWeight(4)
  line(0,0,110,0)
  pop()

  push()
  rotate(mnAngle)
  stroke("red")
  strokeWeight(7)
  line(0,0,95,0)
  pop()

  push()
  rotate(hrAngle)
  stroke("blue")
  strokeWeight(8)
  line(0,0,55,0)
  pop()


 strokeWeight(8)
 stroke( "#39FF14")
 noFill()
 arc(0,0,350,350,0,scAngle)
 stroke("red")
 arc(0,0,280+50,280+50,0,mnAngle)
 stroke("blue")
 arc(0,0,260+50,260+50,0,hrAngle)
  drawSprites();
 
  
}