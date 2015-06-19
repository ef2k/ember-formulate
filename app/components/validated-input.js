import Ember from 'ember';

export default Ember.Component.extend({

  result: null,
  rules: {},
  type: 'text',
  resultClass: '',

  targetObject: Ember.computed.alias('parentView'),

  setup: Ember.on('didInsertElement', function () {
    var rules = this.get('rules');

    var required = this.get('required');
    if (required) {
      rules.required = true;
      this.set('rules', rules);
    }
    this.sendAction('register', this);
  }),

  actions: {

    validate() {

      var id = this.get('for'),
          $inputField = Ember.$('#' + id),
          textValue = $inputField.val(),
          result = {element: id};

      var errors = [];

      if (!textValue) {
        errors.push({rule: 'required', elem: id, msg: 'This field is required.'});
      }

      result.textValue = textValue;
      result.errors = errors;
      this.set('result', result);

      if (errors.length === 0) {
        result.resultClass = this.get('successClass') || 'validated-success';
        this.sendAction('action', result);
      } else {
        result.resultClass = this.get('errorClass') || 'validated-error';
        result.element = id;
        this.sendAction('action', result);
      }
    }
  }
});
