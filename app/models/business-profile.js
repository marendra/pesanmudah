import DS from 'ember-data';

export default DS.Model.extend({
   
    businessAddress:DS.attr('string'),
    businessCategory:DS.attr('string'),
    businessDesc:DS.attr('string'),
    businessLang:DS.attr('string'),
    businessLat:DS.attr('string'),
    businessName:DS.attr('string'),
    businessPhone:DS.attr('string'),

});
