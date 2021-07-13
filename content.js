allElements = document.getElementsByTagName("*");
og_color = [];
og_bgcolor = [];

for (i=0;i<allElements.length;i++){
	og_color[i] = allElements[i].style.color;
	og_bgcolor[i] = allElements[i].style.backgroundColor;
}
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log(request,sender,sendResponse);
		if (request.switch == "true"){
			sendResponse('Done');
			for (i=0;i<allElements.length;i++){
				allElements[i].style.color = "white";
				allElements[i].style.backgroundColor = "black";
			}
		}
		else if(request.switch == "false"){
			sendResponse('Original!');
			for (i=0;i<allElements.length;i++){
				allElements[i].style.color = og_color[i];
				allElements[i].style.backgroundColor = og_bgcolor[i];
			}
		}
		
  });