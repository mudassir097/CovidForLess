(function() {
  var questions = [{
    question: "Do you experience fever or chills?",
    choices: ['less', 'little' , 'casually' , 'thoughroly', 'high']
   
  }, {
    question: "Do you have cough and sore throught?",
    choices: ['less', 'little' , 'casually' , 'thoughroly', 'high']
  }, {
    question: "Congestion or runny nose?",
    choices: ['less', 'little' , 'casually' , 'thoughroly', 'high']
  }, {
    question: "Do you have Muscle, body aches and Headache?",
    choices: ['less', 'little' , 'casually' , 'thoughroly', 'high']
  },{
   
    question: "Do you have shortness of breath or difficulty breathing?",
    choices: ['less', 'little' , 'casually' , 'thoughroly', 'high']
    
  }, {
    question: "Persistent pain or pressure in the chest?",
    choices: ['less', 'little' , 'casually' , 'thoughroly', 'high']
    
  }, {
    question: "Loss of taste or smell?",
    choices: ['less', 'little' , 'casually' , 'thoughroly', 'high']
  }, {
    question: "Do you have symptoms of fatigue?",
    choices: ['less', 'little' , 'casually' , 'thoughroly', 'high']
  },
   {
    question: "Nausea, vomiting  and Diarrhea?",
    choices: ['less', 'little' , 'casually' , 'thoughroly', 'high']
  }, {
    question: "Inability to wake or stay awake?",
    choices: ['less', 'little' , 'casually' , 'thoughroly', 'high']
  }
  ];
    
    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object
    
    // Display initial question
    displayNext();
    
    // Click handler for the 'next' button
    $('#next').on('click', function (e) {
      e.preventDefault();
      
      // Suspend click listener during fade animation
      if(quiz.is(':animated')) {        
        return false;
      }
      choose();
      
      // If no user selection, progress is stopped
      if (isNaN(selections[questionCounter])) {
        alert('Please make a selection!');
      } else {
        questionCounter++;
        displayNext();
      }
    });
    
    // Click handler for the 'prev' button
    $('#prev').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      choose();
      questionCounter--;
      displayNext();
    });
    
    // Click handler for the 'Start Over' button
    $('#start').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      questionCounter = 0;
      selections = [];
      displayNext();
      $('#start').hide();
    });
    
    // Animates buttons on hover
    $('.button').on('mouseenter', function () {
      $(this).addClass('active');
    });
    $('.button').on('mouseleave', function () {
      $(this).removeClass('active');
    });
    
    // Creates and returns the div that contains the questions and 
    // the answer selections
    function createQuestionElement(index) {
      var qElement = $('<div>', {
        id: 'question'
      });
      
      var header = $( '<h4></h4>');
      qElement.append(header);
      
      var question = $('<p>').append(questions[index].question);
      qElement.append(question);
      
      var radioButtons = createRadios(index);
      qElement.append(radioButtons);
      
      return qElement;
    }
    
    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
      var radioList = $('<ul>');
      var item;
      var input = '';
      for (var i = 0; i < questions[index].choices.length; i++) {
        item = $('<li>');
        input = '<input type="radio" name="answer" value= ' + i + ' />'+' ';
        input += questions[index].choices[i];
        item.append(input);
        radioList.append(item);
      }
      return radioList;
    }
    
    // Reads the user selection and pushes the value to an array
    function choose() {
      selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }
    
    // Displays next requested element
    function displayNext() {
      quiz.fadeOut(function() {
        $('#question').remove();
        
        if(questionCounter < questions.length){
          var nextQuestion = createQuestionElement(questionCounter);
          quiz.append(nextQuestion).fadeIn();
          if (!(isNaN(selections[questionCounter]))) {
            $('input[value='+selections[questionCounter]+']').prop('checked', true);
          }
          
          // Controls display of 'prev' button
          if(questionCounter === 1){
            $('#prev').show();
          } else if(questionCounter === 0){
            
            $('#prev').hide();
            $('#next').show();
          }
        }else {
          var scoreElem = displayScore();
          quiz.append(scoreElem).fadeIn();
          $('#next').hide();
          $('#prev').hide();
          $('#start').show();
        }
      });
    }
    
    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
      var score = $('<p>',{id: 'question'});
      
      var numCorrect = 0;
      for (var i = 0; i < selections.length; i++) {
        // if (selections[i] === questions[i].correctAnswer)
          numCorrect += (selections[i] +1);
         
        
      }
      if( numCorrect <= 20){
        score.append('low symptoms, just take proper precautions.');
        return score;
      }
      else if( numCorrect > 20 && numCorrect <=35){
        score.append('Home quanrantine and concern with your doctor.');
        return score;
      }
      else {
        score.append('immediate hospitalisation is needed');
        return score;

      }
      
    }
  })();