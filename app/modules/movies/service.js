class MoviesService {
  constructor($firebaseArray) {
    this.ref = new Firebase(`https://jb-movies.firebaseio.com/movies`);
    this.movies = $firebaseArray(this.ref);
    console.log(this.movies);
  }

  all() {
    return this.movies;
  }

  addMovie(movie) {
    this.movies.$add(movie);
  }

  deleteMovie(movie) {
    this.movies.$remove(movie);
  }

}

export default MoviesService;
