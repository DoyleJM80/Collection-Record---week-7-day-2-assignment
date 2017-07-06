const Comics = require('../models/comics');

module.exports = {
  list: (req, res) => {
    Comics.find({}).then((results) => {
      console.log(results);
      res.render('comics/list', {model: results});
    });
  },
  create: (req, res) => {
    const comic = new Comics({
      title: req.body.title,
      company: req.body.company,
      issueNumber: req.body.issueNumber
    });
    comic.save();
    res.redirect('/');
  },
  delete: (req, res) => {
    Comics.deleteOne({_id: req.params._id});
    res.redirect('/');
  }
};



// const comic = new Comics({
//   title: 'Detective Comics',
//   company: 'DC',
//   issueNumber: 27
// });
// const guestChrs = {villian: 'Alfred Stryker'};
// comic.guestChrs.push(guestChrs);
// comic.save();
//
// console.log(comic.toObject());
