var questions = [{
      q: "What was bought with the first online e-commerce transaction",
      o: [
          "Insurance",
          "Bottled Air",
          "Marijuana",
          "Women's Fashion"
      ],
      a: 'C',
      u: ''
  }, {
      q: "What country grows the most amount of Cannabis in the world?",
      o: [
          "United States",
          "Paraguay",
          "Jamaica",
          "Mexico"
      ],
      a: 'D',
      u: ''
  }, {
      q: "The first recorded use of Cannabis happened in ______ more than 4,700 years ago",
      o: [
          "Texas",
          "China",
          "Mesopotamia",
          "Prussia"
      ],
      a: 'B',
      u: ''
  }, {
      q: "Experts estimate that legalizing Cannabis would generate _______ dollars in tax revenue annually",
      o: [
          "54.2 million",
          "54.2 billion",
          "8.7 billion",
          "8.7 million"
      ],
      a: 'C',
      u: ''
  }, {
      q: "Who bought weed from Snoop Dog in high school before either of them were famous?",
      o: [
          "Cameron Diaz",
          "Kanye West",
          "Woody Allen",
          "Beyonce"
      ],
      a: 'A',
      u: ''
  }
];

$('#restart').hide();

var a = 1;

var num = -1;
var rights = 0;
var wrongs = 0;

var counter;
var counter_answer;

$(document).ready(function() {
  $('#start').click(function() {
      addQuestion();
      $(this).hide();
      $('#box').css('visibility', 'visible');
  });

  $('.opt').click(function() {
      questions[num].u = $(this).attr('opt');
      if($(this).attr('opt') === questions[num].a) {
          $('#result').html("Right answer!");
          $('#result').show();
          counter_answer = setInterval(addQuestion, 2000);
          clearInterval(counter);
          rights++;
      } else {
          $('#result').html("Wrong answer! The right one is: (" + questions[num].a + ")<br />Continue with the next question.");
          $('#result').show();
          counter_answer = setInterval(addQuestion, 2000);
          clearInterval(counter);
          wrongs++;
      }
  });

  $('#restart').click(function() {
      num = -1;
      rights = 0;
      wrongs = 0;
      clearInterval(counter);
      clearInterval(counter_answer);
      addQuestion();
      $(this).hide();
  });
});

function addQuestion() {
  clearInterval(counter_answer);
  $('#result').hide();

  num++;
  if(num < questions.length) {
      $('#question').text(questions[num].q);
      $('#opt1').text("A) " + questions[num].o[0]);
      $('#opt2').text("B) " + questions[num].o[1]);
      $('#opt3').text("C) " + questions[num].o[2]);
      $('#opt4').text("D) " + questions[num].o[3]);

      counter = setInterval(timeUp, 10000);
  } else {
      $('#result').html("Game Over<br />Right answers: " + rights + "<br />Wrong answers: " + wrongs);
      $('#result').show();
      $('#restart').show();
  }
}

function timeUp() {
  $('#result').html("Too Slow! The right answer is: (" + questions[num].a + ")");
  $('#result').show();
  counter_answer = setInterval(addQuestion, 2000);
  clearInterval(counter);
  wrongs++;
}
