const formvalue = document.getElementById("form");
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userSubject = document.getElementById("subject");
const userMessage = document.getElementById("message");
const regx = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

var error =0;


formvalue.addEventListener('submit', (e) => {
    e.preventDefault;
    nameValue = userName.value;
    emailValue = userEmail.value;
    subjectValue = userSubject.value;
    messageValue = userMessage.value;
    error =0;
    checkInput();
    if(error == 0){
        formvalue.reset();
    }

})

function checkInput() {
    
    if (nameValue === '' || nameValue[0] === ' ') {
        document.getElementById("name-error").style.visibility = "visible"
        userName.style.borderColor = "red";
        error = 1;
    } else {
        document.getElementById("name-error").style.visibility = "hidden"
        userName.style.borderColor = "";
    }
    if (emailValue === '' || !emailValue.match(regx)) {
        document.getElementById("email-error").style.visibility = "visible"
        error = 1;
        userEmail.style.borderColor = "red";
    } else {
        document.getElementById("email-error").style.visibility = "hidden"
        userEmail.style.borderColor = "";
    }
    if (subjectValue === '' || subjectValue[0] === ' ') {
        document.getElementById("subject-error").style.visibility = "visible"
        error = 1;
        userSubject.style.borderColor = "red";
    } else {
        document.getElementById("subject-error").style.visibility = "hidden"
        userSubject.style.borderColor = "";
    }
    if (messageValue === '' || messageValue[0] === ' ') {
        document.getElementById("message-error").style.visibility = "visible"
        error = 1;
        userMessage.style.borderColor = "red";
    } else {
        document.getElementById("message-error").style.visibility = "hidden"
        userMessage.style.borderColor = "";
    }
}