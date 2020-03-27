const addCollections = async (db, collections) => {
  console.log("\n***Creating Collections***");
  // I made this method so you can either parse an array or a single collection. Note the use of "typeof"
  if (typeof collections !== "object") {
    //If not array, only add one collection
    const collection = db.collection(collections);
    if (!(await collection.exists())) await collection.create(); //Check if exists first, and if not, create it.
  } else {
    //This is the most complicated piece of code in this project. Essentially I am using the array map() method to take my array of collections
    //and map each value to a function that will return a promise, which I store in createCollectionPromises.
    //I then use the Promise.all() method to await the entire array of promises so I keep everything synchronous.
    const createCollectionPromises = collections.map(collection => {
      const col = db.collection(collection);
      return col.exists().then(res => {
        if (!res) return col.create();
      });
    });
    /*
    Here's where I use a .then() to resolve what I want. There's a whole topic about using async await within a function within a method (like .map()).
    I run an async function .exists() to check if the collection exists, and I want the result from that (true / false) and if false, create the collection
    */
    await Promise.all(createCollectionPromises); //I await the array of promises. To see what this does, console.log(createCollectionPromises) before and after this line.
  }
  console.log("***Created Collections!***");
};

module.exports = addCollections;
