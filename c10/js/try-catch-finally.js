response = ' {"deals": [{"title": "Farrow and Ball",}]'

if(response){
    try{
        var dealData = JSON.parse(response);
        showContent(dealData);
    }
    catch(e){
        var errorMessage = e.name + ' ' + e.message;
        console.log(errorMessage);
        feed.innerHTML = '<em>Sorry, could not load deals</em>';
    }
    finally{
        var link = document.getElementById('a');
        link.innerHTML = ' <a href="try-catch-finally.html">reload</a>';
        feed.appendChild(link);
    }
}