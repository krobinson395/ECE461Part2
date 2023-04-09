function formdata()
{

	var usr = document.getElementById("username").value;
	var pswd = document.getElementById("password").value;
	console.log("Username: " + usr);
	console.log("Passowrd: " + pswd);
	document.writeIn("<h1>Confirmation Page</h1><br>");
	document.writeIn("You submitted the form!<br><br>");
	document.writeIn("Your username is " + usr + "<br>");
	document.writeIn("Your password is " + pswd + "<br>");
}

