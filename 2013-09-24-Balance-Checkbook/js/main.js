
debugger;
var full_name = prompt('What is you Full Name?'); //string
  console.log("Your name is : " + full_name);
//my intial balance
var int_balance = parseFloat(prompt('What is you intial balance?'));
console.log("Your total balance is : " + int_balance);

// 1st deposit
var depo1 = parseFloat(prompt('Make your 1st deposit.'));
  console.log("You deposited : " + depo1);
// 2nd deposit
var depo2 = parseFloat(prompt('Make your 2nd deposit.'));
  console.log("You deposited : " + depo2);
// 3rd deposit
var depo3 = parseFloat(prompt('Make your 3rd deposit.'));
  console.log("You deposited : " + depo3);
//1st withdrawal
var withdrawal1 = parseFloat(prompt('Make a withdrawal'));
 console.log("You withdrew : " + withdrawal1);
 // 2nd withdrwal
var withdrawal2 = parseFloat(prompt('Make another withdrawal'));
  console.log("You withdrew : " + withdrawal2);
  // 3rd withdrawal
var withdrawal3 = parseFloat(prompt('Make your last withdrawal'));
  console.log("You withdrew : " + withdrawal3);



var final_balance = int_balance + depo1 + depo2 + depo3 - withdrawal1 - withdrawal2 - withdrawal3;
console.log("Your total is. : " + final_balance);

if(final_balance < 0)
{
  final_balance -= 50;
}
console.log("Your final balance is : " + final_balance);

