'use strict';

var app = app || {};

(function (module) {

  function Joke (rawDataObj) {
    this.body = rawDataObj.joke;
    this.id = rawDataObj.id;
    this.link = `https://icanhazdadjoke.com/j/${rawDataObj.id}`;
    this.image = `https://icanhazdadjoke.com/j/${rawDataObj.id}.png`;
  }

  Joke.all = [];

  Joke.loadAll = jokeData => {
    Joke.all = new Joke(jokeData);
  }

  Joke.fetchAll = callback => {
    $.getJSON(`https://icanhazdadjoke.com/`)
      .then(results => {
        Joke.loadAll(results);
        callback();
      }, err => console.error(err));
  }

  module.Joke = Joke;

})(app);