<?php
$name="Monica Namburi";
echo "Welcome $name to the PHP world!";
$age=18;
echo "<br>Your age is $age years.";
$height=5.3;
echo "<br>Your height is $height feet.";
$subjects=array("PHP","HTML","CSS","JavaScript");
echo "<br>Your wt topics are : $subjects[0], $subjects[1], $subjects[2], $subjects[3].";

function localScope(){
    $localVar="I am a local variable";
    echo "<br>$localVar";
}
localScope();
echo "<br>$localVar";//this will give an error because $localVar is not defined in this scope

$globalVar="I am a global variable";
function globalScope(){
    global $globalVar;
    echo "<br>$globalVar";
}
globalScope();

function staticScope(){
    static $count=0;
    $count++;
    echo "<br>Static count is : $count";
}
staticScope();
staticScope();
?>