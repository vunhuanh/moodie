$(document).ready(function(){
  function appendMovie(poster, id, name){
    var l1 = "<a href=\"/COMP307/front-end/html/movie.php?"+id+"\"><img class=\"slideshow\" src=\""+ poster + "\"></a>"
    $('.container-fluid').append(l1);
  }

  var base_url="http://localhost/COMP307/";
  var url = base_url+'back-end/featured';

  $.ajax({
    type: "GET",
    url: url,
    dataType: 'json',
    success:function(data){
      for(var i=0; i<10; i++){
        movieid = data[i][0];
        var api = "https://api.themoviedb.org/3/movie/" + movieid + "?api_key=1753a8a0eee9f02ab07f902370f8f1ea";
        
        var settings = {
          "async": false,
          "crossDomain": true,
          "url": api,
          "headers": {},
          "data": "{}"
        }

        $.ajax(settings).done(function (response) {
          movieid = "movie="+data[i][0]+"&tv=0";
          var poster = "https://image.tmdb.org/t/p/w500" + response['poster_path'];
          var link = "/COMP307/front-end/html/movie.php?"+movieid;
          $('#afeat'+i).prop('href', link);
          $('#ifeat'+i).attr('src', poster);
        });
      }

       
    }
  });

});