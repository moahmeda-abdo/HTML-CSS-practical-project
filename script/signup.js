document.querySelector('#signup-form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (!username || !email || !password) {
      alert('All fields are required!');
      return;
    }
  
 
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.email === email);
  
    if (userExists) {
      alert('User already exists!');
      return;
    }
  
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
  
    alert('Signup successful! Please log in.');
    window.location.href = '../pages/login.html'; 
  });
  