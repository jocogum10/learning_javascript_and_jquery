function checkLength(e, minLength){
    var el, elMsg;
    if(!e){                 // if object does not exist
        e = window.event;   // use IE fallback
    }
    el = e.target || e.srcElement;  // get target event
    elMsg = el.nextSibling;         // get its next sibling

    if(el.value.length < minLength){
        elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
    }
    else{
        elMsg.innerHTML = '';
    }
}

var elUsername = document.getElementById('username');
if(elUsername.addEventListener){
    elUsername.addEventListener('blur', function(e){checkLength(e, 5);}, false);
}
else{
    elUsername.attachEvent('onblur', function(e){checkLength(e, 5);});
}