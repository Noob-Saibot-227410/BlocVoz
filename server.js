const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post("/salvar", (req, res) => {
  const texto = req.body.texto;
  fs.writeFile("texto.txt", texto, err => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Erro ao salvar o arquivo" });
    } else {
      console.log("Arquivo salvo com sucesso");
      res.json({ message: "Arquivo salvo com sucesso" });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});