;(function(){

  $("#pop-up_add-new-project").on('submit',  validate);

  function validate(){
    var inputs = $(this).find('input, textarea');
  }


  inputs.each(function(){
    var $this = $(this);
      if ($this.val().length < 1){
        $this.addClass("qtip");
      }
  });

}());