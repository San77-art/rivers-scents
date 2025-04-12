<?php
// Simulação: dados do produto (em um sistema real, você buscaria isso do banco de dados)
$produto = [
  'nome' => 'Shaheen Silver',
  'preco' => 315.00,
  'imagem' => 'shaheen.jpg'
];

// Total (ex: quantidade 1 fixa para simplicidade)
$quantidade = 1;
$total = $produto['preco'] * $quantidade;
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Finalizar Compra - Rivers</title>
  <link rel="stylesheet" href="style.css"> <!-- Seu CSS -->
</head>
<body>
  <div class="checkout-container" style="max-width: 600px; margin: auto; padding: 20px;">
    <h1>Finalizar Compra</h1>

    <div class="produto" style="display: flex; gap: 20px; margin-bottom: 20px;">
      <img src="<?= $produto['imagem'] ?>" alt="<?= $produto['nome'] ?>" style="width: 120px; border-radius: 10px;">
      <div>
        <h2><?= $produto['nome'] ?></h2>
        <p>Quantidade: <?= $quantidade ?></p>
        <p>Preço unitário: R$ <?= number_format($produto['preco'], 2, ',', '.') ?></p>
        <h3>Total: R$ <?= number_format($total, 2, ',', '.') ?></h3>
      </div>
    </div>

    <form action="processar-compra.php" method="POST">
      <label>Nome Completo:</label><br>
      <input type="text" name="nome" required><br><br>

      <label>Endereço:</label><br>
      <input type="text" name="endereco" required><br><br>

      <label>CEP:</label><br>
      <input type="text" name="cep" required><br><br>

      <input type="hidden" name="produto" value="<?= $produto['nome'] ?>">
      <input type="hidden" name="quantidade" value="<?= $quantidade ?>">
      <input type="hidden" name="total" value="<?= $total ?>">

      <button type="submit" style="padding: 10px 20px;">Finalizar Pedido</button>
    </form>
  </div>
</body>
</html>
