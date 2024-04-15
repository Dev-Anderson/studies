const { Pool } = require("pg");

//configuracao do banco de dados
const pool = new Pool({
  user: "postgres",
  password: "1234",
  database: "teste",
  host: "localhost",
  port: 5432,
});

//teste de conexao
pool.query("select now()", (err, res) => {
  if (err) {
    console.error("Erro ao conectar com o banco de dados: ", err);
  } else {
    console.log("Conexao realizada com sucesso");
  }
});

// Exemplo de insert de dados
const novoDado = {
  nome: "Anderson",
};

pool.query(
  "insert into anderson(name) values($1)",
  [novoDado.nome],
  (err, res) => {
    if (err) {
      console.error("Erro ao inserir dados:", err);
    } else {
      console.log("Insercao bem-sucedida!");
    }
  },
);

//fechando a conexao
pool.end();
