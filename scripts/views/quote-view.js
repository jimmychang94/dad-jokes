'use strict';

var app = app || {};

(function(module) {

  let quoteView = {};

  quoteView.render = joke => {
    let template = Handlebars.compile($('#quote-template').text());
    return template(joke);
  }

  quoteView.initQuotePage = () => {
    $('.container').hide();
    $('#quoteView').empty();
    $('#quoteView').show();
    $('#quoteView').append(quoteView.render(module.Quote.all));
  }

  module.quoteView = quoteView;
})(app);