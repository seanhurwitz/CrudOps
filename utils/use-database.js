const getDatabaseObject = require("./get-database-object");

const useDatabase = async dbName => {
  console.log(`\n***Setting up Database ${dbName}`);
  const db = getDatabaseObject();
  const databaseList = await db.listDatabases();
  if (databaseList.includes(dbName)) {
    await db.dropDatabase(dbName); //If already there, drop it and start from scratch
  }
  await db.createDatabase(dbName);
  db.useDatabase(dbName); //This function is NOT async, it's in their docs.
  return db;
};

module.exports = useDatabase;

/* Note, all these functions are async because it hits arango. It's in their documentation as well */
