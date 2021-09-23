// build your `/api/tasks` router here
const express = require("express");
const router = express.Router();
const Task = require("./model");

router.get("/", (req, res, next) => {
  Task.getTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  const newTask = req.body;

  Task.addTask(newTask)
    .then((newTask) => {
      res.status(201).json({
        ...newTask,
        task_completed: newTask.task_completed === 1 ? true : false,
      });
    })
    .catch(next);
});

module.exports = router;
