const { connect } = require("./db");
const Logger = require("./logger");

class Carrinho {
  constructor(id_user, produtos) {
    this.id_user = id_user;
    this.produtos = produtos;
  }

  async inserir() {
    try {
      const { db, client } = await connect();
      const result = await db.collection("carrinho").insertOne({
        id_user: this.id_user,
        produtos: this.produtos,
      });
      console.log("Carrinho inserido:", result.insertedId);
      client.close();
    } catch (error) {
      Logger.log("Erro ao inserir carrinho: " + error);
    }
  }

  static async atualizar(filtro, novosDados) {
    try {
      const { db, client } = await connect();
      const result = await db
        .collection("carrinho")
        .updateMany(filtro, { $set: novosDados });
      console.log("Carrinho atualizado: ", result.modifiedCount);
      client.close();
    } catch (error) {
      Logger.log("Erro ao atualizar carrinho!" + error);
    }
  }

  static async buscar(filtro = {}) {
    try {
      const { db, client } = await connect();
      const usuarios = await db.collection("carrinho").find(filtro).toArray();
      console.log("Carrinho encontrado!", usuarios);
      client.close();
    } catch (error) {
      Logger.log("Erro ao buscar carrinho!" + error);
    }
  }

  static async deletar(filtro) {
    try {
      const { db, client } = await connect();
      const result = await db.collection("carrinho").deleteMany(filtro);
      console.log("Carrinho deletado com sucesso", result.deletedCount);
      client.close();
    } catch (error) {
      Logger.log("Erro ao excluir/deletar carrinho" + error);
    }
  }
}

module.exports = Carrinho;
