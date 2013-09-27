function area(w,l)
{
  return w * l;
}

const PRICE_PER_SQFT = 200;
const PRICE_PER_WINDOW = 250;

var house = {};
house.number_of_rooms = parseInt(prompt("Number of Rooms?"));
house.number_of_windows = 0;
house.area = 0;
house.rooms = [];

for(var i = 0; i < house.number_of_rooms; i++);
{
  var room = {};
  room.name = prompt('Room Name?');
  room.windows = parseInt(prompt("Number of windows?"));
  house.number_of_windows += room.windows;
  room.width = parseFloat(prompt("What is the width of room?"));
  room.length = parseFloat(prompt("What is the length of room?"));
  room.area= area(room.width * room.length);
  house.area += room.area;
  house.rooms.push(room);
}

house.number_of_rooms = house.rooms.length;


house.area_cost = house.area * PRICE_PER_SQFT;
house.window_cost = house.number_of_windows * PRICE_PER_WINDOW;
house.total_cost = house.area_cost + house.window_cost;

