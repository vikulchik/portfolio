; ( function() {

  $('.my-works_add').on('click', function(e) {
    e.preventDefault();

    $('.pop-up').fadeIn(300, function() {
      $('.pop-up_form').slideDown("slow");
    }).css('z-index', '9999');

  });

  $('.pop-up_close').on('click', function(e){
    e.preventDefault();

    $('.pop-up_form').slideUp('slow', function() {
      $('.pop-up').fadeOut(300).removeClass('error-message', 'success-message');
    });

  });


  $('input, textarea').placeholder();

  $(".pop-up_input-download").on('change', function(){
    $(".pop-up_label-download").html($(this).val());
  });

}());






