var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bestlocationbr@gmail.com',
      pass: 'Besttime'
    }
  });
  
  var mailOptions = {
    from: 'bestlocationbr@gmail.com',
    to: 'helioharada30@gmail.com',
    subject: 'Olá pessoas',
    text: 'iziii'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });