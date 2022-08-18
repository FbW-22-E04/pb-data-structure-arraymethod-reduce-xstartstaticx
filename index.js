//Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
//1

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

// function groupById(array) {
//   //write your code here
//   const newUsers = array.reduce((nameGroup, person) => {
//     const id = person.id;
//     console.log(nameGroup);
//     if (nameGroup[id] === undefined) {
//       nameGroup[id] = [];
//       nameGroup[id].push(person);
//     }
//     return nameGroup;
//   }, {});
// }
// function groupByID(users) {
//   users.reduce((usersById, user) => {
//     if (usersById[user.id] === undefined)
//     usersById[user.id] = user;
//   }, {});
// }
function groupById(users) {
  return users.reduce((usersById, user) => {
    usersById[user.id] = user;
    return usersById;
  }, {});
}

let usersById = groupById(users);
console.log(usersById);

/* expected output: 

{
  john: { id: 'john', name: 'John Smith', age: 20 },
  ann: { id: 'ann', name: 'Ann Smith', age: 24 },
  pete: { id: 'pete', name: 'Pete Peterson', age: 31 }
}
  
*/
