
var buttonColors=["red","blue","green","yellow"];

var gamePattern=[];

var userClickedPattern=[];

var started=false;

var level=0;

if (window.innerWidth < 768) {
    document.addEventListener("touchstart", function () {
        if (!started) startGame();
    }, { once: true });
}

$(".bstart").click(function()
{
    if(!started)
        {
            $("#level-title").text("Level "+level);
            nextSequence();
            started=true;
        }

})


// $(document).keydown(function()
// {
//     if(!started)
//     {
//         $("#level-title").text("Level "+level);
//         nextSequence();
//         started=true;
//     }
    
// });


$(".btn").click(function()
{
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    //console.log(userClickedPattern);
    
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);


});

function checkAnswer(currentLevel)
{
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
    {
        console.log("success");

        if(userClickedPattern.length===gamePattern.length)
        {
            setTimeout(function()
            {
                nextSequence();
            },1000);
        }
    }
    else{
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function()
        {
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Refresh Page to Restart");
        startOver();
    }
}

function nextSequence()
{
    userClickedPattern=[];

    level++;

    $("#level-title").text("Level "+level);

    var num=Math.floor(Math.random()*4);

    var randomChosenColor=buttonColors[num];

    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio=new Audio("sounds/"+randomChosenColor+".mp3");
    audio.play();
}

function startOver()
{
    level=0;
    gamePattern=[];
    started=false;
}

function playSound(name)
{
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor)
{
    $("#"+currentColor).addClass("pressed");
    setTimeout(function()
    {
        $("#"+currentColor).removeClass("pressed");
    },100);
}



