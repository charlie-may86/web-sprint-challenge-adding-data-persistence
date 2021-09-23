const projects = [
  {
    project_name: "Sprint Challenge",
    project_description: "Get this SC challenge done",
    project_completed: false,
  },
  {
    project_name: "Pack",
    project_description: "Get your clothes together for this trip",
    project_completed: false,
  },
];

const resources = [
  {
    resource_name: "Susie",
    resource_description: "My babe who always helps me",
  },
  {
    resource_name: "JBL",
    resource_description: "plays me some music while I work",
  },
];

const tasks = [
  { task_description: "fold clothes", task_notes: "nadda", project_id: 1 },
  { task_description: "get into the deep work", task_notes: "", project_id: 2 },
];

const project_resources = [
  { project_id: "1", resource_id: "2" },
  { project_id: "2", resource_id: "1" },
];

exports.seed = async function (knex) {
  await knex("projects").insert(projects);
  await knex("resources").insert(resources);
  await knex("tasks").insert(tasks);
  await knex("project_resources").insert(project_resources);
};
