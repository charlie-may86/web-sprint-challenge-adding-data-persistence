// build your `/api/projects` router here
const express = require("express");
const router = express.Router();
const Project = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.getProjects()
    const transformedProjects = projects.map((project)=>({
      ...project,
      project_completed: project.project_completed === 1 ? true:false
    }))

    res.status(200).json(transformedProjects)
  } catch(err) {
    next(err)
  }


  // Project.getProjects()
  //   .then((projects) => {
  //     res.status(200).json(projects);
  //   })
  //   .catch(next);
});

router.post("/", (req, res, next) => {
  const newProject = req.body;

  Project.addProject(newProject)
    .then((newProject) => {
      res.status(201).json({
          ...newProject,
          project_completed: newProject.project_completed === 1 ? true:false
      });
    })
    .catch(next);
});

module.exports = router;
