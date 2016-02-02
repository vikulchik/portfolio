; ( function() {

  $('.my-works_add').on('click', function(e) {
    e.preventDefault();

    $('.pop-up').fadeIn(400, function() {
      $('.pop-up_form').slideDown("slow");
    }).css('z-index', '9999');

  });

  $('.pop-up_close').on('click', function(e){
    e.preventDefault();

    $('.pop-up_form').slideUp('slow', function() {
      $('.pop-up').fadeOut(500);
    });

  });

  $('.nav-link').each(function () {
    var location = window.location.href;
    var link = this.href;
    if(location == link) {
      $(this).addClass('active');
    }
  });

  $('input, textarea').placeholder();

  $(".pop-up_input-download").on('change', function(){
    $(".pop-up_label-download").html($(this).val());
  });

}());






