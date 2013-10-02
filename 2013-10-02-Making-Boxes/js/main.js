$(document).ready(initialize)

function initialize(){
  $('#make_boxes').click(makingBoxes);
}

function makingBoxes(){
  // creating var to pull out the value of id #amount
  var numberOfBoxes = $('#amount').val();
  //converting that variable from a string into a number
  numberOfBoxes = parseInt(numberOfBoxes);

  $('#boxes').empty();

  for(var i = 0; i < numberOfBoxes; i++)
  {
    // this var is creating a new div with <>
    var $div = $('<div>')
    // this is adding the class .box from style.scss
    $div.addClass('box');
    // this is adding the text (i) which is adding the numbers inside the box
    $div.text(i);
    // this is pushing or appending the var $div
    // or the created divs into the input id #boxes
    $('#boxes').append($div);
  }
}