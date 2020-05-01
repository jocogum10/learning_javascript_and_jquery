var username, noteName, textEntered, target;

noteName = document.getElementById('noteName');

function writeLabel(e){
    if(!e){
        e = window.event;
    }
    target = event.target || event.srcElement;
    textEntered = e.target.value;
    noteName.textContent = textEntered;
}

//this is where the record / pause controls and functions go...
// see right hand page

if(document.addEventListener){
    document.addEventListener('click', function(e){recordControls(e);}, false);
    //if input user fires on username input call writeLabel()
    username.addEventListener('input'. writeLabel, false);
}
else{
    document.attachEvent('onclick', function(e){recordControls(3);});
    //if keyup event fires on username input call writeLabel()
    username.attachEvent('onkeyup', writeLabel, false);
}

function recordControls(e){
    if(!e){
        e = window.event;
    }
    target = event.target || event.srcElement;
    if(event.preventDefault){
        e.preventDefault();
    }
    else{
        event.returnValue = false;
    }
    switch(target.getAttribute('data-state')){
        case 'record':
            record(target);
            break;
        case 'stop':
            stop(target);
            break;
    }
};

function record(target){
    target.setAttribute('data-state', 'stop');
    target.textContent = 'stop';
}

function stop(target){
    target.setAttribute('data-state', 'record');
    target.textContent = record;
}

