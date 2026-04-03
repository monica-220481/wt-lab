<?php
//OPEN AND WRITE AND CLOSE
$file=fopen("sample.txt","w");
fwrite($file,"hello monica");
fclose($file);

//READ
$file=fopen("sample.txt","r");
echo fread($file,filesize("sample.txt"))."<br>";
fclose($file);

echo file_get_contents("sample.txt")."<br>";

file_put_contents("sample2.txt","new file created");

$lines=file("sample.txt");
print_r($lines)."<br>";

$file="sample.txt";
echo file_exists($file)?"File exists" : "Not exists". "<br>";
echo "size :".filesize($file)."bytes"."<br>";
echo "Type : ".filetype($file)."<br>";
echo "Access time : ".date("Y-m-d H:i:s",fileatime($file))."<br>";
echo "Modification time : ".date("Y-m-d H:i:s",filemtime($file))."<br>";
echo "created time : ".date("Y-m-d H:i:s",filectime($file))."<br>";
echo "permissions : ".fileperms($file)."<br>";
echo "owner : ".fileowner($file)."<br>";
echo "group : ".filegroup($file)."<br>";
echo "Inode : ".fileinode($file)."<br>";

copy("sample.txt","sample2.txt");
rename("sample2.txt","copy_sample.txt");
//unlink("copy_sample.txt");
echo "File deleted succesfully"."<br>";
//rmdir("monica");
echo "Folder deleted successfully"."<br>";
if(is_file($file)){
    echo "$file is a file "."<br>";
}
if(is_dir("filemanager")){
    echo "filemanager is a directory "."<br>";
}


$array=scandir("filemanager");
print_r($array);

$dir=opendir("filemanager");
while(($file=readdir($dir))!==false){
    echo $file."<br>";
}
closedir($dir);

echo "Current working directory : ".getcwd()."<br>";
chdir("filemanager");
echo getcwd()."<br>";

$file=fopen("sample.txt","w");
if(flock($file,LOCK_EX)){
    fwrite($file,"this a locked file");
    flock($file,LOCK_UN);
}
fclose($file);
echo "File locked and written successfully"."<br>";

$file=fopen("sample.txt","r");
if(flock($file,LOCK_SH)){
    echo fread($file,filesize("sample.txt"));
    flock($file,LOCK_UN);
}
fclose($file);
?>
