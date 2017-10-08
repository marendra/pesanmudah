import DS from 'ember-data';

export default DS.Model.extend({
entityName :DS.attr('string'),
entityBusinessId:DS.attr('string'),
entityType:DS.attr('string'),
entityDescription:DS.attr('string'),
enitityPrice:DS.attr('string'),
entityAvailable:DS.attr('string'),
entityThumbnail:DS.attr('string'),
entityPicture:DS.attr('string')
});                                                       
 