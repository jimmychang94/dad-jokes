'use strict';

page('/', app.homeView.initHomePage);
page('/joke', ctx => app.Quote.fetchAll(app.quoteView.initQuotePage));

page();