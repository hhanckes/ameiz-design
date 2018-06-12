//Stop dropdown form from closing on click inside
$('.dropdown-menu-login-form').bind('click', function (e) {
  e.stopPropagation()
});

//Login Form Toggle
$('#forgot-btn').on('click', function () {
  $('.login-form').removeClass('d-block').addClass('d-none');
  $('.forgot-form').removeClass('d-none').addClass('d-block');
});

$('#back-btn').on('click', function () {
  $('.forgot-form').removeClass('d-block').addClass('d-none');
  $('.login-form').removeClass('d-none').addClass('d-block');
});

//Increment Decrement input
$(".input-group-count .btn").on("click", function() {

  var $button = $(this);
  var oldValue = $button.parent().parent().find("input").val();

  if ($button.text() == "+") {
    var newVal = parseFloat(oldValue) + 1;
  } else {
    // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
  }

  $button.parent().parent().find("input").val(newVal);

});