<?php
 function validationName(){
 $firstname = $_POST['firstName'];
  $lastName = $_POST['lastName'];
 if($firstname==="" || $lastName===""){
   echo "name is requard..!" ;
 }
 }
 function validationEmail(){
  $email=$_POST['email'];
  if($email===""){
    echo "Email is requard..!";
  }
 }
 function validationPassword(){
 if(isset($_POST['submit'])){
        $password = trim($_POST['password']);
        $confirmPassword = trim($_POST['confirmPassword']);

        if($password == "" || $confirmPassword == ""){
            echo "null password/confirmPassword!";
        }else if($password == $confirmPassword){
            echo "valid user!";
        }else{
            echo "invalid user!";
        }
    }
 }




 if(isset($_POST['submit'])){
   validationName();
   validationEmail();
   validationPassword();
  
  
 }

?>
