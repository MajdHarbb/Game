// Add event listener on keydown
document.addEventListener('keydown', (event) => {
  startgame();
}, false);

function startgame(){
  var blue_sound = new Audio("sounds/blue.mp3");
    var green_sound = new Audio("sounds/green.mp3");
    var red_sound = new Audio("sounds/red.mp3");
    var wrong_sound = new Audio("sounds/wrong.mp3");
    var yellow_sound = new Audio("sounds/yellow.mp3");
    
    const colors = [blue_sound,green_sound,red_sound,yellow_sound,wrong_sound];

    var random = Math.floor(Math.random()*4+1);
    
    console.log(colors[random]);
    colors[0].play();
    colors[4].play();
}