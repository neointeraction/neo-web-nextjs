const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
var bodyParser = require("body-parser");
const cors = require("cors");
var handlebars = require("handlebars");
var fs = require("fs");
const axios = require("axios");
const Razorpay = require("razorpay");
// const multer = require('multer')
require("dotenv").config();

var readHTMLFile = function (path, callback) {
  fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
    if (err) {
      callback(err);
      throw err;
    } else {
      callback(null, html);
    }
  });
};

var path = require("path");
const { getMaxListeners } = require("process");

app.use(cors());
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
// app.post("/send", (req, res) => {
//   var transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "neointeraction.mailer@gmail.com",
//       pass: "unlhgudojkwsqwxg",
//     },
//   });

//   var name = req.body.name;
//   var mobile = req.body.mobile;
//   var email = req.body.email;
//   var description = req.body.description;
//   var location = req.body.location;
//   const ip = req.ip;
//   // var service = req.body.service;
// // <p>IP Address - ${ip.replace("::ffff:", "")}</p>
//   var mail = {
//     from: email,
//     to: [
//       "sam@neointeraction.com",
//       "info@neointeraction.com",
//       "shameer@neointeraction.com",
//     ],
//     subject: `Contact us form submission : ${name}`,
//     html: `<html>
//      <body>
//      <p>Name - ${name}</p>
//      <p>Email - ${email}</p>
//      <p>Mobile - ${mobile}</p>
//      <p>Location - ${location === "" ? "IN" : location}</p>

//      <p>IP Address - Loading...</p>
//      <p>description - ${description}</p>
//      </body>
//      </html>`,
//   };

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         status: "fail",
//         error: err,
//       });
//     } else {
//       res.json({
//         status: "success",
//       });
//     }
//   });
// });

app.post("/send", async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "neointeraction.mailer@gmail.com",

      pass: "unlhgudojkwsqwxg",
    },
  });

  var name = req.body.name;
  var mobile = req.body.mobile;
  var email = req.body.email;
  var description = req.body.description;
  var location = req.body.location.value;
  var ip = req.body.ip;

  try {
    var mail = {
      from: email,
      to: ["sam@neointeraction.com", "info@neointeraction.com"],
      subject: `Contact us form submission : ${name}`,
      html: `<html>
       <body>
       <p>Name - ${name}</p>
       <p>Email - ${email}</p>
       <p>Mobile - ${mobile}</p>
       <p>Location - ${location === undefined ? "IN" : location}</p>
       <p>IP Address - ${ip}</p>
       <p>description - ${description}</p>     
       </body> 
       </html>`,
    };

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: "fail",
          error: err,
        });
      } else {
        res.json({
          status: "success",
        });
      }
    });
  } catch (error) {
    res.json({
      status: "fail",
      error: error.message,
    });
  }
});

