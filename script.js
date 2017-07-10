'use strict';

var username = prompt( 'Hi there! What\'s your name?' );
var score = 0;
console.log( 'Their name is ' + username + ' and their score is ' + score );
alert( 'Hello ' + username + '! It\'s nice to meet you. I know we haven\'t met,' 
      + ' but I feel like you know me. Try to guess some facts about me. Ready?' );

var questions = [
    [
        'Is pink my favorite color?',
        'y',
        'Sorry ' + username + '! Pink is my favorite color.',
        'Yay ' + username + '! You are right. Pink is my favorite color.'],
    [
        'Am I a sports fanatic?',
        'n',
        'Nope ' + username + ', I am not a big sports fan.', 
        'Yay ' + username + '! You are 100% right.'
    ],
    [
        'Am I a dog person?',
        'n',
        'Sorry ' + username + ', I prefer cats.',
        'That\'s right ' + username + '! I am def a cat person.'
    ],
    [
        'Do I like to write?',
        'y',
        'Sorry ' + username + '! I like it so much I majored in it.',
        'Yay ' + username + '! You are right. I <3 writing.'
    ],
    [
        'Do I like pizza?',
        'y',
        '....' + username + '.... who doesn\'t like pizza? WRONG.',
        'Of course ' + username + '! Give me a slice of Hawaiian, please.'
    ]
];

for ( var i = 0; i < questions.length; i ++ ) {
    var question = questions[i][0];
    var correctAnswer = questions[i][1];
    var badReply = questions[i][2];
    var correctReply = questions[i][3];

    var guess = prompt( question ).toLowerCase()[0];
    console.log( question + ' : ' + guess );
    if ( guess === correctAnswer ) {
        alert( correctReply );
        score++;
    } else {
        alert( badReply );
    }
}



var totalGuesses = 0;
for ( var i = 0; i < 4; i ++ ) {
    var numberGuess = parseInt( prompt( 'Okay, ' + username + ', guess how many years I have lived overseas.' ));
    console.log( 'number of years I lived overseas :' + username + ' guessed ' + numberGuess + ' years.' );
    totalGuesses++;
    var guessesLeft = 4 - totalGuesses;

    if ( numberGuess === 3 ) {
        score++;
        alert( 'That\'s right!!! I lived in the Philippines for 3 years.' );
        break;
    } else if ( numberGuess < 3 ) {
        alert( 'Higher...' + username + ', you have ' + guessesLeft + ' guesses left.' );
    } else if ( numberGuess > 3 ) {
        alert( 'Lower....' + username + ', you have ' + guessesLeft + ' guesses left.' );
    }
}



var states = [ 'california', 'virginia', 'oregon' ];
var correctGuess = false;
var stateGuesses = 0;
while ( correctGuess === false ) {
    var stateGuess = prompt( 'Guess a state that I\'ve lived in. You have 6 guesses.' ).toLowerCase();
    console.log( username + ' guessed that you live in ' + stateGuess );

    if ( states.indexOf( stateGuess ) > -1 ) {
        alert( 'Great job, ' + username + '! I did live in ' + stateGuess 
                + '. Here are the other states I lived in: ' + states.join(', ') );
        score++;
        correctGuess = true;
    } else {
        alert( 'Nope ' + username + '! I didn\'t live in ' + stateGuess + '.');
        stateGuesses++;
    }

    if ( stateGuesses === 6 ) {
        alert( 'Sorry ' + username + '! You\'re out of guesses. '
                + '. Here are the states I lived in: ' + states.join(', ') );
        break;
    }
}

alert( 'Thanks for playing ' + username + '!! You got ' + score + ' questions right!' );