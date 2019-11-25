var portItems = [
    wordGuess = {
        name: "HangMan Game",
        url: "https://lucasaho.github.io/Word-Guess-Game/",
        lesson: "javascript"
    }, 
    crystalCollect = {
        name: "Crystal Collector",
        url: "https://lucasaho.github.io/unit-4-game/",
        lesson: "jQuery"
    }, 
    triviaGame = {
        name: "Animal Trivia Game",
        url: "https://lucasaho.github.io/TriviaGame/",
        lesson: "javascript timekeeping"
    }, 
    giphyAPI = {
        name: "Giphy API",
        url: "https://lucasaho.github.io/Giphy-Week-Six/",
        lesson: "API implementation"
    }, 
    trainSchedule = {
        name: "Train Scheduler",
        url: "https://lucasaho.github.io/Train-Scheduler/",
        lesson: "Firebase and data storage"
    },
    project1 = {
        name: "Colorado Ski and Board Report",
        url: "https://lucasaho.github.io/Project1/",
        lesson: "Team management and combining skills"
    }
]
portItems.forEach(function(element){
    var halfCol = "<div class='col-5 m-2 pb-5 border border-white'>";
    var portDiv = "<div id='portDiv'>";
    var portHead = "<h2 class='text-center'>" + element.name + "</h2>"
    var portP = "<p>Project built proficiency in " + element.lesson + "</p>"
    $("#portBlock").append(halfCol + portDiv + portHead + portP + "</div></div>")
});
