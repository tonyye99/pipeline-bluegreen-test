const app = require("express")();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
