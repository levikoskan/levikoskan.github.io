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

  var giphyApiRoot = 'https://api.giphy.com/';
  var apiKey = 'dc6zaTOxFJmzC'


    $('.search').on('submit', function(){
      $('#results').empty();
      var searchTerm = $('#q').val();
      console.log('The form was submitted');
      console.log('The value submitted was: ', searchTerm);

      $.ajax({
        method: "GET",

        url: giphyApiRoot + 'v1/gifs/random',
        // whatever data we put in here will be added on to the URL
        data: {
          api_key: apiKey,
          tag: searchTerm
        }
      })

      .done(function(giphy){
        console.log(giphy);

        $('#results').append('<img src="'+giphy.data.image_original_url+'">');

      });


      return false;
  });





});
