const { connect } = require("./db");
const Logger = require("./logger");

class Cartao {
  constructor(id_user, titular, numero, num_seg, val) {
    this.id_user = id_user;
    this.titular = titular;
    this.numero = numero;
    this.num_seg = num_seg;
    this.val = val;
  }

  async inserir() {
    try {
      const { db, client } = await connect();
      const result = await db.collection("cartoes").insertOne({
        id_user: this.id_user,
        titular: this.titular,
        numero: this.numero,
        num_seg: this.num_seg,
        val: this.val,
      });
      console.log("Cartao inserido:", result.insertedId);
      client.close();
    } catch (error) {
      Logger.log("Erro ao inserir cartao:" + error);
    }
  }

  static async atualizar(filtro, novosDados) {
    try {
      const { db, client } = await connect();
      const result = await db
        .collection("cartoes")
        .updateMany(filtro, { $set: novosDados });
      console.log("Cartão atualizados: ", result.modifiedCount);
      client.close();
    } catch (error) {
      Logger.log("Erro ao atualizar cartão!" + error);
    }
  }

  static async buscar(filtro = {}) {
    try {
      const { db, client } = await connect();
      const usuarios = await db.collection("cartoes").find(filtro).toArray();
      console.log("Cartão encontrado!", usuarios);
      client.close();
    } catch (error) {
      Logger.log("Erro ao buscar Cartão!" + error);
    }
  }

  static async deletar(filtro) {
    try {
      const { db, client } = await connect();
      const result = await db.collection("cartoes").deleteMany(filtro);
      console.log("Usuário deletado com sucesso", result.deletedCount);
      client.close();
    } catch (error) {
      Logger.log("Erro ao excluir/deletar Cartão" + error);
    }
  }
}

module.exports = Cartao;
