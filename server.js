const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // coloque sua senha, se houver
  database: 'rivers'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Rota para cadastrar usuário
app.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;
  const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
  db.query(query, [nome, email, senha], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar usuário:', err);
      res.status(500).send('Erro no servidor');
      return;
    }
    res.status(201).send('Usuário cadastrado com sucesso');
  });
});

// Rota para registrar compra
app.post('/comprar', (req, res) => {
  const { usuario_id, produto, valor } = req.body;
  const query = 'INSERT INTO compras (usuario_id, produto, valor) VALUES (?, ?, ?)';
  db.query(query, [usuario_id, produto, valor], (err, result) => {
    if (err) {
      console.error('Erro ao registrar compra:', err);
      res.status(500).send('Erro no servidor');
      return;
    }
    res.status(201).send('Compra registrada com sucesso');
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
