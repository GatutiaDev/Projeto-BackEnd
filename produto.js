const { connect } = require("./db");
const Logger = require("./logger");

class Produto {
  constructor(nome, categoria, valor) {
    this.nome = nome;
    this.categoria = categoria;
    this.valor = valor;
  }

  async inserir() {
    try {
      const { db, client } = await connect();
      const result = await db.collection("produtos").insertOne({
        nome: this.nome,
        categoria: this.categoria,
        valor: this.valor,
      });
      console.log("Produto inserido:", result.insertedId);
      client.close();
    } catch (error) {
      Logger.log("Erro ao inserir produto:" + error);
    }
  }

  static async atualizar(filtro, novosDados) {
    try {
      const { db, client } = await connect();
      const result = await db
        .collection("produtos")
        .updateMany(filtro, { $set: novosDados });
      console.log("Produtos atualizados: ", result.modifiedCount);
      client.close();
    } catch (error) {
      Logger.log("Erro ao atualizar produtos!" + error);
    }
  }

  static async buscar(filtro = {}) {
    try {
      const { db, client } = await connect();
      const usuarios = await db.collection("produtos").find(filtro).toArray();
      console.log("Produto encontrado!", usuarios);
      client.close();
    } catch (error) {
      Logger.log("Erro ao buscar produto!" + error);
    }
  }

  static async deletar(filtro) {
    try {
      const { db, client } = await connect();
      const result = await db.collection("produtos").deleteMany(filtro);
      console.log("Produto deletado com sucesso", result.deletedCount);
      client.close();
    } catch (error) {
      Logger.log("Erro ao excluir/deletar produto" + error);
    }
  }
}

module.exports = Produto;
