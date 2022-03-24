/**
 * Normalize the port prompted at the start of the command.
 *
 * Otherwise, if NaN, returns the default port (3000).
 *
 * @param {String}        envPort Is the port prompted at the start of the command.
 * @return {Number}       Returns the normalized port number OR 3000
 */

module.exports = function normalizePort(envPort) {
  const port = parseInt(envPort, 10);
  if (port >= 0) return port;
  return 3000;
};
