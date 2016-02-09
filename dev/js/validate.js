var validate = true;

;(function(){

  $("#pop-up_add-new-project").on('submit',  validation);
  $("input, textarea").on('keydown', removeTooltips);
  $('input[type=file]').on('change', removeTooltips);
  $('.button-reset').on('click',  function(){
   $('input, textarea').removeClass('error');
   $('.tooltip').addClass('hide');
  });

  function validation(){
    var inputs = $(this).find('input, textarea');
    inputs.each(function(){
      var $this = $(this);
      if ($this.val().length < 1){
        validate = false;
        $this.next().removeClass("hide");
        if ($this.attr('type') === 'file'){
          $this.parent().addClass('error');
        }else {
          $this.addClass('error');
        }
      }else {
        validate = true;
      }
    });

  }

  function removeTooltips(){
    var $this = $(this);
    $this.next().addClass('hide');
   if ($this.attr('type') === 'file'){
     $this.parent().removeClass('error');
   }else {
     $this.removeClass('error');
   }
  }

}());