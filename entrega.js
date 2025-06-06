const { connect } = require("./db");
const Logger = require("./logger");

class Entrega {
  constructor(id_user, id_pedido, id_endereco, data) {
    this.id_user = id_user;
    this.id_pedido = id_pedido;
    this.id_endereco = id_endereco;
    this.data = data;
  }

  async inserir() {
    try {
      const { db, client } = await connect();
      const result = await db.collection("entregas").insertOne({
        id_user: this.id_user,
        id_pedido: this.id_pedido,
        id_endereco: this.id_endereco,
        data: this.data,
      });
      console.log("Entrega inserida:", result.insertedId);
      client.close();
    } catch (error) {
      Logger.log("Erro ao inserir entrega:" + error);
    }
  }
  static async atualizar(filtro, novosDados) {
    try {
      const { db, client } = await connect();
      const result = await db
        .collection("entregas")
        .updateMany(filtro, { $set: novosDados });
      console.log("Entrega atualizada: ", result.modifiedCount);
      client.close();
    } catch (error) {
      Logger.log("Erro ao atualizar entrega!" + error);
    }
  }

  static async buscar(filtro = {}) {
    try {
      const { db, client } = await connect();
      const usuarios = await db.collection("entregas").find(filtro).toArray();
      console.log("Entrega encontrada!", usuarios);
      client.close();
    } catch (error) {
      Logger.log("Erro ao buscar entrega!" + error);
    }
  }

  static async deletar(filtro) {
    try {
      const { db, client } = await connect();
      const result = await db.collection("entregas").deleteMany(filtro);
      console.log("Entrega deletada com sucesso", result.deletedCount);
      client.close();
    } catch (error) {
      Logger.log("Erro ao excluir/deletar entrega" + error);
    }
  }
}

module.exports = Entrega;
