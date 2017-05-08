const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs'); // Added for Handlebars

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home.hbs', {
    welcomeMessage: 'Welcome to our Home Page! - via Partial',
    welcomeParagraph: 'Our new dynamic website',
    currentYear: new Date().getFullYear()
  });
});

// about
app.get('/about', (req, res) => {
  res.render('about.hbs', {
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'Our new about Page'
  });
});


// /bad
app.get('/bad', (req, res) => {
  res.send({
    bad: 'this is bad',
    but: 'it is JSON though...'
  })
});

app.listen(3000, () => {
  console.log('Server is up one port 3000');
});
