

var Cat = function(url) {
  this.votes = 0;
  this.picUrl = url;
};

var picsArray = [];

$.ajax({
  url: "https://api.imgur.com/3/album/LGiPx",
  headers:{
    "Authorization": "Client-ID 10328f45ce47c77"
    }
  })
  .done(function(res) {
    var images = res.data.images;
    for (i = 0; i < images.length; i++){
      picsArray.push(new Cat(images[i].link));
    };
    insertCatPic();
  });

  insertCatPic = function () {
  var randIndex1 = Math.floor(Math.random() * picsArray.length);
  var randIndex2 = Math.floor(Math.random() * picsArray.length);
  console.log(randIndex1 + "  " + randIndex2);
  while (randIndex1 === randIndex2) {
    randIndex2 = Math.floor(Math.random() * picsArray.length - 1);
  }


  $('#kit1').attr('src', picsArray[randIndex1].picUrl);
  $('#kit2').attr('src', picsArray[randIndex2].picUrl);

  $('#kit1').on('click', function(){
    var b = 1;
    console.log(b);

  });


};



























//Make object constructor for images Cat
//then make an anonymous function that creates cat images from



//when you call an anonymous function inside jquery and waits until everything else is ready to run


   //$('<img src="images/' + [Math.floor(Math.random() * catArray.length) +1] + '.jpg" ' + 'height="300"' + '>').appendTo('#photo1');
   //$('<img src="images/' + [Math.floor(Math.random() * catArray.length) +1] + '.jpg" ' + 'height="300"' + '>').appendTo('#photo2');

   //var Tracker = function()

  //$('td.total1').text(Math.floor(Math.random() * (5 - 1) +1 )).hide();
  //$('td.total2').text(Math.floor(Math.random() * (5 - 1) +1 )).hide();


   //  function imgNum(number1, number2, max){
   //   var newNumber;
   //   do{
   //     newNumber = Math.floor(Math.random() * max);
   //   }
   //   while (newNumber === number1 || newNumber === number2);
   //   return newNumber;
   // };



//tracker function. You have to run a comparison statement between the image and array number then add vote to this.vote

//tertiary operator this.id == button1 ? button2 : button1 if this do this if else do this



// var number = function {
    //return Math.floor(Math.random() * 12) + 1);
  //}

 //$("left")
