// build your `Project` model here
const db = require("../../data/dbConfig");

async function getProjects() {
  const projectRows = await db("projects");

  return projectRows;
}

function addProject(newProject) {
  return db("projects")
    .insert(newProject)
    .then(([id]) => {
      return db("projects").where("project_id", id).first();
    });
}

module.exports = {
  getProjects,
  addProject,
};
