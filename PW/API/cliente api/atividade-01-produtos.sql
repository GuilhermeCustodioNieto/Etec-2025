create database produtos_db;
-- ativar
USE produtos_db;

-- Criar as tabelas
create table tbl_categoria (
	id int,
    nome varchar(30),
    primary key(id)
);

select * from tbl_categoria;

INSERT INTO tbl_categoria (id, nome) VALUES
(1, 'sabão'),
(2, 'detergente'),
(3, 'removedor'),
(4, 'amaciante'),
(5, 'desinfetante');

create table tbl_produtos(
	codigo int, 
    nome varchar(50),
    id_categoria int,
    preco float,
    primary key (codigo),
    foreign key (id_categoria) references tbl_categoria(id)
);

select * from tbl_produtos;

INSERT INTO tbl_produtos (codigo,nome, id_categoria, preco) VALUES
(1, 'detergente Ypê', 2, 2.50),
(2, 'amaciante Ypê', 4, 15.99 ),
(3, 'detergente Limpol',2, 1.50), 
(4, 'amaciante Confort', 4, 20.99),
(5, 'sabão brilhante', 1, 20.90),
(6, 'desinfetante Ypê', 5, 15.50),
(7, 'sabão ypê', 1, 25.50),
(8, 'desinfetante casa', 5, 10.50),
(9, 'removedor Suprema',3, 22.71),
(10, 'removedor Zulu', 3, 16.99);

create table tbl_status(
	id int, 
    nome varchar(50),
    primary key (id)
);

select * from tbl_status;

INSERT INTO tbl_status (id, nome) VALUES
(1, 'bom'),
(2, 'médio'),
(3, 'ruim');

create table tbl_endereco (
	id int,
    logradouro varchar(400),
    cep varchar(8),
    numero int,
    bairro varchar(100),
    cidade varchar(50),
    primary key (id)
);

select * from tbl_endereco;

INSERT INTO tbl_endereco (id, logradouro, cep, numero, bairro,  cidade) VALUES
(1, 'Rua das Flores', '01234567', '123', 'Jardim Primavera', 'São Paulo'),
(2, 'Av. Paulista', '01311000', '1000', 'Bela Vista', 'São Paulo'),
(3, 'Rua do Sol', '04567890', '456', 'Centro', 'Rio de Janeiro'),
(4, 'Rua das Acácias', '07080200', '78', 'Vila Esperança', 'Guarulhos'),
(5, 'Av. Brasil', '30123456', '850', 'Savassi', 'Belo Horizonte'),
(6, 'Rua Pernambuco', '12345678', '321', 'Boa Viagem', 'Recife'),
(7, 'Travessa do Norte', '04000111', '55', 'Copacabana', 'Rio de Janeiro'),
(8, 'Alameda Santos', '01419002', '900', 'Jardins', 'São Paulo'),
(9, 'Rua das Laranjeiras', '78901234', '112', 'Centro', 'Curitiba'),
(10, 'Av. Sete de Setembro', '40060001', '770', 'Barra', 'Salvador');

create table tbl_cliente (
	codigo int,
    telefone varchar(12),
    nome varchar(100),
    limite float,
    id_endereco int,
    id_status int,
    primary key (codigo),
    FOREIGN KEY (id_endereco) REFERENCES tbl_endereco(id),
    FOREIGN KEY (id_status) REFERENCES tbl_status(id)
);

select * from tbl_cliente;

INSERT INTO tbl_cliente (codigo, telefone, nome, limite, id_endereco, id_status) values
(1, '11999990001', 'João', 1000.00, 1, 1),
(2, '11988887772', 'Maria Oliveira', 1500.00,2, 2),
(3, '21999887766', 'Carlos Souza', 500.00,3, 3),
(4, '31988881234', 'Ana Paula', 800.00, 4, 1),
(5, '41999995555', 'Felipe Santos', 2000.00, 5, 2),
(6, '51911112222', 'Juliana Lima', 1200.00, 6, 1),
(7, '61933334444', 'Roberto Costa', 400.00, 7, 3),
(8, '71955556666', 'Fernanda Rocha', 1800.00, 8, 1),
(9, '81977778888', 'Daniel Ribeiro', 950.00, 9, 2),
(10, '91966667777', 'Larissa Martins', 1100.00, 10, 1);

CREATE TABLE tbl_pedido (
    numero INT PRIMARY KEY,
    data_elaboracao DATE,
    cliente_id INT,
    FOREIGN KEY (cliente_id) REFERENCES tbl_cliente(codigo)
);

select * from tbl_pedido;

INSERT INTO tbl_pedido (numero, data_elaboracao, cliente_id) VALUES
(1, '2025-01-05', 1),
(2, '2025-01-06', 2),
(3, '2025-01-07', 3),
(4, '2025-01-08', 4),
(5, '2025-01-09', 5),
(6, '2025-01-10', 6),
(7, '2025-01-11', 7),
(8, '2025-01-12', 8),
(9, '2025-01-13', 9),
(10, '2025-01-14', 10),
(11, '2025-01-15', 1),
(12, '2025-01-16', 2),
(13, '2025-01-17', 3),
(14, '2025-01-18', 4),
(15, '2025-01-19', 5),
(16, '2025-01-20', 6),
(17, '2025-01-21', 7),
(18, '2025-01-22', 8),
(19, '2025-01-23', 9),
(20, '2025-01-24', 10),
(21, '2025-01-25', 1),
(22, '2025-01-26', 2),
(23, '2025-01-27', 3),
(24, '2025-01-28', 4),
(25, '2025-01-29', 5),
(26, '2025-01-30', 6),
(27, '2025-02-01', 7),
(28, '2025-02-02', 8),
(29, '2025-02-03', 9),
(30, '2025-02-04', 10);

create table tbl_itempedido (
	id int,
    id_pedido int,
    id_produto int,
    qnt int,
    primary key (id, id_pedido, id_produto),
    foreign key (id_pedido) references tbl_pedido(numero),
	foreign key (id_produto) references tbl_produtos(codigo)
);

select * from tbl_itempedido;

INSERT INTO tbl_itempedido (id, id_pedido, id_produto, qnt) values
(1, 1, 1, 2),
(2, 1, 2, 1),
(3, 2, 3, 3),
(4, 2, 4, 2),
(5, 3, 5, 4),
(6, 3, 1, 1),
(7, 4, 6, 2),
(8, 4, 7, 5),
(9, 5, 8, 3),
(10, 5, 9, 2),
(11, 6, 10, 1),
(12, 6, 3, 3),
(13, 7, 4, 2),
(14, 7, 2, 4),
(15, 8, 1, 3),
(16, 8, 6, 1),
(17, 9, 7, 5),
(18, 9, 8, 2),
(19, 10, 9, 1),
(20, 10, 10, 4),
(21, 11, 1, 1),
(22, 12, 2, 2),
(23, 13, 3, 5),
(24, 14, 4, 2),
(25, 15, 1, 3),
(26, 16, 6, 1),
(27, 17, 7, 4),
(28, 18, 8, 2),
(29, 19, 9, 5),
(30, 20, 10, 1);
