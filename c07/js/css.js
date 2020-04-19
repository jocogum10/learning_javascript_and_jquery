$(function(){
    var backgroundColor = $('li').css('background-color');
    $('ul').append('<p>Color was: ' + backgroundColor + '</pi>');
    $('li').css({
        'background-color': '#c5a996',
        'border': '1px solid #ffffff',
        'color': '#000',
        'font-family': 'Georgia',
        'padding-left': '+=75'
    });
});