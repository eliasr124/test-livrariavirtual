require("dotenv").config();
const request = require("request");

const db = require("./db");

const express = require("express");

const app = express();

app.use(express.json());

// const apiHost = "http://54.167.117.206:8000/livro/";

// request(`${apiHost}`, (err, res, body) => {
//     console.log(body);
// })

app.get("/", (req, resp) => {
    resp.json({
        message: "Funcionando!"
    });
});

app.get("/livros/:id", async (req, resp) => {
    resp.setHeader('Access-Control-Allow-Origin', '*');
    const livro = await db.selectLivro(req.params.id);
    resp.json(livro);
});

app.get("/livros", async (req, resp) => {
    resp.setHeader('Access-Control-Allow-Origin', '*');
    const livros = await db.selectLivros();
    resp.json(livros);
});

app.post("/livros", async (req, resp) => {
    await db.insertLivro(req.body);
    resp.sendStatus(201);
});

app.patch("/livros/:id", async (req, resp) => {
    await db.updateLivro(req.params.id, req.body);
    resp.sendStatus(200);
});

app.put("/livros/:id", async (req, resp) => {
    await db.deletLivro(req.params.id);
    resp.sendStatus(204);
});

app.listen('3001');

console.log("backend rodando!");