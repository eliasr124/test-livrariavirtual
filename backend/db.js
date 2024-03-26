/**
 * Descricao: arquivo responsavel pelas 'connectionsStrings' da aplicacao
 */

async function connect() {

    if(global.connection) {
        return global.connection.connect();
    }

    const { Pool} = require("pg");
    const pool = new Pool ({
        user: process.env.USER,
        host: process.env.HOST,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        port: process.env.PORT
    });

    const client = await pool.connect();
    console.log("Pool criado");

    const res = await client.query("select now()");
    console.log(res.rows[0]);
    client.release();

    global.connection = pool;
    return pool.connect();

}

connect();

async function selectLivros() {
    const client = await connect();
    const res = await client.query("SELECT * FROM livro");
    return res.rows;
}

async function selectLivro(id) {
    const client = await connect();
    const res = await client.query("SELECT * FROM livro WHERE ID=$1", [id]);
    return res.rows;
}

async function insertLivro(livro) {
    const client = await connect();
    const sql = "INSERT INTO livro (nome, nomeDoAutor, lancamento, tipo, genero, editora, anoEdicao, numEdicao) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
    const values = [livro.nome, livro.nomeDoAutor, livro.lancamento, livro.tipo, livro.genero, livro.editora, livro.anoEdicao, livro.numEdicao];
    await client.query(sql, values);
}

async function updateLivro(id, livro) {
    const client = await connect();
    const sql = "UPDATE livro SET nome=$1, nomeDoAutor=$2, lancamento=$3, tipo=$4, genero=$5, editora=$6, anoEdicao=$7, numEdicao=$8 WHERE id=$9";
    const values = [livro.nome, livro.nomeDoAutor, livro.lancamento, livro.tipo, livro.genero, livro.editora, livro.anoEdicao, livro.numEdicao, id];
    await client.query(sql, values);
}

async function deletLivro(id) {
    const client = await connect();
    const sql = "DELETE FROM livro WHERE id=$1";
    const values = [id];
    await client.query(sql, values);
}

module.exports = {
    selectLivros,
    selectLivro,
    insertLivro,
    updateLivro,
    deletLivro
}