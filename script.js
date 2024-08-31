const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName() {
  const name = document.getElementById("contact-name").value;

  if (name.length === 0) {
    nameError.innerHTML = "Name is required";
    return false;
  } 
  else if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  } 
  else {
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}

function validatePhone() {
  const phone = document.getElementById("contact-phone").value;

  if (phone.length === 0) {
    phoneError.innerHTML = "Phone no. required";
    return false;
  } 
  else if (phone.length !== 10) {
    phoneError.innerHTML = "Phone no should be 10 digits";
    return false;
  }
   else if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only digits please";
    return false;
  } 
  else {
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}

function validateEmail() {
  const email = document.getElementById("contact-email").value;

  if (email.length === 0) {
    emailError.innerHTML = "Email is required";
    return false;
  } 
  else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "Email invalid";
    return false;
  } 
  else {
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}

function validateMessage() {
  const message = document.getElementById("contact-message").value;
  const required = 50;
  const left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + " more characters required";
    return false;
  } 
  else {
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}


function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix erorr to submit';
        setTimeout(()=>{
            submitError.style.display = 'none';
        },3000)
        return false;

    }
}