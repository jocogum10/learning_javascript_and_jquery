//adding items to start and end of list
var list = document.getElementsByTagName('ul')[0];  // get the <ul> element

//add new item to end of list
var newItemLast = document.createElement('li');     // create element
var newTextLast = document.createTextNode('cream'); // create text node
newItemLast.appendChild(newTextLast);               // add elemnent end of list
list.appendChild(newItemLast);                      // add element end of list

//add new item start of list
var newItemFirst = document.createElement('li');    // create element
var newTextFirst = document.createTextNode('kale'); // create text node
newItemFirst.appendChild(newTextFirst);             // add text to element
list.insertBefore(newItemFirst, list.firstChild);   // add element to list

var listItems = document.querySelectorAll('li');   // all <li> elements

//add a class of cool to all list items
var i;                                              // counter variable
for(i=0; i<listItems.length; i++){                  // loop through elements
    listItems[i].className = 'cool';                // change class to cool
}

// add number of items in the list to the heading
var heading = document.querySelector('h2');         // h2 element
var headingText = heading.firstChild.nodeValue;     // h2 text
var totalItems = listItems.length;                  // number if <li> elements
var newHeading = headingText + ' ' + totalItems;    // content
heading.textContent = newHeading;                   // update h2