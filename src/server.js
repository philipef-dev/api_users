import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient()
app.use(express.json());

let users = [];

app.get("/users", async (req, res) => {
  const allUsers = await prisma.user.findMany()
  res.status(200).json(allUsers);
});

app.post("/user", (req, res) => {
  users.push(req.body);

  res.status(201).json(req.body);
});

app.delete("/user/:id", (req, res) => {
  res.send("Usuário deletado");
});

app.listen(3000, () => {
  console.log("Server is running port 3000 🚀");
});
