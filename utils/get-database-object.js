const arangojs = require("arangojs");

const getDatabaseObject = () => {
  const db = new arangojs.Database({ url: process.env.ARANGOURL });
  db.useBasicAuth("root", process.env.ARANGOPWD);
  return db;
};

module.exports = getDatabaseObject;

/* Work with environment variables.
in the terminal you're using, before you run your code, run these commands:

export ARANGOURL=<url>

export ARANGOPWD=<password>

obviously take out the <> and put in your credentials like you have in your initial code. Make sure there are no spaces by the equal sign on either side.
to test it worked, run: echo $ARANGOURL
If that doesn't work, google how to display env variables from the terminal

Or, create a .env file and research how to integrate it
*/
