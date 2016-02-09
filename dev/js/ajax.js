var addProject = (function(){

  //Инициализирует модуль

  var init = function(){
    _setUpListners();
  };

  //Прослушивает собития

  var _setUpListners = function (){
    $('#pop-up_add-new-project').on('submit', _addProject);

  };

  //Добавляет проект

  var _addProject = function(e){
    e.preventDefault();

    if(!validate) return;

    var form = $(this);
    var url = 'add_project.php';
    var myServerGiveMeAnAnswer = _ajaxForm(form, url);


    myServerGiveMeAnAnswer.done(function(ans){
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
  };

  //Универсальная функция:
  //1. собирает даные из формы
  //2. проверяет форму
  //3. делает запрос на сервер и возвращает ответ из сервера

  var _ajaxForm = function(form, url){

    data = form.serialize();

    var result =  $.ajax({

      url : url,
      type : 'POST',
      dataType : ' json',
      data : data
    }).fail(function(ans){
      console.log('Проблемы в PHP');
      form.find('.error-message').text('На сервере произошла ошибка').show();
    });

    return result;
  };

  return {
    init : init
  };

})();

addProject.init();
