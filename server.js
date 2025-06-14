const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Conexão com o banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'S@n07101979', // coloque sua senha se houver
  database: 'rivers'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// 📌 Rota para cadastrar usuário
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

// Rota de login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
  db.query(query, [email, senha], (err, results) => {
    if (err) {
      console.error('Erro ao fazer login:', err);
      res.status(500).send('Erro no servidor');
      return;
    }
    if (results.length > 0) {
      res.status(200).json({ mensagem: 'Login bem-sucedido', usuario: results[0] });
    } else {
      res.status(401).send('Email ou senha inválidos');
    }
  });
});


// 📌 Rota para login de usuário
app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
  db.query(query, [email, senha], (err, results) => {
    if (err) {
      console.error('Erro ao verificar login:', err);
      return res.status(500).send('Erro no servidor');
    }

    if (results.length > 0) {
      const usuario = results[0];
      res.status(200).json({ sucesso: true, usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email } });
    } else {
      res.status(401).json({ sucesso: false, mensagem: 'Email ou senha incorretos.' });
    }
  });
});

// 📌 Rota para registrar compra
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


app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';

  db.query(query, [email, senha], (err, results) => {
    if (err) {
      console.error('Erro no login:', err);
      res.status(500).json({ error: 'Erro no servidor' });
      return;
    }
    if (results.length === 0) {
      res.status(401).json({ error: 'Email ou senha incorretos' });
      return;
    }
    const usuario = results[0];
    delete usuario.senha; // não envie a senha de volta
    res.json({ usuario });
  });
});

app.listen(port, () => {
  console.log(`✅ Servidor rodando em http://localhost:${port}`);
});
