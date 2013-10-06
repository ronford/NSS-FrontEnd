'use strict';

$(document).ready(initialize);

function  initialize(){
  $('#add_task').click(addRow);
}

function addRow()
{
//debugger;
  var $tr = $('<tr>');

  var dueDate = $('#due_date').val();
  var $date = $('<td>');
  $date.addClass('date');
  $date.append(dueDate);

  var taskInput = $('#task').val();
  var $task = $('<td>');
  $task.addClass('task');
  $task.append(taskInput);


  var colorInput = $('#priority_color').val();
  var $color = $('<td>');
  $color.addClass('color');
  $color.css('background-color', colorInput);
  $color.append(colorInput);


  var $done = $('<input>');
  $done.addClass('done');
  $done.attr('type', 'checkbox');
  $done.append($done);

  var $remove = $('<input>');
  $remove.addClass('remove');
  $remove.attr('type', 'button');
  $remove.attr('value', 'Remove');
  $remove.append($remove);

  var $up = $('<input>');
  $up.addClass('up');
  $up.attr('type', 'button');
  $up.attr('value', 'Up');
  $up.append($up);

  var $down = $('<input>');
  $down.addClass('down');
  $down.attr('type', 'button');
  $down.attr('value', 'Dwn');
  $down.append($down);


  $tr.append($date,$task, $color, $done, $remove, $up, $down);
  $('table').append($tr);

  clearInputAndFocus();
}

function clearInputAndFocus(){
  $('#due_date').focus();
  $('#due_date').val('');
  $('#task').val('');
  $('#priority_color').val('');
  $('#due_date').focus();
}