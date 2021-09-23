// build your server here and require it from index.js
const express = require("express");
const server = express();
server.use(express.json());

//project router
const projectRouter = require("./project/router");
server.use("/api/project", projectRouter);

//resource router
const resourceRouter = require("./resource/router");
server.use("/api/resource", resourceRouter);

server.use("*", (req, res) => {
  res.json({ api: "up" });
});

server.use((err, req, res) => {
  res.status(err.status || 500).json({ message: `Horror: ${err.message}` });
});

module.exports = server;
