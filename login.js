document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Login bem-sucedido
            window.location.href = 'index.html'; // Redireciona para a página de cadastro de alunos
        })
        .catch((error) => {
            console.error('Erro ao fazer login: ', error.message);
            alert('Falha ao entrar: ' + error.message);
        });
});
