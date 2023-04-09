document.getElementById("login-form").addEventListener("submit", function(event) {
	event.preventDefault();

	var username = document.getElementById("username").value;
	var header = document.getElementById("welcome-header");
	if(header) {
		header.textContent = "Welcome " + username;
	}
	else {
		header = document.createElement("h1");
		header.setAttribute("id", "welcome-header");
		var text = document.createTextNode("Welcome " + username);
		header.appendChild(text);
		document.getElementById("welcome-message").appendChild(header);
	}
	document.getElementById("username").value = "";
	document.getElementById("password").value = "";
});

document.getElementById("ingestion-form").addEventListener("submit", function(event) {
	event.preventDefault();
	var ingestionUrl = document.getElementById("ingestion-url").value;

	var message = document.createElement("p");
	var text = document.createTextNode("ingesting URL");
	message.appendChild(text);
	document.getElementById("ingestion-form").appendChild(message);
	document.getElementById("ingestion-url").value ="";
});
