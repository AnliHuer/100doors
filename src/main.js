var Door = require('./door.js');

function createAllDoors() {
  var doorArray = [];
  var i = 1;
  while (i <= 100) {
    doorArray.push(new Door(i));
    i++;
  }
  return doorArray;
}

module.exports = {createAllDoors:createAllDoors};
