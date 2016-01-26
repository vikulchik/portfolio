;(function(){

  $('.my-works_add').on('click', function(){
    $('.pop-up').removeClass("hide");
  });

  $('.pop-up_close').on('click', function(){
    $('.pop-up').addClass("hide");
  });

  $('.nav-link').each(function () {
    var location = window.location.href;
    var link = this.href;
    if(location == link) {
      $(this).addClass('active');
    }
  });

}());