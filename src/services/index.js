const trades = require('./trades/trades.service.js');
const books = require('./books/books.service.js');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(trades);
  app.configure(books);
 
};
