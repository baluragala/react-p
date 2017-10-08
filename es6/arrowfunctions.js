const scores = [60, 40, 56, 77, 89];
/*let filteredScores = []
for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 60) {
    filteredScores.push(scores[i])
  }
}*/

//let filteredScores = scores.filter(s => s >= 60);

//console.log(filteredScores)
//console.log(scores)

/*
 scope and context -> this
 */

var handler = function () {
  console.log(this.style);
  this.style.backgroundColor = this.style.backgroundColor === 'yellow' ? "" : "yellow";
};







