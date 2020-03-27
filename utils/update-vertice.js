const updateVertice = async (db, collection, documentKey, data) => {
  return (
    await db
      .collection(collection)
      .update(documentKey, data, { returnNew: true, waitForSync: true })
  ).new;
};

module.exports = updateVertice;

//This is a generic function using the arango api so the user can just call this and it's easier to understand.
