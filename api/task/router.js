// build your `/api/tasks` router here
const express = require("express");
const router = express.Router();
const Task = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.getTasks()
    const transformedTasks = tasks.map((task)=> ({
      ...task,
      task_completed: task.task_completed === 1 ? true:false
    }))

    res.status(200).json(transformedTasks)
  } catch(err) {
    next(err)
  }

  // Task.getTasks()
  //   .then((tasks) => {
  //     res.status(200).json(tasks);
  //   })
  //   .catch(next);
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
