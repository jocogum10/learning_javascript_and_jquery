$(function(){
    var times;
    $.ajax({
        beforeSend: function(xhr){
            if(xhr.overrideMimeType){
                xhr.overrideMimeType("application/json");
            }
        }
    });

    function loadTimetable(){
        $.getJSON('data/example.json').done(function(data){
            times = data;
        }).fail(function(){
            $('#event').html('Sorry! We could not load the timetable at the moment');
        });
    }
    loadTimetable();
    
    $('#content').on('click', '#event a', function(e){
        e.preventDefault();
        var loc = this.id.toUpperCase();

        var newContent = '';
        for(var i=0; i<times[loc].length; i++){
            newContent += '<li><span class="time">' + times[loc][i].time + '</span>';
            newContent += '<a href="descriptions.html#';
            newContent += times[loc][i].title.replace(/ /g, '-') + '">';
            newContent += times[loc][i].title + '</a></li>';
        }
    $('#sessions').html('<ul>' + newContent + '</ul>');

    $('#event a.current').removeClass('current');
    $(this).addClass('current');

    $('details').text('');
    });

    $('#content').on('click', '#sessions li a', function(e){
        e.preventDefault();
        var fragment = this.href;

        fragment = fragment.replace('#', '#');
        $('#details').load(fragment);

        $('#sessions a.current').removeClass('current');
        $(this).addClass('current');
    });

    $('nav a').on('click', function(e){
        e.preventDefault();
        var url = this.href;

        $('nav a.current').removeClass('current');
        $(this).addClass('current');

        $('#container').remove();
        $('#container').load(url+ ' #container').hide().fadeIn('slow');
    });
});
