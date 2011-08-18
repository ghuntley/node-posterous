var Posterous = require('../index');
var config = require('./config');

var posterous = new Posterous(config.user, config.pass, config.api_token);

console.log('Fetching user details...');
posterous.get('Sites', {site_id: 'tonyto85'}, function(err, result) {
  console.error(!err, 'An error occurred: ' + err);

  console.log(result, 'Did not retrieve site information');

  console.log(result);
});
