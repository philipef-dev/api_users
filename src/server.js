import express from "express";

const app = express();
app.use(express.json());

let users = [];

app.get("/", (req, res) => {
  res.status(200).json(users)
});

app.post("/user", (req, res) => {
    users.push(req.body);

    res.status(201).json(req.body);    
});

app.listen(3000, () => {
  console.log("Server is running port 3000 🚀");
});
