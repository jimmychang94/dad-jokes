'use strict';

var app = app || {};

(function (module) {

  function Quote (rawDataObj) {
    this.body = rawDataObj.joke;
    this.id = rawDataObj.id;
    this.link = `https://icanhazdadjoke.com/j/${rawDataObj.id}`;
    this.image = `https://icanhazdadjoke.com/j/${rawDataObj.id}.png`;
  }

  Quote.all = [];

  Quote.loadAll = quoteData => {
    Quote.all = new Quote(quoteData);
  }

  Quote.fetchAll = callback => {
    $.getJSON(`https://icanhazdadjoke.com/`)
      .then(results => {
        Quote.loadAll(results);
        callback();
      }, err => console.error(err));
  }

  module.Quote = Quote;

})(app);