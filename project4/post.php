

<?php

if(isset($_GET['id'])){
    $dbServername = "127.0.0.1";
    $dbUsername = "root";
    $dbPassword="";
    $dbName = "amorisfi_WPVLV";
    
    $conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);
    
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    // escape sql chars
    $id = mysqli_real_escape_string($conn, $_GET['id']);   

    // make sql
    $sql = "SELECT ID, post_title, guid, post_content FROM `amw_posts`
     WHERE ID = '$id';";

     $sql2 = "SELECT post_parent, guid FROM `amw_posts`
     WHERE post_parent = '$id';";
    // get the query result
    $result = mysqli_query($conn, $sql);
    $result2 = mysqli_query($conn, $sql2);
    // fetch result in array format
    $row = mysqli_fetch_assoc($result);
    $row2 = mysqli_fetch_assoc($result2);

    mysqli_free_result($result);
    mysqli_free_result($result2);
    mysqli_close($conn);

}
 
?>






    <div class="article-img bg-black"><img src="<?php echo $row['guid']; ?>" alt=""></div>
   
    
    <div class="container text-light text-center ">	<h2 class="display-2"><?php echo $row['post_title']; ?></h2></div>
    <div class="container text-light">		<p class="text-light"> <?php echo $row['post_content']; ?></p></div>	
    <div id="social_icons_list" class="article-author text-center ">
        <p class="text-light">Created by: Sam</p>
       
       <img src="images/m1.jpg" class="img-thumbnail" alt="">
       <i   class="fa-3x  fa-brands fa-twitter"></i>
       <i  class="fa-3x  fa-brands fa-linkedin"></i>
       <i  class="fa-3x  fa-brands fa-facebook"></i>

</div>
        <div class="article-meta text-center ">
            <p>Category:</p>
        </div>
    </div>
    <p><?php echo $row['ID']; ?></p>


