<?php
 
//Importando o arquivo DBConfig.php.
include 'DBConfig.php';
 
// Criandoa conexão.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Obtendo o JSON recebido na variável $ json.
 $json = file_get_contents('php://input');
 
 // decodificando o JSON recebido e armazenando na variável $ obj.
 $obj = json_decode($json,true);
 
//Preencha o email do usuário do array JSON $ obj e armazene em $ Email.
$Email = $obj['email_aluno'];
 
// Preencher a senha do array JSON $ obj e armazenar em $ Senha.
$Senha = $obj['senha_aluno'];

//Aplicando consulta de login do usuário com correspondência de e-mail e senha.
$Sql_Query = "select * from aluno where email_aluno = '$Email' and senha_aluno = '$Senha' ";

// Executando Consulta SQL.
$check = mysqli_fetch_array(mysqli_query($con,$Sql_Query));


if(isset($check)){

 $SuccessLoginMsg = 'Data Matched';
 
 // Convertendo a mensagem no formato JSON.
$SuccessLoginJson = json_encode($SuccessLoginMsg);
 
// Eco a mensagem.
 echo $SuccessLoginJson ; 

 }
 
 else{
 
 // Se o registro foi inserido com sucesso, mostre a mensagem.
$InvalidMSG = 'Nome de usuário ou senha inválidos. Por favor, tente novamente' ;
 
// Convertendo a mensagem no formato JSON.
$InvalidMSGJSon = json_encode($InvalidMSG);
 
// Eco a mensagem.
 echo $InvalidMSGJSon ;
 
 }
 
 mysqli_close($con);
?>