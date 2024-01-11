
  function validation() {  
    var Name = document.getElementById("Name");
    var Email = document.getElementById("Email");
    var Message = document.getElementById("Message");
    var NamePattern = /^[A-Za-z]+/;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var errorMessage = document.getElementById("errorMessage");
    
    

    if(Name.value === "" || !NamePattern.test(Name.value)&& Email.value === "" && Message.value === "" )
    {
        errorName.innerHTML = "Invalid Name !";
        errorEmail.innerHTML = "Invalid Email !";
        errorMessage.innerHTML = "Please Enter a Message !";
        return false; 
    }

    if (Name.value === "" || !NamePattern.test(Name.value)) {
        errorName.innerHTML = "Invalid Name !";
        errorEmail.innerHTML = "";
        errorMessage.innerHTML = "";
        return false;
    }
    if (Email.value === "") {
        errorName.innerHTML = "";
        errorMessage.innerHTML = "";
        errorEmail.innerHTML = "Invalid Email !";
        return false;
    }else if (!emailRegex.test(Email.value)) {
        errorName.innerHTML = "";
        errorMessage.innerHTML = "";
        errorEmail.innerHTML = "Invalid Email !";
        return false;}
    if (Message.value === "") {
        errorName.innerHTML = "";
        errorEmail.innerHTML = "";
        errorMessage.innerHTML = "Please Enter a Message !";
        return false; 
    }
    return true; 
}



