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

      if(ans.mes === 'OK'){
        form.find('.success-mes').text(ans.text).show();
      }else {
        form.find('.error-mes').text(ans.text).show();
      }
    })

    .fail(function(){
      console.log("error");
    })

  };



  return {
    init : init
  };

})();

addProject.init();
