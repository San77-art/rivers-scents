const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Configurar conexão com banco MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'S@n07101979', // sua senha MySQL, se tiver
  database: 'rivers'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Rota para buscar todos os produtos
app.get('/produtos', (req, res) => {
  db.query('SELECT * FROM produtos', (err, results) => {
    if (err) {
      console.error('Erro ao buscar produtos:', err);
      res.status(500).send('Erro ao buscar produtos');
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
