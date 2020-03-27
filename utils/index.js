module.exports = {
  addVertice: require("./add-vertice"),
  addCollections: require("./add-collections"),
  deleteVertice: require("./delete-vertice"),
  getDatabaseObject: require("./get-database-object"),
  getVertice: require("./get-vertice"),
  updateVertice: require("./update-vertice"),
  useDatabase: require("./use-database")
};

/*
I have an index file in each folder, because when require() runs it looks for an index.js file first,
so all i have to say is require('./utils') and I have access to all my methods in one go
(See my root index.js)
*/
