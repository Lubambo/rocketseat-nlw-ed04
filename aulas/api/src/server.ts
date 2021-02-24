import express from 'express';

const app = express();

/**
 * GET => Buscar
 * POST => Salvar
 * PUT => Editar
 * DELETE => Deletar
 * PATCH => Alteração Específica
*/

/**
 * Utilizando os métodos
 * 1º param => rota (recurso API)
 * 2º param => request, response
*/

app.get("/", (request, response) => {
    //return response.send("Hello World - NLW04");
    return response.json({ message: "Hello World - NLW04" });
});


app.post("/", (request, response) => {
    return response.json({ message: "Os dados foram salvos com sucesso!" });
});

// http://localhost:3333/
app.listen(3333, () => console.log("Server is running!"));