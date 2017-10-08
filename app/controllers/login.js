import Ember from 'ember';

export default Ember.Controller.extend({
     session: Ember.inject.service(),
     actions:{
         signIn(){
             const that=this;
             const email = this.get("email");
             const password = this.get("password");
             
             this.get('session').open('firebase', {
                    provider: 'password',
                    email,
                    password
                    }).catch(function(error){
                        
                    }).then(function(){
                        that.transitionToRouten("index");
                    })
         }
     }
});
