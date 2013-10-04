'use strict';
var accountBalance = 0;

$(document).ready(initialize);


function initialize(){
  $('#set_image').click(createLogo);
  $('#set_balance').click(enterBalance);
  $('#deposit').click(enterDeposit);
  $('#withdrawal').click(enterWithdrawal);
}

function createLogo(){
  var image = $('#img_address').val();
  $('#logo').attr('src', image);
  $('#img_address').hide();
  $('#set_image').hide();

}

function  enterBalance(){
  var balance = $('#balance_entry').val();
  balance = parseInt(balance, 10);
  accountBalance += balance;
  $('#balance').text('$' + parseFloat(balance)  + '.00');
  $('#balance_entry').hide();
  $('#set_balance').hide();
}


function enterDeposit()
{

  var amount = $('#deposit_amount').val();
  var balance = $('#balance').text().slice(1);
  amount = parseFloat(amount, 10);
  balance = parseFloat(balance,10);
  var newAmount = balance + amount;
  $('#balance').text('$' + parseFloat(newAmount) + '.00');

  if(  $('#deposit').click(enterDeposit), true){
    var $div = $('<div>');
    $('#left').append($div).text('$' + parseFloat(amount) + '.00');
  }
}

function enterWithdrawal()
{
  var withdrawal = $('#deposit_amount').val();
  var balance = $('#balance').text().slice(1);
  withdrawal = parseFloat(withdrawal, 10);
  balance = parseFloat(balance,10);
  var newBalance = balance - withdrawal;

  $('#balance').text('$' + newBalance + '.00');
  var $div = $('<div>');
  $('#right').append($div).text('$' + withdrawal + '.00');
}

