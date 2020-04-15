var elements = document.getElementsByTagName('li'); // find <li> elements

if (elements.length>0){
    var el = elements[0];   //select the first one using array syntax
    el.className = 'cool';  // change the value of the class attribute
}