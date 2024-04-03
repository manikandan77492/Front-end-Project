//Login Page Script

function loginUser(event) {
  event.preventDefault(); 

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  
  if (username === 'username' && password === 'password') {
      
      alert('Login successful! Redirecting to the home page.');
      
      window.location.href = 'index.html'; 
  } else {
      
      alert('Invalid username or password. Please try again.');
  }
}


document.getElementById('loginForm').addEventListener('submit', loginUser);



