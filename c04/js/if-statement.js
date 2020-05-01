var score = 75;     //score
var msg;            // message

if(score>=50){
    msg = 'Congratulations!';
    msg += ' Proceed to the next round.';
}
var el = document.getElementById('answer');
el.textContent = msg;