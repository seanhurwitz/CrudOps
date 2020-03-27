const deleteVertice = async (db, collection, documentKey) => {
  await db.collection(collection).remove(documentKey);
  return await db.collection(collection).documentExists(documentKey);
};

module.exports = deleteVertice;

//This is a generic function using the arango api so the user can just call this and it's easier to understand.