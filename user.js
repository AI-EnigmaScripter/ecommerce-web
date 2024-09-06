document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const registerMessage = document.getElementById('register-message');
    const loginMessage = document.getElementById('login-message');
  
    // Placeholder for user data storage
    const users = [];
  
    // Registration form submission
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('reg-username').value;
      const password = document.getElementById('reg-password').value;
  
      if (!username || !password) {
        registerMessage.textContent = 'All fields are required.';
        return;
      }
  
      // Check if username already exists
      if (users.some(user => user.username === username)) {
        registerMessage.textContent = 'Username already exists.';
        return;
      }
  
      // Save new user
      users.push({ username, password });
      registerMessage.textContent = 'Registration successful. You can now log in.';
      registerForm.reset();
    });
  
    // Login form submission
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;
  
      if (!username || !password) {
        loginMessage.textContent = 'All fields are required.';
        return;
      }
  
      // Authenticate user
      const user = users.find(user => user.username === username && user.password === password);
  
      if (user) {
        loginMessage.textContent = 'Login successful. Redirecting to checkout...';
        // Redirect to checkout (simulated here)
        setTimeout(() => {
          window.location.href = 'checkout.html'; // Change to actual checkout page URL
        }, 1000);
      } else {
        loginMessage.textContent = 'Invalid username or password.';
      }
    });
  });
  