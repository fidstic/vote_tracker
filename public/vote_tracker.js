$(document).ready(function() {

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

  }



  var voteL = 0;
  $('#voteLeft').on('click', function(e){
  voteL ++;
  console.log(voteL);
  $('.vote1Total').html("I have this many votes " + voteL);
  $('#kit1').css({'border': '10px solid #F21905'});
  $('#kit2').attr('src', picsArray[randIndex2].picUrl);

 });

  var voteR = 0;
  $('#voteRight').on('click', function(e){
  voteR ++;
  console.log(voteR);
  $('.vote2Total').html("I have this many votes " + voteR);
  $('#kit2').css({'border': '10px solid #F21905'});
  $('#kit1').attr('src', picsArray[randIndex1].picUrl);

});


  $('#reload').on('click', function() {
    insertCatPic();
  $('#kit2').css({'border': ''});
  $('#kit1').css({'border': ''});

})


});






















