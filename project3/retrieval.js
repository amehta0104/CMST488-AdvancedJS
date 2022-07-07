$(document).ready(function () {

  $('#retrieve-resources').click(function () {
    var displayResources = $('#display-resources') // set this to the display-resources ID in index.html
    var iso2code =$('#country').val();// this variable should capture text input from the user
var name;
    displayResources.text('Loading data from JSON source...');
    /* AJAX Call to RESTful Service */
    $.ajax({
      type: "GET",// Specify "GET" or "POST"
      url: "https://restcountries.com/v3.1/alpha?codes="+iso2code, // URL of the service
      data: {country:name},
     // Use the format { parameterName: variable },
      success: function(result)
      {

        console.log(result)
        // Build output render
        var output="<table><thead><tr><th>Name</th><th>Alpha 2 Code</th><th>Alpha 3 Code</th></thead><tbody>";

        for (var i in result) {
          output +=
            "<tr><td>" +
           result[i].name.common +
            "</td><td>" +
            result[i].cca2 +
            "</td><td>" +
            result[i].cca3 +
            "</td></tr>";
        }
        output += "</tbody></table>";// Add data to the output render
        // Create a for loop that will iterate over the result.RestResponse.result object and add <tr><td> element
        // Hint: You will want to display result.RestResponse.result[i].name, result.RestResponse.result[i].alpha2_code, and result.RestResponse.result[i].alpha3_code in your table

        displayResources.html(output);

        // Add bootstrap class to the table for styling
        $("table").addClass("table");
      }
    });
  });
});
