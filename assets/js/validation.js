const formvalue = document.getElementById("submit-form");
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userSubject = document.getElementById("subject");
const userMessage = document.getElementById("message");
const regx = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

var flag = 0;


formvalue.addEventListener('submit', (e) => {
  e.preventDefault;
  nameValue = userName.value;
  emailValue = userEmail.value;
  subjectValue = userSubject.value;
  messageValue = userMessage.value;
  flag = 0;
  checkInput();
  if (flag == 0) {
    console.log("flag is 0");
    submitformurl();
    formvalue.reset();
    document.getElementById("submitted-msg").style.display = "block";
    return false;
  } else {
    return false;
  }

})

function checkInput() {

  if (nameValue === '') {
    document.getElementById("name-error").innerHTML = "Name cannot be empty";
    userName.style.borderColor = "red";
    flag = 1;
  } else if (nameValue[0] === ' ') {
    document.getElementById("name-error").innerHTML = "There should be no space before name";
    userName.style.borderColor = "red";
    flag = 1;
  } else {
    document.getElementById("name-error").innerHTML = ""
    userName.style.borderColor = "";
  }
  if (emailValue === '') {
    document.getElementById("email-error").innerHTML = "Email cannot be empty";
    userEmail.style.borderColor = "red";
    flag = 1;
  } else if (!emailValue.match(regx)) {
    document.getElementById("email-error").innerHTML = "Email is invalid";
    userEmail.style.borderColor = "red";
    flag = 1;
  } else {
    document.getElementById("email-error").innerHTML = ""
    userEmail.style.borderColor = "";
  }
  if (subjectValue === '') {
    document.getElementById("subject-error").innerHTML = "Subject cannot be empty";
    userSubject.style.borderColor = "red";
    flag = 1;
  } else if (subjectValue[0] === ' ') {
    document.getElementById("subject-error").innerHTML = "There should be no space before Subject";
    userSubject.style.borderColor = "red";
    flag = 1;
  } else {
    document.getElementById("subject-error").innerHTML = ""
    userSubject.style.borderColor = "";
  }
  if (messageValue === '') {
    document.getElementById("message-error").innerHTML = "Message cannot be empty";
    userMessage.style.borderColor = "red";
    flag = 1;
  } else if (messageValue[0] === ' ') {
    document.getElementById("message-error").innerHTML = "There should be no space before Message";
    userMessage.style.borderColor = "red";
    falg = 1;
  } else {
    document.getElementById("message-error").innerHTML = ""
    userMessage.style.borderColor = "";
  }
}