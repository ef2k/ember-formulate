import Ember from 'ember';

export default Ember.Component.extend({

  result: null,

  targetObject: Ember.computed.alias('parentView'),

  actions: {

    result(params) {
      this.set('result', params);
      this.sendAction('action', params);
    },

    register(field) {
      this.sendAction('register', field);
    }

  }
});