

$(document).ready(function () {

  $('#retrieve-resources').click(function () {
    var displayResources = $('#display-resources') // set this to the display-resources ID in index.html
    var iso2code =$('#country').val();// this variable should capture text input from the user
console.log(checkInput(iso2code))
   if(  checkInput(iso2code)=== true){
var name;
    displayResources.text('Loading data from JSON source...');
    /* AJAX Call to RESTful Service */
    $.ajax({
      type: "GET",// Specify "GET" or "POST"
      url: "https://restcountries.com/v3.1/alpha?codes="+searchString, // URL of the service
      data: {},
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
  }

  else{
    alert (' error : country code cannot exceed 3 characters')
  }
  });
});

function checkInput(input){
  console.log(input)

  if(input.length <= 3 ){
    console.log(input.length)
return true
  }

  if(input.length > 3){


    if(input.match(', ') || input.match(',')){
      var arr = []
      var count = 0
      var x = input.split(',').map(element => element.trim())
        console.log(x)
      for ( [key, value] of Object.entries(x)){
      
       
        if(value.length <= 3 ){
  console.log(value)

  arr.push(value)

 
  
  
        }

        if(value.length > 3){
         // alert('country code can only have a maximum of 3 letters');
         return false
        }
        

       
   
    }
    console.log(arr)
    searchString = arr.toString()
    return true
  }

return false

  }


}