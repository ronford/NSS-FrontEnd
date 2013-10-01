test('Pig_Latin', function() {
deepEqual(string_to_pig_latin("hello"),"elloha", "pig latin");
});

test('reverse', function() {
deepEqual(reverse_string("hello,nashville,code"),("code; nashville; hello"), "reverse words");
});
