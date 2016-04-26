class MoviesController {
  constructor($ionicModal, $scope, $http, MoviesService) {
    this._$http = $http;
    this._MoviesService = MoviesService;

    this.movie = "";
    this.movies = this._MoviesService.all();
    this.showDelete = false;

    this.modal = $ionicModal.fromTemplate(require("./views/form.html"), {
      scope: $scope
    });
  }

  showForm() {
    this.modal.show();
  }

  addMovie() {
    this._$http
      .get(`http://www.omdbapi.com/?t=${this.movie}&y=&plot=short&r=json`)
      .then((response) => {
        this._MoviesService.addMovie(response.data);
        this.movie = "";
        this.modal.hide();
      });
  }

  deleteMovie(movie) {
    this._MoviesService.deleteMovie(movie);
  }

  toggleDelete() {
    this.showDelete = !this.showDelete;
  }
}

export default MoviesController;
