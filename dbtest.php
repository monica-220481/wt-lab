<?php
$conn=mysqli_connect("localhost","root","MonicA@123","testdb");
if(!$conn){
die("Database connection failed");
}
echo "Database connected successfully";
?>
