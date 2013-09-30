/*
test( "function name", function() {
  deepEqual( ___, ____, "what this test is doing" );
  deepEqual( ___, ____, "what this test is doing" );
  deepEqual( ___, ____, "what this test is doing" );
});
*/

test("1 + 1", function() {
  deepEqual(1 + 1, 2, "adding 1 and 1");
});

test("Nashville[0]", function() {
  deepEqual("Nashville"[0], "N", "first letter from string");
});

test("add_three", function() {
  deepEqual(add_three(5), 8, "adding 3 to 5");
  deepEqual(add_three(7), 10, "adding 3 to 7");
});

test("square", function() {
  deepEqual(square(3), 9, "square 3");
  deepEqual(square(5), 25, "square 3");
});

test("area", function() {
  deepEqual(area(3,5), 15, "area");
  deepEqual(area(7,5), 35, "area");
});

test("volume", function() {
  deepEqual(volume(3,5,2), 30, "volume");
  deepEqual(volume(7,5,2), 70, "volume");
});

test("power", function() {
  deepEqual(power(2,0), 1, "power");
  deepEqual(power(2,1), 2, "power");
  deepEqual(power(2,2), 4, "power");
});

test("greetings", function() {
  deepEqual(greeting("hello","janet"), "hello, janet!", "greetings");
});