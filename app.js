'use strict';
var user = prompt ('who are you?');
alert ('So..its you ' + user + ' we know you ' + user + ' we are the internet we know everything about you and your uh preferences' );
console.log('The user has entered a name');

var question0 = prompt ('Lets play a game. Answer the following questions with Y/N Do you understand? ').toLowerCase();
if(question0 === 'y') {
  alert ('Right then! ' + user + ' lets do this!');
}else {
  alert('really? ' + user);
}
console.log('The user has answer question0');

var question1 = prompt ('Was this guy born in Canada?').toLowerCase();
if(question1 === 'n'){
  alert('Correct!');
}else {
  alert ('C\'est Faux! (WRONG!) ' + user);
}
console.log('The user has answered question1');

var question2 = prompt ('Does Tim have a dog?').toLowerCase();
if(question2 === 'y'){
  alert ('Nope! he has two cats and they are both AWESOME!');
}else {
  alert('congrats ' + user + ' You actually got that right');

}
console.log('The user has answer question2');

var question3 = prompt ('Does Tim prefer Asian cuisine?').toLowerCase();
if(question3 === 'y'){
  alert ('Thats right, he loves stuffing his face with all manner of dumplings,lumpia,bahn mi,ramen, curry and masala');
}else{
  alert('Nope you are wrong ' + user + ' very wrong');
}
console.log('The user has answer question3');

var question4 = prompt ('Is he married?').toLowerCase();
if(question4 === 'y'){
  alert ('Thats right! he is happily married to a sugarliscious super fox!');
}else {
  alert(user + ' you dissapoint us, you really do');
}
console.log('The user has answer question4');

var question5 = prompt ('Would you buy Tim a nice hoppy pint?').toLowerCase();
if(question5 === 'y'){
  alert ('Hey Buddy!');
}else {
  alert('What are you some kind of fascist? '); //minus 2 points
}
console.log('The user has answer question5');
