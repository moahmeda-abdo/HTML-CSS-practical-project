
document.addEventListener('DOMContentLoaded', () => {
    const profileDetails = document.getElementById('profile-details');
    const logoutBtn = document.getElementById('logout-btn');

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUserEmail = localStorage.getItem('currentUserEmail');


    const currentUser = users.find(user => user.email === currentUserEmail);

    if (currentUser) {
        profileDetails.innerHTML = `
        <p><strong>Username:</strong> ${currentUser.username}</p>
        <p><strong>Email:</strong> ${currentUser.email}</p>
      `;
    } else {

        window.location.href = '../pages/login.html';
    }

    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('currentUserEmail');
        window.location.href = '../pages/login.html';
    });
});
