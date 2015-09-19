var Door = require('../src/door.js');
var obj = require('../src/main.js');

describe('createAllDoors',function(){
  it('should create a doorArray having 100 doors',function(){
    var doorArray = obj.createAllDoors();
    expect(doorArray.length).toEqual(100);
    expect(doorArray[0].no).toEqual(1);
  });
});
