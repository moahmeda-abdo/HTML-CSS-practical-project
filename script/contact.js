document.querySelector('#contact-form').addEventListener('submit', (event) => {
    event.preventDefault(); 
  
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
  
    alert(`Thank you for reaching out, ${name}! We have received your message.`);
    
    document.querySelector('#contact-form').reset();
  });
  