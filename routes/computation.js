var express = require('express');
var router = express.Router();
let x=Math.floor(Math.random());
let y
/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x!=undefined){
        x=req.query.x;

    }
    let r=Math.trunc(x);
    let t=Math.sign(x);
    let n=Math.tanh(x);
    
  res.render('computation', { x:x,trunc:r, sign:t, tanh:n});
});

module.exports = router;
