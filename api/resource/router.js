// build your `/api/resources` router here
const express = require("express");
const router = express.Router();
const Resource = require("./model");

router.get("/", (req, res, next) => {
  Resource.get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

module.exports = router;
