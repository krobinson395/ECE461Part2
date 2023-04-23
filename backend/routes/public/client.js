document.getElementById("login-form").addEventListener("submit", function(event) {
	event.preventDefault();

	var username = document.getElementById("username").value;
	var header = document.getElementById("welcome-header");
	if(header) {
		console.log(event.submitter.name);
		if(event.submitter.name === "register-button")
		{
			header.textContent = "Welcome New User to Ver4!"
		}
		else
		{
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
			text = document.createTextNode("Welcome New User to Ver4!");
		}
		else
		{
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
