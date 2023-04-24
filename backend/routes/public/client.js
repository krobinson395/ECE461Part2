async function registerUser(username, password)  {
	var raw = "{\n   \"username\": \"" + username + "\",\n \"password\":\"" + password + "\",\n \"isAdmin\":true}\n";

	var requestOptions = {
		method: 'POST',
		body: raw,
		headers: new Headers({'content-type': 'application/json'}),
		redirect: 'follow'
	};
	console.log("Registering User");
	fetch("http://104.198.158.42:8080/register", requestOptions)
	.then(response => response.text())
	.then(result => console.log(result))
	.catch(error => console.log(error));

	
	//return [result, error];
}
async function userLogin(username, password)  {
	var raw = "{\n    \"User\": {\n    \"name\": \"" + username + "\",\n   \"isAdmin\": true\n},\n \"Secret\": {\n   \"password\": \"" + password  + "\"\n  }\n }";
	var requestOptions = {
		method: 'PUT',
		body: raw,
		headers: new Headers({'content-type': 'application/json'}),
		redirect: 'follow'
	};
	console.log("Logging in User");
	fetch("http://104.198.158.42:8080/authenticate", requestOptions)
	.then(response => response.text())
	.then(result => console.log(result))
	.catch(error => console.log('error', error));

	//return [result, error];
}

document.getElementById("login-form").addEventListener("submit", function(event) {
	event.preventDefault();

	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var header = document.getElementById("welcome-header");
	if(header) {
		console.log(event.submitter.name);
		if(event.submitter.name === "register-button")
		{     
			registerUser(username, password);

			header.textContent = "Welcome New User to Ver4!"
		}
		else
		{
			userLogin(username, password);

			header.textContent = "Welcome " + username + "!";
		}
	}
	else {
		header = document.createElement("h1");
		header.setAttribute("id", "welcome-header");
		var text;
		console.log(event.submitter.name);
		if(event.submitter.name === "register-button")
		{
			registerUser(username, password);
			text = document.createTextNode("Welcome New User to Ver4!");
		}
		else
		{
			userLogin(username, password);
			text = document.createTextNode("Welcome " + username + "!");
		}
		header.appendChild(text);
		document.getElementById("welcome-message").appendChild(header);
	}
	document.getElementById("username").value = "";
	document.getElementById("password").value = "";
});


document.getElementById("ingestion-form").addEventListener("submit", function(event) {
	event.preventDefault();
	var ingestionUrl = document.getElementById("ingestion-url").value;
	var statusCheck = document.getElementById("ingest-status");
	if(statusCheck)
	{
		statusCheck.textContent = "Processing URL";
	}
	else
	{
		statusCheck = document.createElement("p");
		statusCheck.setAttribute("id", "ingest-status");
		var text = document.createTextNode("Processing URL");
		statusCheck.appendChild(text);
		document.getElementById("ingest-status").appendChild(statusCheck);
	}
	document.getElementById("ingestion-url").value ="";
});

document.getElementById("search-form").addEventListener("submit", function(event) {
	event.preventDefault();
	var searchCommand = document.getElementById("search-box").value;
	var searchMessage = document.getElementById("search-message");
	if(searchMessage)
	{
		searchMessage.textContent = "You searched for " + searchCommand;
	}
	else
	{
		searchMessage = document.createElement("p");
		searchMessage.setAttribute("id", "search-message");
		var text = document.createTextNode("You searched for " + searchCommand);
		searchMessage.appendChild(text);
		document.getElementById("search-message").appendChild(searchMessage);
	}
	document.getElementById("search-box").value = "";
});

document.getElementById("list-all").addEventListener("click", function() {
	var msg = document.getElementById("search-message");
	if(msg)
	{
		msg.textContent = "You requested a list of all packages";
	}
	else
	{
		msg = document.createElement("p");
		msg.setAttribute("id", "search-message");
		var text = document.createTextNode("You requested a list of all packages");
		msg.appendChild(text);
		document.getElementById("search-message").appendChild(searchMessage);
	}
});
