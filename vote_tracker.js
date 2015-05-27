$(function (){

  // var photos = [
  // '01.jpg',
  // '02.jpg',
  // '03.jpg',
  // '04.jpg',
  // '05.jpg',
  // '06.jpg',
  // '07.jpg',

  // ];

  // var photosX = [
  // '08.jpg',
  // '09.jpg',
  // '10.jpg',
  // '11.jpg',
  // '12.jpg',
  // '13.jpg',
  // '14.jpg',

  // ];

//de duplicate

  var Cat = function (photo, vote) {
    this.photo = photo
    this.vote = vote
    }

  var catArray = [];

  for (var i = 0; i <14; i++){
    catArray.push(new Cat(catArray[i], 0))
  };

  var


  $('<img src="images/' + [Math.floor(Math.random() * catArray.length) +1] + '.jpg" ' + 'height="300"' + '>').appendTo('#photo1');
  $('<img src="images/' + [Math.floor(Math.random() * catArray.length) +1] + '.jpg" ' + 'height="300"' + '>').appendTo('#photo2');

  var Tracker = function()




  $('td.total1').text(Math.floor(Math.random() * (5 - 1) +1 )).hide();
  $('td.total2').text(Math.floor(Math.random() * (5 - 1) +1 )).hide();


  });
//tracker function. You have to run a comparison statement between the image and array number then add vote to this.vote

//tertiary operator this.id == button1 ? button2 : button1 if this do this if else do this



// var number = function {
    //return Math.floor(Math.random() * 12) + 1);
  //}

 //$("left")
