var addProject = (function(){

  var init = function(){
    _setUpListners();
  };

  var _setUpListners = function (){
    $('#pop-up_add-new-project').on('submit', _addProject);

  };

  var _addProject = function(e){
    e.preventDefault();

    var form = $(this),
        url = 'add_project.php',
        data = form.serialize();
    console.log(data);

    $.ajax({

      url : url,
      type : 'POST',
      dataType : ' json',
      data : data
    })

    .done(function(ans){
      console.log(ans);
      var formStatusText = $(".server-mes");
      if(ans.status === 'OK'){
        form.find(formStatusText).addClass('success-message')
                                 .removeClass("error-message")
                                 .text(ans.text)
                                 .show();
      }else {
        form.find(formStatusText).addClass('error-message')
                                 .removeClass("success-message")
                                 .text(ans.text)
                                 .show();
      }
    })

    .fail(function(){
      console.log("error");
    })

  };

  var _ajaxForm = function(){

  };



  return {
    init : init
  };

})();

addProject.init();
