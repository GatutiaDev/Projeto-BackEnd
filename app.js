const Usuario = require("./usuario");
const Produto = require("./produto");
const Pedido = require("./pedidos");
const Formpag = require("./formpag");
const Entrega = require("./entrega");
const Endereco = require("./endereco");
const Carrinho = require("./carrinho");
const Cartao = require("./cartao");

async function User() {
  const user = new Usuario(
    "Monique",
    "monique@example.com",
    "senha123",
    "18999999999"
  );
  await user.inserir();

  await Usuario.buscar();

  await Usuario.atualizar({ nome: "Monique" }, { email: "monique@teste.com" });

  await Usuario.deletar({ nome: "Monique" });
}

async function execProduto() {
  const user = new Produto("Maquina de lavar", "Eletro doméstico", 4000);
  await user.inserir();
}

async function execPedido() {
  const user = new Pedido(
    1,
    1,
    "2023-10-01",
    [
      { id_produto: 1, quantidade: 2 },
      { id_produto: 2, quantidade: 1 },
    ],
    "pix"
  );
  await user.inserir();
}

async function execFormPag() {
  const user = new Formpag(1, "pix", "boleto");
  await user.inserir();
}

async function execEntrega() {
  const user = new Entrega(1, 1, 1, "2023-10-02");
  await user.inserir();
}

async function execEndereco() {
  const user = new Endereco(1, "Rua japao", 22, "fuji", "Tokyo");
  await user.inserir();
}

async function execCartao() {
  const user = new Cartao(1, "japao titular", "423567890", "321", "12/04");
  await user.inserir();
}

async function execCarrinho() {
  const user = new Carrinho(1, "maquina de lavar");
  await user.inserir();
}

User();
execProduto();
execPedido();
execFormPag();
execEntrega();
execEndereco();
execCartao();
execCarrinho();
