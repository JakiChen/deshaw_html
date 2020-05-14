$(document).ready(function() {
	$("#requestNewPasswordButton").keypress(function(event) {
	    if (event.which == 13) {
	        event.preventDefault();
	        forgotPasswordCall();
	    }
	});
	$("#returnToLoginPage").keypress(function(event) {
		if(event.which == 13) {
			event.preventDefault();
			$("#returnToLoginPage > a:first")[0].click();
		}
	});
});

function checkAll(theForm) {
        flag = checkforBlank();
        if(flag == -1){
           
        $("#strutsMsg").removeClass("show");
   		$("#strutsMsg").addClass("hide");
   		
   		$("#validationMsg").removeClass("hide");
   		$("#validationMsg").addClass("show");
   		$("#validationMsg").contents().text("Blank spaces are not allowed in the User ID.");
           return false;
        }
         
           
        if((document.forgotPassword.username.value == "")) {
                $("#strutsMsg").removeClass("show");
        		$("#strutsMsg").addClass("hide");
        		
        		$("#validationMsg").removeClass("hide");
        		$("#validationMsg").addClass("show");
        		$("#validationMsg").contents().text("Please enter your User ID.");
                return false;
	  }
        return true;
     // disableSubmitButton(theForm);
}
function checkforBlank()
{
  var userName =document.forgotPassword.username.value;
  for (i=0;i<userName.length-1;i++)
      if(userName.charAt(i) == ' ')
         return -1;
  return 1;
}

function getCurrentYear() {
	return (new Date()).getFullYear();
}

function forgotPasswordCall() {
	if(checkAll(document.forgotPassword)){
		document.forgotPassword.submit();
	}
}

