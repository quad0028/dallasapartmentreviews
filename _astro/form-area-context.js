/* Area context comes from an explicit service-page CTA, never IP location. */
(function(){
  'use strict';
  var areas={"addison":"Addison","allen":"Allen","arlington":"Arlington","balch-springs":"Balch Springs","bedford":"Bedford","carrollton":"Carrollton","cedar-hill":"Cedar Hill","celina":"Celina","coppell":"Coppell","corinth":"Corinth","deep-ellum":"Deep Ellum","denton":"Denton","desoto":"DeSoto","downtown-dallas":"Downtown Dallas","duncanville":"Duncanville","east-dallas":"East Dallas","euless":"Euless","far-north-dallas":"Far North Dallas","farmers-branch":"Farmers Branch","flower-mound":"Flower Mound","forney":"Forney","fort-worth":"Fort Worth","frisco":"Frisco","garland":"Garland","grand-prairie":"Grand Prairie","grapevine":"Grapevine","haltom-city":"Haltom City","highland-village":"Highland Village","hurst":"Hurst","irving":"Irving","kennedale":"Kennedale","lake-highlands":"Lake Highlands","lancaster":"Lancaster","las-colinas":"Las Colinas","lewisville":"Lewisville","little-elm":"Little Elm","mansfield":"Mansfield","mckinney":"McKinney","medical-district":"Dallas Medical District","mesquite":"Mesquite","midlothian":"Midlothian","murphy":"Murphy","north-arlington":"North Arlington","north-richland-hills":"North Richland Hills","northwest-dallas":"Northwest Dallas","oak-cliff":"Oak Cliff","oak-lawn":"Oak Lawn","plano":"Plano","pleasant-grove":"Pleasant Grove","prosper":"Prosper","red-oak":"Red Oak","richardson":"Richardson","rockwall":"Rockwall","rowlett":"Rowlett","sachse":"Sachse","saginaw":"Saginaw","seagoville":"Seagoville","south-arlington":"South Arlington","south-dallas":"South Dallas","the-cedars":"The Cedars","the-colony":"The Colony","trinity-groves":"Trinity Groves","uptown-dallas":"Uptown Dallas","valley-ranch":"Valley Ranch","vickery-meadow":"Vickery Meadow","watauga":"Watauga","west-dallas":"West Dallas","wylie":"Wylie"};
  var slug=new URLSearchParams(window.location.search).get('area');
  if(!Object.prototype.hasOwnProperty.call(areas,slug))return;
  var heading=document.querySelector('[data-form-area-heading]');
  if(heading){
    var name=areas[slug];
    heading.textContent=/^the\s/i.test(name)
      ? "Get Your Apartment List for "+name
      : "Get Your "+name+" Apartment List";
  }
})();
