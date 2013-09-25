var scores = [];
var sum = 0;
var mean = 0;
var deviations = 0;
var deviation = 0;


while(scores.length < 10){
  var student_id = scores.length + 1;
  var score = prompt('Please enter the test score for student #' + student_id);
  scores.push(parseFloat(score));
}


for (var i = 0; i < scores.length; i++) {
     sum += scores[i];
};

mean = sum / scores.length;

for (var i = 0; i < scores.length; i++) {
    //Subtract the deviance of each piece of data by subtracting the mean from each number.
     var deviance = scores[i] - mean;

     //Square each of the deviations.
     deviance = Math.pow(deviance, 2);

     //Add up all of the squared deviations.
     deviations += deviance;
};

deviation = Math.sqrt(deviations / scores.length);

console.log('the mean is: ' + mean);
console.log('the standard deviation is: ' + deviation);