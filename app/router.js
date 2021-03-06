import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('contact');
  this.route('reviews');
  this.route('portfolio');
  this.route('about-us');
});

export default Router;
