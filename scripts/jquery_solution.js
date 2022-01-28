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
var yellow = $("#yellow");


/* array of audio files */
const sounds = [green_sound, red_sound, yellow_sound, blue_sound, wrong_sound];


var generated_sequence = [];
var input_sequence = [];
var level = 0;
game_on = false;

/* Game Starts on keyboard press */
$(document).on("keydown", function (event) {
  if (game_on == false) {
    game_on = true;
    StartGame();
    /** Onclick call Display with parameter */
    green.click(function () {
      Display(0);
      input_sequence.push(0);
      checkInput(0);
    })
    red.click(function () {
      Display(1);
      input_sequence.push(1);
      checkInput(1);
    })
    yellow.click(function () {
      Display(2);
      input_sequence.push(2);
      checkInput(2)
    })
    blue.click(function () {
      Display(3);
      input_sequence.push(3);
      checkInput(3);
    })

  }




});
/** Make random buttons glow  */
function StartGame() {
  var random = Math.floor(Math.random() * 4);
  generated_sequence.push(random);
  var displayed = generated_sequence[generated_sequence.length - 1];
  GenFade(displayed);
  console.log(generated_sequence);
  level = level + 1;
  document.getElementById("title").innerText = "Level " + level;
  $("#title").text(`Level: ${level}`);
  input_sequence = [];

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
  game_on = fasle;
}

function GenFade(index) {
  if (index == 0) {
    sounds[0].play();
    green.style.opacity = 0;
    setTimeout(function () {
      green.style.opacity = 1;
    }, 200);


  } else if (index == 1) {
    sounds[1].play();
    red.style.opacity = 0;
    setTimeout(function () {
      red.style.opacity = 1;
    }, 200);


  } else if (index == 2) {
    sounds[2].play();
    yellow.style.opacity = 0;
    setTimeout(function () {
      yellow.style.opacity = 1;
    }, 200);


  } else if (index == 3) {
    sounds[3].play();
    blue.style.opacity = 0;
    setTimeout(function () {
      blue.style.opacity = 1;
    }, 200);
  }
}

function Display(index) {
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
function checkInput(index) {
  if (generated_sequence[index] == input_sequence[index]) {
    if (input_sequence.length == generated_sequence.length) {
      setTimeout(function() {
        StartGame();
      }, 1000);
    }
  } else {
    GameOver();
  }
}
