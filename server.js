var express = require('express');
var hbs = require('express3-handlebars');
var app = express();
app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Authenticate via OAuth
var tumblr = require('tumblr.js');
var client = tumblr.createClient({
  consumer_key: 'lQS712YUjSnDppww0NV8EcFn1Y4Ch7p6cSnUB4g11MKt314hJs',
  consumer_secret: 'fXC9IhAMyr91jzS437ycXrw4GdI5fHyI3ZesWCpacZ7zS1EILL',
  token: 'TPKDdyc8YyF96KMUeSW4hsyBi60DgcD5iifrcmvrn3QmxWigDx',
  token_secret: 'YHpiKabYcjCRfEVfu3nadWOfCsIo2GfJDpfTMLpqCMwZ77tI4t'
});

// Make the request
client.posts('pooran.tumblr.com', function (err, data) {
 alert(data);
});

var port = process.env.PORT || 5000;
app.listen(port);
