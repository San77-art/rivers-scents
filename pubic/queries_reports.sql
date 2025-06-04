-- Listar todos os produtos ordenados pelo preço atual crescente
SELECT * FROM vendas_perfumes
ORDER BY preco_atual ASC;

-- Produtos com desconto (preço atual menor que o original)
SELECT nome_produto, preco_original, preco_atual, 
       preco_original - preco_atual AS desconto
FROM vendas_perfumes
WHERE preco_atual < preco_original
ORDER BY desconto DESC;

-- Total de vendas por produto
SELECT nome_produto, quantidade_vendida, preco_atual,
       (quantidade_vendida * preco_atual) AS total_vendas
FROM vendas_perfumes
ORDER BY total_vendas DESC;

