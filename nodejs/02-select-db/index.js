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
    console.error("Erro ao conectar ao banco de dados", err);
  } else {
    console.log("Conexao realizada com sucesso");
  }
});

// consulta no banco de dados postgres
pool.query("select * from anderson", (err, res) => {
  if (err) {
    console.error("erro ao executar a consulta: ", err);
  } else {
    console.log("Resultado da consulta: ", res.rows);
  }
});

//fechando a conexao com o banco de dados
pool.end();
