import Ember from 'ember';

export default Ember.Component.extend({

  formHasErrors: false,
  fields: [],
  valid: false,
  results: {},

  actions: {

    result(params) {
      this.get('results')[params.element] = params;
    },

    submitted() {
      var _this = this,
          formValues = this.get('results');

      this.get('fields').forEach((field) => {
        field.send('validate');
      });

      // TODO: Get optional fields here.

      Ember.run(function () {

        var isValid = null;
        for (var k in formValues) {
          if (formValues.hasOwnProperty(k)) {
            isValid = formValues[k].errors.length === 0;
          }
          if (isValid === false) {
            break;
          }
        }

        if (isValid) {
          _this.sendAction('action', formValues);
        }

      });
    },

    register(field) {
      this.get('fields').push(field);
    }

  }

});
