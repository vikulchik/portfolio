var addProject = (function(){

  var init = function(){
    _setUpListners();
  };

  var _setUpListners = function (){
    $('#pop-up_add-new-project').on('submit', _addProject);

  };

  var _addProject = function(e){
    e.preventDefault();

    var form = $(this);






  };



  return {
    init : init
  };

})();

addProject.init();
