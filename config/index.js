/*
This config folder makes sure your database name and collection names are consistent throughout your project
So your code doesn't break just because the collection name is "User" and you typed "user".
We want to hard-code AS LITTLE AS POSSIBLE. EVERYTHING SHOULD BE REUSABLE
*/
const config = {
  arangoConfig: {
    database: "CrudOps",
    collections: {
      user: "User",
      post: "Post",
      review: "Review"
    }
  }
};

module.exports = config;
