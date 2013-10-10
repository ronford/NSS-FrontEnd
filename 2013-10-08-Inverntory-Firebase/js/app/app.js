'use strict';

var Δdb;
var Δitems;
var items = [];
var grandTotal = 0;

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#add').click(add);
  $('#save').click(save);
  $('#calculate').click(calculate);

  Δdb = new Firebase('https://inventory-rf.firebaseio.com/');
  Δitems = Δdb.child('items');
  Δdb.once('value', receiveDb);
  Δitems.on('child_added', childAdded);
}
  sum = 0;
function childAdded(snapshot){
  var item = snapshot.val();
  items.push(item);
  createRow(item);
  updateGrandTotal(item);
}

function receiveDb(snapshot){
  var inventory = snapshot.val();
  $('#person').val(inventory.fullName);
  $('#address').val(inventory.address);

  items = [];

  for(var property in inventory.items){
    var item = inventory.items[property];
    items.push(item);
  }

  var $header = $('#items tr:first-child').detach();
  $('#items').empty().append($header);
  for(var i = 0; i < items.length; i++){
    createRow(items[i]);
  }
}

function save(){
  var fullName = $('#person').val();
  var address = $('#address').val();
  var inventory = {};
  inventory.fullName = fullName;
  inventory.address = address;

  Δdb.update(inventory);
}

function add(){
  var name = $('#name').val();
  var count = parseInt($('#amount').val(),10);
  var value = parseInt($('#value').val(),10);
  var room = $('#room').val();
  var condition = $('#condition').val();
  var date = $('#date').val();

  var item = {};
  item.name = name;
  item.count = count;
  item.value = value;
  item.room = room;
  item.condition = condition;
  item.date = date;

  Δitems.push(item);
}

function createRow(item){
  var row = '<tr><td class="name"></td><td class="count"></td><td class="value"></td><td class="room"></td><td class="condition"></td><td class="date"></td></tr>';
  var $row = $(row);

  $row.children('.name').text(item.name);
  $row.children('.count').text(item.count);
  $row.children('.value').text(item.value);
  $row.children('.room').text(item.room);
  $row.children('.condition').text(item.condition);
  $row.children('.date').text(item.date);

  $('#items').append($row);
}

function  updateGrandTotal(item){
  grandTotal += (item.count * item.value);
  $('#total').text('$' + grandTotal + '.00');
}
