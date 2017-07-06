const Comics = require('../models/comics');

module.exports = {
  list: (req, res) => {
    Comics.find({}).then((results) => {
      res.render('comics/list', {model: results});
    });
  }
};
