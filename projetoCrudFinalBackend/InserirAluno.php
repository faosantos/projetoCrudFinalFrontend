
<?php
 
 // Importando o arquivo DBConfig.php.
 include 'DBConfig.php';
  
// Conectando-se ao banco de dados MySQL.
  $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
  
// Obtendo o JSON recebido na variável $ json.
  $json = file_get_contents('php://input');
  
// decodificando o JSON recebido e armazenando na variável $ obj.
  $obj = json_decode($json,true);
  
// Preencha o nome do aluno da matriz JSON $ obj e armazene em $ S_Nome.
  $S_Nome = $obj['nome_aluno'];
  
// Preencha a classe de alunos da matriz JSON $ obj e armazene em $ S_Classe.
  $S_Classe = $obj['classe_aluno'];
  
// Preencha o número de telefone do aluno da matriz JSON $ obj e armazene em $ S_Telefone.
  $S_Telefone = $obj['telefone_aluno'];
  
// Preencha o e-mail do array JSON $ obj e armazene-o em $ S_Email.
  $S_Email = $obj['email_aluno'];
  
  // Preencha o e-mail do array JSON $ obj e armazene-o em $ S_Senha.
  $S_Senha = $obj['senha_aluno'];
  
// Criando consulta SQL e insere o registro na tabela de banco de dados MySQL.
  $Sql_Query = "insert into aluno (nome_aluno, classe_aluno, telefone_aluno, email_aluno, senha_aluno) values ('$S_Nome','$S_Classe','$S_Telefone','$S_Email', '$S_Senha')";
  
  
  if(mysqli_query($con,$Sql_Query)){
  
// Se o registro foi inserido com sucesso, mostre a mensagem.
 $MSG = 'Registro inserido com sucesso no banco de dados MySQL.' ;
  
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