var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Trainee = require('../models/Trainee.js')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   Trainee.find( function(err, pageData) {
//     if (err) return next(err);
//     console.log("Callback returns: " + pageData);
//     //var pageob = JSON.parse(pageData);
//     res.render('trainees', {pageData});
//   });
// });

router.get('/', function(req, res, next) {
  Trainee.find( function(err, pageData) {
    if (err) return next(err);
    console.log(pageData);
    res.render("trainees", {pageData})
  });
});

router.get('/addTrainee', function(req, res, next) {
  res.render('addTrainee');
});

router.get('/:id', function(req, res, next) {
  Trainee.findById( req.params.id, function(err, idData) {
    if (err) return next(err);
    console.log(idData);
    var pageData = [];
    pageData.push(idData);
    console.log(pageData);
    res.render("trainees", {pageData});
  });
});

router.post('/addTrainee', function (req, res, next) {
    //console.log(req.body.Club);
  Trainee.create(req.body, function (err, post){
    if (err) return next(err);
    res.redirect("/trainees/" + post.id);
    //res.send("Trainee Data Added.")
  });
});

router.delete('/delete/:id', function(req, res, next) {
  Trainee.findByIdAndRemove(req.params.id, req.body, function (err, post){
    if (err) return next(err);
    console.log(req.params.id)
    res.json(post);
  });
});

module.exports = router;
