
console.log('forms node-controller');

const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'USER_ID',
        pass: 'USER_KEY'
    }
});

module.exports =  {  

    process: function(req, res){

        // setup email data with unicode symbols
            let mailOptions = {
                from: 'zozaya.io Contact Form' + ' <hello@zozaya.io>', // sender address
                to: 'freddy@zozayacreative.com', // recipient
                subject: 'Message from '+ req.body.name + ' ' + req.body.l_name, // Subject line
                html: '<h2>Message Received</h2><p><strong>From: </strong>' + req.body.name + ' ' + req.body.l_name + '</p><p><strong>Email: </strong>' + req.body.email + '</p><p><strong>Phone Number: </strong>' + req.body.phone + '</p><p><strong>Message: </strong>' + req.body.message + '</p>'
                
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    res.status(500).send(error);
                    return console.log(error);
                } else {
                    res.status(200).send();

                }
                console.log('Message %s sent: %s', info.messageId, info.response);
            });
    }

}