function setURL(url, id){
	var selected_url = "";

	if (id == "home_button")
	{
		selected_url = "welcome_page.html";
	}
	else{
		selected_url = "welcome_page.html";
	}
	document.getElementById('main_page').src = selected_url;
}