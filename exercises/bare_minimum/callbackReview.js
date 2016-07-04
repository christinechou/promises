/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath) {
  fs.readFile(filePath, 'utf-8', function(err, file) {
    if (err) {
      callback(err, null);  //no file returned
    } else {
      var firstLine = file.split('\n')[0]
      //first error first pattern:
      callback(null, firstLine);
    }
  })
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request.get(url, function(err, response, body) {
    if (err) {
      return callback(err, null);
    } else {
      callback(null, response.statusCode)
    }
  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};