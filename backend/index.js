require("dotenv").config();
require("request");
const cors = require("cors");
const db = require("./db");
const PORT = 3001;
const HOST = '0.0.0.0';

const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, resp) => {
    resp.json({
        message: "Funcionando!"
    });
});

app.get("/livros/:id", async (req, resp) => {
    const livro = await db.selectLivro(req.params.id);
    resp.json(livro);
});

app.get("/livros", async (req, resp) => {
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

app.listen(PORT, HOST);

console.log("backend rodando!");