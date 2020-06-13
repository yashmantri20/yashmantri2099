function scrollToID(id, speed) {
    var offSet = 70;
    var obj = $(id).offset();
    var targetOffset = $(id).offset().top - offSet;
    $('html,body').animate({ scrollTop: targetOffset }, speed);
  }

  var mybutton = document.getElementById("topscroll");
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    $('html,body').animate({ scrollTop: 0 }, 500);
  }