

fetch('https://imdb-api.com/en/API/MostPopularMovies/k_i6tdr96d')
  .then((response) => response.json())
  .then((mostPolularData) => {
    console.log(mostPolularData);

    for (let i = 0; i < 28; i++) {
      let card = `<div class="col-lg-2 col-md-3 col-sm-4 col-6">
        <button class="cards border-0 rounded shadow-lg"
        style="
        width: 170px;
        height: 260px;
        background-image: url(${mostPolularData.items[i].image});
        background-size: cover;
        background-position: center;"
        
       value="${mostPolularData.items[i].id}" onclick="getID(this.value)">
        </button>
        <p class="fw-bold m-0 mt-1 ms-1" style="font-size: small">
          ${mostPolularData.items[i].title}
        </p>
        <p class="text-muted">
          ${mostPolularData.items[i].year} 
          <span class="badge bg-secondary float-end">${mostPolularData.items[i].imDbRating}</span>
        </p>
      </div>`;

      document.getElementById(`popularMoviesCard`).innerHTML += card;
    }
  })
  .catch((err) => console.error(err));

































//https://imdb-api.com/API/MostPopularMovies/k_uyxdqv0y

/*
function fetchmovies(){
   return fetch('https://imdb-api.com/API/SearchMovie/k_9egdb8s6/searchmovie')
.then(response => {
    if (!response.ok){
        throw new Error('network response was not ok');
    }
    return response.json();
})
.then(data=> data.results)
.catch(error =>{
    console.error('error fetching data:' ,error);
});
}

fetchmovies()
.then(seri =>{
    seri.forEach(moves  => {
        console.log(moves.fullTitle);
        moviappend(moves.fullTitle, moves.image)
        
    });
})

function moviappend(movname , picture){
    const div = document.createElement('div');
    const li= document.createElement('p');
    li.textContent =movname;
    const ime = document.createElement('img');
    const mostppmovie = document.getElementById("tredi")
    ime.src = picture;
    div.appendChild(img);
    div.appendChild(li);
    mostppmovie.appendChild(div);
}
*/
