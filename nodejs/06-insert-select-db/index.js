const { Pool } = require("pg");

//configuracao do banco de dados
const pool = new Pool({
  user: "postgres",
  password: "1234",
  database: "teste",
  host: "localhost",
  port: 5432,
});

// teste de conexao
pool.query("select now()", (err, res) => {
  if (err) {
    console.error("Erro ao conectar com o banco de dados:", err);
  } else {
    console.log("Conexao realizada com sucesso");
  }
});

//Dados para isnert
const novoDado = {
  nome: "insert",
};

pool.query(
  "insert into anderson(name) values($1)",
  [novoDado.nome],
  (err, res) => {
    if (err) {
      console.error("Erro ao inserir dados:", err);
    } else {
      console.log("Insert realizado com socesso!");
    }
  },
);

//consulta todos os registros do banco de dados
pool.query("select * from anderson", (err, res) => {
  if (err) {
    console.error("Erro ao executa a consulta…", err);
  } else {
    console.log("Resultado da consulta:", res.rows);
  }
});

//fechando a conexao
pool.end();
