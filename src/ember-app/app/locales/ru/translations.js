import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Java backend test project',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Java backend test project',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Java backend test project',
          title: 'Java backend test project'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'java-backend-test-project': {
          caption: 'JavaBackendTestProject',
          title: 'JavaBackendTestProject',
          'i-i-s-java-backend-test-project-driver-l': {
            caption: 'Driver',
            title: ''
          },
          'i-i-s-java-backend-test-project-car-l': {
            caption: 'Car',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-java-backend-test-project-car-l': IISJavaBackendTestProjectCarLForm,
    'i-i-s-java-backend-test-project-driver-l': IISJavaBackendTestProjectDriverLForm,
    'i-i-s-java-backend-test-project-car-e': IISJavaBackendTestProjectCarEForm,
    'i-i-s-java-backend-test-project-driver-e': IISJavaBackendTestProjectDriverEForm
  },

});

export default translations;
