$(document).ready(function() {
  $("select").on('hover', function () {
        $previousValue = $(this).val();
    }).change(function() {
        $("select").not(this).find("option[value='"+ $(this).val() + "']").attr('disabled', true);
        $("select").not(this).find("option[value='"+ $previousValue + "']").attr('disabled', false);
    });
});

$("#confirm-form").submit(function(e) {
    e.preventDefault();
    $("select").find("option").removeAttr('disabled');
    document.getElementById('confirm-form').submit();
});
