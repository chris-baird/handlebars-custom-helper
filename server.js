// Dependencies
var express = require('express');
var exphbs = require('express-handlebars');

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

const hbs = exphbs.create({
  defaultLayout: 'main',
  helpers: {
    // Name of custom helper method
    category: function(a, b, opts) {
      if (a == b) {
        return opts.fn(this);
      }
    }
  }
});

// Set Handlebars as the default templating engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const data = [
  {
    name: 'Gun',
    category: 'weapon',
    cost: 100
  },
  {
    name: 'Axe',
    category: 'weapon',
    cost: 50
  },
  {
    name: 'pizza',
    category: 'food',
    cost: 10
  },
  {
    name: 'boots',
    category: 'gear',
    cost: 20
  }
];

// Routes
app.get('/items', function(req, res) {
  res.render('items', { items: data });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log('Server listening on: http://localhost:' + PORT);
});
