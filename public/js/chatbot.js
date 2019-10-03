var XMLHttpRequestObject = false;

if (window.XMLHttpRequest) {

	XMLHttpRequestObject = new XMLHttpRequest();

} else if (window.ActiveXObject) {

	XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}


function getData(dataSource){
	if(XMLHttpRequestObject) {
		XMLHttpRequestObject.open("GET", dataSource);
		XMLHttpRequestObject.onreadystatechange = function(){
			if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200){
				var div = document.createElement("div");
				div.classList.add('balloon');
				div.classList.add('bot');
				var li = document.createElement("li");
				var textnode = document.createTextNode(XMLHttpRequestObject.responseText);
				div.appendChild(textnode);
				li.appendChild(div);
				document.getElementById("messages").appendChild(li);
			}
		}
		XMLHttpRequestObject.send(null);
	}
}

function get_reply(){
	var msg = document.getElementById('message-box');
	if (msg.value.length > 0){
		var msg_ = "/reply?message="+msg.value;

		// me
		var div = document.createElement("div");
		div.classList.add('balloon');
		div.classList.add('user');
		var li = document.createElement("li");
		var textnode = document.createTextNode(msg.value);
		div.appendChild(textnode);
		li.appendChild(div);
		document.getElementById("messages").appendChild(li);

		// bot
		msg.value = "";
		var reply = getData(msg_);
	}
}
