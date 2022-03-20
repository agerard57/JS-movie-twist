/**
 * @access private
 *
 * @class
 *
 * @param {String}  backdropPath      The url slug for the movie's backdrop.
 * @param {Object}  [genreIds]        The movie's genre ids.
 * @param {String}  id                The movie's id.
 * @param {String}  originalLanguage  The movie's "nationality".
 * @param {String}  originalTitle     The movie's title in it's original language.
 * @param {String}  overview          The movie's plot.
 * @param {String}  popularity        The movie's rank in popularity.
 * @param {String}  posterPath        The url slug for the movie's poster.
 * @param {String}  releaseDate       The movie's release date.
 * @param {String}  title             The movie's title.
 * @param {Number}  voteAverage       The movie's average note.
 * @param {Number}  voteCount         The number of votes for themovie.
 **/

export class Movie {
  constructor(
    backdropPath,
    genreIds,
    id,
    originalLanguage,
    originalTitle,
    overview,
    popularity,
    posterPath,
    title,
    voteAverage,
    voteCount
  ) {
    this._backdropPath = backdropPath;
    this._genreIds = genreIds;
    this._id = id;
    this._originalLanguage = originalLanguage;
    this._originalTitle = originalTitle;
    this._overview = overview;
    this._popularity = popularity;
    this._posterPath = posterPath;
    this._title = title;
    this._voteAverage = voteAverage;
    this._voteCount = voteCount;
  }

  // backdropPath
  get backdropPath() {
    return "https://image.tmdb.org/t/p/original" + this._backdropPath;
  }
  set backdropPath(tmp) {
    this._backdropPath = tmp;
  }

  // genreIds
  get genreIds() {
    return this._genreIds;
  }
  set genreIds(tmp) {
    this._genreIds = tmp;
  }

  // id
  get id() {
    return this._id;
  }
  set id(tmp) {
    this._id = tmp;
  }

  // originalLanguage
  get originalLanguage() {
    return this._originalLanguage;
  }
  set originalLanguage(tmp) {
    this._originalLanguage = tmp;
  }

  // originalTitle
  get originalTitle() {
    return this._originalTitle;
  }
  set originalTitle(tmp) {
    this._originalTitle = tmp;
  }

  // overview
  get overview() {
    return this._overview;
  }
  set overview(tmp) {
    this._overview = tmp;
  }

  // popularity
  get popularity() {
    return this._popularity;
  }
  set popularity(tmp) {
    this._popularity = tmp;
  }

  // posterPath
  get posterPath() {
    return "https://image.tmdb.org/t/p/original" + this._posterPath;
  }
  set posterPath(tmp) {
    this._posterPath = tmp;
  }

  // title
  get title() {
    return this._title;
  }
  set title(tmp) {
    this._title = tmp;
  }

  // voteAverage
  get voteAverage() {
    return this._voteAverage;
  }
  set voteAverage(tmp) {
    this._voteAverage = tmp;
  }

  // voteCount
  get voteCount() {
    return this._voteCount;
  }
  set voteCount(tmp) {
    this._voteCount = tmp;
  }
}

/* ----------- SAMPLE DATA -----------
{
  "backdrop_path": "/m5HPKCi7GdhKmxPTcOQmcLfEmZ9.jpg",
  "genre_ids": [16, 12, 35, 14],
  "id": 532067,
  "original_language": "ja",
  "original_title": "映画 この素晴らしい世界に祝福を！紅伝説",
  "overview": "It is not strange that the Demon Lord's forces fear the Crimson Demons, the clan from which Megumin and Yunyun originate. Even if the Demon Lord's generals attack their village, the Crimson Demons can just easily brush them off with their supreme mastery of advanced and overpowered magic.  When Yunyun receives a seemingly serious letter regarding a potential disaster coming to her hometown, she immediately informs Kazuma Satou and the rest of his party. After a series of wacky misunderstandings, it turns out to be a mere prank by her fellow demon who wants to be an author. Even so, Megumin becomes worried about her family and sets out toward the Crimson Demons' village with the gang.  There, Kazuma and the others decide to sightsee the wonders of Megumin's birthplace. However, they soon come to realize that the nonsense threat they received might have been more than just a joke.",
  "popularity": 150.183,
  "poster_path": "/j73LuQcA21KvkVFcroWWMN8tTJv.jpg",
  "release_date": "2019-08-30",
  "title": "KonoSuba: God's Blessing on this Wonderful World! Legend of Crimson",
  "vote_average": 8.4,
  "vote_count": 363
} 
*/
