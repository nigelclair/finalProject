

const obj1 = {
  "Macallan": [
          -3.2103307,
          57.4845275,
        ],
   "Bowmore": [
          -6.289846,
          55.756868,
        ],   
    "Talisker" : [
          -6.3570732,
          57.3023159,
        ],
    "Lagavulin" : [
          -6.1262054,
          55.6355151,
        ],
    "Glenfiddich" : [
          -3.1286601,
          57.4547645,
        ],
    "Springbank" : [
          -5.6097508,
          55.4257842,
        ],
    "Cragganmore" : [
         -3.3953227,
          57.4097188,
        ],
    "Laphroiag" : [
          -6.1543927,
          55.6300569,
        ],
    "Cardhu" : [
          -3.3523197,
          57.4704521,
        ],

    "Oban" : [
          -5.472281,
          56.41495,
        ],
     "Deanston" : [
          -4.0700416,
          56.1887007,
        ],
      "Glenkinchie" : [
          -2.8937579,
          55.8914533,
        ],
      "Dalwhinnie" : [
          -4.2413287,
          56.939995,
        ],
     "Caol Ila" : [
          -6.1115274,
          55.8540991,
        ],
       
}

const introduction__popover = $('.js-introduction__popover')
introduction__popover.click(myFunction)
function myFunction() {
    introduction__popover.hide();
$('.ui.sidebar').sidebar('show');
}

const topMenu = $('.js-menu')
topMenu.click(myFunction2)
function myFunction2() {
$('.ui.sidebar').sidebar('show');
}

      var map;
      var mapStyle = [{
        'featureType': 'all',
        'elementType': 'all',
        'stylers': [{'visibility': 'on'}]
      }, {
        'featureType': 'landscape',
        'elementType': 'geometry',
        'stylers': [{'visibility': 'on'}, {'color': '#fcfcfc'}]
      }, {
        'featureType': 'water',
        'elementType': 'labels',
        'stylers': [{'visibility': 'off'}]
      }, {
        'featureType': 'water',
        'elementType': 'geometry',
        'stylers': [{'visibility': 'on'}, {'hue': '#5f94ff'}, {'lightness': 60}]
      // lessee if this works


      }];

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: { lng: -6.5, lat: 57 },
          zoom: 7,
          styles: mapStyle,
        });

        map.data.setStyle(styleFeature);
