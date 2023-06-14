
// first section 
const  inputField = document.getElementById('firstname');
const  displaySpan = document.getElementById('display-firstname');

// keyup to the first section 
inputField.addEventListener('keyup', function(event) {
  // this line display the displayspan textconrny 
 displaySpan.innerHTML = ` <br>
  ${inputField.value}`;
    });




    // section 2
 const ageInput = document.getElementById('age');
 const hardTruthSection = document.getElementById('a-hard-truth');

  ageInput.addEventListener('keyup', function() {
    const age = parseInt(ageInput.value);

    if (age < 18) {
      hardTruthSection.style.visibility = 'hidden';
  
    } else {
      hardTruthSection.style.visibility = 'visible';
      hardTruthSection.style.color = "green";
      console.log("text is: ", hardTruthSection.textContent)
    }
  });
  

  // section 3
  document.addEventListener('DOMContentLoaded', function() {
    var passwordInput = document.getElementById('pwd');
    var confirmPasswordInput = document.getElementById('pwd-confirm');
    var section = document.querySelectorAll('section');
    
   
    const section3 = section[3];
    console.log( "section 3 is: ", section3);
   
    const  messageElement = document.createElement('div');
    messageElement.id = 'password-message';
    section3.append(messageElement);



    
    function updatePasswordMessage() {
      var password = passwordInput.value.trim();
      var confirmPassword = confirmPasswordInput.value.trim();
    
      if (password === confirmPassword && password !== "") {
        if (/\s/.test(password)) {
          messageElement.textContent = "Passwords should not contain white spaces!";
          messageElement.style.color = "red";
        } else {
          messageElement.textContent = "Passwords match!";
          messageElement.style.color = "green";
        }
      } else {
        messageElement.textContent = "Passwords do not match!";
        messageElement.style.color = "red";
      }
    }
    
    passwordInput.addEventListener('keyup', updatePasswordMessage);
    confirmPasswordInput.addEventListener('keyup', updatePasswordMessage);
  });

  