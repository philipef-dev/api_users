import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Testando funcionamento da api');                      
})

app.listen(3000, () => {
  console.log("Server is running port 3000 🚀");
});

