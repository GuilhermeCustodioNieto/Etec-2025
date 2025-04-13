import express from "express";

const app = express();

app.listen(3000, () => {
  console.log(`app rodando em http://localhost:3000/`);
});
