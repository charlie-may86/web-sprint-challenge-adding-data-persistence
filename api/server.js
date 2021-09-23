// build your server here and require it from index.js
const express = require("express");
const server = express();
server.use(express.json());

//project router
const projectRouter = require("./project/router");
server.use("/api/projects", projectRouter);

//resource router
const resourceRouter = require("./resource/router");
server.use("/api/resources", resourceRouter);

//task router
const taskRouter = require("./task/router");
server.use("/api/tasks", taskRouter);

server.use("*", (req, res, next) => {
  console.log(`hitting${req.method} and ${req.baseUrl}`);
  next({ status: 404, message: "not found" });
});

server.use((err, req, res) => {
  res.status(err.status || 500).json({ message: `Horror: ${err.message}` });
});

module.exports = server;
