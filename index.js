$(document).on("click touchstart", function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

// Also restart the game when clicking after game over
$(document).on("click touchstart", function () {
    if (!started) {
        startOver();
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});
