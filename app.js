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

  $('#illaoi').hover(function(){
    $('#illaoi_p').removeClass('animated fadeOut').addClass('animated fadeIn');
  }, function(){
    $('#illaoi_p').removeClass('animated fadeIn').addClass('animated fadeOut');
  })

  $('#jungle').hover(function(){
    $('#jungle_p').removeClass('animated fadeOut').addClass('animated fadeIn');
  }, function(){
    $('#jungle_p').removeClass('animated fadeIn').addClass('animated fadeOut');
  })

  $('#stylist').hover(function(){
    $('#stylist_p').removeClass('animated fadeOut').addClass('animated fadeIn');
  }, function(){
    $('#stylist_p').removeClass('animated fadeIn').addClass('animated fadeOut');
  })

});