x = 0;
y = 0;

width = 0;
height = 0;
num = 0;

var appleSize = 70;
var drawApple = '';

var Srecog = window.webkitSpeechRecognition;
var recog = new Srecog();

function preload() {
  apple = loadImage('apple.png');
}

function setup() {
  width = window.innerWidth - 150;
  height = window.innerHeight;

  canv = createCanvas(width, 460);


}

function draw() {
  if (drawApple == 'set') {
    // image(apple,x,y,appleSize,appleSize);
    for (let i = 0; i < num; i++) {
      x = Math.round(Math.random() * (width - appleSize));
      y = Math.round(Math.random() * (460 - appleSize));
      image(apple, x, y, appleSize, appleSize);
    }
    document.getElementById('status').innerHTML = `${num} apples drawn.`
    drawApple = '';
  }
}

speechB.addEventListener('click', () => {
  recog.start();
  document.getElementById('status').innerHTML = 'The system is listening, plese speak.';
});

recog.onresult = event => {
  console.log({ event });
  label = event.results[0][0].transcript;
  num = Number(label);

  if (Number.isInteger(num)) {
    drawApple = 'set';
  }else{
    document.getElementById('status').innerHTML = `Text recognized as: ${label}`
  }

  console.log({ num });

}
