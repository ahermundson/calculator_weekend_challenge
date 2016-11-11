$(document).ready(function() {

  $('.operator').on('click', function(){
    event.preventDefault();
    var numbersObject = {};
    var operation = $(this).attr('id');
    $.each($('#calculatorInput').serializeArray(), function(i, field) {
      numbersObject[field.name] = field.value;
    });
    numbersObject.type = operation;
    $.ajax({
      type: 'POST',
      url: '/math',
      data: numbersObject,
      success: function(numbersObject) {
        getCompleted();
      }
    });
  });

  $('#clear').on('click', clearForm);

});


function getCompleted() {
  $.ajax({
    type: 'GET',
    url: '/math',
    success: function(data) {
      console.log('got the completed data!');
      appendCompleted(data);
    }
  });
}

function appendCompleted(data) {
  console.log(data);
  $('#result').text(data.number);
}

function clearForm() {
  $('form').find('input[type=number]').val("");
  $('#result').text("");
}
