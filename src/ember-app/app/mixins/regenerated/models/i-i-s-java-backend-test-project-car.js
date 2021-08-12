import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  model: DS.attr('string'),
  color: DS.attr('string'),
  speed: DS.attr('number'),
  driver: DS.belongsTo('i-i-s-java-backend-test-project-driver', { inverse: null, async: false })
});

export let ValidationRules = {
  model: {
    descriptionKey: 'models.i-i-s-java-backend-test-project-car.validations.model.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  color: {
    descriptionKey: 'models.i-i-s-java-backend-test-project-car.validations.color.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  speed: {
    descriptionKey: 'models.i-i-s-java-backend-test-project-car.validations.speed.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  driver: {
    descriptionKey: 'models.i-i-s-java-backend-test-project-car.validations.driver.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CarE', 'i-i-s-java-backend-test-project-car', {
    model: attr('Model', { index: 0 }),
    color: attr('Color', { index: 1 }),
    speed: attr('Speed', { index: 2 }),
    driver: belongsTo('i-i-s-java-backend-test-project-driver', 'Driver', {
      name: attr('Name', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('CarL', 'i-i-s-java-backend-test-project-car', {
    model: attr('Model', { index: 0 }),
    color: attr('Color', { index: 1 }),
    speed: attr('Speed', { index: 2 }),
    driver: belongsTo('i-i-s-java-backend-test-project-driver', 'Name', {
      name: attr('Name', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
