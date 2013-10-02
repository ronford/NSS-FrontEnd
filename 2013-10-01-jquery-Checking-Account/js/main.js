var balance = 1000;

$(document).ready(initialize)

//deposit
function add_deposit(bal,dep_amount){

  return bal + dep_amount;
}
//withdrawal
function sub_deposit(bal,with_amount){
  return bal - with_amount;
}

function initialize(){
  $('#deposit').click(handle_deposit);

}

function handle_deposit(){
  var deposit = $('#amount').val()
}
