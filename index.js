const app = require("express")();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Testing ECS CICD");
});

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
