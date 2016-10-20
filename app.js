$(document).ready(function(){
  // $("#nav").scrollspy({ offset: -75 });
  // $('.stack').hide();
  // var intro_count = 0;
  // var intro_arrow = new Waypoint({
  //   element: ('#welcome'),
  //   handler: function() {
  //     intro_count += 1;
  //     if (intro_count % 2 != 0){
  //       $('#arrow_intro').removeClass("animated fadeIn")
  //       $('#arrow_intro').addClass("animated fadeOut");
  //     } else{
  //       $('#arrow_intro').removeClass('animated fadeOut');
  //       $('#arrow_intro').addClass("animated fadeIn");
  //     }
  //   }
  // })
  // var profile_count
  // var profile_arrow = new Waypoint({
  //   element: ('#final_profile'),
  //   handler: function() {
  //     profile_count += 1;
  //     if (profile_count % 2 != 0){
  //       $('#arrow_profile').removeClass("animated fadeIn")
  //       $('#arrow_profile').addClass("animated fadeOut");
  //     } else{
  //       $('#arrow_profile').removeClass('animated fadeOut');
  //       $('#arrow_profile').addClass("animated fadeIn");
  //     }
  //   }
  // })

  // var waypoint = new Waypoint({
  //   element: ('#arrow_intro'),
  //   handler: function() {
  //     $('body').addClass('texture');
  //   }
  // })


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

});