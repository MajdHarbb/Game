var blue_sound = new Audio("sounds/blue.mp3");
var green_sound = new Audio("sounds/green.mp3");
var red_sound = new Audio("sounds/red.mp3");
var wrong_sound = new Audio("sounds/wrong.mp3");
var yellow_sound = new Audio("sounds/yellow.mp3");

const sounds = [blue_sound, green_sound, red_sound, yellow_sound, wrong_sound];

var generated_sequence=[];
var input_sequence=[];


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

function Display(index){
  if(index == 0){
    sounds[0].play();
    document.getElementById("blue").classList.add("pressed");
    setTimeout(function(){
      document.getElementById("blue").classList.remove("pressed");
    },250)
    
  }else if(index == 1){
    sounds[1].play();
    document.getElementById("green").classList.add("pressed");
    setTimeout(function(){
      document.getElementById("green").classList.remove("pressed");
    },250)
  }else if(index == 2){
    sounds[2].play();
    document.getElementById("red").classList.add("pressed");
    setTimeout(function(){
      document.getElementById("red").classList.remove("pressed");
    },250)
  }else if(index == 3){
    sounds[3].play();
    document.getElementById("yellow").classList.add("pressed");
    setTimeout(function(){
      document.getElementById("yellow").classList.remove("pressed");
    },250)
  }
}
