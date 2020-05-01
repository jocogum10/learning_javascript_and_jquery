var elements = document.getElementsByClassName('hot');  //find hot items

if(elements.length>2){
    var el = elements[2];   // select the third one from the nodelist
    el.className = 'cool';  // change the value of its class attribute
}