'use strict';
//wrap in a function
// maybe put everything in an array, have the function call it. use an IFFY

//"Minus two points. The first 5 questions if you answer with a "yes" or "no" I don't get the appropriate responses. Question 7 if I answer with IPA or Ipa, I still get it wrong. You can make corrections and resubmit for full credit. These are simple mistakes and I can guide you through them on Saturday if you would like!
//Justin Green , Oct 5 at 4:05pm"
var userPoints = 0;
var user = prompt ('Who are you?');
// while loop keeps user from ignoring prompt, forces them to enter a value.
while (!user) {
  user = prompt ('Are you sure you want to leave this box empty?');
}

alert ('So..its you ' + user + ' we know you ' + user + ' We know all about you ' );
console.log('the user is called' + user );
// question0 this is a give me question asking user if they understand the instructions.
var question0 = function(){
  var question0 = prompt (' Ok ' + user + ' Answer the following questions with "yes" or "no"  Do you understand? ').toLowerCase();

  if(question0 ==='yes') {
    alert ('Right then! ' + user + ' Get your hands out of your pockets and lets do this!');
  }else {
    alert('Really ' + user + ' ?');
  }
};

console.log('The user has answer question0');
question0();

//question 1
var question1 = function(){
  var question1 = prompt ('Was this guy born in Canada?').toLowerCase();
  if(question1 === 'no'){
    alert ('So you were paying attention');
  }else{
    alert ('Non! C\'est faux! il est de Etats Unis!');

  }
};
console.log('The user has answered question1');
question1();

//question 2
var question2 = function(){
  var question2 = prompt ('Does Tim have a dog?').toLowerCase();
  if(question2 === 'yes'){
    alert ('Nope! he has two cats and they are both AWESOME!...');

  }else{
    alert('correct he has cats,they are tremendously AWESOME cats, everyone agrees');

  }
};
question2();
console.log('The user has answer question2');

//question 3
var question3 = function(){
  var question3 = prompt ('Does Tim prefer Asian cuisine?').toLowerCase();
  if(question3 === 'yes'){
    alert ('Thats right, he loves stuffing his face with all manner of dumplings, lumpia, bahn mi,   ramen, curry and masala!');
    userPoints++;
  }else{
    alert('Nope you are wrong ' + user + ' very wrong');
  }
};
question3();
console.log('The user has answer question3');

//question 4
var question4 = function(){
  var question4 = prompt ('Is he married?').toLowerCase();
  if(question4 === 'yes'){
    alert ('Thats right! he is happily married to a sugarliscious super fox!' + user + ' You get 2 points');
    userPoints++;
  }else {
    alert(user + ' you dissapoint us, you really do');
  }
};
question4();
console.log('The user has answer question4');

//question 5
var question5 = function(){
  var question5 = prompt ('Would you buy Tim a nice hoppy pint?').toLowerCase();
  if(question5 === 'yes'){
    alert ('Hey Buddy!');
    userPoints ++;
  }else {
    alert('What are you some kind of fascist? ');
  }
};
question5();
console.log('The user has answer question5');

// question 6  set a for loop to give the user 4 tries
var question6 = function(){
  var question6 = prompt ('what is my favorite number (hint pick between-20 and 25)');
  for(var i = 0; i < 3; i++)
    if(question6 === '23'){
      alert ('thats right 23!');
      userPoints++;
    }else{
      var attempts = prompt('nope you have tried this ' + attempts + 'times, try again');
      attempts ++;
    }
};
question6();
console.log('The user has answer question6');

var question7 = function(){
  var biers = [ 'ipa','stout','lambic','porter','belgian','braggot'];
  var guesses = 6;

  var question7 = prompt (' Tim, loves beer can you guess his favorite style?').toLowerCase();
  var isCorrect = false; //flag
  while(!isCorrect && guesses > 0 ){

    for(var i = 0; i < biers.length; i++){
      if(question7 === biers[i]){
        isCorrect = true;

      }
    }
    if(isCorrect === true){
      alert ('You got it!');
    }else{
      question7 = prompt ('No Soup For You!');
      guesses--;
    }
  }
};
question7();
alert ('Congradulations you completed the game  ' + user + ' You have earned ' + userPoints + ' points that is sort of ok');
console.log('user has completed the game');
