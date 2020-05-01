var xhr = new XMLHttpRequest(); // create xmlhttprequest object

xhr.onload = function(){        // when response has loaded
    //the following conditional check will not work locally - only on a server
    if(xhr.status === 200){     // if server was ok
        document.getElementById('content').innerHTML = xhr.responseText;    // update
    }
};

xhr.open('GET', 'data/data/html', true);    // prepare the request
xhr.send(null);             // send the request