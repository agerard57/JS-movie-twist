/**
 * Format the imgaes given by the database.
 *
 * @module utils
 * @param {string}           path Is the image path fed by the database.
 * @param {string}           size Is the size of the image wanted (see under the function).
 * @return {string}          Returns the full image URL as a string.
 */

export const formatImageUrl = (date, format) => {
    const baseUrl = "https://image.tmdb.org/t/p/";
    return baseUrl + format + date;
};

/*
 size chart found here: https://www.themoviedb.org/talk/5aeaaf56c3a3682ddf0010de
 |  poster  | backdrop |
 | :------: | :------: |
 |    w92   |   w300   |
 |   w154   |   w780   |
 |   w185   |  w1280   |
 |   w342   |   w300   |
 |   w500   | original |
 |   w780   | -------- |
 | original | -------- |
 */