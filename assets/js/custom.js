// SHOW HIDE DEPENDENT FORMS
$(function () {
  $("input[name='ptnttyp']").click(function () {
    if ($("#dependent").is(":checked")) {
      $(".showdependent").show();
    } else {
      $(".showdependent").hide();
    }
  });
});

// UNCHECK SELECTED RADIO BUTTONS AND CHECKBOX
$(".patienttype").click(function () {
  $(".dependenttype").prop("checked", false);
  $("#letterauthorization").prop("checked", false);
  $("#disability").prop("checked", false);
});

// DISABLE & HIDE PIN WHEN NON-MEMBER IS SELECTED
$(function () {
  $("input[name='ptnttyp']").click(function () {
    if ($("#nonmember").is(":checked")) {
      $(".pinform").hide();
      $("#pin").prop("disabled", true);
    } else {
      $(".pinform").show();
      $("#pin").prop("disabled", false);
    }
  });
});