const { Pool } = require("pg");

//configuracoes de acesso ao banco de dados
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "teste",
  password: "1234",
  port: 5432,
});

//teste de conexaco com o banco de dados
pool.query("select now()", (err, res) => {
  if (err) {
    console.error("Erro ao conectar com o banco de dados", err);
  } else {
    console.log("Conexao realizada com sucessoo");
  }
});

//fechando a conexao
pool.end();
