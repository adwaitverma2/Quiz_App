require('dotenv').config();
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const RegModel = require("./Models/Reg");
const adminModel = require("./Models/Admin");
const AnsModel = require("./Models/Adminans");
const qdata = require("./Models/questions");
const userModel= require("./Models/User")
const productModel= require("./Models/product")
const multer = require("multer");
var app = express();
const cors = require("cors");
var nodemailer=require('nodemailer')
const answer = require("./Models/Adminans");
app.use(express.static("images"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});
const upload = multer({ storage: fileStorageEngine });
app.post("/single", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send(req.file);
});
mongoose.connect(
  // "mongodb+srv://Adwait-verma:adwait@quiz-app.fhok0.mongodb.net/Quiz?retryWrites=true&w=majority"
  process.env.MONGO_URI
);
 //Node Mailer
// var transporter =nodemailer.createTransport({
//   service:'Gmail',

//   auth:{
//     user:'adwait.verma@mail.vinove.com',
//     pass:'adwait@123#'
//   }
//   })
//   var mailOptions={
//     from:"adwait.verma@mail.vinove.com",
//     to:"vadwait17@gmail.com",
//     subject:"Practice Node Mailer",
//     text:"This is a text message. This message is send by adwait verma"
//   };
//   transporter.sendMail(mailOptions,function(error,info){
//     if(error){
//       console.log(error);
//     }else{
//       console.log('Email sent:'+info.response);
//     }
//   })


app.get("/filterUser", (req, res) => {
   name=req.query.name
  try {
    userModel.findOne({name:name}, (err, data) => {
      if (err) res.send(err);
      else {
        res.send(data);
      }
    });
  } catch (err) {
    console.log(err);
  }
});


app.get("/product", (req, res) => {
  name=req.query.name
  try {
    productModel.findOne({name :name}, (err, data) => {
      if (err) res.send(err);
      else {
        res.send(data);
      }
    });
  } catch (err) {
    console.log(err);
  }
});











app.post("/data", async (req, res) => {
  const data = req.body;
  try {
    const reg = new RegModel({
      RegName: data.UserName,
      Password: data.Password,
    });
    await reg.save();
  } catch (err) {
    res.send(err);
  }
});

app.post("/login", (req, res) => {
  let flag = false;
  RegModel.find((err, data) => {
    data.forEach((elm) => {
      if (
        elm.RegName == req.body.username &&
        elm.Password == req.body.password
      ) {
        flag = elm;
      }
    });
    if (flag) res.send(jwt.sign({ flag }, "aaa"));
    else res.send(flag);
  });
});


app.post("/Admindata", (req, res) => {
  console.log(req.body);
  let flag = false;
  adminModel.find({},(err, data) => {
    data.forEach((elm) => {
      if (
        elm.AdminName == req.body.AdminName &&
        elm.Password == req.body.Password
      ) {
        flag = elm;
      }
    });
    if (flag) res.send(jwt.sign({ flag }, "sss"));
    else res.send(flag);
  });
});

app.post("/Score", async (req, res) => {
  const data = req.body;
  const reg = new AnsModel({
    marks: data.marks,
    userName: data.name,
    answer: data.answer,
  });
  try {
    await reg.save();
  } catch (err) {
    console.log(err);
  }
});

//

app.get("/user", (req, res) => {
  try {
    AnsModel.find({}, (err, data) => {
      if (err) res.send(err);
      else {
        res.send(data);
      }
    });
  } catch (err) {
    console.log(err);
  }
});




app.get("/Score", (req, res) => {
  try {
    AnsModel.find({}, (err, data) => {
      if (err) res.send(err);
      else {
        res.send(data);
      }
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/question", (req, res) => {
  try {
    qdata.find({}, (err, data) => {
      if (err) res.send(err);
      else res.send(data);
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/data", (req, res) => {
  try{
  RegModel.find({}, (err, data) => {
    if (err) res.send(data);
    else res.send(data)
  });}
  catch(err){
    console.log(err);
  }
});

app.post("/question", async (req, res) => {
  const data = req.body;
  const reg = new qdata({
    question: data.Question,
    a: data.a,
    b: data.b,
    c: data.c,
    d: data.d,
    answer: data.ans,
  });
  try {
    await reg.save();
  } catch (err) {
    console.log(err);
  }
});
const hostname = "127.0.0.1" || "localhost";
const port = 9000;
const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
