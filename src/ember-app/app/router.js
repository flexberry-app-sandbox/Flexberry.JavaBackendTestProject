import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-java-backend-test-project-car-l');
  this.route('i-i-s-java-backend-test-project-car-e',
  { path: 'i-i-s-java-backend-test-project-car-e/:id' });
  this.route('i-i-s-java-backend-test-project-car-e.new',
  { path: 'i-i-s-java-backend-test-project-car-e/new' });
  this.route('i-i-s-java-backend-test-project-driver-l');
  this.route('i-i-s-java-backend-test-project-driver-e',
  { path: 'i-i-s-java-backend-test-project-driver-e/:id' });
  this.route('i-i-s-java-backend-test-project-driver-e.new',
  { path: 'i-i-s-java-backend-test-project-driver-e/new' });
});

export default Router;
