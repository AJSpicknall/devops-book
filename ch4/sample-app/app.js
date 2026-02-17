const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

const port = process.env.PORT || 8080;

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

module.exports = app;

