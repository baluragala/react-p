let members = ["Jack","Jill","Hill","Bill","Chill"];
/*let manager = members[0];
let lead = members[1];
let team = members.slice(2);
console.log(manager,lead,team);*/


[manager,lead,...team] = members;
console.log(manager,lead,team);

function makeCollection(...params) {
  console.log(params)
}

makeCollection(1,2,4,5,6)
makeCollection(1,2,4,5,6,7,8,9,10)