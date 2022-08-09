<?php



$dbServername = "127.0.0.1";
$dbUsername = "root";
$dbPassword="";
$dbName = "amorisfi_WPVLV";

$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$sql = 'SELECT ID, post_status, post_excerpt, post_title, post_content FROM amw_posts WHERE post_status = "publish" AND post_content != "" ORDER BY post_date DESC LIMIT 15';
$result = mysqli_query($conn, $sql);

$row = mysqli_fetch_all($result, MYSQLI_ASSOC);
mysqli_free_result($result);
mysqli_close($conn);
//echo count($row);

$assign_grid_count = 1;
echo json_encode($row)

?>