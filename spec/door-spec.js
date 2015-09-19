var Door = require('../src/door.js');

describe('Door',function(){
  describe('test the constructor',function(){
    it('should have attribute no and statue = flase',function(){
      var door = new Door(1);
      expect(door.no).toEqual(1);
      expect(door.status).toEqual(false);
    });
  });

  describe('test the getNo',function(){
    it('should return this.no',function(){
      var door = new Door(1);
      expect(door.getNo()).toEqual(1);
    });
  });

  describe('test the getStatus',function(){
    it('should return this.statue',function(){
      var door = new Door(1);
      expect(door.getStatus()).toEqual(false);
    });
  });
});
