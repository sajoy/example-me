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

var guessTwo = prompt( 'Am I a sports fanatic?' ).toLowerCase();
console.log( 'am i a sports fanatic : ' + username + ' guessed ' + guessTwo );
if ( guessTwo === 'no' || guessTwo === 'n' ) {
    alert( 'Yay ' + username + '! You are 100% right.' );
} else if ( guessTwo === 'yes' || guessTwo === 'y' ) {
    alert( 'Nope ' + username + ', I am not a big sports fan.' );
}

var guessThree = prompt( 'Am I a dog person?' ).toLowerCase();
console.log( 'am i a dog person : ' + username + ' guessed ' + guessThree );
if ( guessThree === 'no' || guessThree === 'n' ) {
    alert( 'That\'s right ' + username + '! I am def a cat person.' );
} else if ( guessThree === 'yes' || guessThree === 'y' ) {
    alert( 'Sorry ' + username + ', I prefer cats.' );
}

var guessFour = prompt( 'Do I like to write?' ).toLowerCase();
console.log( 'do i like to write : ' + username + ' guessed ' + guessFour );
if ( guessFour === 'no' || guessFour === 'n' ) {
    alert( 'Sorry ' + username + '! I like it so much I majored in it.' );
} else if ( guessFour === 'yes' || guessFour === 'y' ) {
    alert( 'Yay ' + username + '! You are right. I <3 writing.' );
}

var guessFive = prompt( 'Do I like pizza?' ).toLowerCase();
console.log( 'like pizza : ' + username + ' guessed ' + guessFive );
if ( guessFive === 'no' || guessFive === 'n' ) {
    alert( '....' + username + '.... who doesn\'t like pizza? WRONG.' );
} else if ( guessFive === 'yes' || guessFive === 'y' ) {
    alert( 'Of course ' + username + '! Give me a slice of Hawaiian, please.' );
}


var totalGuesses = 4;
do {
    var numberGuess = parseInt( prompt( 'Okay, ' + username + ', guess how many years I have lived overseas.' ));
    console.log( 'number of years I lived overseas :' + username + ' guessed ' + numberGuess + ' years.' );
    totalGuesses--;

    if ( numberGuess === 3 ) {
        alert( 'That\'s right!!! I lived in the Philippines for 3 years.' );
        totalGuesses = 0;
    } else if ( numberGuess < 3 ) {
        alert( 'Higher...' + username + ', you have ' + totalGuesses + ' guesses left.' );
    } else if ( numberGuess > 3 ) {
        alert( 'Lower....' + username + ', you have ' + totalGuesses + ' guesses left.' );
    }

} while ( totalGuesses > 0 );
