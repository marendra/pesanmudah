import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('logout');
   this.route('entities', function() {
     this.route('view');
     this.route('add', function() {
       this.route('form1');
       this.route('form2');
       this.route('form3');
     });
   });
  this.route('business', function() {
    this.route('view');
   
  });
  this.route('home');
});

export default Router;
