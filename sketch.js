let stars = [];
let maxStars = 1000000;
let images = [];
let loadedImages = [];


function preload(){
  loadedImages.push (loadImage('images/blackhole.png'));
  loadedImages.push (loadImage('images/mss.png'));
  loadedImages.push ( loadImage('images/nebula.png'));
  loadedImages.push(loadImage('images/supermassive.png'));
  loadedImages.push (loadImage('images/supernova.png'));
  loadedImages.push (loadImage('images/earth.png'));
  loadedImages.push (loadImage('images/nebula2.png'));
  loadedImages.push (loadImage ('images/nebula3.png'));
  loadedImages.push (loadImage('images/jupiter.png'));
  loadedImages.push (loadImage('images/planet.png'));
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(22,12,41);

  if (stars.length < maxStars) {
    stars.push({
      x: random(width),
      y: random(height),
      outerRadius: random(2, 4),
      innerRadius: random(1, 2),
      points: 5,
      rotation: random(TWO_PI)
    });
  }

  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    drawStarShape(star.x, star.y, star.points, star.outerRadius, star.innerRadius, star.rotation);
  }

  for (let i= 0; i < images.length; i++){
    let img= images[i];
    image(img.img, img.x, img.y, img.w, img.h);
  }
}


function drawStarShape(x, y, n, outerRadius, innerRadius, rotation) {
  noStroke();
  fill(190);
  let theta = TAU / n;
  beginShape();
  for (let i = 0; i < n; i++) {
    let x1 = x + cos(i * theta + rotation) * outerRadius;
    let y1 = y + sin(i * theta + rotation) * outerRadius;
    vertex(x1, y1);
    let x2 = x + cos((i + 0.5) * theta + rotation) * innerRadius;
    let y2 = y + sin((i + 0.5) * theta + rotation) * innerRadius;
    vertex(x2, y2);
  }
  endShape(CLOSE);
}

function mousePressed(){
  let randomIndex = floor(random (loadedImages.length));
  let randomImage= loadedImages[randomIndex];
  let scaledWidth = randomImage.width / 6;
  let scaledHeight = randomImage.height/ 6;
  images.push({
    img: randomImage,
    x: mouseX-scaledWidth / 2,
    y: mouseY - scaledHeight/ 2,
    w: scaledWidth,
    h: scaledHeight
  });
}
