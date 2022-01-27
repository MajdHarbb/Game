/* store sounds in vars */
var blue_sound = new Audio("sounds/blue.mp3");
var green_sound = new Audio("sounds/green.mp3");
var red_sound = new Audio("sounds/red.mp3");
var wrong_sound = new Audio("sounds/wrong.mp3");
var yellow_sound = new Audio("sounds/yellow.mp3");

/* store buttons' ID's vars */
var blue = document.getElementById("blue");
var green = document.getElementById("green");
var red = document.getElementById("red");
var yellow = document.getElementById("yellow");

/* array of audio files */
const sounds = [green_sound, red_sound, yellow_sound, blue_sound, wrong_sound];


var generated_sequence = [];
var input_sequence = [];
var level = 0;


/* Game Starts on keyboard press */
document.addEventListener("keydown", (event) => {
  
  StartGame();
  
  ButtonsClick();
});

/* Generate random number, push it to sequence array, and make the button with the matching index blink */
function StartGame() {
  var random = Math.floor(Math.random() * 4);
  generated_sequence.push(random);
  var displayed = generated_sequence[generated_sequence.length-1];
  Display(displayed);
  console.log(generated_sequence);
  level = level + 1;
  document.getElementById("title").innerText = "Level " +level;
  input_sequence=[];

}

/* Buttons animation and sound effects */
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


/* Play "wrong" sound, reset level and sequence array */
function GameOver() {

  sounds[4].play();
  generated_sequence = [];
  level = 0;
  document.body.classList.add("game-over");
    setTimeout(function () {
      document.body.classList.remove("game-over");
    }, 200);
  document.getElementById("title").innerText= "Game Over! Press Any Key to Restart";

}

/* Onclick --> button's index to input array and display blinking and sound effects
           --> compares between the input sequence and the generated one
               if both are equal --> generate new one and start new level
               if not --> game over
*/
function ButtonsClick() {
  green.addEventListener("click", function () {
    input_sequence.push(0);
    Display(0);
    
    if(generated_sequence[input_sequence.length-1] == input_sequence[input_sequence.length-1]){
      if (generated_sequence.length == input_sequence.length) {
        console.log(input_sequence);
        setTimeout(function () { StartGame();}, 1500);
      }
    }else{GameOver();}
    
  });

  red.addEventListener("click", function () {
    input_sequence.push(1);
    Display(1);
    if( generated_sequence[input_sequence.length-1] == input_sequence[input_sequence.length-1]){
      if (generated_sequence.length == input_sequence.length) {
        console.log(input_sequence);
        setTimeout(function () { StartGame();}, 1500);
      }
    }else{GameOver();}
  });

  yellow.addEventListener("click", function () {
    input_sequence.push(2);
    Display(2);
    if(generated_sequence[input_sequence.length-1] == input_sequence[input_sequence.length-1]){
      if (generated_sequence.length == input_sequence.length) {
        console.log(input_sequence);
        setTimeout(function () { StartGame();}, 1500);
      }
    }else{GameOver();}
  });

  blue.addEventListener("click", function () {
    input_sequence.push(3);
    Display(3);
    if(generated_sequence[input_sequence.length-1] == input_sequence[input_sequence.length-1]){
      if (generated_sequence.length == input_sequence.length) {
        console.log(input_sequence);
        setTimeout(function () { StartGame();}, 1500);
      }
    }else{GameOver();}
  });
  
}







