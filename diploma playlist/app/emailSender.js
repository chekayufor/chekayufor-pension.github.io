settings.sendgrid = {
    key:"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",
    }
const sg     = require('sendgrid')(settings.sendgrid.key);
const helper        = require('sendgrid').mail;
 SendEmail () {
        this.fromEmail  = new helper.Email("Sender Email");
        this.toEmail    = new helper.Email("Recipient Email");
        this.subject    = "Subject";
        this.content    = new helper.Content("text/html", "Email Message");
 
        const mail = new helper.Mail(this.fromEmail, this.subject, this.toEmail, this.content);


        return mail;
 }

 const request = sg.emptyRequest({
    method : 'POST',
    path   : '/v3/mail/send',
    body   : mail.toJSON(),
});

sg.API(request, (error, response) => {
    // response of request send to SendGrid API
});