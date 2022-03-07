/**
 * @access private
 *
 * @class
 *
 * @param {string}  title           The movie's title.
 * @param {Object}  [genres]        The movie's genres.
 * @param {Object}  [ratings]       The movie's ratings.
 * @param {string}  posterUrl       The url slug for the movie's poster.
 * @param {string}  contentRating   The movie's maturity rating.
 * @param {string}  duration        The movie's total duration.
 * @param {Date}    releaseDate     The movie's release date.
 * @param {string}  storyline       The movie's description.
 * @param {Object}  [actors]        The movie's main actors.
 * @param {number}  imdbRating      The movie's imdb rating.
 **/

export class Movie {
  constructor(
    title,
    genres,
    ratings,
    posterUrl,
    contentRating,
    duration,
    releaseDate,
    storyline,
    actors,
    imdbRating
  ) {
    this.title = title;
    this.genres = genres;
    this.ratings = ratings;
    this.posterUrl = posterUrl;
    this.contentRating = contentRating;
    this.duration = duration;
    this.releaseDate = releaseDate;
    this.storyline = storyline;
    this.actors = actors;
    this.imdbRating = imdbRating;
  }
  get title() {
    return this._title;
  }
  set title(tmp) {
    this._title = tmp;
  }
  get genres() {
    return this._genres;
  }
  set genres(tmp) {
    this._genres = tmp;
  }
  get ratings() {
    return this._ratings;
  }
  set ratings(tmp) {
    this._ratings = tmp;
  }
  get posterUrl() {
    return this._posterUrl;
  }
  set posterUrl(tmp) {
    this._posterUrl = "https://images-na.ssl-images-amazon.com/images/M/" + tmp;
  }
  get contentRating() {
    return this._contentRating;
  }
  set contentRating(tmp) {
    this._contentRating = tmp;
  }
  get duration() {
    return this._duration;
  }
  set duration(tmp) {
    this._duration = tmp;
  }
  get releaseDate() {
    return this._releaseDate;
  }
  set releaseDate(tmp) {
    this._releaseDate = tmp;
  }
  get storyline() {
    return this._storyline;
  }
  set storyline(tmp) {
    this._storyline = tmp;
  }
  get actors() {
    return this._actors;
  }
  set actors(tmp) {
    this._actors = tmp;
  }
  get imdbRating() {
    return this._imdbRating;
  }
  set imdbRating(tmp) {
    this._imdbRating = tmp;
  }
}
/* ----------- SAMPLE DATA -----------
{
    "title": "Nyckeln till frihet",
    "year": "1994",
    "genres": ["Crime", "Drama"],
    "ratings": [
      8, 8, 6, 10, 2, 3, 4, 5, 4, 9, 3, 9, 6, 10, 4, 8, 10, 1, 2, 8, 1, 9, 5, 4,
      4, 2, 4, 6, 9, 10
    ],
    "poster": "MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY500_CR0,0,336,500_AL_.jpg",
    "contentRating": "15",
    "duration": "PT142M",
    "releaseDate": "1995-03-03",

    "originalTitle": "The Shawshank Redemption",
    "storyline": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.                Written by\nJ-S-Golden",
    "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    "imdbRating": 9.3,
    "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY500_CR0,0,336,500_AL_.jpg"
  * /
 */
