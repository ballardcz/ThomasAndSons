$(document).ready(function () {
  // event.preventDefault()
  var formInputs = [];

$('#submit').on('click', function() {
  console.log("thishit");

  var name1 = document.getElementById("validationTooltip01").value;
  console.log(name1);

  var name2 = document.getElementById('validationTooltip02').value;
  console.log(name2);
  
  if (isNaN(name1) && name1.length > 0) {
    $(".form-control").addClass("red");
    //$("#valid-tooltip").text("Looks Good!");
  } else if (name1 && name1.length > 0) {
    $(".form-control").addClass("green");
   // $("#valid-tooltip").text("Write your name!");
  } else {
    $(".form-control").removeClass("red,green");
  }

  // $("#submit").on("click", function (event) {
  //   event.preventDefault();
  //   firstName: $("#validationTooltip01").val().trim(),
  //     role: $("#role").val().trim(),
  //     age: $("#age").val().trim(),
  
  // });

});
});