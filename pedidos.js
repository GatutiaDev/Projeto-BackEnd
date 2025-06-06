const { connect } = require("./db");
const Logger = require("./logger");

class Pedido {
  constructor(id_user, id_endereco, data, produtos, forma_pagamento) {
    this.id_user = id_user;
    this.id_endereco = id_endereco;
    this.data = data;
    this.produtos = produtos;
    this.forma_pagamento = forma_pagamento;
  }

  async inserir() {
    try {
      const { db, client } = await connect();
      const result = await db.collection("pedidos").insertOne({
        id_user: this.id_user,
        id_endereco: this.id_endereco,
        data: this.data,
        produtos: this.produtos,
        forma_pagamento: this.forma_pagamento,
      });
      console.log("Pedido inserido:", result.insertedId);
      client.close();
    } catch (error) {
      Logger.log("Erro ao inserir pedido:" + error);
    }
  }

  static async atualizar(filtro, novosDados) {
    try {
      const { db, client } = await connect();
      const result = await db
        .collection("pedidos")
        .updateMany(filtro, { $set: novosDados });
      console.log("Pedido atualizado: ", result.modifiedCount);
      client.close();
    } catch (error) {
      Logger.log("Erro ao atualizar pedido!" + error);
    }
  }

  static async buscar(filtro = {}) {
    try {
      const { db, client } = await connect();
      const usuarios = await db.collection("pedidos").find(filtro).toArray();
      console.log("Pedido encontrado!", usuarios);
      client.close();
    } catch (error) {
      Logger.log("Erro ao buscar pedido!" + error);
    }
  }

  static async deletar(filtro) {
    try {
      const { db, client } = await connect();
      const result = await db.collection("pedidos").deleteMany(filtro);
      console.log("Pedido deletado com sucesso", result.deletedCount);
      client.close();
    } catch (error) {
      Logger.log("Erro ao excluir/deletar pedido" + error);
    }
  }
}

module.exports = Pedido;
