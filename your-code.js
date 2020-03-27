// It's good for a first shot. Well done.
// I will make my comments inline below.

const arangojs = require("arangojs");
const db = new arangojs.Database({ url: "http://127.0.0.1:8529" }); //Put in Environment Variable
db.useBasicAuth("root", "Roncodes"); //Put in Environment Variable
/*
Keep permission- and connection-sensitive credentials in environment variables because
1:  Having passwords hard-coded into your code is extremely dangerous\
2:  Other users having different credentials or connections points can just modify their environment variables without having to modify the code

Check my code for instructions
*/

db.useDatabase("crudOps"); //We want to put these types of things in a Config file. Check my code.

//Creating a collection
// db.collection('users').create();
db.createDatabase();
const mainCollection = db.collection("users"); //Will be in a config file.

/*
The problem with this is it presumes that whatever Arango instance any testing person is using already has a database called 'crudOps'
and a collection called "users". My code checks if those exists, and if not, then creates them. Check it out
*/

//Adding a user
const addUser = user => {
  const name = user.name;
  const task = user.task;
  mainCollection.save({
    name,
    task
  });

  /*
  Not sure why you're assigning variables to each value in user, then recreating an object to push through, you could have just said:
  - mainCollection.save(user);
  */

  console.log("The user " + name + " has been created!"); //Use string injection `` instead, ie:
  // console.log(`The user ${name} has been created!`);
};

// addUser({
//   name: "baron",
//   task: "jog"
// });

//RemovingUserByKey
const removeUser = _key => {
  if (_key !== mainCollection._key) {
    return console.log("Please enter valid key");
  }
  /* Not sure what's happening here, you probably need to use a documentExists api, check arango documentation for nodejs */

  mainCollection.remove(_key);
  console.log("User with " + _key + " has been removed");
};

// removeUser('28458');

//update user
const updateUser = (_key, data) => {
  const name = data.name;
  const task = data.task;
  mainCollection.update(
    _key,
    { name, task },
    {
      returnNew: true
    }
  );
  /* same thing here, you need to learn how to work with objects better. Read up on: destructuring, spread operator */
};

// updateUser('27506', {
//   task: "finally"
// })

/*

GENERAL COMMENTS

Your use of arrow functions is good, well done
Your general research and implementation of unknown apis is also quite nice.

You need to work on your use of objects, and object-oriented-design.
Each of these functions would be better placed in their own files / folders and you require() them at the top of your index.
Remember how Andrew did it, when he refactored his code?

You need to work on how to manage Promises, and general asynchronous coding.
All methods that hit Arango are asynchronous and return promises. So like, mainCollection.remove() etc are asynchronous. You need to you async / await
otherwise you won't ever be sure your code actually ran. You could also use .then() or callbacks but it's not recommended and will make your code look
quite ugly. There IS an instance where I used .then() in my code, and I'll explain why I did it there.

Please look through my code and let me know any comments suggestions questions.

~Sean 
*/
