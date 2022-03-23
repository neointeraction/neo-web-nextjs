const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
var bodyParser = require("body-parser");
const cors = require("cors");
// const multer = require('multer')
const Razorpay = require('razorpay'); 

var path = require("path");
const { getMaxListeners } = require("process");

app.use(cors())
app.use(bodyParser.json({ limit: "150mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "150mb",
    extended: true,
    parameterLimit: 50000,
  })
);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
app.post("/send", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "neointeraction.mailer@gmail.com",
      pass: "neo@1234",
    },
  });

  var name = req.body.name;
  var mobile = req.body.mobile;
  var email = req.body.email;
  var description = req.body.description;
  var service = req.body.service;

  var mail = {
    from: email,
    to: ["info@neointeraction.com", "sam@neointeraction.com"],
    subject: `Contact us form submission : ${name} <${email}> : ${service} `,
    html: `<html>
     <body>
     <p>Name:${name}</p>
     <p>Email:${email}</p>
     <p>Mobile:${mobile}</p>
     <p> description:${description}</p>     
     </body> 
     </html>`,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

app.post("/sendgad", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "neointeraction.mailer@gmail.com",
      pass: "neo@1234",
    },
  });
  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.ethereal.email', port: 587,
  //   auth: { user: 'fnrflpoeb4fyk222@ethereal.email', pass: 'gDDFC95NURZV52Rpbf' } });

  var name = req.body.name;
  var mobile = req.body.mobile;
  var email = req.body.email;
  var description = req.body.description;

  var mail = {
    from: email,
    to: [
      // "shameer@neointeraction.com",
      // "info@neointeraction.com",
      "allen@neointeraction.com",
      "sam@neointeraction.com",
      // "sebin@neointeraction.com"
    ],
    subject: `Google Ad form submission : ${name} <${email}>`,
    html: `<html>
     <body>
     <p>Name:${name}</p>
     <p>Email:${email}</p>
     <p>Mobile:${mobile}</p>  
     <p>description:${description}</p>
     </body> 
     </html>`,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});


// ebook page
app.post("/sendebk", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "neointeraction.mailer@gmail.com",
      pass: "neo@1234",
    },
  });
  // const transporter = nodemailer.createTransport({ 
  //   host: 'smtp.ethereal.email', port: 587, 
  //   auth: { user: 'fnrflpoeb4fyk222@ethereal.email', pass: 'gDDFC95NURZV52Rpbf' } });

  var name = req.body.name;
  // var mobile = req.body.mobile;
  var email = req.body.email;

  var mail = {
    from: email,
    to: [
      // "shameer@neointeraction.com",
      // "info@neointeraction.com",
      "allen@neointeraction.com",
      "sam@neointeraction.com",
        //  "sebin@neointeraction.com"
    ],
    subject: `E-Book LP form submission : ${name} <${email}>`,
    html: `<html>
     <body>
     <p>Name:${name}</p>
     <p>Email:${email}</p>
     </body> 
     </html>`,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

//razorpay payment gateway
var razorpay = new Razorpay({

  // For test sam@neointeraction also change in ebook add a new ngork tunnel as webhook for local testing
  // key_id: 'rzp_test_vLUUSJ0xpgkzLH',
  // key_secret: 'mRwRekA87HdQ2pWNSXMTUQJB',

  // test sebangeorgen@gmail.com
  // key_id: 'rzp_test_TAO1oonl6vzj0n',
  // key_secret: 'Cd6DBMwxjcVmgVNcTBINYYCu',

  // for live sam@neointeraction
  key_id: 'rzp_live_msovzCS0LY9PTS',
  key_secret: 'qHufCGtFd8JRazfHJi7hraqx',

});


app.post('/verification', (req, res) => {
	// do a validation
	res.json({ status: 'ok' })
	const secret ='12345678'

	console.log(req.body)

	const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
    console.log(req.body['payload']['payment']['entity']['email'])
		// process it
		// require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))

    // original
    // var transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "neointeraction.mailer@gmail.com",
    //     pass: "neo@1234",
    //   },
    // });
  
    var emailrzr = req.body['payload']['payment']['entity']['email'];

    // var fileUrl = req.body.fileUrl;
    // var fileName = req.body.fileName;

   // original
    // var mail = {
    //   from: "info@neointeraction.com",
    //   to: email,
    //   subject: `Neointeraction Design Download Request`,
    //   html: `<html>
    //    <body>
    //    <h4>Thank you for buying!</h4>
    //    <p>Download the Ebook from here: <a href="https://drive.google.com/file/d/1yeXER7_ItSi6e72DDRgpltzbAKntLhQY/view?usp=sharing">Ebook</a> </p>
    //    <p>Download the UI kit from here: <a href="https://drive.google.com/file/d/1C7rWf9pxJb5pnZjEE0xmjbtM0HdSULVg/view?usp=sharing">UI Kit</a> </p>   
    //    <p> Hold Tight! We will contact you with more information about the one day workshop</p>  
    //    </body> 
    //    </html>`,
    // };



// mailchimp/mandrill transactional API 
const mailchimpFactory = require("@mailchimp/mailchimp_transactional");
const mailchimp = mailchimpFactory("enLmN9Lj1OGpIcFGr6nNAw");

const message = {
  from_email: "info@neointeraction.com",
  subject: "Thank you for buying!",
  to: [
    {
      email:emailrzr,
      type: "to"
    }
  ]
};

async function runEBK() {
  const response = await mailchimp.messages.sendTemplate({
    template_name: "EBK-Agile UX",
    template_content: [{}],
    message
  });
  // console.log(response);
}

runEBK();

    
    // process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

     //original
    // transporter.sendMail(mail, (err, data) => {
    //   if (err) {
    //     res.json({
    //       status: "fail",
    //     });
    //   } else {
    //     res.json({
    //       status: "success",
    //     });
    //   }
    // });
    
	} else {
		// pass it
		console.log('razorpay signature mismatch')
	}
	
})

