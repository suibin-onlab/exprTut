var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Trainee = require('../../models/Trainee.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Trainee.find( function(err, f) {
    if (err) return next(err);
    console.log(f);
    res.json(f)
  });
});

router.post('/', function(req, res, next) {
  Trainee.create(req.body, function (err, post){
    if (err) return next(err);
    res.json(post);
  })
});

router.get('/:id', function (req, res, next) {
  Trainee.findById(req.params.id, function(err, p) {
    if (err) return next(err);
    console.log(p);
    res.json(p);
  });
});

// router.delete('/:id', function(req, res, next) {
//   Trainee.findByIdAndRemove(req.params.id, req.body, function (err, post){
//     if (err) return next(err);
//     res.json(post);
//   });
// });

module.exports = router;
