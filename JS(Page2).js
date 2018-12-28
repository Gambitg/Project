// Define function to get parameter from url
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

// Get movieId parameter from url
var movieId = getUrlParameter("movieId");

var apiUrl=`http://www.omdbapi.com/?apikey=ebd995fd&i=${movieId}`;


 //Send request to the api server
 $.get(apiUrl, function(data) {
     $(".main-src").html('');
    // Append received data
     console.log(data.Ratings);
     if(data.Poster == "N/A") {
         data.Poster = "img/Alt.png";
     }
      if(data.Ratings.length != '3' )
     {
            //data.Ratings[0]="N/A";
            data.Ratings[1]="N/A";
            data.Ratings[2]="N/A";
     }
    $(".main-src").append(`
  <div class="row">

    <div class="header  col-md-8 col-lg-6">
        <img src="${data.Poster}"> </img>
    </div>


       <div class="col-md-4 col-lg-6">
           <h3>Title:</h3><h4>${data.Title}</h4>
           <h3>Genre:</h3><h4>${data.Genre}</h4>
           <h3>Year:</h3><h4>${data.Year}</h4>
           <h3>Actors:</h3><h4>${data.Actors}</h4>
           <p><h3>Rated:</h3><h4>${data.Rated}</h4></p>
           <h3>Ratings:</h3> <div class="raitings"><p>IMDB</p>${data.Ratings[0].Value}</div>
                             <div class="raitings"><p>RottenTomatoes</p>  ${data.Ratings[1].Value}</div>
                             <div class="raitings"><p>Metacritic</p>  ${data.Ratings[2].Value}</div>

       </div>
   </div>
      <div class="row Plot">
          <div id="Plot" class="col-md-12 col-lg-12"><h3>Plot:</h3><h4>${data.Plot}</h4> </div>
      </div>
  </div>

 `);


});
