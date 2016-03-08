// Javascript Entry Point

import $ from 'jquery';

$('body').css('background', 'red');

$('.hide').on('click', function() {
  $('img').toggleClass('hidden');
});

$('.slide').on('click', function() {
  $('.app').toggleClass('slid');
});

// event delegation without jquery

// var buttonList = document.querySelector('.button-list');

// buttonList.addEventListener('click', function(event){

//   // event.currentTarget === the button-list
//   // event.target === the actual button that was clicked

//   var letter = event.target.textContent;

//   alert(letter);

// });

// event delegation with jquery

$('.button-list').on('click', function(e) {
  var letter = event.target.textContent;
  alert(letter);
});
