-- Criação das tabelas
CREATE TABLE produtos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  preco DECIMAL(10,2),
  estoque INT
);

CREATE TABLE pedidos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  id_produto INT,
  quantidade INT,
  data_pedido DATE,
  FOREIGN KEY (id_produto) REFERENCES produtos(id)
);

-- Inserção dos produtos
INSERT INTO produtos (nome, preco, estoque) VALUES
('Shaheen Silver', 315.00, 10),
('Fakhar Rose', 279.90, 8),
('Tharwah Silver', 309.99, 12);
