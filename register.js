document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var fullNameInput = document.querySelector('input[type="text"]');
    var emailInput = document.querySelector('input[type="email"]');
    var passwordInput = document.querySelector('input[type="password"]');

    var fullName = fullNameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;

    alert('Signing up successful!');

    fullNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';

    window.location.href='signup.html';
  });