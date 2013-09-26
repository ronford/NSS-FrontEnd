var rooms = [];
var another = "";
var window_cost = 250;
var sqft_cost = 200
var house = {}


function total_area()
{
  var sum = 0;
  for(var i = 0; i < rooms.length; i++)
  {
    sum += rooms[i].area;
  }
  return sum;
}


while(another == '')
{
  var room = {};
  room.num = prompt("Enter amount of rooms desired.");
  room.name = prompt("What kind of room would you like?");
  room.width = parseFloat(prompt("What is the width of room?"));
  room.length = parseFloat(prompt("What is the length of room?"));
  room.number_windows = parseInt(prompt("How many windows would you like?"));
  rooms.push(room);
  another = prompt("Press enter to add another room " + another );
}

var total_square_feet = (room.width * room.length);



