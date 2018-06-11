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

