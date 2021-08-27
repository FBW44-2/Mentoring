var express = require('express');
var router = express.Router();
var multer = require('multer');
let userModel = require('../models/user_model');

let storage = multer.diskStorage({
  destination: "images/",
  filename: function (req, file, cb) {
    let picName = file.originalname.split('.')[0] + "-" + Date.now() + "." + file.mimetype.split('/')[1];
    cb(null, picName);
    req.picName = picName
  
  }
});

let upload = multer({storage: storage})


/* GET users listing. */
router.post('/register', upload.single("file"), function (req, res, next) {
console.log(req.file.originalname);
  let user = new userModel({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    avatar: req.picName
  });

  user.save().then(result => {
    res.send(result)
  })
  // res.send('respond with a resource');
});

module.exports = router;
