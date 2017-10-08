import Ember from 'ember';

export default Ember.Controller.extend({
     file:'',
    actions:{
        didSelectFiles(files){
           let reader = new FileReader();
          reader.onload = function(e) {
       var data = e.target.result;
         var output = document.getElementById('output');
            output.src = data;
     };
   
          this.set('file', files[0]);
         reader.readAsDataURL(files[0]);
            
        }
    }
});
 