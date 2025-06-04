const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const PORT = 3000;

// Configurar conexão com o banco
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // sua senha
  database: 'rivers' // nome do banco criado
});

// Conectar ao banco
db.connect(err => {
  if (err) throw err;
  console.log('Conectado ao banco de dados!');
});

// Servir arquivos HTML
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Exemplo de rota para registrar uma venda (POST)
app.post('/venda', (req, res) => {
  const { produto_id, quantidade, valor_total } = req.body;
  const query = 'INSERT INTO vendas (produto_id, quantidade, valor_total) VALUES (?, ?, ?)';
  db.query(query, [produto_id, quantidade, valor_total], (err, result) => {
    if (err) throw err;
    res.send('Venda registrada com sucesso!');
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
