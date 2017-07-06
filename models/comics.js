const mongoose = require('mongoose');

const comicSchema = new mongoose.Schema({
  title: {type: String, required: true},
  company: {type: String},
  issueNumber: {type: Number},
  guestChrs: [
    {
      hero: {type: String},
      villian: {type: String, required: true},
    }
  ]

});

const Comics = mongoose.model('ComicsCollection', comicSchema);

module.exports = Comics;
