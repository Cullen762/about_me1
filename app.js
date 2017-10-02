'use strict';
var userPoints = 0;
var user = prompt ('who are you?');

while (!user) {
  user = prompt ('Are you sure you want to leave this box empty? we are the internet we know ALL of your secrets, think about it');
}

alert ('So..its you ' + user + ' we know you ' + user + ' We know everything about you ' );
console.log('The user has entered a name');

//do while loop here, set condition to break loop,!==

//print results on game page.

var question0 = prompt (' Ok ' + user + ' it is time to see if you really took the time to read this. Answer the following questions with yes or no, Y or N. For every question you get right, we will give you 2 points. Do you understand? ').toLowerCase();
if(question0 === 'y') {
  alert ('Right then! ' + user + ' Get your hands out of your pockets and lets do this!');

}else {
  alert('really ' + user + ' ?');
}
console.log('The user has answer question0');

var question1 = prompt ('Was this guy born in Canada?').toLowerCase();
if(question1 === 'n'){
  document.write('test');

  alert('Correct! ' + user + ' You get two points');
  userPoints++;

}else{
  alert ('C\'est Faux! (WRONG!) ' + user + ' You lose 2! that is 2! points!!!');
}

console.log('The user has answered question1');

var question2 = prompt ('Does Tim have a dog?').toLowerCase();
if(question2 === 'y'){
  alert ('Nope! he has two cats and they are both AWESOME!...');
  userPoints++;
}else {
  alert('correct he has cats, awesome cats! yes you get 2 points');

}
console.log('The user has answer question2');

var question3 = prompt ('Does Tim prefer Asian cuisine?').toLowerCase();
if(question3 === 'y'){
  alert ('Thats right, he loves stuffing his face with all manner of dumplings,lumpia,bahn mi,ramen, curry and masala...2 points!');
  userPoints++;
}else{
  alert('Nope you are wrong ' + user + ' very wrong');
}
console.log('The user has answer question3');

var question4 = prompt ('Is he married?').toLowerCase();
if(question4 === 'y'){
  alert ('Thats right! he is happily married to a sugarliscious super fox!' + user + ' You get 2 points');
  userPoints++;
}else {
  alert(user + ' you dissapoint us, you really do');
}
console.log('The user has answer question4');

var question5 = prompt ('Would you buy Tim a nice hoppy pint?').toLowerCase();
if(question5 === 'y'){
  alert ('Hey Buddy!, you just won the game!!');
  userPoints + 1000;
}else {
  alert('What are you some kind of fascist? '); //minus 2 points
}
console.log('The user has answer question5');

// set a for loop
var question6 = prompt ('what is my favorite number (hint pick between-20 and 25)');

if(question6 === '23'){
  alert ('Wow! you actually paid attention!');
  userPoints++;
}else {
  alert('nope it is 23 ');
}
//hung up on number 7 will refactor later
console.log('The user has answer question6');

var biers = [ 'ipa','stout','lambic','porter','Belgian','braggot'];
var guesses = 6;

var question7 = prompt (' Tim, loves beer can you guess his favorite style?');
var isCorrect = false; //flag
while(!isCorrect && guesses > 0 ){

  for(var i = 0; i < biers.length; i++){
    if(question7 === biers[i]){
      isCorrect = true;

    }
  }
  if(isCorrect === true){
    alert ('You got it!');
    document.write('another test');
  }else{
    question7 = prompt ('No Soup For You!');
    guesses--;
  }
}
