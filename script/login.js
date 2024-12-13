document.querySelector('#login-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (!email || !password) {
    alert('Both fields are required!');
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    localStorage.setItem('currentUserEmail', email);
    window.location.href = 'profile.html'; 
  } else {
    alert('Invalid credentials!');
  }
});
