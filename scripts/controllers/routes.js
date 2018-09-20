'use strict';

page('/', app.homeView.initHomePage);
page('/joke', () => app.Joke.fetchAll(app.jokeView.initJokePage));

page();