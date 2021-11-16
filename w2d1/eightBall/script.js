var answer = document.getElementById("answer");
var ballImg = document.getElementById("ballImg");
var question = document.getElementById("question");

function askQuestion(){
    question.value = "";
    ballImg.src = "img/ballStill.jpg";

    var possibleResponses = [
        "very yes",
        "yes",
        "no",
        "not likely",
        "try again tomorrow",
        "hmmmm not yet",
        "the winds of Saturn don't seem to be in alignment",
        "hahahahaha of course not"
    ];
    
    var randAnswer = possibleResponses[Math.floor(Math.random() * possibleResponses.length)];

    answer.innerText = randAnswer;
}

function shakeBall(){
    if(question.value == ""){
        alert("you have to ask a question!!!");
    }
    else if(question.value == "bye"){
        answer.remove();
    }
    else{
        ballImg.src = "img/ball.gif";
        setTimeout(askQuestion, 1000);
    }
}