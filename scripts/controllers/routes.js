'use strict';

page('/', app.homeView.initHomePage);
page('/joke', ctx => app.Joke.fetchAll(app.jokeView.initJokePage));

page();