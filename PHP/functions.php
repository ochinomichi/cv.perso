<?php
include("./dbConnection.php");
function beginXML(){ // Create the begining of the XML return file
	header("Content-Type: text/xml");
	echo "<?xml version=\"1.0\" encoding=\"utf-8\"?>";
	echo "<list>";
}

function endXML(){ // Create the end of the XML return file
	echo "</list>";
}

function sendCouriel(){
	$sql = "SELECT couriel FROM cv_mail";
	$query = $GLOBALS["bdd"]->query($sql);
	$back = $query->fetch();
	beginXML();
	echo "<item couriel=\"" . $back["couriel"] . "\"/>";
	endXML();
}
?>