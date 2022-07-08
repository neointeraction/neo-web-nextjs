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

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
app.post("/download", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "neointeraction.mailer@gmail.com",
      pass: "unlhgudojkwsqwxg",
    },
  });

  var email = req.body.email;
  var fileUrl = req.body.fileUrl;
  var fileName = req.body.fileName;

  var mail = {
    from: "info@neointeraction.com",
    to: email,
    subject: `Neointeraction Design Download Request`,
    html: `<html>
     <body>
     <h4>Thanks for showing intrest !</h4>
     <p>Download the kit from here: <a href=${fileUrl}>${fileName}</a> </p>     
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
    }
  });
});
