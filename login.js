document.getElementById('loginForm').addEventListener('submit', function (event) {
	event.preventDefault(); 
			
	var email = document.getElementById('emailInput').value;
	var password = document.getElementById('passwordInput').value;

    alert('Login Successful!');

	window.location.href = 'dashboard.html';
});