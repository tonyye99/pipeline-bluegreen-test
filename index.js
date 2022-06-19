const app = require("express")();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Testing AWS ECS with NodeJS");
});

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
