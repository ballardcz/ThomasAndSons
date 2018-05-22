$(document).ready(function() {
  // event.preventDefault()
  var formInputs = [];

  var name1 = document.getElementById("validationTooltip01");
  console.log(name1);


var name2 = $('#validationTooltip01').attr('id');
console.log(name2);

var number = 1;
console.log(number);

  if (isNaN(name1) && name1 > 0) {
    $("#valid-tooltip").text("Looks Good!");
  } else if (name1 && name1 > 0) {
    $("#valid-tooltip").text("Write your name!");
  }
  else { 
    $("#valid-tooltip").text("");
  }

    // $("#validationTooltip01").on("submit", function() {
    //   $("#myform").validate({
    //     // initialize the plugin
    //     rules: {
    //       field1: {
    //         required: true,
    //         email: true
    //       },
    //       field2: {
    //         required: true,
    //         minlength: 5
    //       }
    //     }
    //   });
    //   alert("Form has been submitted");
    // });

  //})
});
