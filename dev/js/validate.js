;(function(){

  $("#pop-up_add-new-project").on('submit',  validate);
  $("input, textarea").on('keydown', removeTooltips);

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
   $(this).next().addClass('hide');
   $(this).removeClass('error');
   if ($('input').attr('type') === 'file'){
    $(this).removeClass('error');
   }
  }

}());