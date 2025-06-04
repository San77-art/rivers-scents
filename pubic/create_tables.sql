CREATE TABLE vendas_perfumes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_produto VARCHAR(255) NOT NULL,
    preco_original DECIMAL(10,2) NOT NULL,
    preco_atual DECIMAL(10,2) NOT NULL,
    quantidade_vendida INT DEFAULT 0,
    data_venda DATE DEFAULT NULL
);
