<?php
$user = $_GET['user'];

if($user == "admin"){
  echo "Username already exists!";
} else {
  echo "Username available!";
}
?>