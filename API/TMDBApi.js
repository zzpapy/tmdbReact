// API/TMDBApi.js

const API_TOKEN = "1209c73f14597cc45c91696c34a854c7";

export function getFilmsFromApiWithSearchedText (text,page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text+ "&page=" + page
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }
  export function getFilmDetail (id) {
    const url = "https://api.themoviedb.org/3/movie/"+id+"?api_key="+API_TOKEN+"&language=fr-FR&append_to_response=credits"
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }

  export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }