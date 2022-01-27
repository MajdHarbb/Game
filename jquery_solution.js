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
    input_sequence.push(0);
    if(input_sequence[input_sequence.length-1] == generated_sequence[input_sequence.length-1]){
      if (generated_sequence.length == input_sequence.length) {
        setTimeout(function () { StartGame();}, 1500);
      }
    }else{GameOver();}
  })
  red.click(function(){
    Display(1);
    input_sequence.push(1);
    if(input_sequence[input_sequence.length-1] == generated_sequence[input_sequence.length-1]){
      if (generated_sequence.length == input_sequence.length) {
        setTimeout(function () { StartGame();}, 1500);
      }
    }else{GameOver();}
  })
  yellow.click(function(){
    Display(2);
    input_sequence.push(2);
    if(input_sequence[input_sequence.length-1] == generated_sequence[input_sequence.length-1]){
      if (generated_sequence.length == input_sequence.length) {
        setTimeout(function () { StartGame();}, 1500);
      }
    }else{GameOver();}
  })
  blue.click(function(){
    Display(3);
    input_sequence.push(3);
    if(input_sequence[input_sequence.length-1] == generated_sequence[input_sequence.length-1]){
      if (generated_sequence.length == input_sequence.length) {
        setTimeout(function () { StartGame();}, 1500);
      }
    }else{GameOver();}
  })
  



});
/** Make random buttons glow  */
function StartGame(){
  var random = Math.floor(Math.random()*4);
  generated_sequence.push(random);
  var displayed = generated_sequence[generated_sequence.length-1];
  Display(displayed);
  console.log(generated_sequence);
  level = level + 1;
  document.getElementById("title").innerText = "Level " +level;
  $("#title").text(`Level: ${level}`);
  input_sequence=[];

} 

/* Play game over sound and red background + reset defualts (level and sequence) */
function GameOver() {
  sounds[4].play();
  $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#title").text("Game Over! Press any key to Restart");
  level = 0;
  generated_sequence = [];
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
  
