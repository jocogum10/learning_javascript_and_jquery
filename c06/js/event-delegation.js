function getTarget(e){
    if(!e){
        e = window.event;
    }
    return e.target || e.srcElement;
}

function itemDone(e){
    //remove item from the list
    var target, elParent, elGrandparent;    // declare variables
    target = getTarget(e);                  // get the item clicked linked
    elParent = target.parentNode;           // get its list items
    elGrandparent = target.parentNode.parentNode;   // get its list
    elGrandparent.removeChild(elParent);    // remove list item from list

    //prevent the link from taking you elsewhere
    if(e.preventDefault){           // if preventDefault works
        e.preventDefault();         // user preentDefault
    }
    else{                           //otherwise
        e.returnValue = false;      // use old IE version
    }
}

// setup event listeners to call itemDone() on click
var el = document.getElementById('shoppingList');   // get shopping list
if(el.addEventListener){
    el.addEventListener('click', function(e){itemDone(e);}, false);
}
else{
    el.attachEvent('onclick', function(e){itemDone(e);});
}