var express    = require('express'),
    http    = require('http');

app = express();
app.set('port', process.env.PORT || 3456);

app.get('/api/deploy', function(req, res){
  res.json({deploy: true});
});

var server = http.createServer(app);
server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
})