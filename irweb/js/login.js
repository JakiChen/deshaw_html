//document.querySelector('#p').addEventListener('keypress', function (e) {
//    var key = e.which || e.keyCode;
//    if (key === 13) { // 13 is enter
//    	loginCall();
//    }
//});

$(document).ready(function() {
	$("#loginForm").keypress(function(event) {
		if (event.which == 13) {
			if($(document.activeElement).is('a') == false) {
				event.preventDefault();
				loginCall();
			}
		}
	});
});

function checkAll(theForm) {
	var flag=0;
	if((document.login.username.value != "")&&(document.login.password.value != "")) {
		flag=checkBlanks();
		if (flag == 1) {
			return true;
		} else {
			
			//alert("Please enter valid User ID and Password");
			$("#validationMsg").removeClass("hide");
			$("#validationMsg").addClass("show");
			
			$("#strutsMsg").removeClass("show");
			$("#strutsMsg").addClass("hide");
			
			$("#validationMsg").contents().text("Blank spaces are not allowed in the User ID and Password.");
			
			return false;
		}
	} else {
		$("#strutsMsg").removeClass("show");
		$("#strutsMsg").addClass("hide");
		
		$("#validationMsg").removeClass("hide");
		$("#validationMsg").addClass("show");
		$("#validationMsg").contents().text("Please enter valid User ID and Password.");
		return false;
	}
	return true;
}

function checkBlanks() {
	if((document.login.username.value.indexOf(' ') != -1) || (document.login.password.value.indexOf(' ') != -1)) {
		return -1;
	} else {
		return 1;
	}
}

function getCurrentYear() {
	return (new Date()).getFullYear();
}

function loginCall() {
	if(checkAll(document.login)){
		document.login.submit();
	}
}

