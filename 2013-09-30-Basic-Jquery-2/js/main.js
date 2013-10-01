$(document).ready(initialize);

function initialize()
{
  $('#button1').click(change_green);
  $('#name_btn').click(count);
}

function change_green()
{
  $('#green').css('background-color', 'green');
}

function count()
{
  var name = $('name_txt').val();
  var length = name.length;

  $('#name_div').text(name + 'is' + length + 'characters long');
}

