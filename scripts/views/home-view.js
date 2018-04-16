'use-strict'

var app = app || {};

(function(module) {
  let homeView = {};

  homeView.initHomePage = () => {
    $('.container').hide();
    $('#homeView').show();
  };

  module.homeView = homeView;
})(app);