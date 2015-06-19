import Ember from 'ember';

export default Ember.Route.extend({


  actions: {

    searchPerson: function (params) {
        console.log('The validated form values: ', params);
    }

  }


});
