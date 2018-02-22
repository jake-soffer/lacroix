$(document).ready(function()  {
  $("#namenext").click(function(event) {
    event.preventDefault();
    $("#question-name").fadeOut();
    $("#question-age").fadeIn();
  });

  $("#agenext").click(function(event) {
    event.preventDefault();
    $("#question-age").fadeOut();
    $("#question-favcolor").fadeIn();
  });

  $("#favcolornext").click(function(event) {
    event.preventDefault();
    $("#question-favcolor").fadeOut();
    $("#question-wives").fadeIn();
  });

  $("#wivesnext").click(function() {
    event.preventDefault();
    $("#question-wives").fadeOut();
    $("#question-sparkling").fadeIn();
  });

  $("form#questions").submit(function(event)  {
    event.preventDefault();

    var name = $("#name").val();
    var age = parseInt($("#age").val());
    var favColor = $("input:radio[name=favcolor]:checked").val();
    var wives = $("input:radio[name=wives]:checked").val();
    var sparkling = $("input:radio[name=sparkling]:checked").val();

    if (favColor === "blue") {
      $("#pure").show();
    }
  });
});
