localStorage.setItem("logado", "sim"); // no login
localStorage.removeItem("logado"); // no logout
localStorage.setItem("usuario", nomeDigitado);
const nome = localStorage.getItem("usuario");
if (nome) {
  menu.innerHTML = `<span class="mr-2">Olá, ${nome}</span> <a href="logout.html" class="hover:text-yellow-400 transition">Logout</a>`;
}

// logout.html
<script>
  localStorage.removeItem("logado");
  localStorage.removeItem("usuario");
  window.location.href = "index.html";
</script>

// No cadastro
const usuario = {
    nome: nomeDigitado,
    email: emailDigitado,
    senha: senhaDigitada,
  };
  localStorage.setItem("usuario", JSON.stringify(usuario));

  const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));
if (emailDigitado === usuarioSalvo.email && senhaDigitada === usuarioSalvo.senha) {
  // Logar
}

if (localStorage.getItem("logado") !== "sim") {
    window.location.href = "login.html";
  }
  
