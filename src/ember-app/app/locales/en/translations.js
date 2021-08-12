import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISJavaBackendTestProjectCarLForm from './forms/i-i-s-java-backend-test-project-car-l';
import IISJavaBackendTestProjectDriverLForm from './forms/i-i-s-java-backend-test-project-driver-l';
import IISJavaBackendTestProjectCarEForm from './forms/i-i-s-java-backend-test-project-car-e';
import IISJavaBackendTestProjectDriverEForm from './forms/i-i-s-java-backend-test-project-driver-e';
import IISJavaBackendTestProjectCarModel from './models/i-i-s-java-backend-test-project-car';
import IISJavaBackendTestProjectDriverModel from './models/i-i-s-java-backend-test-project-driver';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-java-backend-test-project-car': IISJavaBackendTestProjectCarModel,
    'i-i-s-java-backend-test-project-driver': IISJavaBackendTestProjectDriverModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'java-backend-test-project': {
          caption: 'java-backend-test-project',
          title: 'java-backend-test-project',
          'i-i-s-java-backend-test-project-driver-l': {
            caption: 'i-i-s-java-backend-test-project-driver-l',
            title: 'i-i-s-java-backend-test-project-driver-l'
          },
          'i-i-s-java-backend-test-project-car-l': {
            caption: 'i-i-s-java-backend-test-project-car-l',
            title: 'i-i-s-java-backend-test-project-car-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-java-backend-test-project-car-l': IISJavaBackendTestProjectCarLForm,
    'i-i-s-java-backend-test-project-driver-l': IISJavaBackendTestProjectDriverLForm,
    'i-i-s-java-backend-test-project-car-e': IISJavaBackendTestProjectCarEForm,
    'i-i-s-java-backend-test-project-driver-e': IISJavaBackendTestProjectDriverEForm
  },

});

export default translations;
