$("#Searching").click(function () {


        var s = $("#Fox").val();
        var url= `http://www.omdbapi.com/?s=${s}&apikey=f316e246`;

        $.get(url, function(data){
            // console.log(data);
            $(".contain").html('');
            for(i=0;i<data.Search.length;i++)
            {
                if(data.Search[i].Poster == "N/A") {
                    data.Search[i].Poster = "img/Alt.png";
                }
                $(".contain").append(`
                <a href="Page2.html?movieId=${data.Search[i].imdbID}">
                <div class="X">
                <img id="img" src="${data.Search[i].Poster}" alt="Error 404" height="200" width="200">
                <h1 class="text">${data.Search[i].Title}</h1>
                <h2 class="text">${data.Search[i].Year}</h2>
                </a>

                 </div>
                `)
            }
        });
        $("#Lets").html('Results!!');
    });
