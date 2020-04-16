var el;     // declare variables

function charCount(e){
    var textEntered, charDisplay, counter, lastKey;
    textEntered = document.getElementById('message').value;
    charDisplay = document.getElementById('charactersLeft');
    counter = (180 - (textEntered.length));
    charDisplay.textContent = counter;

    lastkey = document.getElementById('lastKey');
    lastKey.innerHTML = '<h1>Last key in ASCII code: ' + e.keyCode + '</h2>';
}

el = document.getElementById('message');
el.addEventListener('keypress', charCount, false);