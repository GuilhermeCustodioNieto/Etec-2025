const incluirProduto = require("../../DAO/produto/inserir_produto");
const {
  atualizarProduto,
  atualizarParcialProduto,
} = require("../../DAO/produto/atualizar_produto");
const {
  buscarProdutos,
  buscarProduto,
} = require("../../DAO/produto/buscar_produto");
const deletarProduto = require("../../DAO/produto/deletar_produto");

jest.mock("../../DAO/conexao.js", () => ({
  conexao: jest.fn().mockResolvedValue({
    query: jest.fn(),
    end: jest.fn(),
  }),
}));

const { conexao } = require("../../DAO/conexao.js");

describe("DAO Produto", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("✅ deve incluir um produto", async () => {
    const mockConn = await conexao();
    mockConn.query.mockResolvedValueOnce([{ affectedRows: 1 }]);

    const result = await incluirProduto([1, "Produto A", 2, 19.99]);
    expect(result).toEqual({ affectedRows: 1 });
    expect(mockConn.query).toHaveBeenCalledWith(
      expect.stringContaining("INSERT INTO tbl_produtos"),
      [1, "Produto A", 2, 19.99]
    );
  });

  test("✅ deve buscar todos os produtos", async () => {
    const mockConn = await conexao();
    const mockData = [{ codigo: 1, nome: "Produto A", preco: 19.99 }];
    mockConn.query.mockResolvedValueOnce([mockData]);

    const result = await buscarProdutos();
    expect(result).toEqual(mockData);
    expect(mockConn.query).toHaveBeenCalledWith(
      expect.stringContaining("SELECT * FROM tbl_produtos")
    );
  });

  test("✅ deve buscar um produto por código", async () => {
    const mockConn = await conexao();
    const mockData = [{ codigo: 1, nome: "Produto A" }];
    mockConn.query.mockResolvedValueOnce([mockData]);

    const result = await buscarProduto(1);
    expect(result).toEqual(mockData);
    expect(mockConn.query).toHaveBeenCalledWith(
      expect.stringContaining("WHERE codigo = ?"),
      [1]
    );
  });

  test("✅ deve atualizar um produto (PUT)", async () => {
    const mockConn = await conexao();
    mockConn.query.mockResolvedValueOnce([{ affectedRows: 1 }]);

    const result = await atualizarProduto({
      codigo: 1,
      nome: "Produto A+",
      id_categoria: 2,
      preco: 25.0,
    });
    expect(result).toEqual({ affectedRows: 1 });
    expect(mockConn.query).toHaveBeenCalledWith(
      expect.stringContaining("UPDATE tbl_produtos SET"),
      ["Produto A+", 2, 25.0, 1]
    );
  });

  test("✅ deve atualizar parcialmente um produto (PATCH)", async () => {
    const mockConn = await conexao();
    mockConn.query.mockResolvedValueOnce([{ affectedRows: 1 }]);

    const result = await atualizarParcialProduto(1, { preco: 29.99 });
    expect(result).toEqual({ affectedRows: 1 });
    expect(mockConn.query).toHaveBeenCalledWith(
      expect.stringContaining("UPDATE tbl_produtos SET preco = ?"),
      [29.99, 1]
    );
  });

  test("✅ deve deletar um produto", async () => {
    const mockConn = await conexao();
    mockConn.query.mockResolvedValueOnce([{ affectedRows: 1 }]);

    const result = await deletarProduto(1);
    expect(result).toEqual({ affectedRows: 1 });
    expect(mockConn.query).toHaveBeenCalledWith(
      expect.stringContaining("DELETE FROM tbl_produtos"),
      [1]
    );
  });
});
