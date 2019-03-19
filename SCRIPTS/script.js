function getXMLHttpRequest(){
	var xhr = null;

	if (window.XMLHttpRequest || window.ActiveXObject) {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		} else {
			xhr = new XMLHttpRequest(); 
		}
	} else {
		alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
		return null;
	}
	
	return xhr;
}

function requestXML(callback, url) {
	var xhr = getXMLHttpRequest();
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			callback(xhr.responseXML);
		} else if (xhr.readyState < 4) {
		}
	};
	xhr.open("GET", url , true);
	xhr.send(null);
}

function askMail(){
	requestXML(addressToCopy, "./PHP/script.php");
}

function addressToCopy(oData) {
	var nodes = oData.getElementsByTagName("item");
	window.prompt ('Adresse mail : ', nodes[0].getAttribute("couriel"));
}

function objectivesDisplay(target){
	if(document.getElementById(target).style.display == "none"){
		document.getElementById(target).style.display = "block";
	}else{
		document.getElementById(target).style.display = "none";
	}
}

function cursorChange(){
	if(document.body.style.cursor != "pointer"){
		document.body.style.cursor = "pointer";
	}else{
		document.body.style.cursor = "default";
	}
}

function dateDiff(d1, d2)
{
	return new Number((d2.getTime() - d1.getTime()) / 31536000000).toFixed(0);
}

/*var today = new Date();
var olday = new Date("1 January 2000");
document.write(dateDiff(olday, today));*/