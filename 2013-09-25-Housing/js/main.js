var rooms = [];
var another = 'yes';

while(another = 'yes');
{
  var room = {};
  room.name = prompt("What kind of room would you like?");
  room.width = parseInt(prompt("What is the width of room?"));
  room.length = parseInt(prompt("What is the length of room?"));
  room.windows = parseInt(prompt("How many windows would you like?"));
  rooms.push(room);
  another = prompt("Would You like another room? " + another );
}
