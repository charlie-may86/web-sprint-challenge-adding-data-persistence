// build your `Resource` model here
const db = require("../../data/dbConfig");

async function getResources() {
  const resourceRows = await db("resources");

  return resourceRows;
}

function addResource(newResource) {
  return db("resources")
    .insert(newResource)
    .then(([id]) => {
      return db("resources").where("resource_id", id).first();
    });
}

module.exports = {
  getResources,
  addResource,
};
