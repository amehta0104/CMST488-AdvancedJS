





$(document).ready(function () {
$(popup).hide()

$.ajax({
    dataType: "JSON",
    url: 'js/projects.json',
    data: {},
    success: function(result){

   // console.log(result)
   var list = "div-";
  $.each(result,function( i, val ){

    //val becomes the actual object
//console.log( val)
console.log( i)

var listNum = list+i;
var idy = "#"+listNum;
//<a href=post.php?id=' + val.id + '>

output =  '  <div id=' + listNum + ' class="home-post container p-5">  <h1>' + val.post_title + ' </h1> <p>' + val.post_content.substring(1,300) +' </p>  </div> '
//console.log(output)
$('#post-container').append(output)

$('#post-container').on("click", idy, function(){

$.ajax({
  url:"js/projects.json",
  method: 'GET',
  data: {ID:val.id},
  success: function(post){
    console.log(post[i].post_title)
post_output = 
' <div class="container text-light"><p class="text-light text-center"> '+ post[i].post_excerpt.replaceAll("(?i)<td[^>]*>", " ").replaceAll("\\s+", " ").trim() + '</p></div> <div class="container text-light text-center"> <h2 class="display-2">' + post[i].post_title + ' </h2> </div> <div class="container text-light"> <p class="text-light"> ' + post[i].post_content + '</p></div> <div id="social_icons_list" class="article-author text-center "><p class="text-light">Created by: Sam</p><i class="fa-3x  fa-brands fa-twitter"></i><i  class="fa-3x  fa-brands fa-linkedin"></i><i  class="fa-3x  fa-brands fa-facebook"></i></div>'



    $('#full-post').html(post_output)




    if ( $( "#popup" ).is( ":hidden" ) ) {
      $( "#popup" ).slideDown( "slow" );
      } else {
      $( "#popup" ).slideUp();
      } }
})
//go(val)

  //  output =  '<div id=' + listNum + '>  <h1>' + val.title + ' </h1> <p>' + val.id +' </p>  </div> '
  //  $('#post-container').html(output)
  // // window.location.href = 'post.html' 

  //  $("#post").html(output)

}); 

$('#back').on('click', () => {



  $(popup).slideUp("slow")
  
})

// $("<div/>",{
//   // scalable id naming for each additional box
//   'id': 'box' + n,
//   'class' : 'box outlined',

//   } ).appendTo('#boxes');

  })

      
    }
  })

 
  });




  $('img').hover(		
    function () {
      $(this).css( 'scale','0.7');
      $(this).css('border', '15px solid var(--gradient1)');
    }, 
    function () {
      $(this).css('scale','1');
      $(this).css('border', '0px solid var(--gradient1)');
    }
  )