$(document).ready(function()  {
  $("#namenext").click(function(event) {
    event.preventDefault();
    $("#question-name").hide();
    $("#question-age").show();
  });

  $("#agenext").click(function(event) {
    event.preventDefault();
    $("#question-age").hide();
    $("#question-favcolor").show();
  });

  $("#favcolornext").click(function(event) {
    event.preventDefault();
    $("#question-favcolor").hide();
    $("#question-birthday").show();
  });

  $("#birthdaynext").click(function(event) {
    event.preventDefault();
    $("#question-birthday").hide();
    $("#question-wives").show();
  });

  $("#wivesnext").click(function() {
    event.preventDefault();
    $("#question-wives").hide();
    $("#question-sparkling").show();
  });

  $("form#questions").submit(function(event)  {
    event.preventDefault();

    var name = $("#name").val();
    var age = parseInt($("#age").val());
    var favColor = $("input:radio[name=favcolor]:checked").val();
    var birthday = $("input:radio[name=birthday]:checked").val();
    var wives = $("input:radio[name=wives]:checked").val();
    var sparkling = $("input:radio[name=sparkling]:checked").val();

    if (favColor === "blue") {
      $("#pure").fadeIn();
    }

    if (favColor === "yellow") {
      $("#lemon").fadeIn();
    }

    if (favColor === "purple") {
      $("#berry").fadeIn();
    }

    if (favColor === "orange") {
      $("#pamplemousse").fadeIn();
    }

    if (favColor === "pink") {
      $("#cranraspberry").fadeIn();
    }
  });
});
