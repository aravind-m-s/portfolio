const formvalue = document.getElementById("form");
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userSubject = document.getElementById("subject");
const userMessage = document.getElementById("message");
const regx = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

var error = 0;

formvalue.addEventListener('submit', (e) => {
    e.preventDefault;
    nameValue = userName.value;
    emailValue = userEmail.value;
    subjectValue = userSubject.value;
    messageValue = userMessage.value;
    checkInput();
    if(error == 0){
        formvalue.submit();
        formvalue.reset();
        return false;
    }

})

function checkInput() {
    if (nameValue === '' || nameValue === null) {
        document.getElementById("name-error").style.visibility = "visible"
        error =1;
    } else {
        document.getElementById("name-error").style.visibility = "hidden"
        error1=0;
    }
    if (emailValue === '' || emailValue === null || !emailValue.match(regx)) {
        document.getElementById("email-error").style.visibility = "visible"
        error = 1;
    } else {
        document.getElementById("email-error").style.visibility = "hidden"
        error2=0;
    }
    if (subjectValue === '' || subjectValue === null) {
        document.getElementById("subject-error").style.visibility = "visible"
        error = 1;
    } else {
        document.getElementById("subject-error").style.visibility = "hidden"
        error3=0;
    }
    if (messageValue === '' || messageValue === null) {
        document.getElementById("message-error").style.visibility = "visible"
        error = 1;
    } else {
        document.getElementById("message-error").style.visibility = "hidden"
        error4 = 0;
    }
}