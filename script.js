var coded = "6l9nA1bAKx@S0Kn6.C10"
var key = "6Q2BF3mNsLGuHKcvwOnZYIefoV0kb7XPMhC9TgxJt4lU15pAjRzEWryaDS8diq"
var shift=coded.length
var link=""
for (var i=0; i<coded.length; i++) {
  if (key.indexOf(coded.charAt(i))==-1) {
  var ltr = coded.charAt(i)
  link += (ltr)
  }else {
  ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
  link += (key.charAt(ltr))
  }
}

const email = 'mailto:'+link+'?subject=Enjoyed%20visiting%20your%20website'

href={email}

$(function() {
// Smooth Scroll
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

// email
  $('#emailAnchor').attr('href', email)

// header color animation
var navColor = false;
$(window).scroll(function(){
      if ($(window).scrollTop() > 1000 && navColor === false) {
          console.log('navbar to black')
          $('.navbar').removeClass('navbarAnimationOff')
          $('.navbar').addClass('navbarAnimation')
          navColor = true;
      }if($(window).scrollTop() < 1000 && navColor === true){
        $('.navbar').removeClass('navbarAnimation')
        $('.navbar').addClass('navbarAnimationOff')
        console.log('navbar to nothing')
          navColor = false;
      }else{
        return false;
      }
    });

});



