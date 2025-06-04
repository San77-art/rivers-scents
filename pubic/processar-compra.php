<?php
// Aqui você processaria e salvaria os dados no banco

$nome = $_POST['nome'];
$endereco = $_POST['endereco'];
$cep = $_POST['cep'];
$produto = $_POST['produto'];
$quantidade = $_POST['quantidade'];
$total = $_POST['total'];

echo "<h1>Pedido Confirmado!</h1>";
echo "<p>Obrigado, $nome. Seu pedido de <strong>$produto</strong> foi recebido.</p>";
echo "<p>Total: R$ " . number_format($total, 2, ',', '.') . "</p>";
echo "<p>Enviaremos para o endereço: $endereco - CEP: $cep</p>";
