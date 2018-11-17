
<?php
include 'DBConfig.php';
 
// Criando conexão
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);
 
if ($conn->connect_error) {
 
 die("Conexão falhou: " . $conn->connect_error);
} 
 
// Criando o comando SQL para buscar todos os registros da tabela.
$sql = "SELECT * FROM aluno";
 
$result = $conn->query($sql);
 
if ($result->num_rows >0) {
 
 
 while($row[] = $result->fetch_assoc()) {
 
 $item = $row;
 
 $json = json_encode($item);
 
 }
 
} else {
 echo "Nenhum resultado encontrado.";
}
 echo $json;
$conn->close();
?>