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
    $("#question-frequency").show();
  });

  $("#frequencynext").click(function(event) {
    event.preventDefault();
    $("#question-frequency").hide();
    $("#question-number").show();
  });

  $("#numbernext").click(function() {
    event.preventDefault();
    $("#question-number").hide();
    $("#question-sparkling").show();
  });

  $("form#questions").submit(function(event)  {
    event.preventDefault();

    var name = $("#name").val();
    var age = parseInt($("#age").val());
    var favColor = $("input:radio[name=favcolor]:checked").val();
    var frequency = $("input:radio[name=frequency]:checked").val();
    var number = $("input:radio[name=number]:checked").val();
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

  $("#reset").click(function(event) {
    event.preventDefault();
    location.reload();
  });
});
