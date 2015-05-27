$(function (){

  var photos = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg',
  '06.jpg',
  '07.jpg',
  '08.jpg',
  '09.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
  ];


$('<img src="images/' + photos[Math.floor(Math.random() * photos.length)] + ' " ' + 'height="300"' + '>').appendTo('#photo1');
$('<img src="images/' + photos[Math.floor(Math.random() * photos.length)] + ' " ' + 'height="300"' + '>').appendTo('#photo2');

});






// var number = function {
    //return Math.floor(Math.random() * 12) + 1);
  //}

 //$("left")
