const { Titular } = require("../model/Titular.js");

describe("Testes da classe Titular", () => {
  beforeEach(() => {
    Titular.titulares = [];
  });

  test("Deve gerar exatamente 20 titulares", () => {
    Titular.gerarTitulares();
    expect(Titular.titulares.length).toBe(20);
  });

  test("Deve conter as chaves corretas no primeiro titular", () => {
    Titular.gerarTitulares();
    const titular = Titular.titulares[0];

    expect(titular).toHaveProperty("nome");
    expect(titular).toHaveProperty("cpf");
    expect(titular).toHaveProperty("endereco");
    expect(titular).toHaveProperty("telefone");
    expect(titular).toHaveProperty("email");
    expect(titular).toHaveProperty("dataNasc");
  });

  test("Deve validar os valores do primeiro titular", () => {
    Titular.gerarTitulares();
    const titular = Titular.titulares[0];

    expect(titular.nome).toBe("João Quebrado");
    expect(titular.cpf).toBe("5663535-63");
    expect(titular.endereco).toBe("Rua da Sorte");
    expect(titular.telefone).toBe("11 190");
    expect(titular.email).toBe("quebrado@gmail.com");
    expect(titular.dataNasc).toBe("29.08.1963");
  });

  test("Deve criar titular manualmente e adicioná-lo na lista", () => {
    const t = new Titular(
      "Teste",
      "0000000-00",
      "Rua Teste",
      "11 000",
      "teste@email.com",
      "01.01.2000"
    );

    expect(Titular.titulares.length).toBe(1);
    expect(Titular.titulares[0].nome).toBe("Teste");
  });

  test("Cada titular deve ter valores do tipo correto", () => {
    Titular.gerarTitulares();
    Titular.titulares.forEach((t) => {
      expect(typeof t.nome).toBe("string");
      expect(typeof t.cpf).toBe("string");
      expect(typeof t.endereco).toBe("string");
      expect(typeof t.telefone).toBe("string");
      expect(typeof t.email).toBe("string");
      expect(typeof t.dataNasc).toBe("string");
    });
  });
});
