USE rivers;

DELIMITER $$

CREATE TRIGGER atualiza_preco_atualizacao
BEFORE UPDATE ON produto
FOR EACH ROW
BEGIN
  IF NEW.preco_atual <> OLD.preco_atual THEN
    SET NEW.data_atualizacao = CURDATE();
  END IF;
END$$

DELIMITER ;
