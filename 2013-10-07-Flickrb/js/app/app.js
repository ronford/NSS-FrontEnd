'use strict';

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#search').click(searchFlickr);
  $('#clear').click(clearPhotos);
  $('#delete').click(del);
  $('#save').click(save);
  $('#photos').on('dblclick', '.photo', remove);
  $('#photos').on('click', '.photo', selectImage);

}

function save(){
  var $selectedImages = $('.selected');
  $selectedImages.removeClass('selected');
  $('#saved-photos').prepend('$selectedImages');
}

function  del(){
  $('.selected').remove('photo');
}


function  selectImage(){
  $(this).toggleClass('selected');
}

function clearPhotos(){
  $('#photos').empty();
}

function remove(){
  $(this).remove();
}

function searchFlickr()
{
  var API_KEY = 'f4356ef0ef5f1768294476d45acd47e8';
  var PER_PAGE = 5;
  var page = 1;

  var query = $('#query').val();
  var url = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + API_KEY + '&text=' + query + '&per_page=' + PER_PAGE + '&page=' + page + '&format=json&jsoncallback=?';
  $.getJSON(url, results);
}

function results(data){

  for(var i = 0; i < data.photos.photo.length; i++){
    creatImage(data.photos.photo[i]);
  }
}

function creatImage(photo){
    var url = 'url(http://farm'+ photo.farm +'.static.flickr.com/'+ photo.server +'/'+ photo.id +'_'+ photo.secret +'_m.jpg)';
    var $div = $('<div>');
    $div.addClass('photo');
    $div.css('background-image', url);
    $('#photos').prepend($div);
  }