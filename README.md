# Sistema de E-commerce - Backend

## Descrição

Este projeto é um backend desenvolvido em Node.js para um sistema de e-commerce. Ele fornece a lógica de negócio e as operações de banco de dados para gerenciar as principais entidades de uma loja virtual, como usuários, produtos, pedidos e carrinhos. A interação com o banco de dados é feita utilizando o driver nativo do MongoDB.

## Funcionalidades

O sistema é composto por módulos, cada um responsável por uma entidade diferente, implementando operações de CRUD (Create, Read, Update, Delete).

* **Gerenciamento de Usuários (`usuario.js`):** Cadastro e manipulação de dados de usuários.
* **Gerenciamento de Produtos (`produto.js`):** Cadastro e manipulação de produtos da loja.
* **Gerenciamento de Pedidos (`pedidos.js`):** Criação e consulta de pedidos realizados.
* **Gerenciamento de Carrinho (`carrinho.js`):** Adição e consulta de produtos no carrinho de um usuário.
* **Gestão de Endereços, Entregas e Pagamentos:** Módulos para gerenciar informações de endereço, status de entrega e formas de pagamento.
* **Log de Erros (`logger.js`):** Um sistema simples para registrar erros de banco de dados em um arquivo `log.txt`.

## Tecnologias Utilizadas

* **Linguagem:** JavaScript
* **Ambiente de Execução:** Node.js
* **Banco de Dados:** MongoDB (utilizando o driver `mongodb`)

## Como Executar o Projeto

### Pré-requisitos

* Node.js instalado na sua máquina.
* Uma instância do MongoDB em execução (localmente ou em um serviço de nuvem).

### Passos para Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/GatutiaDev/Projeto-BackEnd.git
    cd projeto-backend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure o Banco de Dados:**
    * Abra o arquivo `db.js`.
    * Certifique-se de que a variável `url` (`mongodb://localhost:27017`) e `dbName` (`banco`) correspondem à sua configuração do MongoDB.

4.  **Execute a aplicação:**
    * O arquivo `app.js` contém exemplos de como utilizar as classes para inserir e consultar dados. Você pode executá-lo para testar a funcionalidade:
    ```bash
    node app.js
    ```

## Estrutura do Projeto

* `app.js`: Arquivo principal que demonstra o uso dos módulos.
* `db.js`: Responsável pela conexão com o banco de dados MongoDB.
* `logger.js`: Módulo para registrar logs de erro.
* `*.js` (ex: `usuario.js`, `produto.js`): Cada arquivo define uma classe que representa um modelo de dados e contém os métodos para interagir com a respectiva coleção no banco de dados.
* `package.json`: Lista as dependências do projeto.
* `log.txt`: Arquivo onde os erros são registrados.
