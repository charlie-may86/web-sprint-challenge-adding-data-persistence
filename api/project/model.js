// build your `Project` model here
const db = require("../../data/dbConfig");

async function getProjects() {
  const projectRows = await db("projects");

  return projectRows;
}

module.exports = {
  getProjects,
};
