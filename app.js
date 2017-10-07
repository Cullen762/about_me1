'use strict';
//wrap in a function
// maybe put everything in an array, have the function call it. use an IFFY

//"Minus two points. The first 5 questions if you answer with a "yes" or "no" I don't get the appropriate responses. Question 7 if I answer with IPA or Ipa, I still get it wrong. You can make corrections and resubmit for full credit. These are simple mistakes and I can guide you through them on Saturday if you would like!
//Justin Green , Oct 5 at 4:05pm"

var right = +1;
var userPoints = 0;
var user = prompt ('Who are you?');
//sort out points, try to get it to return the number correct or wrong, maybe use document.write(''); ?
while (!user) {
  user = prompt ('Are you sure you want to leave this box empty?');
}

alert ('So..its you ' + user + ' we know you ' + user + ' We know all about you ' );
console.log('the user is called' + user );

// How to print points into an array?
// print results on game page.

//Question 0
var q0 = function(){
  var question0 = prompt (' Ok ' + user + ' Answer the following questions with "yes" or "no"  Do you understand? ').toLowerCase();

  if(question0 === 'y' || 'yes') { //this keeps returning the same value, needs to be fixed
    alert ('Right then! ' + user + ' Get your hands out of your pockets and lets do this!');

  }else {
    alert('Really ' + user + ' ?');
    //function that prints something cheeky?
  }
  console.log('The user has answer question0');
};
q0();

//question1
var question1 = prompt ('Was this guy born in Canada?').toLowerCase();
if(question1 === 'no'){
  alert ('So you were paying attention')

}else{
  alert ('Non! C\'est faux! il est de Etats Unis!');
}

console.log('The user has answered question1 with:' + question1);

//question2
var question2 = prompt ('Does Tim have a dog?').toLowerCase();
if(question2 === 'yes'){
  alert ('Nope! he has two cats and they are both AWESOME!...');

}else {
  alert('correct he has cats, awesome cats!, super cats! they are tremendously wonderful cats, everyone agrees');

}
console.log('The user has answer question2 with: ' + question2);

//Question 3
var question3 = prompt ('Does Tim prefer Asian cuisine?').toLowerCase();
if(question3 === 'yes'){
  alert ('Thats right, he loves stuffing his face with all manner of dumplings, lumpia, bahn mi,   ramen, curry and masala!');
  userPoints++;
}else{
  alert('Nope you are wrong ' + user + ' very wrong');
}
console.log('The user has answer question3 with: ' + question3);

//Question 4
var question4 = prompt ('Is he married?').toLowerCase();
if(question4 === 'yes'){
  alert ('Thats right! he is happily married to a sugarliscious super fox!' + user + ' You get a point');
  userPoints++;
}else {
  alert(user + ' you dissapoint us, you really do');
}
console.log('The user has answer question4 with: ' + question4);

//Question5
var question5 = prompt ('Would you buy Tim a nice hoppy pint?').toLowerCase();
if(question5 === 'yes'){
  alert ('Hey Buddy!');
  userPoints ++;
}else {
  alert('What are you some kind of fascist? '); //minus 2 points
}
console.log('The user has answer question5 with: ' + question5);

// set a for loop
//question6  (still needs 4 trys added)
var question6 = prompt ('what is my favorite number (hint pick between-20 and 25)');

if(question6 === '23'){
  alert ('Wow! you actually paid attention!');
  userPoints++;
}else {
  alert('nope it is 23 ');
}
console.log('The user has answer question6 with: ' + question6);

//hung up on number 7 will refactor later
//question7
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
console.log('The user has answer question6 with: ' + question7);
console.log('finsished with: ' + userPoints);
alert ('Right then! ' + user + ' You finished with' + userPoints + ' points.');
