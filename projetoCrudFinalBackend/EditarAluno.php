
<?php
 
 // Importando o arquivo DBConfig.php.
 include 'DBConfig.php';
  
 // Conectando-se ao banco de dados MySQL.
  $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
  
// Obtendo o JSON recebido na variável $ json.
  $json = file_get_contents('php://input');
  
// decodificando o JSON recebido e armazenando na variável $ obj.
  $obj = json_decode($json,true);
  
// Preencha o ID do aluno da matriz JSON $ obj e armazene em $ S_Nome.
  $S_ID = $obj['id'];
  
// Preencha o nome do aluno da matriz JSON $ obj e armazene em $ S_Nome.
  $S_Nome = $obj['nome_aluno'];
  
  // Preencha o Student Class do array JSON $ obj e armazene em $ S_Classe.
  $S_Classe = $obj['classe_aluno'];
  
// Preencha o número de telefone do aluno da matriz JSON $ obj e armazene em $ S_Telefone.
  $S_Telefone = $obj['telefone_aluno'];
  
  //Preencher Email a partir do array JSON $ obj e armazenar em $ S_Email.
  $S_Email = $obj['email_aluno'];
  
   //Preencher a Senha a partir do array JSON $ obj e armazenar em $ S_Senha.
  $S_Senha = $obj['senha_aluno'];
  
  // Criando consulta SQL e insere o registro na tabela de banco de dados MySQL.
  $Sql_Query = "UPDATE aluno SET nome_aluno = '$S_Nome', classe_aluno = '$S_Classe', telefone_aluno = '$S_Telefone', email_aluno = '$S_Email', senha_aluno = '$S_Senha' WHERE id = $S_ID";
  
  if(mysqli_query($con,$Sql_Query)){
  
  // Se o registro foi inserido com sucesso, mostre a mensagem.
 $MSG = 'Registro atualizado com sucesso.' ;
  
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