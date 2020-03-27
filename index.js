const arango = require("./utils");
const { arangoConfig } = require("./config");
// Here I am requiring all other code. I make sure the fewest modules possible use the actual 'arangojs' driver. I believe it's only being used in one place.

const crudOps = async () => {
  //Note, this whole function is asynchronous
  //All function calls here are my own created functions that I reference from elsewhere.
  //You need to traverse the folder structure to see how everything works.
  console.log("\n\n*****WELCOME TO CRUD OPS!*****");
  const db = await arango.useDatabase(arangoConfig.database); //Instantiating DB and hooking it up to my 'crudOps' database from config folder
  try {
    await arango.addCollections(db, Object.values(arangoConfig.collections)); //Adding collections using array of names from config
    console.log("\n***Adding a User***");
    const firstUser = await arango.addVertice(
      db,
      arangoConfig.collections.user,
      { name: "Ronald", age: 21 }
    );
    // Always good to make generic reusable functions, like addVertice, getVertice etc where you put in what collection and key etc.
    // See the individual functions for more comments
    console.log(firstUser);
    console.log("***Added a User!***");
    console.log("\n***Getting a User***");
    const gottenUser = await arango.getVertice(
      db,
      arangoConfig.collections.user,
      firstUser._key
    );
    console.log(gottenUser);
    console.log("***Got a User!***");
    console.log("\n***Updating a User***");
    const updatedUser = await arango.updateVertice(
      db,
      arangoConfig.collections.user,
      firstUser._key,
      { age: 31 }
    );
    console.log(updatedUser);
    console.log("***Updated a User!***");
    console.log("\n***Deleting a User***");
    const exists = await arango.deleteVertice(
      db,
      arangoConfig.collections.user,
      firstUser._key
    );
    console.log(
      `does user ID "${firstUser._key}" exist? ${exists ? "YES" : "NO"}`
    ); //Note use of string injection, as well as the if/else ternary operator "?"
    console.log("***Deleted a User!***");
  } catch (e) {
    throw new Error("ERROR: " + e); //Catch your errors and throw them so the user knows what's wrong and where.
  } finally {
    db.close(); //Close your DB instance after you've opened or you could get a memory leak.
  }
};

crudOps();