app.post('/razorpay', async (req, res) => {
	// const payment_capture = 1
	const amount = 10
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		// receipt: shortid.generate(),
		// payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})






// Career page or popup
app.post("/career", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    service: "gmail",
    auth: {
      user: "neointeraction.mailer@gmail.com",
      pass: "neo@1234",
    },
  });

  var name = req.body.name;
  var email = req.body.email;
  var attachments = req.body.files;
  var message = req.body.message;
  var description = req.body.reason;

  var mail = {
    from: email,
    to: ["hr@neointeraction.com", "info@neointeraction.com"],
    subject: `Internship request from ${name} <${email}>`,
    text: description,
    attachments: [
      {
        filename: `${message}`,
        path: attachments,
      },
    ],
    html: `<html>
     <body>
     <p>Name:${name}</p>
     <p>Email:${email}</p>
     <p> description:${description}</p>     
     </body> 
     </html>`,
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

//career page - All current opening job request
app.post("/jobrequest", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "neointeraction.mailer@gmail.com",
      pass: "neo@1234",
    },
  });

  var name = req.body.name;
  var email = req.body.email;
  var attachments = req.body.files;
  var message = req.body.message;
  var currentSalary = req.body.currentSalary;
  var expectedSalary = req.body.expectedSalary;
  var noticePeriod = req.body.noticePeriod;
  var reason = req.body.reason;
  var link = req.body.link;
  var jobType = req.body.jobType;

  var mail = {
    from: email,
    to: ["hr@neointeraction.com", "info@neointeraction.com"],
    subject: `Job Request for ${jobType} from ${name} <${email}>`,
    // text: description,
    attachments: [
      {
        filename: `${message}`,
        path: attachments,
      },
    ],
    html: `<html>
     <body>
     <h4>Job Request </h4>
     <p>Name: ${name}</p>
     <p>Email: ${email}</p>
     <p>Current Salary: ${currentSalary}</p> 
     <p>Expected Salary: ${expectedSalary}</p> 
     <p>Notice Period: ${noticePeriod}</p>  
     <p>Reason for job change: ${reason}</p>  
     <p>Portfolio link: ${link}</p>  
     </body> 
     </html>`,
  };

  var acknowledgementMail = {
    from: email,
    to: email,
    subject: `Job Request for ${jobType} received.`,
    html: `<html>
     <body>
     <h4>Hi ${name},</h4>
     <h4>Thank you for applying !</h4>
     </body> 
     </html>`,
  };
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
      transporter.sendMail(acknowledgementMail, (err, data) => {
        if (err) {
          res.json({
            status: "fail",
          });
        } else {
          res.json({
            status: "success",
          });
        }
      });
    }
  });
});

//Service page - Hire developer request
app.post("/hiredeveloper", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "neointeraction.mailer@gmail.com",
      pass: "neo@1234",
    },
  });

  var name = req.body.name;
  var email = req.body.email;
  var mobile = req.body.mobile;
  var duration = req.body.duration;
  var projectType = req.body.projectType;
  var description = req.body.description;
  var mail = {
    from: email,
    to: [
      "hr@neointeraction.com",
      "info@neointeraction.com",
      "sam@neointeraction.com",
    ],
    subject: `Message from ${name} <${email}>`,
    // text: description,
    html: `<html>
     <body>
     <p>Name: ${name}</p>
     <p>Email: ${email}</p>
     <p>mobile: ${mobile}</p> 
     <p>duration: ${duration}</p> 
     <p>projectType: ${projectType}</p>  
     <p>description: ${description}</p>
     </body> 
     </html>`,
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});
