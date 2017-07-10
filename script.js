var username = prompt( 'Hi there! What\'s your name?' );
console.log( 'Their name is ' + username );
alert( 'Hello ' + username + '! It\'s nice to meet you. I know we haven\'t met,' 
      + ' but I feel like you know me. Try to guess some facts about me. Ready?' );

var guessOne = prompt( 'Is pink my favorite color?' );
console.log( 'pink is my favorite color : ' + username + ' guessed ' + guessOne );
if ( guessOne === 'no' ) {
    alert( 'Sorry ' + username + '! Pink is my favorite color.' );
} else if ( guessOne === 'yes' ) {
    alert( 'Yay ' + username + '! You are right. Pink is my favorite color.' );
}
