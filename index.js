const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "API sencilla funcionando correctamente 🚀" });
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Ana" },
    { id: 2, name: "Luis" },
    { id: 3, name: "Carlos" }
  ]);
});

app.post("/users", (req, res) => {
  const user = req.body;
  res.json({
    message: "Usuario recibido",
    user
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
