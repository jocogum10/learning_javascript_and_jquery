var pass = 50;  // pass mark
var score = 90; // score

//check if the user has passed
var hasPassed = score >= pass;

//write the message into the page
var el = document.getElementById('answer');
el.textContent = 'Level Passed: ' + hasPassed;