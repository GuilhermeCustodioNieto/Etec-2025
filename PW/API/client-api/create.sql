DROP DATABASE IF EXISTS produtos_db;
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
create table tbl_produtos(
	id int, 
    nome varchar(50),
    id_categoria int,
    preco float,
    primary key (id),
    foreign key (id_categoria) references tbl_categoria(id)
);

select * from tbl_produtos;

create table tbl_status(
	id int, 
    nome varchar(50),
    primary key (id)
);

select * from tbl_status;

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

create table tbl_cliente (
	id int,
    telefone varchar(12),
    nome varchar(100),
    limite float,
    id_endereco int,
    id_status int,
    primary key (id),
    FOREIGN KEY (id_endereco) REFERENCES tbl_endereco(id),
    FOREIGN KEY (id_status) REFERENCES tbl_status(id)
);

select * from tbl_cliente;

CREATE TABLE tbl_pedido (
    numero INT PRIMARY KEY,
    data_elaboracao DATE,
    cliente_id INT,
    FOREIGN KEY (cliente_id) REFERENCES tbl_cliente(id)
);

select * from tbl_pedido;

create table tbl_itempedido (
	id int,
    id_pedido int,
    id_produto int,
    qnt int,
    primary key (id, id_pedido, id_produto),
    foreign key (id_pedido) references tbl_pedido(numero),
	foreign key (id_produto) references tbl_produtos(id)
);

select * from tbl_itempedido;

