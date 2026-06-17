document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const message = document.getElementById('message');

    if(user === 'NAYMEDINA12' && pass === 'Nayson123*') {
        window.location.href = 'dashboard.html';
    } else {
        message.style.color = 'red';
        message.innerText = 'Usuario o contraseña incorrectos';
    }
});
