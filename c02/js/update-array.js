//create the array
var colors = ['white', 'black', 'custom'];

//update the third item in the array
colors[2] = 'beige';

//get the element with and id of colors
var el = document.getElementById('colors');

//replace the third item from the array
el.textContent = colors[2];