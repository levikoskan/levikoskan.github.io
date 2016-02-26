$(function(){

   $('#myModal').on('shown', function () {
  $('#myInput').focus()
});

 function slide() {
    $('#proXp').animate({

            "left": "800px"
        }, 3000);

    $('#proPic').animate({

            "top": "750px"
        }, 3000);
};

  // responsivness when I get to it
  // if ($(window).width() <= 549) {
  //     if ($(window).scrollTop() > ) {
  //         slide();
  //     }
  // } else if ($(window).width() > 549 && $(window).width() <= 991) {
  //     if ($(window).scrollTop() > ) {
  //         slide();
  //     }
  // } else {
    $(window).scroll(function(){
      if ($(window).scrollTop() > 75) {
          slide();

      }
    });
  // }






});
