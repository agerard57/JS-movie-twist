/**
 * Normalize the port prompted at the start of the command.
 *
 * Otherwise, if NaN, returns the default port (3000).
 *
 * @module utils
 * @param {val}           value Is the value prompted at the start of the command.
 * @return {number}       Returns the normalized port number OR 3000
 */

export const normalizePort = (val) => {
  let port = parseInt(val, 10);
  if (port >= 0) return port;
  else return 3000;
};
