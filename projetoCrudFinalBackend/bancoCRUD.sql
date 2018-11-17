
DROP DATABASE IF EXISTS BancoReactCRUD; 

drop table aluno;

CREATE DATABASE BancoReactCRUD; 
USE BancoReactCRUD; 


CREATE TABLE aluno ( 
    id INTEGER NOT NULL AUTO_INCREMENT, 
    nome_aluno VARCHAR(255),
    classe_aluno VARCHAR(255), 
    telefone_aluno VARCHAR(255), 
    email_aluno VARCHAR(255),
    senha_aluno VARCHAR(255),
    PRIMARY KEY (id));
    
 select * from aluno;
 
 insert into aluno (id, nome_aluno, classe_aluno, telefone_aluno, email_aluno, senha_aluno)
 values(1, 'Fernando Santos', '5 serie', '(51)984360019', 'guts9000@gmail.com', '123'),
 (null, 'Patricia Cilene', '8 serie','(51)85162899', 'patricia@bol.com.br', '456'),
 (null, 't', 't','t', 't', 't');
 
 