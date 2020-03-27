const getVertice = async (db, collection, documentKey) => {
  return await db.collection(collection).document(documentKey);
};

module.exports = getVertice;

//This is a generic function using the arango api so the user can just call this and it's easier to understand.