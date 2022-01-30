"use strict";

//alert('Hello');

//const result = confirm("Are you here?");
//console.log(result);

//const answer = +prompt("You is 18?","18");
//console.log(answer+5);

const answers = [];

answers[0] = prompt('What is your name?','');
answers[1] = prompt('What is your last name?','');
answers[2] = prompt('How old are you?','');

document.write(answers);

let incr = 10,
    decr = 10;

    //incr++;
    //decr--;

    console.log(++incr);
    console.log(--decr);

    console.log(5%2);

    console.log(2*4 === 8);