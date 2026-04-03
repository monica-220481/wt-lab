<?php
echo "<h2>PHP string functions using hardcoded string</h2>";
$str="Monica Namburi";
echo "<br>Original String: $str";
echo "<br>Length of the string: ".strlen($str);
echo "<br>Word count of the string: ".str_word_count($str);
echo "<br>Reversed string: ".strrev($str);
echo "<br>upper case string : ".strtoupper($str);
echo "<br>Lower case string : ".strtolower($str);
echo "<br>First character uppercase : ".ucfirst($str);
echo "<br>First character of each word uppercase : ".ucwords($str);
echo "<br>Position of substring 'Namburi' : ".strpos($str,"Namburi");
echo "<br>Replace 'Monica' with 'Moni' : ".str_replace("Monica","Moni",$str);
echo "<br>Substring from position 7 : ".substr($str,7);
echo "<br>Substring from position 0 to 6 : ".substr($str,0,6);
echo "<br>Trimmed string  : ".trim($str);
echo "strcmp('hello','Hello') : ".strcmp("hello","Hello");
echo "<br>String case comparison of 'hello' and 'Hello' is : ".strcmp("Hello","hello");
echo "<br> addslahes() is : ".addslashes("Monica's book");
?>