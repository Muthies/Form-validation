
  function valphone(phone) {
    if (phone.length != 10) {
      return false;
    }
  
    var first = phone.charAt(0);
    if (!(first == '6' || first == '7' || first == '8' || first == '9')) {
      return false;
    }
  
    for (var i = 0; i < phone.length; i++) {
      if (isNaN(phone.charAt(i))) {
        return false;
      }
    }
  
    return true;
  }
function valemail(email){
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
function valpass(password) {
    if (password.length < 8) {
        return false;
    }

    var hasUppercase = false;
    var hasSpecialChar = false;

    for (var i = 0; i < password.length; i++) {
        var char = password.charAt(i);

        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        } else if (/[^\w\d]/.test(char)) {
            // Using \w (word character) and \d (digit) to check for alphanumeric characters
            // [^\w\d] matches any character that is not alphanumeric
            hasSpecialChar = true;
        }
    }

    return hasUppercase && hasSpecialChar;
}
  function validatePhone() {
    var phoneInput = document.getElementById('phone').value;
    if (!valphone(phoneInput)) {
      alert('Invalid phone number! Please enter a valid 10-digit number starting with 6, 7, 8, or 9.');
    }
  }
  function validateemail(){
    var email = document.getElementById('email').value;
    if(!valemail(email)){
        alert('enter valid emailid')
    }
  }
  function validatepass(){
    var password = document.getElementById('password').value;
    if(!valpass(password)){
        alert('enter valid password/n 1.8 character/n 2.Atleast one uppercase/n 3.Atleast one special character')
    }
  }
  function validateForm() {
    var name = document.getElementById('name').value;
    var userid = document.getElementById('userid').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Your other validation logic here
  
    return true; // or false based on overall validation result
  }
  