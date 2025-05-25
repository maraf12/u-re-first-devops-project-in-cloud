const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("🚀 Welcome to DevOps and your first app!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});