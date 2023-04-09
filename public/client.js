document.getElementById("login-form").addEventListener("submit", function(event) {
	event.preventDefault();

	var username = document.getElementById("username").value;
	var header = document.createElement("h1");
	var text = document.createTextNode("Welcome " + username);
	header.appendChild(text);
	document.body.appendChild(header);
});
