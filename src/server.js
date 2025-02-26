import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

app.get("/users", async (req, res) => {
  const allUsers = await prisma.user.findMany();

  res.status(200).json(allUsers);
});

app.post("/user", async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Nome e e-mail são obrigatórios" });
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    res.status(201).json(user);
  } catch {
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await prisma.user.delete({
      where: id,
    });
    res
      .status(200)
      .json({ message: "Usuário deletado com sucesso", deleteUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao deletar usuário. Verifique o ID" });
  }
});

app.listen(3000, () => {
  console.log("Server is running port 3000 🚀");
});
