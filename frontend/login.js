// login.js
const loginUrl = 'http://localhost:3000/api/auth/login';

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Erro durante o login: ' + await response.text());
        }

        const data = await response.json();
        alert(data.message);

        if (data.success) {
            // Armazena o token no localStorage
            localStorage.setItem('token', data.token);

            // Redireciona para a página do CRUD principal após o login bem-sucedido
            window.location.href = 'index.html';
        }
    } catch (error) {
        console.error('Erro durante o login:', error);
        alert('Erro durante o login. Por favor, tente novamente.');
    }
}
