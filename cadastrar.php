<?php
// Configurações do banco de dados
$host = "localhost";
$dbname = "seu_banco";
$user = "seu_usuario";
$pass = "sua_senha";

// Cabeçalhos para permitir requisições de outros domínios (CORS)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Conecta ao banco
$conn = new mysqli($host, $user, $pass, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    echo json_encode(["sucesso" => false, "mensagem" => "Erro ao conectar com o banco de dados."]);
    exit;
}

// Recebe os dados JSON do frontend
$data = json_decode(file_get_contents("php://input"), true);

// Valida campos
if (!isset($data['nome'], $data['email'], $data['senha'])) {
    echo json_encode(["sucesso" => false, "mensagem" => "Dados incompletos."]);
    exit;
}

$nome = $conn->real_escape_string($data['nome']);
$email = $conn->real_escape_string($data['email']);
$senha = password_hash($data['senha'], PASSWORD_DEFAULT); // Criptografa a senha

// Verifica se o e-mail já está cadastrado
$sql_check = "SELECT id FROM usuarios WHERE email = '$email'";
$result_check = $conn->query($sql_check);
if ($result_check->num_rows > 0) {
    echo json_encode(["sucesso" => false, "mensagem" => "E-mail já cadastrado."]);
    exit;
}

// Insere no banco
$sql = "INSERT INTO usuarios (nome, email, senha) VALUES ('$nome', '$email', '$senha')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["sucesso" => true]);
} else {
    echo json_encode(["sucesso" => false, "mensagem" => "Erro ao cadastrar usuário."]);
}

$conn->close();
?>
