const { connect } = require("./db");
const Logger = require("./logger");

class Formpag {
  constructor(id_card, pix, boleto) {
    this.id_card = id_card;
    this.pix = pix;
    this.boleto = boleto;
  }

  async inserir() {
    try {
      const { db, client } = await connect();
      const result = await db.collection("formpag").insertOne({
        id_card: this.id_card,
        pix: this.pix,
        boleto: this.boleto,
      });
      console.log("Forma de pagamento inserido:", result.insertedId);
      client.close();
    } catch (error) {
      Logger.log("Erro ao inserir forma de pagamento:" + error);
    }
  }
  static async atualizar(filtro, novosDados) {
    try {
      const { db, client } = await connect();
      const result = await db
        .collection("frompag")
        .updateMany(filtro, { $set: novosDados });
      console.log("Forma de pagamento atualizado: ", result.modifiedCount);
      client.close();
    } catch (error) {
      Logger.log("Erro ao atualizar forma de pagamento!" + error);
    }
  }

  static async buscar(filtro = {}) {
    try {
      const { db, client } = await connect();
      const usuarios = await db.collection("formpag").find(filtro).toArray();
      console.log("Forma de pagamento encontrada!", usuarios);
      client.close();
    } catch (error) {
      Logger.log("Erro ao buscar forma de pagamento!" + error);
    }
  }

  static async deletar(filtro) {
    try {
      const { db, client } = await connect();
      const result = await db.collection("formpag").deleteMany(filtro);
      console.log(
        "Forma de pagamento deletado com sucesso",
        result.deletedCount
      );
      client.close();
    } catch (error) {
      Logger.log("Erro ao excluir/deletar forma de pagamento" + error);
    }
  }
}

module.exports = Formpag;
