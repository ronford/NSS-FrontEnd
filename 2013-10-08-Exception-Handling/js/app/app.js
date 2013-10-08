'use strict';

$(document).ready(initialize);

function initialize(){
  $(document).foundation();

  var o = {};

  try {
    console.log(y);
  } catch(e) {
    console.log('you just recieved the error ' + e);
  }



  try {
    console.log(x);
  } catch(e) {
    console.log('you just recieved the error ' + e);
  }

  try {
    o.doesntExist();
  } catch(e) {
    alert('I have reached the end');
  }
}


