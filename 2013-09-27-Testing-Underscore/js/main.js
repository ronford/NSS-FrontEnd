function filter_evens(numbers)
{
  return _.filter(numbers, function(num){return (num % 2)==0;});
}

function filter_odd(numbers)
{
  return _.filter(numbers, function(num){return (num % 2) == 1;});
}

function filter_short_strings(strings)
{
  return _.filter(strings, function(string){return (string.length < 4)== 1;});
}

function filter_a_strings(strings, word)
{
  return _.filter(strings, function(string){return string[0].toLowerCase() == 'a';});
}

function find_string(strings, word)
{
  return _.find(strings, function(string){return string == "";});
}

function find_string_ending_letter(strings, letter)
{
  return _.find(strings, function(string){return string[string.length -1] == letter;});
}

function area(l, w)
{
  return l * w;
}

function volume(v, d)
{
  return v * d;
}

function add (age1, age2)
{
  return age1 + age2;
}

function multiply (me, him)
{
  return me * him;
}

function square(ron)
{
  return Math.pow(ron,2);
}

function greetings(bob)
{
  return "hello, bob";
}

function pig_latin(string)
{
  return  string.slice(1) + string[0] + "ay";
}

function pig_latin_greeting(greeting,name)
{

  return pig_latin(greeting) + ", " + pig_latin(name);
}


function pig_latin_sentence(original)
{
  var sent_array = sentece.split.(" ")
  var lat_array = []

  for (var i = 0; i < sent_array.length;i++) {
    lat_array.push(pig_latin(sent_array[i]))
  };
} return lat_array.join

