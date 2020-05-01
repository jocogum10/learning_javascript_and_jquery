var i = 1;      // set counter to 1
var msg = '';   // message

//store 5 times table in a variable
do{
    msg += i + ' x 5 = ' + (i*5) + '<br>';
    i++;
}while(i<1);
//note how this is already 1 and it still runs

document.getElementById('answer').innerHTML = msg;