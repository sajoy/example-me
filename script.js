'use strict';

var username = prompt( 'Hi there! What\'s your name?' );
console.log( 'Their name is ' + username );
alert( 'Hello ' + username + '! It\'s nice to meet you. I know we haven\'t met,' 
      + ' but I feel like you know me. Try to guess some facts about me. Ready?' );

var guessOne = prompt( 'Is pink my favorite color?' ).toLowerCase();
console.log( 'pink is my favorite color : ' + username + ' guessed ' + guessOne );
if ( guessOne === 'no' || guessOne === 'n' ) {
    alert( 'Sorry ' + username + '! Pink is my favorite color.' );
} else if ( guessOne === 'yes' || guessOne === 'y' ) {
    alert( 'Yay ' + username + '! You are right. Pink is my favorite color.' );
}

var guessOne = prompt( 'Am I a sports fanatic?' ).toLowerCase();
console.log( 'am i a sports fanatic : ' + username + ' guessed ' + guessTwo );
if ( guessTwo === 'no' || guessTwo === 'n' ) {
    alert( 'Yay ' + username + '! You are 100% right.' );
} else if ( guessTwo === 'yes' || guessTwo === 'y' ) {
    alert( 'Nope ' + username + ', I am not a big sports fan.' );
}

var guessOne = prompt( 'Am I a dog person?' ).toLowerCase();
console.log( 'am i a dog person : ' + username + ' guessed ' + guessOne );
if ( guessOne === 'no' || guessOne === 'n' ) {
    alert( 'Sorry ' + username + '! Pink is my favorite color.' );
} else if ( guessOne === 'yes' || guessOne === 'y' ) {
    alert( 'Yay ' + username + '! You are right. Pink is my favorite color.' );
}

var guessOne = prompt( 'Is pink my favorite color?' ).toLowerCase();
console.log( 'pink is my favorite color : ' + username + ' guessed ' + guessOne );
if ( guessOne === 'no' || guessOne === 'n' ) {
    alert( 'Sorry ' + username + '! Pink is my favorite color.' );
} else if ( guessOne === 'yes' || guessOne === 'y' ) {
    alert( 'Yay ' + username + '! You are right. Pink is my favorite color.' );
}

var guessOne = prompt( 'Is pink my favorite color?' ).toLowerCase();
console.log( 'pink is my favorite color : ' + username + ' guessed ' + guessOne );
if ( guessOne === 'no' || guessOne === 'n' ) {
    alert( 'Sorry ' + username + '! Pink is my favorite color.' );
} else if ( guessOne === 'yes' || guessOne === 'y' ) {
    alert( 'Yay ' + username + '! You are right. Pink is my favorite color.' );
}