app.post("/sendgad", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "neointeraction.mailer@gmail.com",
      pass: "unlhgudojkwsqwxg",
    },
  });
  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.ethereal.email', port: 587,
  //   auth: { user: 'fnrflpoeb4fyk222@ethereal.email', pass: 'gDDFC95NURZV52Rpbf' } });

  var name = req.body.name;
  var mobile = req.body.mobile;
  var email = req.body.email;
  var projectType = req.body.projectType;
  var description = req.body.description;

  var mail = {
    from: email,
    to: ["sam@neointeraction.com", "allen@neointeraction.com"],
    subject: `Google Ad form submission : ${name}`,
    html: `<html>
     <body>
     <p>Name:${name}</p>
     <p>Email:${email}</p>
     <p>Mobile:${mobile}</p>  
     <p>Looking for:${projectType}</p>  
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

// ebook page collects email info as well as sends ebook
app.post("/sendebk", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "neointeraction.mailer@gmail.com",
      pass: "unlhgudojkwsqwxg",
    },
  });
  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.ethereal.email', port: 587,
  //   auth: { user: 'fnrflpoeb4fyk222@ethereal.email', pass: 'gDDFC95NURZV52Rpbf' } });

  var name = req.body.name;
  var mobile = req.body.mobile;
  var email = req.body.email;

  var mail = {
    from: email,
    to: ["sam@neointeraction.com"],
    subject: `E-Book LP form submission : ${name}`,
    html: `<html>
     <body>
     <p>Name:${name}</p>
     <p>Email:${email}</p>
     <p>Phone:${mobile}</p>
     </body> 
     </html>`,
  };

  // var mailebk = {
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

  readHTMLFile(
    "../pages/EbookMailTemplate/EbkMailTmplt.html",
    function (err, html) {
      var template = handlebars.compile(html);
      var replacements = {
        username: "John Doe",
      };
      var htmlToSend = template(replacements);
      var mailebk = {
        from: "sam@neointeraction.com",
        to: email,
        subject: `Neointeraction Design Download Request`,
        html: htmlToSend,
      };
      transporter.sendMail(mailebk, (err, data) => {
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
  );

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

  // transporter.sendMail(mailebk, (err, data) => {
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
});

// Career page or popup
app.post("/career", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    service: "gmail",
    auth: {
      user: "neointeraction.mailer@gmail.com",
      pass: "unlhgudojkwsqwxg",
    },
  });

  var name = req.body.name;
  var email = req.body.email;
  var attachments = req.body.files;
  var message = req.body.message;
  var description = req.body.reason;

  var mail = {
    from: email,
    to: ["hr@neointeraction.com", "sam@neointeraction.com"],
    subject: `Internship request from ${name}`,
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
      pass: "unlhgudojkwsqwxg",
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
    to: [
      "hr@neointeraction.com",
      "sam@neointeraction.com",
      "info@neointeraction.com",
    ],
    subject: `Job Request for ${jobType} from ${name}`,
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
      pass: "unlhgudojkwsqwxg",
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
    to: ["hr@neointeraction.com", "sam@neointeraction.com"],
    subject: `Hire Developer - Message from ${name}`,
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

app.post("/workshopmail", async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "neointeraction.mailer@gmail.com",
      pass: "unlhgudojkwsqwxg",
    },
  });

  const { name, mobile, email, company, ip } = req.body;

  try {
    var mail = {
      from: email,
      to: ["allen@neointeraction.com", "info@neointeraction.com"],
      subject: `Contact us - Design workshop : ${name}`,
      html: `<html>
       <body>
       <p>Name - ${name}</p>
       <p>Email - ${email}</p>
       <p>Mobile - ${mobile}</p>
       <p>IP Address - ${ip}</p>
       <p>company - ${company}</p>     
       </body> 
       </html>`,
    };

    var acknowledgementMail = {
      from: "Neointeraction <info@neointeraction.com>",
      to: email,
      subject: `Thank You for Contacting Us`,
      html: `<html>
      <body>
        <p>Hey ${name},</p>
        <p>
          Thankyou for contacting us! We have received your details and our team
          will be reaching out to you soon.
        </p>
    
        <div>Regards,</div>
        <div>Team Neointeraction Design</div>
        <a href="https://www.neointeraction.com/">www.neointeraction.com</a>
        <div>+91-95913338744</div>
      </body>
    </html>
    `,
    };

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: "fail",
          error: err,
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
  } catch (error) {
    res.json({
      status: "fail",
      error: error.message,
    });
  }
});

app.post("/payment/orders", async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.NEXT_APP_RAZORPAY_ID,
      key_secret: process.env.NEXT_APP_RAZORPAY_SECRET,
    });

    const options = {
      amount: 12000, // amount in smallest currency unit
      currency: "INR",
      receipt: "receipt_order_74394",
    };

    const order = await instance.orders.create(options);

    if (!order) return res.status(500).send("Some error occured");

    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/workshop/paid", async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    service: "gmail",
    auth: {
      user: "neointeraction.mailer@gmail.com",
      pass: "unlhgudojkwsqwxg",
    },
  });
  try {
    // getting the details back from our font-end
    const {
      payload: {
        payment: { entity },
      },
    } = req.body;

    const secret = "sam@123";
    const orderCreationId = entity.order_id;
    const razorpayPaymentId = entity.id;

    const crypto = require("crypto");

    const shasum = crypto.createHmac("sha256", secret);

    shasum.update(JSON.stringify(req.body));

    const digest = shasum.digest("hex");

    const razorpaySignature = req.headers["x-razorpay-signature"];

    if (digest !== razorpaySignature)
      return res.status(400).json({ msg: "Transaction not legit!" });

    const { name, email } = entity.notes;

    var acknowledgementMail = {
      from: "Neointeraction <info@neointeraction.com>",
      to: email,
      subject: `Registration Confirmed`,
      html: `<html>
       <body>
       <h4>Hey ${name},</h4>
       <p>Thank You for registering for our Design Workshop! We are thrilled to have you join us and be a part of this program.</p>

       <p><strong>Event Details:</strong> </p>
       
       <p>Date: 6th October 2023</p>
       <p>Time: 10:00 am to 05:00 pm</p>
       <p>Venue: Taj Vivanta, Bangalore</p>

       <p>We have lined up an incredible set of speakers and activities that promise to be both informative and engaging. The event aims to provide valuable insights and networking opportunities for all attendees.</p>

       <p>If you have any questions, concerns or need further assistance, please do not hesitate to contact us at :</p>
       <a href="mailto:allen@neointeraction.com"><p>allen@neointeraction.com</p></a>
       <p>Ph: +91-95133 38744</p>

       <div>Thanks & Regards,</div>
       <div>Neointeraction Design</div>
       </body> 
       </html>`,
    };

    transporter.sendMail(acknowledgementMail, (err, data) => {
      if (err) {
        res.json({
          status: "fail",
          error: err,
        });
      } else {
        res.json({
          status: "success",
        });
      }
    });

    res.json({
      msg: "success",
      orderId: orderCreationId,
      paymentId: razorpayPaymentId,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/workshop/failed", async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    service: "gmail",
    auth: {
      user: "neointeraction.mailer@gmail.com",
      pass: "unlhgudojkwsqwxg",
    },
  });
  try {
    // getting the details back from our font-end
    const {
      payload: {
        payment: { entity },
      },
    } = req.body;

    const secret = "sam@123";
    const orderCreationId = entity.order_id;
    const razorpayPaymentId = entity.id;

    const crypto = require("crypto");

    const shasum = crypto.createHmac("sha256", secret);

    shasum.update(JSON.stringify(req.body));

    const digest = shasum.digest("hex");

    const razorpaySignature = req.headers["x-razorpay-signature"];

    if (digest !== razorpaySignature)
      return res.status(400).json({ msg: "Transaction not legit!" });

    const { name, email } = entity.notes;

    var acknowledgementMail = {
      from: "Neointeraction <info@neointeraction.com>",
      to: email,
      subject: `Registration Unsuccessful`,
      html: `<html>
       <body>
       <h4>Hey ${name},</h4>
       <p>We wanted to inform you that we encountered an issue with your payment, which unfortunately prevented us from completing your registration for the upcoming Design Workshop.</p>

       <p><strong>Event Details:</strong> </p>

       <p>Date: 6th October 2023</p>
       <p>Time: 10:00 am to 05:00 pm</p>
       <p>Venue: Taj Vivanta, Bangalore</p>

       <p>If you intended to register, kindly using this link: <a href="https://rzp.io/l/shJrvb6lSm">Register Now!</a></p>

       <p>We have lined up an incredible set of speakers and activities that promise to be both informative and engaging. The event aims to provide valuable insights and networking opportunities for all attendees.</p>

       <p>If you have any questions, concerns or need further assistance, please do not hesitate to contact us at :</p>
       <p>Email: <a href="mailto:allen@neointeraction.com"><p>allen@neointeraction.com</p></a></p>
       <p>Phone: +91-95133 38744</p>

       <div>Thanks & Regards,</div>
       <div>Neointeraction Design</div>
       </body> 
       </html>`,
    };

    transporter.sendMail(acknowledgementMail, (err, data) => {
      if (err) {
        res.json({
          status: "fail",
          error: err,
        });
      } else {
        res.json({
          status: "success",
        });
      }
    });

    res.json({
      msg: "success",
      orderId: orderCreationId,
      paymentId: razorpayPaymentId,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/brochure", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    service: "gmail",
    auth: {
      user: "neointeraction.mailer@gmail.com",
      pass: "unlhgudojkwsqwxg",
    },
  });

  var name = req.body.name;
  var email = req.body.email;

  var file = "../assets/Brochure.pdf";

  var mail = {
    from: "Neointeraction Design <allen@neointeraction.com>",
    to: email,
    subject: `UX Design workshop - Brochure`,
    attachments: [
      {
        filename: `Design Workshop 2023`,
        path: file,
      },
    ],
    html: `<html>
    <body>
    <h4>Hi ${name},</h4>
    <p>Thank you for your interest in our ux design workshop! Attached to this email, you will find the brochure with all the essential details about the upcoming UX design workshop - “<strong>Practical and Effective Tools to Accelerate Design Solutions</strong>”</p>

    <p>To secure your spot, we kindly request that you - <a href="https://www.neointeraction.com/design-workshop">Register Now</a>! </p>

    <p>Please don't hesitate to reach out to us if you have any questions or require further assistance. We are here to help! </p>

    <p><strong>Organizer Details:</strong></p> 
    <a href="mailto:allen@neointeraction.com"><p>allen@neointeraction.com</p></a>
    <p>Ph: +91-95133 38744</p>

    <div>Thanks & Regards,</div>
    <div>Neointeraction Design</div>
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
