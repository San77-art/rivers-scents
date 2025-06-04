-- Exemplo de atualização de quantidade vendida e data da venda
UPDATE vendas_perfumes
SET quantidade_vendida = quantidade_vendida + 5,
    data_venda = CURDATE()
WHERE id = 1;
