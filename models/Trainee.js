var mongoose = require('mongoose');

var TraineeSchema = new mongoose.Schema({
  Id: Number,
  FirstName: String,
  LastName: String,
  Club: String,
  Weight: Number,
  Height: Number,
  DashTime: Number,
  Note: String,
  LastUpdated: { type: Date, default: Date.now},
});

module.exports = mongoose.model('Trainee', TraineeSchema);
