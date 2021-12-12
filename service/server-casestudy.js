const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
var bodyParser = require("body-parser");
const cors = require("cors");
// const multer = require('multer')

var path = require("path");

app.use(cors());
app.use(bodyParser.json({ limit: "150mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "150mb",
    extended: true,
    parameterLimit: 50000,
  })
);

const port = process.env.PORT || 4002;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
app.post("/casestudy", (req, res) => {
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
  var fileUrl = req.body.fileUrl;
  var organization = req.body.organization;

  var mail = {
    from: "info@neointeraction.com",
    to: email,
    subject: `Casestudy Download Request`,
    html: `<html>
     <body>
     <h4>Hi ${name}!</h4>
     <h4>Thank you for your interest in our case study.</h4>
     <p>Attached the case study download files <a href=${fileUrl}>Here</a> </p> 
     <p>Thanks, <br/>
     Neointeraction Design Team</p>
         
     </body> 
     </html>`,
  };

  var acknowledgementMail = {
    from: email,
    to: [
      "shameer@neointeraction.com",
      "info@neointeraction.com",
      "allen@neointeraction.com",
      "sam@neointeraction.com",
    ],
    subject: `Casestudy Download Request.`,
    html: `<html>
     <body>
     <h4>Name: ${name}</h4>
     <h4>Email: ${email}</h4>
     <h4>Mobile: ${mobile}</h4>
     <h4>Organization: ${organization}</h4>
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
