$(document).ready(function() {
    loadWeather('The Heights',''); //@params location, woeid
    // $('[class^=st1905]').mouseover(trailTip);
    navDisplay();
});

function loadWeather(location, woeid) {
    $.simpleWeather({
        location: '44.5539530,-79.6758430',
        woeid: woeid,
        unit: 'c',
        success: function(weather) {

            html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
            html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
            html += '<li class="currently">'+weather.currently+'</li>';
            html += '<li>'+weather.alt.temp+'&deg;F</li></ul>';

            $("#weather").html(html);
        },
        error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
        }
    });
}

// function trailTip() {
//     var trailId = $(this).attr('id');
//     var trailTexts = trailId.split(/(?=[A-Z])/);
//     var tempText = '';
//     for(var i = 0; i < trailTexts.length; i++) {
//         tempText += trailTexts[i] + ' ';
//     }
//     console.log(tempText);
//     $(this).qtip({
//         content: {
//             text: tempText
//         }
//     });
// }

function navDisplay(){
    $('#showAllLink a').click(function(e){
        e.preventDefault();
        
        if ($('#showAllLink').hasClass('active')) {
            $('#showAllLink').removeClass('active');

        } else {

            $('#skiLifts').fadeIn("slow");
            $('#beginner').fadeIn("slow");
            $('#intermediate').fadeIn("slow");
            $('#advanced').fadeIn("slow");
            $('#expert').fadeIn("slow");
            $('#terrainParkAdvanced').fadeIn("slow");
            $('#chaletIcons').fadeIn("slow");

            $('#showAllLink').addClass('active');
            $('#skiLiftLink').addClass('active');
            $('#beginnerLink').addClass('active');
            $('#intermediateLink').addClass('active');
            $('#advancedLink').addClass('active');
            $('#expertLink').addClass('active');
            $('#terrainParkLink').addClass('active');
            $('#chaletLink').addClass('active');
        }
    });

    $('#skiLiftLink a').click(function(e){
        e.preventDefault();
        
        if ($('#skiLiftLink').hasClass('active')) {
            $('#skiLiftLink').removeClass('active');

            $('#skiLifts').fadeOut("slow");

        } else {

            $('#skiLifts').fadeIn("slow");

            $('#skiLiftLink').addClass('active');
            $('#showAllLink').removeClass('active');
        }
    });

    $('#beginnerLink a').click(function(e){
        e.preventDefault();
        
        if ($('#beginnerLink').hasClass('active')) {
            $('#beginnerLink').removeClass('active');

            $('#beginner').fadeOut("slow");

        } else {

            $('#beginner').fadeIn("slow");

            $('#beginnerLink').addClass('active');
            $('#showAllLink').removeClass('active');
        }
    });

    $('#intermediateLink a').click(function(e){
        e.preventDefault();
        
        if ($('#intermediateLink').hasClass('active')) {
            $('#intermediateLink').removeClass('active');
            
            $('#intermediate').fadeOut("slow");

        } else {

            $('#intermediate').fadeIn("slow");

            $('#intermediateLink').addClass('active');
            $('#showAllLink').removeClass('active');
        }
    });

    $('#advancedLink a').click(function(e){
        e.preventDefault();
        
        if ($('#advancedLink').hasClass('active')) {
            $('#advancedLink').removeClass('active');
        
            $('#advanced').fadeOut("slow");

        } else {

            $('#advanced').fadeIn("slow");

            $('#advancedLink').addClass('active');
            $('#showAllLink').removeClass('active');
        }
    });

    $('#expertLink a').click(function(e){
        e.preventDefault();
        
        if ($('#expertLink').hasClass('active')) {
            $('#expertLink').removeClass('active');
        
            $('#expert').fadeOut("slow");

        } else {

            $('#expert').fadeIn("slow");

            $('#expertLink').addClass('active');
            $('#showAllLink').removeClass('active');
        }
    });

    $('#terrainParkLink a').click(function(e){
        e.preventDefault();
        
        if ($('#terrainParkLink').hasClass('active')) {
            $('#terrainParkLink').removeClass('active');
        
            $('#terrainParkAdvanced').fadeOut("slow");

        } else {

            $('#terrainParkAdvanced').fadeIn("slow");

            $('#terrainParkLink').addClass('active');
            $('#showAllLink').removeClass('active');
        }
    });

    $('#chaletLink a').click(function(e){
        e.preventDefault();
        
        if ($('#chaletLink').hasClass('active')) {
            $('#chaletLink').removeClass('active');
        
            $('#chaletIcons').fadeOut("slow");

        } else {

            $('#chaletIcons').fadeIn("slow");

            $('#chaletLink').addClass('active');
            $('#showAllLink').removeClass('active');
        }
    });
}