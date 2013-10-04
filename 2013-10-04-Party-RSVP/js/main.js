'use strict';
$(document).ready(initialize);

function  initialize(){
  $('#add').click(addRow);
  $('table').on('click', '.rsvp', rsvp);
  $('table').on('click', '.nuke', nuke);
  $('table').on('click', '.up', '.down', move);
}

function move()
{
  var img = $('this');

}

function rsvp(){

  var $button = $(this);
  var $textbox = $button.prev();
  var text = $textbox.val();
  var items = text.split(', ');
  var name = items[0];
  var food = items[1];
  var $nameTD = $button.parent().prev().prev();
  var $foodTD = $button.parent().siblings('.food');
  $nameTD.text(name);
  $foodTD.text(food);
}

function nuke(){
  var $remove = $(this);
  $remove.parent(0).remove();
  $input.focus();
}

function addRow(){

  var $tr = $('<tr>');
  var $name = $('<td>');
  $name.addClass('name');
  var $food = $('<td>');
  $food.addClass('food');
  var $ctrl = $('<td>');
  $ctrl.addClass('ctrl');

  var $up = $('<img>');
  $up.attr('src', 'images/arrow-up.png');
  $up.addClass('up');
  var $down = $('<img>');
  $down.attr('src', 'images/arrow-down.png');
  $down.addClass('down');

  var $input = $('<input>');
  $input.attr('type', 'text');

  var $button = $('<input>');
  $button.attr('type', 'button');
  $button.val('RSVP!');
  $button.addClass('rsvp');

  var $nuke = $('<input>');
  $nuke.attr('type', 'button');
  $nuke.val('NUKE');
  $nuke.addClass('nuke');

  $ctrl.append($input, $button);
  $nuke.append($nukeButton)
  $tr.append($name, $food, $ctrl, $nuke, $up, $down);
  $('table').append($tr);



  $input.focus();
}

