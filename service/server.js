const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
var bodyParser = require("body-parser");
const cors = require("cors");
const stripe = require('stripe');
// const multer = require('multer')



var path = require("path");
const { getMaxListeners } = require("process");

app.use(cors())
// app.use(bodyParser.json({ limit: "150mb" }));
// app.use(
//   bodyParser.urlencoded({
//     limit: "150mb",
//     extended: true,
//     parameterLimit: 50000,
//   })
// );

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


// stripe implementation



// This is your Stripe CLI webhook secret for testing your endpoint locally.
// const endpointSecret = "whsec_fl00vyzzXvgVKhsAPXnUtUU2qnQ4rOms"; // local test
const endpointSecret = "whsec_dnwgZ0NrrNOVOrKmuxNwvyVjq25wOxEV";  // live testmode
// const endpointSecret = "whsec_NwvYxSSyozzMDnX3FdNO3s5ANPMqeNx3"; // live 


app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const strpemail = event.data.object.charges.data[0].billing_details.email;
      // Then define and call a function to handle the event payment_intent.succeeded
      console.log("payment intent succesful");
      // console.log(strpemail);
     
      var transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: "neointeraction.mailer@gmail.com",
                pass: "neo@1234",
              },
            });

            var mail = {
                    from: "info@neointeraction.com",
                    to: strpemail,
                    subject: `Neointeraction Design Download Request`,
                    html: `<html>
                     <body>
                     <h4>Thank you for buying!</h4>
                     <p>Download the Ebook from here: <a href="https://drive.google.com/file/d/1yeXER7_ItSi6e72DDRgpltzbAKntLhQY/view?usp=sharing">Ebook</a> </p>
                     <p>Download the UI kit from here: <a href="https://drive.google.com/file/d/1C7rWf9pxJb5pnZjEE0xmjbtM0HdSULVg/view?usp=sharing">UI Kit</a> </p>   
                     <p> Hold Tight! We will contact you with more information about the one day workshop</p>  
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


      break;
    // ... handle other event types
    case 'checkout.session.completed' : 
    console.log("checkout successful");
    break;
    

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  res.send();
});












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