// TAQ'S BUTTON CODING BELOW -------


        document.querySelector('.js-btn-smoky').addEventListener('click', function(e) {
          $('.ui.sidebar').sidebar('hide');
          map.data.setStyle(function(feature){

            return {
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                strokeWeight: 0.5,
                strokeColor: '#fff',
                fillColor: '#da0000',
                fillOpacity: 0.65, //1 / feature.getProperty('mag'),
                // while an exponent would technically be correct, quadratic looks nicer
                scale: Math.pow(feature.getProperty('smoky')*100, 1)
              },
              zIndex: Math.floor(feature.getProperty('smoky'))
            };


          });
        });

        document.querySelector('.js-btn-peaty').addEventListener('click', function(e) {
          $('.ui.sidebar').sidebar('hide');
          map.data.setStyle(function(feature){
            return {
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                strokeWeight: 0.5,
                strokeColor: '#fff',
                fillColor: '#da4d00',
                fillOpacity: 0.65, //1 / feature.getProperty('mag'),
                // while an exponent would technically be correct, quadratic looks nicer
                scale: Math.pow(feature.getProperty('peaty')*100, 1)
              },
              zIndex: Math.floor(feature.getProperty('peaty'))
            };


          });
        });

        document.querySelector('.js-btn-spicy').addEventListener('click', function(e) {
          $('.ui.sidebar').sidebar('hide');
          map.data.setStyle(function(feature){
            return {
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                strokeWeight: 0.5,
                strokeColor: '#fff',
                fillColor: '#ff6c00',
                fillOpacity: 0.65, //1 / feature.getProperty('mag'),
                // while an exponent would technically be correct, quadratic looks nicer
                scale: Math.pow(feature.getProperty('spicy')*100, 1)
              },
              zIndex: Math.floor(feature.getProperty('spicy'))
            };


          });
        });

        document.querySelector('.js-btn-herbal').addEventListener('click', function(e) {
          $('.ui.sidebar').sidebar('hide');
          map.data.setStyle(function(feature){
            return {
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                strokeWeight: 0.5,
                strokeColor: '#fff',
                fillColor: '#f0a900',
                fillOpacity: 0.65, //1 / feature.getProperty('mag'),
                // while an exponent would technically be correct, quadratic looks nicer
                scale: Math.pow(feature.getProperty('herbal')*100, 1)
              },
              zIndex: Math.floor(feature.getProperty('herbal'))
            };


          });
        });

                document.querySelector('.js-btn-oily').addEventListener('click', function(e) {
          $('.ui.sidebar').sidebar('hide');
          map.data.setStyle(function(feature){
            return {
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                strokeWeight: 0.5,
                strokeColor: '#fff',
                fillColor: '#ecd303',
                fillOpacity: 0.65, //1 / feature.getProperty('mag'),
                // while an exponent would technically be correct, quadratic looks nicer
                scale: Math.pow(feature.getProperty('oily')*100, 1)
              },
              zIndex: Math.floor(feature.getProperty('oily'))
            };


          });
        });

               document.querySelector('.js-btn-fullbodied').addEventListener('click', function(e) {
          $('.ui.sidebar').sidebar('hide');
          map.data.setStyle(function(feature){
            return {
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                strokeWeight: 0.5,
                strokeColor: '#fff',
                fillColor: '#7fc800',
                fillOpacity: 0.65, //1 / feature.getProperty('mag'),
                // while an exponent would technically be correct, quadratic looks nicer
                scale: Math.pow(feature.getProperty('full_bodied')*100, 1)
              },
              zIndex: Math.floor(feature.getProperty('full_bodied'))
            };


          });
        });

             document.querySelector('.js-btn-rich').addEventListener('click', function(e) {
          $('.ui.sidebar').sidebar('hide');
          map.data.setStyle(function(feature){
            return {
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                strokeWeight: 0.5,
                strokeColor: '#fff',
                fillColor: '#28b601',
                fillOpacity: 0.65, //1 / feature.getProperty('mag'),
                // while an exponent would technically be correct, quadratic looks nicer
                scale: Math.pow(feature.getProperty('rich')*100, 1)
              },
              zIndex: Math.floor(feature.getProperty('rich'))
            };


          });
        });

             document.querySelector('.js-btn-sweet').addEventListener('click', function(e) {
          $('.ui.sidebar').sidebar('hide');
          map.data.setStyle(function(feature){
            return {
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                strokeWeight: 0.5,
                strokeColor: '#fff',
                fillColor: '#00db71',
                fillOpacity: 0.65, //1 / feature.getProperty('mag'),
                // while an exponent would technically be correct, quadratic looks nicer
                scale: Math.pow(feature.getProperty('sweet')*100, 1)
              },
              zIndex: Math.floor(feature.getProperty('sweet'))
            };


          });
        });

             document.querySelector('.js-btn-briny').addEventListener('click', function(e) {
          $('.ui.sidebar').sidebar('hide');
          map.data.setStyle(function(feature){
            return {
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                strokeWeight: 0.5,
                strokeColor: '#fff',
                fillColor: '#00dbd8',
                fillOpacity: 0.65, //1 / feature.getProperty('mag'),
                // while an exponent would technically be correct, quadratic looks nicer
                scale: Math.pow(feature.getProperty('briny')*100, 1)
              },
              zIndex: Math.floor(feature.getProperty('briny'))
            };


          });
        });

             document.querySelector('.js-btn-salty').addEventListener('click', function(e) {
          $('.ui.sidebar').sidebar('hide');
          map.data.setStyle(function(feature){
            return {
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                strokeWeight: 0.5,
                strokeColor: '#fff',
                fillColor: '#0081db',
                fillOpacity: 0.65, //1 / feature.getProperty('mag'),
                // while an exponent would technically be correct, quadratic looks nicer
                scale: Math.pow(feature.getProperty('salty')*100, 1)
              },
              zIndex: Math.floor(feature.getProperty('salty'))
            };


          });
        });

             document.querySelector('.js-btn-vanilla').addEventListener('click', function(e) {
          $('.ui.sidebar').sidebar('hide');
          map.data.setStyle(function(feature){
            return {
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                strokeWeight: 0.5,
                strokeColor: '#fff',
                fillColor: '#001eff',
                fillOpacity: 0.65, //1 / feature.getProperty('mag'),
                // while an exponent would technically be correct, quadratic looks nicer
                scale: Math.pow(feature.getProperty('vanilla')*100, 1)
              },
              zIndex: Math.floor(feature.getProperty('vanilla'))
            };


          });
        });

            document.querySelector('.js-btn-tart').addEventListener('click', function(e) {
          $('.ui.sidebar').sidebar('hide');
          map.data.setStyle(function(feature){
            return {
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                strokeWeight: 0.5,
                strokeColor: '#fff',
                fillColor: '#5a00ff',
                fillOpacity: 0.65, //1 / feature.getProperty('mag'),
                // while an exponent would technically be correct, quadratic looks nicer
                scale: Math.pow(feature.getProperty('tart')*100, 1)
              },
              zIndex: Math.floor(feature.getProperty('tart'))
            };


          });
        });

             document.querySelector('.js-btn-fruity').addEventListener('click', function(e) {
          $('.ui.sidebar').sidebar('hide');
          map.data.setStyle(function(feature){
            return {
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                strokeWeight: 0.5,
                strokeColor: '#fff',
                fillColor: '#9a00ea',
                fillOpacity: 0.65, //1 / feature.getProperty('mag'),
                // while an exponent would technically be correct, quadratic looks nicer
                scale: Math.pow(feature.getProperty('fruity')*100, 1)
              },
              zIndex: Math.floor(feature.getProperty('fruity'))
            };


          });
        });

            document.querySelector('.js-btn-floral').addEventListener('click', function(e) {
          $('.ui.sidebar').sidebar('hide');
          map.data.setStyle(function(feature){
            return {
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                strokeWeight: 0.5,
                strokeColor: '#fff',
                fillColor: '#ff00a2',
                fillOpacity: 0.65, //1 / feature.getProperty('mag'),
                // while an exponent would technically be correct, quadratic looks nicer
                scale: Math.pow(feature.getProperty('floral')*100, 1)
              },
              zIndex: Math.floor(feature.getProperty('floral'))
            };


          });
        });
        // Get the earthquake data (JSONP format)
        // This feed is a copy from the USGS feed, you can find the originals here:
        //   http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
        var script = document.createElement('script');
        script.setAttribute(
            'src',
            'script/sample.json');
        document.getElementsByTagName('head')[0].appendChild(script);
      }

      // Defines the callback function referenced in the jsonp file.
      function eqfeed_callback(data) {
        map.data.addGeoJson(data);
      }

      function styleFeature(feature) {
        var low = [151, 83, 34];   // color of mag 1.0
        var high = [5, 69, 54];  // color of mag 6.0 and above
        var minMag = 10;
        var maxMag = 90;

        // fraction represents where the value sits between the min and max
        var fraction = feature.getProperty('mag') / (maxMag - minMag)
        //(Math.min(feature.getProperty('mag'), maxMag) - minMag) /
            //(maxMag - minMag);

        var color = interpolateHsl(low, high, fraction);

        return {
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            strokeWeight: 0.5,
            strokeColor: '#fff',
            fillColor: color,
            fillOpacity: 0.65, //1 / feature.getProperty('mag'),
            // while an exponent would technically be correct, quadratic looks nicer
            scale: Math.pow(feature.getProperty('mag'), 1)
          },
          zIndex: Math.floor(feature.getProperty('mag'))
        };
      }

      function interpolateHsl(lowHsl, highHsl, fraction) {
        var color = [];
        for (var i = 0; i < 3; i++) {
          // Calculate color based on the fraction.
          color[i] = (highHsl[i] - lowHsl[i]) * fraction + lowHsl[i];
        }

        return 'hsl(' + color[0] + ',' + color[1] + '%,' + color[2] + '%)';
      }

      