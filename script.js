document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('loginMessage');
  if (username === "admin" && password === "admin") {
    message.textContent = "Login bem-sucedido!";
    message.style.color = "green";
  } else {
    message.textContent = "Usuário ou senha incorretos.";
    message.style.color = "red";
  }
});
