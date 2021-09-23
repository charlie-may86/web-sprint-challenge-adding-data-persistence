// build your `Task` model here
const db = require("../../data/dbConfig");

function getTasks() {
  return db("tasks as t")
    .leftJoin("projects as p", 't.project_id', 'p.project_id')
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );
}

// select
//     t.task_id,
//     t.task_description,
//     t.task_notes,
//     t.task_completed,
//     p.project_name,
//     p.project_description
// from tasks as t
// join projects as p on t.project_id = p.project_id

function addTask(newTask) {
  return db("tasks")
    .insert(newTask)
    .then(([id]) => {
      return db("tasks as t")
        .join("projects as p", 't.project_id', 'p.project_id')
        .select(
          "t.task_id",
          "t.task_description",
          "t.task_notes",
          "task_completed",
          "p.project_name",
          "p.project_description"
        )
        .where("task_id", id)
        .first();
    });
}

module.exports = {
  getTasks,
  addTask,
};
