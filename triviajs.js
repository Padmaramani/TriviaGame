

    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var questionList = [{
        "question": "what is the capital of California?",
        "choice1": "San Diego",
        "choice2": "Los Angeles",
        "choice3": "San Francisco",
        "choice4": "Sacremento",
        "answer": "Sacremento"    
},
    {
        "question": "what is the capital of USA?",
        "choice1": "New York",
        "choice2": "Los Angeles",
        "choice3": "Washington DC",
        "choice4": "Boston",
        "answer": "Washington"
    },
    {
        "question": "what is the capital of Texas?",
        "choice1": "Austin",
        "choice2": "Houston",
        "choice3": "Dallas",
        "choice4": "San Antonio",
        "answer": "Austin"
    },
    {
        "question": "what is the capital of Oregon?",
        "choice1": "Portland",
        "choice2": "Salem",
        "choice3": "Eugene",
        "choice4": "Bend",
        "answer": "Salem"
    },
    {        
"question": "what is the capital of Washington?",
        "choice1": "Seattle",
        "choice2": "Spokane",
        "choice3": "Redmond",
        "choice4": "Olympia",
        "answer": "Olympia"
    },
    {        
"question": "what is the capital of Nevada?",
        "choice1": "Reno",
        "choice2": "Las Vegas",
        "choice3": "Carson City",
        "choice4": "Henderson",
        "answer": "Carson City"
    },
    {
        "question": "what is the capital of Utah?",
        "choice1": "Logan",
        "choice2": "Moab",
        "choice3": "Salt Lake City",
        "choice4": "Provo",
        "answer": "Salt Lake City"
    },
    {
        "question": "what is the capital of Georgia?",
        "choice1": "Atlanta",
        "choice2": "Savannah",
        "choice3": "Augusta",
        "choice4": "Alpharetta",
        "answer": "Atlanta"
    },
    {        
        "question": "what is the capital of illinois?",
        "choice1": "Chicago",
        "choice2": "Springfield",
        "choice3": "Peoria",
        "choice4": "Rockford",
        "answer": "Springfield"
    },
    {
        "question": "what is the capital of New York?",
        "choice1": "New York",
        "choice2": "Bronx",
        "choice3": "Kingston",
        "choice4": "Albany",
        "answer": "Albany"      
}

    ];

    var number = 60;
    var intervalId;
    function run() {
      number = 60;
      console.log("I am inside run function") ; 
      if (intervalId) {
        return;
      }
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#remainingtime").html("<h2>" + number + "</h2>")

      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();
        nextScreen();

        //  Alert the user that time is up.
        alert("Time is Up!");
      }
    }

    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
      intervalId = null
      
    }

    function nextScreen() {
    
              $('#correctCount').hide();
              $('#incorrectCount').hide();
              $('#mainHeader').show();
              $('#playAgain').hide();
              $('#startGame').show(); 
              $("#explntext").show();
              $("#secondContainer").hide();
              $("counddown").hide();
              $("#remainingtime").hide();
              
            }

    
    $("#startGame").on("click", function () {
        var i=0;
        console.log("I am insde startgame");
        run();
        $('#mainHeader').hide();
        $('#startGame').hide(); 
        $("#explntext").hide();
        $("#secondContainer").show();
        $('#rad00').show();
        $('#rad10').show();
        $('#rad20').show();
        $('#rad30').show();
        $('#rad01').show();
        $('#rad11').show();
        $('#rad21').show();
        $('#rad31').show();
        $('#rad02').show();
        $('#rad12').show();
        $('#rad22').show();
        $('#rad32').show();
        $('#rad03').show();
        $('#rad13').show();
        $('#rad23').show();
        $('#rad33').show();
        $('#rad04').show();
        $('#rad14').show();
        $('#rad24').show();
        $('#rad34').show();
        $('#rad05').show();
        $('#rad15').show();
        $('#rad25').show();
        $('#rad35').show();
        $('#rad06').show();
        $('#rad16').show();
        $('#rad26').show();
        $('#rad36').show();
        $('#rad07').show();
        $('#rad17').show();
        $('#rad27').show();
        $('#rad37').show();
        $('#rad08').show();
        $('#rad18').show();
        $('#rad28').show();
        $('#rad38').show();
        $('#rad09').show();
        $('#rad19').show();
        $('#rad29').show();
        $('#rad39').show();
        $('#submitAnswers').show();
        $("countdown").show();

      

        for (i = 0; i < questionList.length; i++) {
            console.log("insdie the for loop"+i);
            var questionDiv = document.getElementById("questionLine" + i);
            questionDiv.innerHTML = questionList[i].question;
            console.log(questionDiv.innerHTML);

            var choice1Div = document.getElementById("radio0" + i);
            choice1Div.innerHTML = questionList[i].choice1;
            console.log(choice1Div.innerHTML);

            var choice2Div = document.getElementById("radio1" + i);
            choice2Div.innerHTML = questionList[i].choice2;

            var choice3Div = document.getElementById("radio2" + i);
            choice3Div.innerHTML = questionList[i].choice3;

            var choice4Div = document.getElementById("radio3" + i);
            choice4Div.innerHTML = questionList[i].choice4;
        };        
    });

    $("#submitAnswers").on("click", function () {
         stop()
        $("#secondContainer").hide();
        $('#submitAnswers').hide();
        $('#correctCount').show();
        $('#incorrectCount').show();
        $('#playAgain').show();
        
    var  question0Answer = $("input[name='optradio0']:checked").val();
    console.log(question0Answer);
    if (question0Answer == "correct")
    {correctAnswer=correctAnswer+1}
    else
    {incorrectAnswer=incorrectAnswer+1};
   var  question1Answer = $("input[name='optradio1']:checked").val();
   console.log(question1Answer);
   if (question1Answer == "correct")
    {correctAnswer=correctAnswer+1}
    else
    {incorrectAnswer=incorrectAnswer+1};
   var  question2Answer = $("input[name='optradio2']:checked").val();
   console.log(question2Answer);
   if (question2Answer == "correct")
    {correctAnswer=correctAnswer+1}
    else
    {incorrectAnswer=incorrectAnswer+1};
   var  question3Answer = $("input[name='optradio3']:checked").val();
    console.log(question3Answer);
    if (question3Answer == "correct")
    {correctAnswer=correctAnswer+1}
    else
    {incorrectAnswer=incorrectAnswer+1};
    var  question4Answer = $("input[name='optradio4']:checked").val();
    console.log(question4Answer);
    if (question0Answer =="correct")
    {correctAnswer=correctAnswer+1}
    else
    {incorrectAnswer=incorrectAnswer+1};
    var  question5Answer = $("input[name='optradio5']:checked").val();
    console.log(question5Answer);
    if (question5Answer == "correct")
    {correctAnswer=correctAnswer+1}
    else
    {incorrectAnswer=incorrectAnswer+1};
    var  question6Answer = $("input[name='optradio6']:checked").val();
    console.log(question6Answer);
    if (question0Answer == "correct")
    {correctAnswer=correctAnswer+1}
    else
    {incorrectAnswer=incorrectAnswer+1};
    var  question7Answer = $("input[name='optradio7']:checked").val();
    console.log(question7Answer);
    if (question0Answer == "correct")
    {correctAnswer=correctAnswer+1}
    else
    {incorrectAnswer=incorrectAnswer+1};
    var  question8Answer = $("input[name='optradio8']:checked").val();
    console.log(question8Answer);
    if (question0Answer =="correct")
    {correctAnswer=correctAnswer+1}
    else
    {incorrectAnswer=incorrectAnswer+1};
    var  question9Answer = $("input[name='optradio9']:checked").val();
    console.log(question9Answer);
    if (question0Answer == "correct")
    {correctAnswer=correctAnswer+1}
    else
    {incorrectAnswer=incorrectAnswer+1};
    console.log(correctAnswer);
    console.log(incorrectAnswer);

    $("#correctCount").html("<h3>The total number of correct answers are: </h3>"+correctAnswer);

$("#incorrectCount").html("<h3>The total number of incorrect answers are: </h3>"+incorrectAnswer);
});

$("#playAgain").on("click", function () {
    $('#correctCount').hide();
    $('#incorrectCount').hide();
    $('#mainHeader').show();
    $('#playAgain').hide();
        $('#startGame').show(); 
        $("#explntext").show();
        $("#submitAnswers").hide();
});




