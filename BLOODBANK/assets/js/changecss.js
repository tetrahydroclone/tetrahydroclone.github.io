$(document.body).ready(function () {
  if (localStorage.getItem('theme') === 'dark') {
    document.getElementById('pagestyle').setAttribute('href', "assets/css/theme-dark.min.css");
    $('#mode-dark').prop('checked', true);
  }
})

$('#mode-dark').change(function () {
  if ($(this).prop('checked')) {
    document.getElementById('pagestyle').setAttribute('href', "assets/css/theme-dark.min.css");
    localStorage.setItem('theme', 'dark');
  } else {
    document.getElementById('pagestyle').setAttribute('href', "assets/css/theme.min.css");
    localStorage.setItem('theme', 'light');
  }

});