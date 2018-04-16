'use strict';

var app = app || {};

(function(module) {

  let jokeView = {};

  jokeView.render = joke => {
    let template = Handlebars.compile($('#joke-template').text());
    return template(joke);
  }

  jokeView.initJokePage = () => {
    $('.container').hide();
    $('#jokeView').empty();
    $('#jokeView').show();
    $('#jokeView').append(jokeView.render(module.Joke.all));
  }

  module.jokeView = jokeView;
})(app);