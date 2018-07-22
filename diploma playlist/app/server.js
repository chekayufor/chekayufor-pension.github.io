var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var dotenv = require('dotenv'); 

dotenv.load(); //load environment variables from .env into ENV (process.env).

var sendgrid_username   = process.env.SENDGRID_USERNAME;
var sendgrid_password   = process.env.SENDGRID_PASSWORD;

var sendgrid   = require('sendgrid')(sendgrid_username, sendgrid_password);
var email      = new sendgrid.Email();

var app = express();
app.use(bodyParser.json()); //needed for req.body
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); 

app.post('/email', function(req, res) {
    console.log('test');
    email.setName(req.body.name);
    email.setLastName(req.body.lasrname);
    email.setPhone(req.body.phone);
    email.setEmail(req.body.email);
    email.setMessage(req.body.message);
    email.addHeader('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');
    email.addHeader('X-Transport', 'web');

    sendgrid.send(email, function(err, json) {
    if (err) { 
        return res.send("Problem Sending Email!!!!");
    }
        console.log(json);
        res.send("Email Sent OK!!!!");
    });
});
var server = http.createServer(app);
server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port')  ) ;
});