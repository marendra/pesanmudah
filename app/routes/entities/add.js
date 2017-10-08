import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.store.createRecord('entity')
    },
    afterModel(){
        this.transitionTo("entities.add.form1")
    }
});
