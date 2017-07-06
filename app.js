const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const parseurl = require('parseurl');
const Comics = require('./models/comics');
const comicController = require('./controllers/comicController');

const app = express();

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/comics');

app.use(express.static('public'));

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Comics.find().then((res) =>{
//   console.log(res);
// });

app.get('/', comicController.list);

app.listen(3000, () => {
  console.log('listening');
});


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
