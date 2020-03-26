const arangojs = require('arangojs');
const db = new arangojs.Database({url:'http://127.0.0.1:8529'});
db.useBasicAuth("root", "Roncodes");


db.useDatabase('crudOps');

//Creating a collection
// db.collection('users').create();

const mainCollection = db.collection('users');


//Adding a user
const addUser = (user) => {
  const name = user.name
  const task = user.task
  mainCollection.save({
    name,
    task
  })
  console.log('The user ' + name +' has been created!')
}

// addUser({
//   name: "baron",
//   task:"jog"
// })
  


//RemovingUserByKey
const removeUser = (_key) => {
   if (_key !== mainCollection._key ) {
    return console.log('Please enter valid key')
  } 

  mainCollection.remove(_key)
  console.log('User with ' + _key +' has been removed')
}

// removeUser('28458');

//update user
const updateUser = (_key, data) => {
  const name = data.name
  const task = data.task
  mainCollection.update(_key, {name, task}, {
    returnNew: true
  })
}

// updateUser('27506', {
//   task: "finally"
// })


