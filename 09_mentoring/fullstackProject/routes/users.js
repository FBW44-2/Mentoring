var express = require('express');
var router = express.Router();
const feedbackModel = require('../model/feedback_model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/feedback', (req, res, next) => {
  //console.log(req.body);
  let feedback = new feedbackModel(req.body)
  feedback.save((err,result) => {
    if(err){console.log(err)}
    res.send(result);
  })

  //res.send('done')
})



module.exports = router;
