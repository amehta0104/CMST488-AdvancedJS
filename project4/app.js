

$(document).ready(function () {


$.ajax({
    dataType: "json",
    url: 'projects.json',
    //data: title,
    success: function(result){
console.log(result)
      
    }
  })
  });

