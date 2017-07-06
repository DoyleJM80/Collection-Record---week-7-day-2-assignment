const Comics = require('../models/comics');

module.exports = {
  list: (req, res) => {
    Comics.find({}).then((results) => {
      res.render('comics/list', {model: results});
    });
  },
  oneComic: (req, res) => {
    Comics.find({_id: req.params._id}).then((result) => {
      res.render('comics/oneComic', {model: result});
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
    Comics.deleteOne({_id: req.params._id}).then(() => {
      res.redirect('/');
    });
  },
  hero: (req, res) => {
    Comics.findOne({_id: req.params._id}).then((result) => {
      console.log(result);
      let newHero = {hero: req.body.hero};
      result.guestChrs.push(newHero);
      result.save();
      res.redirect('/');
    });
  },
  villian: (req, res) => {
    Comics.findOne({_id: req.params._id}).then((result) => {
      console.log(result);
      let newVillian = {hero: req.body.villian};
      result.guestChrs.push(newVillian);
      result.save();
      res.redirect('/');
    });
  }
};


// Recipe.updateOne({source: "Grandma"},
//   {$push: {steps: "Call Grandma and tell her how it was."}})


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
