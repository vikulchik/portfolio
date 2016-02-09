;(function(){

  $("#pop-up_add-new-project").on('submit',  validate);
  $("input, textarea").on('keydown', removeTooltips);
  $('input[type=file]').on('change', removeTooltips);

  function validate(){
    var inputs = $(this).find('input, textarea');
    inputs.each(function(){
      var $this = $(this);
      if ($this.val().length < 1){
        $('.tooltip').removeClass("hide");
        $this.addClass('error');
        $(".pop-up_label-download").addClass('error');
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