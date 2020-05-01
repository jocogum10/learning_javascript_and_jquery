function setup(){   // declare function
    var textInput;  // declare variable
    textInput = document.getElementById('username');    // get username input
    textInput.focus();
}

window.addEventListener('load', setup, false);  // when page loaded call setup()