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
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });