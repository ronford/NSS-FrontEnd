var menu = [];
var menu_types = ["breakfast","lunch","dinner","beverages", "appetizers"];
var add_another_item = prompt('Type Enter to begin');


  while(add_another_item)
  {
  var item = {};
  item.name = prompt("Add menu item.");
  item.type = prompt("What type of item is this? (ex: breakfast, lunch, dinner?)");
  item.price = parseInt(prompt("What do you want to price this item?"));
  item.calories = parseFloat(prompt("How many calories are in this item?"));
  item.ingredient = prompt("What ingredients are in this item?");
  menu.push(item);
  add_another_item = prompt("Type Enter for next item");
  }

var calories_sum = 0;

for(var i = item.calories; i < menu.length;i++)
{
  item.calories += item[i].calories;
}






console.log("You have " + menu_types.length,"menu sections");
console.log("The total calories is " + item[i].calories);