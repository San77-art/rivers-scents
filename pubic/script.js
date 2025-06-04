// Função para cadastrar usuário
function cadastrarUsuario(event) {
    event.preventDefault();
  
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagemCadastro");
  
    fetch("cadastrar.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nome, email, senha })
    })
    .then(response => response.json())
    .then(data => {
      if (data.sucesso) {
        mensagem.style.color = "green";
        mensagem.textContent = "Cadastro realizado com sucesso! Redirecionando...";
        setTimeout(() => {
          window.location.href = "login.html";
        }, 2000);
      } else {
        mensagem.textContent = data.mensagem || "Erro ao cadastrar usuário.";
      }
    })
    .catch(error => {
      console.error("Erro:", error);
      mensagem.textContent = "Erro de conexão com o servidor.";
    });
  }
  
  // Função para logar o usuário
  function loginUsuario(event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagemLogin");
  
    fetch("login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, senha })
    })
    .then(response => response.json())
    .then(data => {
      if (data.sucesso) {
        localStorage.setItem("logado", "sim");
        localStorage.setItem("usuario", JSON.stringify(data.usuario)); // opcional
        window.location.href = "index.html";
      } else {
        mensagem.textContent = data.mensagem || "Email ou senha incorretos.";
      }
    })
    .catch(error => {
      console.error("Erro:", error);
      mensagem.textContent = "Erro ao tentar logar.";
    });
  }
  