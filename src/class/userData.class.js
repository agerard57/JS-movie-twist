/**
 * @access private
 *
 * @class
 *
 * @param {String}  username  The user's username.
 * @param {String}  city      The user's city.
 * @param {String}  type      The type of the user (user or admin).
 * @param {String}  remembers   Has the user selected "remember me".
 **/

export class UserData {
  constructor(username, city, type, remembers) {
    this._username = username;
    this._city = city;
    this._type = type;
    this._remembers = remembers;
  }

  // username
  get username() {
    return this._username;
  }
  set username(tmp) {
    this._username = tmp;
  }

  // city
  get city() {
    return this._city;
  }
  set city(tmp) {
    this._city = tmp;
  }

  // type
  get type() {
    return this._type.toUpperCase();
  }
  set type(tmp) {
    this._type = tmp;
  }

  // remembers
  get remembers() {
    return this._remembers;
  }
  set remembers(tmp) {
    // Transforms the string "true" or "false" into a true boolean
    this._remembers = tmp === "true";
  }
}

/* ----------- SAMPLE DATA -----------
{
  "username": "agerard57",
  "city": "Metz",
  "type": "admin"
  "remembers": "true"
} 
*/
