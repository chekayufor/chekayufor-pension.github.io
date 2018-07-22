//const sgMail = require('@sendgrid/mail');
//sgMail.setApiKey('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');

/*const sendEmail = (from, to, subject, text, html) => {
    const msg = {
      to: to,
      from: from,
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);
}

module.exports = sendEmail;*/
var express = require('express');

var app = express();

var PORT = 3000;

app.get('/', function(req, res) {
    res.status(200).send('Hello world');
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});