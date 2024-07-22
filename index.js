var userClickedPattern = [];
var gamePattern = [];
level = 0;
var started = false;
var buttonColors = ["red","green","blue","yellow"];
function nextSequence(){
    userClickedPattern = [];
    $("#level-title").text("Level " + level);
var random = Math.floor(Math.random()*4 + 1);
var choosenColor = buttonColors[random-1];
gamePattern.push(choosenColor);
$("."+choosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
var audio = new Audio ("sounds/"+choosenColor+".mp3");
audio.play();
level = level+1;
console.log(gamePattern);
}

// $("."+choosenColor).fad();
$("div .btn").on("click" , function(){
    var userChoosenColor = $(this).attr("id");
    $("."+userChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    userClickedPattern.push(userChoosenColor);
    playSound(userChoosenColor);
    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length-1);
    
});
function playSound(colorname){
    this.colorname = colorname;
    switch (colorname){
        case "green":
            var audio = new Audio ("sounds/"+colorname+".mp3");
            audio.play(); 
            break;
        case "red":
            var audio = new Audio ("sounds/"+colorname+".mp3");
            audio.play();
            break;
        case "blue":
            var audio = new Audio ("sounds/"+colorname+".mp3");
            audio.play();
            break;
        case "yellow":
            var audio = new Audio ("sounds/"+colorname+".mp3");
            audio.play();
            break;
    }
}
//game started

$(document).on("keypress" , function(){
    if (!started == true){
         $("#level-title").text("level " + level);
         nextSequence();
         started = true;
    }
});


function checkAnswer(currentLevel){
if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if(gamePattern.length === userClickedPattern.length){
       console.log("succes");
        setTimeout(nextSequence , 1000);
    }
}
else{
    console.log("fail")
    userClickedPattern = [];
    $("#level-title").text("Game Over , press any key to restart");
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over")},200);
    var audio= new Audio("sounds/wrong.mp3");
    audio.play();
    startover();
}
}

function startover(){
    started = false;
    gamePattern = [];
    level = 0;
}