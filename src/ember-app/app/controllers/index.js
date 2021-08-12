import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.java-backend-test-project.caption'),
          title: i18n.t('forms.application.sitemap.java-backend-test-project.title'),
          children: [{
            link: 'i-i-s-java-backend-test-project-driver-l',
            caption: i18n.t('forms.application.sitemap.java-backend-test-project.i-i-s-java-backend-test-project-driver-l.caption'),
            title: i18n.t('forms.application.sitemap.java-backend-test-project.i-i-s-java-backend-test-project-driver-l.title'),
            children: null
          }, {
            link: 'i-i-s-java-backend-test-project-car-l',
            caption: i18n.t('forms.application.sitemap.java-backend-test-project.i-i-s-java-backend-test-project-car-l.caption'),
            title: i18n.t('forms.application.sitemap.java-backend-test-project.i-i-s-java-backend-test-project-car-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }
      ]
    };
  }),
})