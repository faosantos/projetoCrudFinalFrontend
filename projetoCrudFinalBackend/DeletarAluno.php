
<?php
 
 // Importando o arquivo DBConfig.php.
 include 'DBConfig.php';
  
 // Conectando-se ao banco de dados MySQL.
  $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
  
  // Obtendo o JSON recebido na variável $ json.
  $json = file_get_contents('php://input');
  
  // Obtendo o recebido, codificando o JSON recebido e armazenando em $ obj variável.d JSON na variável $ json.
  $obj = json_decode($json,true);
  
  // Preencha o ID do aluno da matriz JSON $ obj e armazene em $ S_ID.
  $S_ID = $obj['id'];
  
// Criando consulta SQL e atualizando o registro atual na tabela de banco de dados MySQL.
 $Sql_Query = "DELETE FROM aluno WHERE id = '$S_ID'" ;
  
  
  if(mysqli_query($con,$Sql_Query)){
  
  // Se o registro foi inserido com sucesso, mostre a mensagem.
 $MSG = 'Registro excluído com sucesso.' ;
  
// Convertendo a mensagem no formato JSON.
 $json = json_encode($MSG);
  
 // Eco a mensagem.
  echo $json ;
  
  }
  else{
  
  echo 'Tente novamente';
  
  }
  mysqli_close($con);
 ?>