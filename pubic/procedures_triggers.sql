DELIMITER $$

CREATE TRIGGER atualiza_data_venda
BEFORE UPDATE ON vendas_perfumes
FOR EACH ROW
BEGIN
  IF NEW.quantidade_vendida <> OLD.quantidade_vendida THEN
    SET NEW.data_venda = CURDATE();
  END IF;
END$$

DELIMITER ;
