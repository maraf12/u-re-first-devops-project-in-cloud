const http = require("http");
const port = 3000;

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("🚀 Hello from AKS Node.js App!");
}).listen(port, () => console.log(`Server running on port ${port}`));
