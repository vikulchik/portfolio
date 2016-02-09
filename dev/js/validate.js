;(function(){

  $("#pop-up_add-new-project").on('submit',  validate);
  $("input").keydown(removeTooltips);

  function validate(){
    var inputs = $(this).find('input, textarea');
    inputs.each(function(){
      var $this = $(this);
      if ($this.val().length < 1){
        $('.qtip').removeClass("hide");
        $this.addClass('error');
      }
    });

  }

  function removeTooltips(){
    $(this).next();
  }

}());