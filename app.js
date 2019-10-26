let app = new Vue({

el: '#app',
  data: {
      movies: [],
        movie: {
            original_title: ' ',
            release_date: ' ',
            overview: '',
            imageSource: " ",
            },
      movieFound: false,
  },
  methods: {
      async getMovie(){
            this.movieFound = true;
            var url =  "https://api.themoviedb.org/3/search/movie?api_key=2367b02561decf85a7420eadd6cf995a&language=en-US&query="
            var imgSrc = "http://image.tmdb.org/t/p/w500";
            var value = "";
            var convertValue = "";
           
              event.preventDefault();
               value = document.getElementById("movieInput").value;
              if (value === "")
                return;
              console.log(value);
              for(let i = 0; i < value.length; i++){
                if(value[i] === ' '){
                  convertValue += "%20";
                }
                else{
                  convertValue += value[i];
                }
                console.log(convertValue);
                
              }
              url += convertValue;
              url += "&include_adult=false";
              
              const response =  await axios.get(url);
              
              console.log(response.data);
             
              //console.log(response);
              this.movie.original_title = response.data.results[0].original_title;
              //console.log(this.movie.original_title);
              this.movie.release_date = response.data.results[0].release_date;
              //console.log(this.movie.release_date);
              this.movie.overview = response.data.results[0].overview;
              //console.log(this.movie.overview);
              this.movie.imageSource = imgSrc + response.data.results[0].poster_path;
              //console.log(this.movie.imageSource);
              this.movies.push(this.movie);
              console.log(this.movies[0].original_title);
              
              
              
              
                url= "https://api.themoviedb.org/3/search/movie?api_key=2367b02561decf85a7420eadd6cf995a&language=en-US&query=";
               
            },
}
});


/*fetch(url)
                .then(function(response) {
                  return response.json();
                }).then(function(json) {
                  console.log(json);
                  console.log(json.results[0].original_title + "title");
                  current.title =json.results[0].original_title;
                  this.overview = json.results[0].overview;
                  this.releaseDate = json.results[0].release_date;
                  this.imageSource = imgSrc + json.results[0].poster_path;
                  
                  console.log("this.title = " + this.title);
                  console.log("this.overview = " + this.overview);
                  console.log("this.releaseDate = " + this.releaseDate);
                  console.log("this.imageSource = " + this.imageSource);
                }) */

