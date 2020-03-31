'use strict';

let templateId = '#neighborhood-template';

let neighborhoods = [];

function Neighborhood (rawDataObject) {
  this.name = rawDataObject.name;
  this.city = rawDataObject.city;
  this.population = rawDataObject.population;
  this.founded = rawDataObject.founded;
  this.body = rawDataObject.body;
}


// Neighborhood.prototype.toHtml = function() {
//   let container = $('<div></div>').clone();
//   container.append(`<h2>${this.name}</h2><p>Part of:${this.city}</p>`);
//   return container;
// };
// Neighborhood.prototype.toHtml = function() {
//   let container = $('.template').clone();
//   container.removeClass('template');
//   container.find('.name').text(this.name);
//   container.find('.city').text(this.city);
//   return container;
// };

Neighborhood.prototype.toHtml = function() {
  //1- get the template from the HTML
  let template = $('#neigh-template').html();
  //2- use the Mustache to render new html by merging the template with the data
  // render(string,object)
  let html = Mustache.render(template,this);
  return html;
};


neighborhoodDataSet.forEach(neighborhoodObject => {
  var newObj = new Neighborhood(neighborhoodObject);
  neighborhoods.push(newObj);
});

neighborhoods.forEach(ourNewNeighborhoodObject => {
  var renderedObj = ourNewNeighborhoodObject.toHtml()
  $('#neighborhoods').append(renderedObj);
});
