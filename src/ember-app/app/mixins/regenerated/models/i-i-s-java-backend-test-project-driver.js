import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  age: DS.attr('number')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-java-backend-test-project-driver.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  age: {
    descriptionKey: 'models.i-i-s-java-backend-test-project-driver.validations.age.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('DriverE', 'i-i-s-java-backend-test-project-driver', {
    name: attr('Name', { index: 0 }),
    age: attr('Age', { index: 1 })
  });

  modelClass.defineProjection('DriverL', 'i-i-s-java-backend-test-project-driver', {
    name: attr('Name', { index: 0 }),
    age: attr('Age', { index: 1 })
  });
};
