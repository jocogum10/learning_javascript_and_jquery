$(function(){
    //data about people goes here
    var people = [
        {
            name: 'Casey',
            rate: 60
        },
        {
            name: 'Camille',
            rate: 80
        },
        {
            name: 'Gordon',
            rate: 75
        },
        {
            name: 'Nigel',
            rate: 120
        }
    ];
    //filtering code goes here
    var results = [];
    people.forEach(function(person){
        if(person.rate >= 65 && person.rate <=90){
            results.push(person);
        }
    });
    //loop through new array and add matchin people to the results table
    var $tableBody = $('<tbody></tbody>');
    for(var i=0; i<results.length; i++){
        var person = results[i];
        var $row = $('<tr></tr>');
        $row.append($('<td></td>').text(person.name));
        $row.append($('<td></td>').text(person.rate));
        $tableBody.append($row);
    }

    //add the new content after the body of the page
    $('thead').after($tableBody);
});