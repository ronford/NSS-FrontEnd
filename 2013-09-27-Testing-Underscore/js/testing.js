test( "Filter Even Numbers", function() {
  var numbers = _.range(10);
  var expected = [0, 2, 4, 6, 8];
  deepEqual(filter_evens(numbers), expected, "testing the filter_evens function" );
});

test( "Filter Odd Numbers", function() {
  var numbers = _.range(10);
  var expected = [1, 3, 5, 7, 9];
  deepEqual(filter_odd(numbers), expected, "testing the filter_odd function" );
});

test( "Filter Short Strings", function() {
  var strings = ["hello", "a", "the", "cat", "apple", "aardvark", "elephant", "encyclopedia,"];
  var expected = ['a', 'the', 'cat'];
  deepEqual(filter_short_strings(strings), expected, "testing short strings under 4 function" );
});

test( "Filter 'A' Strings", function() {
  var strings = ["hello", "a", "the", "cat", "apple", "Aardvark", "elephant", "encyclopedia,"];
  var expected = ['a', 'apple', 'Aardvark'];
  deepEqual(filter_a_strings(strings), expected, "testing words with A" );
});

test( "Find a String", function() {
  var strings = ["hello", "a", "the", "cat", "apple", "Aardvark", "elephant", "encyclopedia,"];
  deepEqual(find_string(strings, "elephant",  "should find the elephant in the array" ));
  deepEqual(find_string(strings, "the",  "looking for apple" ));
  deepEqual(find_string(strings, "cat",  "looking for cat" ));
  deepEqual(find_string(strings, "not here", undefined, "should not find the string" ));

});

test( "Find a String ending in a particular letter", function() {
  var strings = ["dog", "cats", "lions", "tigers"];
  deepEqual(find_string_ending_letter(strings, "s"), "cats", "should find the s in the array");
  deepEqual(find_string_ending_letter(strings, "z"), undefined, "should not find the string");
});


test( "Area", function() {
  deepEqual(area(3,5), 15, "area");
});

test( "volume", function() {
  deepEqual(volume(2,7), 14, "volume");
});

test( "add", function() {
  deepEqual(add(2,7), 9, "volume");
});

test("multiply", function() {
  deepEqual(multiply(2,10), 20, "multiply");
});

test("square", function() {
  deepEqual(square(3), 9, "square");
});

test("greetings", function() {
  deepEqual(greetings("bob"), "hello, bob", "greetings");
});

test("pig latin", function() {
  deepEqual(pig_latin("bobby"), "obbybay", "greetings");
});

test("pig latin greetings", function() {
  deepEqual(pig_latin_greeting("hello","bobby"), "ellohay, obbybay", "greetings");
});

test("pig latin sentence", function() {
  var sentence = "coding at the parthenon nashville";
  var expected = "odingcay taa hetay arthenonaay ashvilleaay";
  deepEqual(pig_latin_sentence(sentence), expected, "testing");
});


