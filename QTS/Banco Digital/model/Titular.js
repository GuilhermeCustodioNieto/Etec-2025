 class Titular{
    static titulares = []
    constructor(nome, cpf, endereco, telefone, email, dataNasc){
        this.nome = nome
        this.cpf = cpf
        this.endereco = endereco
        this.telefone = telefone
        this.email = email
        this.dataNasc = dataNasc
        Titular.titulares.push(this)
    }

    static gerarTitulares(){
        new Titular('João Quebrado','5663535-63','Rua da Sorte', '11 190', 'quebrado@gmail.com',  '29.08.1963' )
        new Titular('Coelho Sabido','5663585-65','Rua do Azar','11 156','coelho@gmail.com','30.08.1998')
        new Titular('Wagner Curinthia','5663598-65','Rua da Impressora', '11 186','vaiCurinthia@gmail.com','30.08.1998')
        new Titular('Ana Silva', '1234567-89', 'Avenida Brasil', '22 345', 'ana.silva@gmail.com', '15.05.1990');
        new Titular('Carlos Oliveira', '9876543-21', 'Rua das Flores', '33 456', 'carlos.oliveira@gmail.com', '20.11.1985');
        new Titular('Mariana Santos', '4567890-12', 'Praça da Liberdade', '44 567', 'mariana.santos@gmail.com', '10.02.1992');
        new Titular('Roberto Lima', '3216549-87', 'Rua do Comércio', '55 678', 'roberto.lima@gmail.com', '05.07.1988');
        new Titular('Fernanda Costa', '6543210-98', 'Avenida das Nações', '66 789', 'fernanda.costa@gmail.com', '30.12.1995');
        new Titular('Juliano Pereira', '7890123-45', 'Rua do Sol', '77 890', 'juliano.pereira@gmail.com', '18.03.1991');
        new Titular('Tatiane Rocha', '2109876-54', 'Rua da Lua', '88 901', 'tatiane.rocha@gmail.com', '25.09.1993');
        new Titular('Felipe Almeida', '1357924-68', 'Avenida do Mar', '99 012', 'felipe.almeida@gmail.com', '12.01.1987');
        new Titular('Sofia Martins', '2468135-79', 'Rua da Paz', '10 123', 'sofia.martins@gmail.com', '22.04.1994');
        new Titular('Lucas Ferreira', '3692581-47', 'Praça do Pôr do Sol', '11 234', 'lucas.ferreira@gmail.com', '08.08.1996');
        new Titular('Mariana Souza', '8527419-33', 'Rua das Palmeiras', '21 987', 'mariana.souza@hotmail.com', '15.03.1992');
        new Titular('Carlos Eduardo', '7412589-21', 'Avenida Central', '31 452', 'carlos.edu@gmail.com', '22.11.1988');
        new Titular('Fernanda Lima', '9638527-66', 'Rua das Acácias', '41 563', 'fernanda.lima@outlook.com', '10.07.1995');
        new Titular('João Pedro', '2589631-12', 'Travessa Harmonia', '51 889', 'joao.pedro@yahoo.com', '01.01.1990');
        new Titular('Beatriz Almeida', '1478523-98', 'Rua do Bosque', '61 304', 'beatriz.almeida@gmail.com', '30.09.1998');
        new Titular('Rafael Martins', '3697412-45', 'Alameda Santos', '71 220', 'rafael.martins@gmail.com', '05.05.1985');
        new Titular('Camila Ribeiro', '1236987-74', 'Estrada do Sol', '81 666', 'camila.ribeiro@live.com', '19.12.1993');
    }
 }




 module.exports = {Titular}