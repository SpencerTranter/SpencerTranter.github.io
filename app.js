$(document).ready(function(){
  $('#arrow_intro').on('click', function(){
    $.scrollTo('.profile', {duration: 1500});
  })

  $('#arrow_profile').on('click', function(){
    $.scrollTo('.tech_stack', {duration: 1500});
  })

  $('#arrow_stack').on('click', function(){
    $.scrollTo('.projects', {duration: 1500});
  })

  $('#arrow_projects').on('click', function(){
    $.scrollTo('.contact', {duration: 1500});
  })

  var windowWidth = $(window).width();
  if(windowWidth >= 1020) {
    $('#sportsello').hover(function(){
      $('#sportsello_p').removeClass('animated fadeOut').addClass('animated fadeIn');
    }, function(){
      $('#sportsello_p').removeClass('animated fadeIn').addClass('animated fadeOut');
    })

    $('#weather').hover(function(){
      $('#weather_p').removeClass('animated fadeOut').addClass('animated fadeIn');
    }, function(){
      $('#weather_p').removeClass('animated fadeIn').addClass('animated fadeOut');
    })

    $('#stylist').hover(function(){
      $('#stylist_p').removeClass('animated fadeOut').addClass('animated fadeIn');
    }, function(){
      $('#stylist_p').removeClass('animated fadeIn').addClass('animated fadeOut');
    })
  }

});
