function add(x,y){
  return x + y;
}

$(document).ready(initialize);

function initialize(){
  $('#add').click(compute_sum);
}
function compute_sum(){

  var num1 = $('#num1').val();
  var num2 = $('#num2').val();
  x = parseInt(num1);
  y = parseInt(num2);
  var sum = add(x,y);
  $('#result').text(sum);
}