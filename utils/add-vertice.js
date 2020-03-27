const addVertice = async (db, collection, data) => {
  return (await db.collection(collection).save(data, { returnNew: true })).new;
};

module.exports = addVertice;

//This is a generic function using the arango api so the user can just call this and it's easier to understand.