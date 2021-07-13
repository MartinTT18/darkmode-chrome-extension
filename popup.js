changeTheme = document.getElementById("changeTheme");
clicked = false;


changeTheme.addEventListener("click", function(){
	if (clicked){
		clicked = false;
		changeTheme.style.backgroundColor = "white";
		changeTheme.style.color = "black";
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {switch: "false"}, function(response){
				console.log(response);
			});
		});
	}
	else{
		clicked = true;
		changeTheme.style.backgroundColor = "black";
		changeTheme.style.color = "white";
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  			chrome.tabs.sendMessage(tabs[0].id, {switch: "true"}, function(response){
  				console.log(response);
  			});
		});
	}
});