$(document).ready(initialize);

function string_to_pig_latin(string){
  return string.slice(1) + string[0] + "a";
}


function reverse_string(sentence){
  return sentence.split(",").reverse('sentence').join('; ');
}

function join_function(string,sentence){
  return string + sentence;
}

function (initialize){
  $('convert').click(execute);
}


