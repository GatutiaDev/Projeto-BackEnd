const { connect } = require("./db");
const Logger = require("./logger");

class Endereco {
  constructor(id_user, rua, numero, bairro, cidade) {
    this.id_user = id_user;
    this.rua = rua;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
  }

  async inserir() {
    try {
      const { db, client } = await connect();
      const result = await db.collection("enderecos").insertOne({
        id_user: this.id_user,
        rua: this.rua,
        numero: this.numero,
        bairro: this.bairro,
        cidade: this.cidade,
      });
      console.log("Endereço inserido:", result.insertedId);
      client.close();
    } catch (error) {
      Logger.log("Erro ao inserir endereço:" + error);
    }
  }

  static async atualizar(filtro, novosDados) {
    try {
      const { db, client } = await connect();
      const result = await db
        .collection("enderecos")
        .updateMany(filtro, { $set: novosDados });
      console.log("Endereçoc atualizados: ", result.modifiedCount);
      client.close();
    } catch (error) {
      Logger.log("Erro ao atualizar endereço!" + error);
    }
  }

  static async buscar(filtro = {}) {
    try {
      const { db, client } = await connect();
      const usuarios = await db.collection("enderecos").find(filtro).toArray();
      console.log("Endereço encontrado!", usuarios);
      client.close();
    } catch (error) {
      Logger.log("Erro ao buscar endereço!" + error);
    }
  }

  static async deletar(filtro) {
    try {
      const { db, client } = await connect();
      const result = await db.collection("enderecos").deleteMany(filtro);
      console.log("Endereço deletado com sucesso", result.deletedCount);
      client.close();
    } catch (error) {
      Logger.log("Erro ao excluir/deletar endereçoc" + error);
    }
  }
}

module.exports = Endereco;
