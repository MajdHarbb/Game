/* store sounds in vars */
var blue_sound = new Audio("sounds/blue.mp3");
var green_sound = new Audio("sounds/green.mp3");
var red_sound = new Audio("sounds/red.mp3");
var wrong_sound = new Audio("sounds/wrong.mp3");
var yellow_sound = new Audio("sounds/yellow.mp3");

/* store buttons' ID's vars */
var blue = $("#blue");
var green = $("#green");
var red = $("#red");
var yellow =$("#yellow");


/* array of audio files */
const sounds = [green_sound, red_sound, yellow_sound, blue_sound, wrong_sound];


var generated_sequence = [];
var input_sequence = [];
var level = 0;

/* Game Starts on keyboard press */
$(document).on("keydown", function(event){
  StartGame();
  /** Onclick call Display with parameter */
  green.click(function(){
    Display(0);
  })
  red.click(function(){
    Display(1);
  })
  yellow.click(function(){
    Display(2);
  })
  blue.click(function(){
    Display(3);
  })
  



});

function StartGame(){
  var random = Math.floor(Math.random()*4);
  generated_sequence.push(random);

} 

function Display(index){
  if (index == 0) {
    sounds[0].play();
    green.addClass("pressed");
    setTimeout(function () {
      green.removeClass("pressed");
    }, 200)


  } else if (index == 1) {
    sounds[1].play();
    red.addClass("pressed");
    setTimeout(function () {
      red.removeClass("pressed");
    }, 200)


  } else if (index == 2) {
    sounds[2].play();
    yellow.addClass("pressed");
    setTimeout(function () {
      yellow.removeClass("pressed");
    }, 200)


  } else if (index == 3) {
    sounds[3].play();
    blue.addClass("pressed");
    setTimeout(function () {
      blue.removeClass("pressed");
    }, 200)
  }
}
  
