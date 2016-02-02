var addProject = (function(){

  var init = function(){
    _setUpListners();
  };

  var _setUpListners = function (){
    $('#pop-up_add-new-project').on('submit', _addProject);

  };

  var _addProject = function(e){

    console.log('hello');
    e.preventDefault();



  };



  return {
    init : init
  };

})();

addProject.init();
