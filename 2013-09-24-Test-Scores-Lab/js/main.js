var score1 = prompt('Enter test score # 1');
var score2 = prompt('Enter test score # 2');
var score3 = prompt('Enter test score # 3');
var score4 = prompt('Enter test score # 4');
var score5 = prompt('Enter test score # 5');
var score6 = prompt('Enter test score # 6');
var score7 = prompt('Enter test score # 7');
var score8 = prompt('Enter test score # 8');
var score9 = prompt('Enter test score # 9');
var score10 = prompt('Enter test score # 10');

score1 = parseFloat(score1);
score2 = parseFloat(score2);
score3 = parseFloat(score3);
score4 = parseFloat(score4);
score5 = parseFloat(score5);
score6 = parseFloat(score6);
score7 = parseFloat(score7);
score8 = parseFloat(score8);
score9 = parseFloat(score9);
score10 = parseFloat(score10);

var test_total = 0;
test_total += score1;
test_total += score2;
test_total += score3;
test_total += score4;
test_total += score5;
test_total += score6;
test_total += score7;
test_total += score8;
test_total += score9;
test_total += score10;

var test_total = score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9 +score10;
console.log('Your total is ' + test_total);

var average = test_total / 10;
console.log('Your average is ' + average);

var score1 = score1 - average;
var score1 = Math.pow(score1,2);
console.log('Your answer is ' + score1);

var score2 = score2 - average;
var score2 = Math.pow(score2,2);
console.log('Your answer is ' + score2);

var score3 = score3 - average;
var score3 = Math.pow(score3,2);
console.log('Your answer is ' + score3);

var score4 = score4 - average;
var score4 = Math.pow(score4,2);
console.log('Your answer is ' + score4);

var score5 = score5 - average;
var score5 = Math.pow(score5,2);
console.log('Your answer is ' + score5);

var score6 = score6 - average;
var score6 = Math.pow(score6,2);
console.log('Your answer is ' + score6);

var score7 = score7 - average;
var score7 = Math.pow(score7,2);
console.log('Your answer is ' + score7);

var score8 = score8 - average;
var score8 = Math.pow(score8,2);
console.log('Your answer is ' + score8);

var score9 = score9 - average;
var score9 = Math.pow(score9,2);
console.log('Your answer is ' + score9);

var score10 = score10 - average;
var score10 = Math.pow(score10,2);
console.log('Your answer is ' + score10);

var std = score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9 + score10;
console.log('answer is ' + std);

var std = std /10;
console.log('answer is ' + std);

var std = Math.sqrt(std);
console.log('Your Standard deviation is ' + std);