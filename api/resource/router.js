// build your `/api/resources` router here
const express = require("express");
const router = express.Router();
const Resource = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const projects = await Resource.getResources()
    res.status(200).json(projects)
  } catch(err) {
    next(err)
  }
})


//   Resource.getResources()
//     .then((projects) => {
//       res.status(200).json(projects);
//     })
//     .catch(next);
// });

router.post("/", (req, res, next) => {
  const newResource = req.body;

  Resource.addResource(newResource)
    .then((newResource) => {
      res.status(201).json({
        ...newResource,
        project_completed: newResource.project_completed === 1 ? true : false,
      });
    })
    .catch(next);
});

module.exports = router;
