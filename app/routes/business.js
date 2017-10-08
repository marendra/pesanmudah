import Ember from 'ember';

export default Ember.Route.extend({
    session: Ember.inject.service(),
    model(){
        const uid = this.get("session.uid");
      return this.store.findRecord('businessProfile',uid)
        
    }
});
