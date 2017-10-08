import Ember from 'ember';

export default Ember.Controller.extend({
    
     entityTypeSelect:[
        "item",
        "person"
        ]
,
  
    
    actions:{
        selectT(selected){
          
            this.set("model.entityType",selected)
        
    }
    }
});
