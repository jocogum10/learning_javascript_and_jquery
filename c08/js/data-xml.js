var xhr = new XMLHttpRequest(); // create xmlhttprequest object

xhr.onload = function(){
    //the following conditional check will not work locally - only on a server
    if(xhr.status === 200){
        //this part is different because ot os processing xml not html
        var response = xhr.responseXML; //ger xml from the server
        var events = response.getElementById('event');  // find <event> elements

        for(var i=0; i<events.length; i++){                 // loop  through them
            var container, image, location, city, newline;  // declare variables
            container = document.createElement('div');      //create div container
            container.className = 'event';                  // add class attribute

            image = document.createElement('img');  // add map image
            image.setAttribute('src', getNodeValue(events[i], 'map'));
            image.appendChild(document.createTextNode(getNodeValue(events[i], 'map')));
            container.appendChild(image);

            location = document.createElement('p'); // add location data
            city = document.createElement('b');
            newline = document.createElement('br');
            city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
            location.appendChild(newline);
            location.insertBefore(city, newline);
            location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
            container.appendChild(location);

            document.getElementById('content').appendChild(container);
        }
        function getNodeValue(obj, tag){
            return obj.getElementByTagName(tag)[0].firstChild.nodeValue;
        }

    //the final part is the same as the html example but it requests an xml file
    }
};
xhr.open('GET', 'data/data.xml', true);
xhr.send(null);