const apiKey  = 'AIzaSyCtbXuJTa1dq8kpFOfWv9O74uPNUyQ8474';


/*


*/
// HERE I DEFINE ALL MY DISTILELRS





// these are done LAT, LONG. Data below wants LONG, LAT!!!
//  2 - "Macallan" : 57.4845275,-3.2103307, 
// 6 - “Bowmore” : 55.756868,-6.289846,
// 15 –   “Talisker” : 57.3023159,-6.3570732
// 16 - "Lagavulin" : 55.6355151,-6.1262054
// 24 “Old Pultney” : 58.4354,-3.0847
// 32 “Glenfiddich” : 57.4547645,-3.1286601
// 46 – “ Springbank”  : 55.4257842,-5.6097508, 
// 67 Cragganmore :  57.4097188,-3.3953227
// 182 “Laphroiag” : 55.6300569,-6.1543927
// 199 “Cardhu” : 57.4704521,-3.3523197


// [START script-body]
      var map;

      // -179.463,-60.7674

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: { lng: -8.2984706, lat: 57.2763334 },
          zoom: 7

        });  // <---- This is the end of the "simple style"
        // ------ COPIED FROM ADVANCE MAP BEGIN ---------
        // styles: mapStyle
        // });

        // map.data.setStyle(styleFeature);
        // ------ COPIED FROM ADVANCE MAP END ---------
        // Get the earthquake data (JSONP format)
        // This feed is a copy from the USGS feed, you can find the originals here:
        //   http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
        var script = document.createElement('script');
        script.setAttribute(
            'src',
            'script/sample.json');
        //
        document.getElementsByTagName('head')[0].appendChild(script);
        // ^ THIS ABOVE BIT IS SAME FOR SIMPLE VS
        // Add a basic style.
        map.data.setStyle(function(feature) {
          var mag = Math.exp(parseFloat(feature.getProperty('mag'))) * 0.1;
          return /** @type {google.maps.Data.StyleOptions} */({
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: mag,
              fillColor: '#f00',
              fillOpacity: 0.35,
              strokeWeight: 0
            }
          });
        });
      }
      //       var mapStyle = [{
      //   'featureType': 'all',
      //   'elementType': 'all',
      //   'stylers': [{'visibility': 'off'}]
      // }, {
      //   'featureType': 'landscape',
      //   'elementType': 'geometry',
      //   'stylers': [{'visibility': 'on'}, {'color': '#fcfcfc'}]
      // }, {
      //   'featureType': 'water',
      //   'elementType': 'labels',
      //   'stylers': [{'visibility': 'off'}]
      // }, {
      //   'featureType': 'water',
      //   'elementType': 'geometry',
      //   'stylers
      // // Defines the callback function referenced in the jsonp file.
      function eqfeed_callback(data) {
        map.data.addGeoJson(data);
      }
 
// [END script-body]
