-- Criação da tabela de produtos
CREATE TABLE produtos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  preco DECIMAL(10,2),
  estoque INT,
  descricao TEXT,
  imagem_url VARCHAR(255)
);

-- Criação da tabela de pedidos
CREATE TABLE pedidos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  id_produto INT,
  quantidade INT,
  data_pedido DATE,
  FOREIGN KEY (id_produto) REFERENCES produtos(id)
);

-- Inserção dos produtos
INSERT INTO produtos (nome, preco, estoque, descricao, imagem_url) VALUES
('Shaheen Silver', 315.00, 10, 'Perfume elegante com notas intensas.', 'shaheen.jpg'),
('Fakhar Rose', 279.90, 8, 'Rosa doce e sofisticada.', 'fakhar.jpg'),
('Tharwah Silver', 309.99, 12, 'Fresco, poderoso e envolvente.', 'tharwah.jpg');

-- Inserir um cliente
INSERT INTO clientes (nome, email, senha) VALUES ('João Silva', 'joao@example.com', 'senha123');

-- Inserir uma categoria
INSERT INTO categorias (nome, descricao) VALUES ('Perfumes Masculinos', 'Fragrâncias para homens');

-- Inserir um produto
INSERT INTO produtos (nome, descricao, preco, estoque, categoria_id) 
VALUES ('Perfume X', 'Descrição do Perfume X', 99.90, 50, 1);

-- Atualizar o estoque de um produto
UPDATE produtos SET estoque = 45 WHERE id = 1;

-- Remover um cliente
DELETE FROM clientes WHERE id = 1;

-- Selecionar todos os produtos
SELECT * FROM produtos;

-- Selecionar pedidos de um cliente específico
SELECT * FROM pedidos WHERE cliente_id = 1;

