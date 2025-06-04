USE rivers;

-- Listar produtos ordenados por preço atual crescente
SELECT * FROM produto ORDER BY preco_atual ASC;

-- Produtos com desconto
SELECT nome, preco_original, preco_atual, 
       preco_original - preco_atual AS desconto
FROM produto
WHERE preco_atual < preco_original
ORDER BY desconto DESC;

-- Total de vendas por produto (exemplo, considere tabela itempedido e pedido)
SELECT p.nome, SUM(ip.quantidade) AS quantidade_vendida,
       p.preco_atual, SUM(ip.quantidade * ip.preco_unitario) AS total_vendas
FROM produto p
JOIN itempedido ip ON p.id = ip.id_produto
GROUP BY p.id
ORDER BY total_vendas DESC;
