var movies = [];

function add(){

    var title = document.getElementById('title').value;
    var rating = document.getElementById('rating').value;
    var year = document.getElementById('year').value;
    var movie = new Movie(title, rating, year);

    if(movie.validate()){

            movies.push(movie);
    }

    else{

            alert("Invalid Information! Movie not Added!");
    }

    document.getElementById('title').value="";
    document.getElementById('rating').value="";
    document.getElementById('year').value="";
}

function display(){

    var htmlText = "Movies: <ul>";

    for(var i=0;i<movies.length;i++){

            htmlText += "<li>"+movies[i].toString()+"</li>";

    }

    htmlText += "</ul>";

    document.getElementById('display').innerHTML = htmlText;
}