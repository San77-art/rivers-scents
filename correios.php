<?php
$cepDestino = $_GET['cep'];
$cepOrigem = '01001-000'; // CEP da sua loja

$url = "https://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?" .
       "nCdEmpresa=&sDsSenha=&nCdServico=04014&sCepOrigem=$cepOrigem" .
       "&sCepDestino=$cepDestino&nVlPeso=1&nCdFormato=1&nVlComprimento=20" .
       "&nVlAltura=20&nVlLargura=20&nVlDiametro=0&sCdMaoPropria=n" .
       "&nVlValorDeclarado=0&sCdAvisoRecebimento=n&StrRetorno=xml";

$response = file_get_contents($url);
echo $response;
?>
