var firstItem = document.getElementById('one'); //get the first item
firstItem.className = 'complete';               // change its class attribute

var fourthItem = document.getElementsByTagName('li').item(3);   // get fourth item
fourthItem.setAttribute('class', 'cool');