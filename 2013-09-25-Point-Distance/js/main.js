var points = []

var entry = prompt('start or blank to exit');


while(entry)
{
  var point = {}
  point.x1 = parseInt(prompt('Enter X 1'));
  point.x2 = parseInt(prompt('Enter X 2'));
  point.y1 = parseInt(prompt('Enter Y 1'));
  point.y2 = parseInt(prompt('Enter Y 2'));
  entry = prompt('start or blank to exit');
};

diff = point.y2 - point.y1;
console.log('answer for y is ' + diff);

diff2 = point.x2 - point.x1;
console.log('answer for x is ' + diff2);

pathagoreum = Math.pow(diff,2) + Math.Pow(diff2,2);