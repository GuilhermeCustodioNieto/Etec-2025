// tests/DAO/pedido.test.js
const { buscarPedido, buscarPedidos } = require("../../DAO/pedido/buscar_pedido");
const incluirPedido = require("../../DAO/pedido/inserir_pedido");
const {atualizarPedido} = require("../../DAO/pedido/atualizar_cliente");
const deletarPedido = require("../../DAO/pedido/deletar_pedido");

jest.mock("../../DAO/conexao.js", () => ({
  conexao: jest.fn().mockResolvedValue({
    query: jest.fn(),
    end: jest.fn(),
  }),
}));

const { conexao } = require("../../DAO/conexao.js");

describe("DAO Pedido", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("deve incluir um pedido", async () => {
    const mockConn = await conexao();
    mockConn.query.mockResolvedValueOnce([{ affectedRows: 1 }]);

    const result = await incluirPedido([1001, "2025-06-14", 1]);
    expect(result).toEqual({ affectedRows: 1 });
    expect(mockConn.query).toHaveBeenCalledWith(
      expect.stringContaining("INSERT INTO tbl_pedido"),
      [1001, "2025-06-14", 1]
    );
  });

  test("deve buscar todos os pedidos", async () => {
    const mockConn = await conexao();
    const mockData = [{ numero: 1001, cliente_id: 1 }];
    mockConn.query.mockResolvedValueOnce([mockData]);

    const result = await buscarPedidos();
    expect(result).toEqual(mockData);
  });

  test("deve buscar um pedido pelo número", async () => {
    const mockConn = await conexao();
    const mockData = [{ numero: 1001, cliente_id: 1 }];
    mockConn.query.mockResolvedValueOnce([mockData]);

    const result = await buscarPedido(1001);
    expect(result).toEqual(mockData);
    expect(mockConn.query).toHaveBeenCalledWith(
      expect.stringContaining("WHERE numero = ?"),
      [1001]
    );
  });

  test("deve atualizar um pedido", async () => {
    const mockConn = await conexao();
    mockConn.query.mockResolvedValueOnce([{ affectedRows: 1 }]);

    const result = await atualizarPedido({
      numero: 1001,
      data_elaboracao: "2025-06-15",
      cliente_id: 2,
    });
    expect(result).toEqual({ affectedRows: 1 });
    expect(mockConn.query).toHaveBeenCalled();
  });

  test("deve deletar um pedido", async () => {
    const mockConn = await conexao();
    mockConn.query.mockResolvedValueOnce([{ affectedRows: 1 }]);

    const result = await deletarPedido(1001);
    expect(result).toEqual({ affectedRows: 1 });
    expect(mockConn.query).toHaveBeenCalledWith(
      expect.stringContaining("DELETE FROM tbl_pedido"),
      [1001]
    );
  });
});
