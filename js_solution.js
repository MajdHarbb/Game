var blue_sound = new Audio("sounds/blue.mp3");
var green_sound = new Audio("sounds/green.mp3");
var red_sound = new Audio("sounds/red.mp3");
var wrong_sound = new Audio("sounds/wrong.mp3");
var yellow_sound = new Audio("sounds/yellow.mp3");

var blue = document.getElementById("blue");
var green = document.getElementById("green");
var red = document.getElementById("red");
var yellow = document.getElementById("yellow");


const sounds = [green_sound, red_sound, yellow_sound, blue_sound, wrong_sound];

var generated_sequence = [];
var input_sequence = [];
var level = 0;


// Add event listener on keydown
document.addEventListener("keydown", (event) => {
  StartGame();
});


function StartGame() {
  var random = Math.floor(Math.random() * 4);
  generated_sequence.push(random);
  Display(generated_sequence.slice(-1)[0]);
  console.log(generated_sequence.slice(-1)[0]);

}

function Display(index) {

  if (index == 0) {
    sounds[0].play();
    green.classList.add("pressed");
    setTimeout(function () {
      green.classList.remove("pressed");
    }, 200)

  } else if (index == 1) {
    sounds[1].play();
    red.classList.add("pressed");
    setTimeout(function () {
      red.classList.remove("pressed");
    }, 200)
  } else if (index == 2) {
    sounds[2].play();
    yellow.classList.add("pressed");
    setTimeout(function () {
      yellow.classList.remove("pressed");
    }, 200)
  } else if (index == 3) {
    sounds[3].play();
    blue.classList.add("pressed");
    setTimeout(function () {
      blue.classList.remove("pressed");
    }, 200)
  }
}

   
