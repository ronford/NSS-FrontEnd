var menu = {};
menu.sections = {};
menu.number_of_sections = parseInt(prompt('Number of Sections?'));



for(var i = 0; i < menu.number_of_sections; i++)
{
  var section_name = prompt('Name of Section?');
  menu.sections [section_name] = [];
}



var response = prompt('Enter Menu Section or blank to Exit');
while(response)
{
  var item = {}
  item.name = prompt('Name?');
  item.calories = parseInt(prompt('How many calories?'));
  item.cost = parseFloat(prompt('Cost'));
  item.ingredients = prompt('Ingredients?').split(', ');
  menu.sections[response].push(item);
  response = prompt('Enter Menu Section or blank to Exit');
}

var section_list = Object.getOwnPropertyNames(menu.sections);
for(i = 0; i < section_list.length; i++)
  for(var j = 0; j < menu.sections[section_list[i]].length; j++)
    menu.total_calories += menu.sections[section_list[i]][j].calories;

