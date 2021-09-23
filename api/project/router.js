// build your `/api/projects` router here
const express = require("express");
const router = express.Router();
const Project = require("./model");

router.get("/", (req, res, next) => {
  Project.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

module.exports = router;
