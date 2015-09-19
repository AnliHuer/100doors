function Door(no){
  this.no = no;
  this.status = false;
}

Door.prototype.getStatus = function(){
  return this.status;
};

Door.prototype.getNo = function(){
  return this.no;
};

module.exports = Door;
