// x = 0;
// y = 0;

// draw_apple = "";

// var SpeechRecognition = window.webkitSpeechRecognition;

// var recognition = new SpeechRecognition();

// function start()
// {
//   document.getElementById("status").innerHTML = "System is listening please speak";  
//   recognition.start();
// } 

// recognition.onresult = function(event) {

//  console.log(event); 

//  content = event.results[0][0].transcript;

//     document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

// }

// function setup() {

// }

// function draw() {
//   if(draw_apple == "set")
//   {
//     document.getElementById("status").innerHTML = to_number + " Apples drawn";
//     draw_apple = "";
//   }
// }

// function speak(){
//     var synth = window.speechSynthesis;

//     var utterThis = new SpeechSynthesisUtterance(speak_data);

//     synth.speak(utterThis);

//     speak_data = "";
// }

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