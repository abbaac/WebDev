buttonColours = ["red", "blue", "green", "yellow"]
gamePattern = []
userClickedPattern = []

var startGame = false
var gameLevel = 0

$(document).keypress(function() {
    if (!startGame){
        nextSequence()
        startGame = true
        $("#level-title").text("Level 1")
    }
  });

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour)
    
    playSound(userChosenColour)
    animatePress(userChosenColour)

    checkAnswer(userClickedPattern.length-1)
})

function nextSequence() {
    userClickedPattern = []
    var randomNumber = Math.round(Math.random() * 3)

    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100)
    playSound(randomChosenColour)
    animatePress(randomChosenColour)
    gameLevel++
    $("#level-title").text("Level " + gameLevel)

}

function playSound(name) {
    var sound = new Audio("sounds/" + name + ".mp3")
    sound.play()

}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed")
    setTimeout(() => {
        $("#" + currentColour).removeClass("pressed")
    }, 100);;
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success")
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(() => {
                nextSequence()
            }, 1000);
        }
    }else{
        playSound("wrong")
        $("body").addClass("game-over")
        setTimeout(() => {
            $("body").removeClass("game-over")
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver()
    }
}

function startOver() {
    gameLevel = 0
    gamePattern = []    
    startGame = false
}