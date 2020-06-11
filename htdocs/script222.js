
var w = 2000, h = 2000, url3 = 'map3COPY2020.svg', url4= 'map4.svg';
var bounds = [[0,0], [w,h]];

var grayscale = L.imageOverlay(url3, bounds),
    streets   = L.imageOverlay(url4, bounds);

var map = L.map('map', {
  editable: true,
  minZoom: -2,
  maxZoom: 4,
  center: [530, 500],
  zoom: 0,
  crs: L.CRS.Simple,
  layers: [grayscale],
});



    //L.imageOverlay(url3, bounds).addTo(map);



/*
    L.EditControl = L.Control.extend({
        options: {
            position: 'topleft',
            callback: null,
            kind: '',
            html: ''
        },
        onAdd: function (map) {
            var container = L.DomUtil.create('div', 'leaflet-control leaflet-bar'),
                link = L.DomUtil.create('a', '', container);
            link.href = '#';
            link.title = 'Create a new ' + this.options.kind;
            link.innerHTML = this.options.html;
            L.DomEvent.on(link, 'click', L.DomEvent.stop)
                      .on(link, 'click', function () {
                        window.LAYER = this.options.callback.call(map.editTools);
                      }, this);
            return container;
        }
    });

    L.NewLineControl = L.EditControl.extend({
        options: {
            position: 'topleft',
            callback: map.editTools.startPolyline,
            kind: 'line',
            html: '\\/\\'
        }
    });
    L.NewPolygonControl = L.EditControl.extend({
        options: {
            position: 'topleft',
            callback: map.editTools.startPolygon,
            kind: 'polygon',
            html: '▰'
        }
    });
    L.NewMarkerControl = L.EditControl.extend({
        options: {
            position: 'topright',
            callback: map.editTools.startMarker,
            kind: 'marker',
            html: '🖈'
        }
    });
    L.NewRectangleControl = L.EditControl.extend({
        options: {
            position: 'topleft',
            callback: map.editTools.startRectangle,
            kind: 'rectangle',
            html: '⬛'
        }
    });
    L.NewCircleControl = L.EditControl.extend({
        options: {
            position: 'topleft',
            callback: map.editTools.startCircle,
            kind: 'circle',
            html: '⬤'
        }
    });
    map.addControl(new L.NewMarkerControl());
    map.addControl(new L.NewLineControl());
    map.addControl(new L.NewPolygonControl());
    map.addControl(new L.NewRectangleControl());
    map.addControl(new L.NewCircleControl());

    /*document.getElementById('export').onclick = function(e) {
        console.log('The data was received');
        var layer = L.GeoJSON.geometryToLayer(data);
        layer.addTo(map);
        layer.enableEdit();
    }

    map.on('editable:drawing:end', ({ layer }) => {
          if (layer instanceof L.Marker) {
            console.log(layer.getLatLng())
          } else if (layer instanceof L.Polyline) {
            console.log(layer.getLatLngs())
          }
        })


*/




var statesData = {"type":"FeatureCollection","features":[
    {"type":"Feature","id":"02","properties":{"name":"test","density":200},"geometry":{"type":"Polygon","coordinates":[[[23.25,h-1884], [23.5,h-1906], [47,h-1904.25], [49.5,h-1890.25]]]}},
	
	{"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[27.182011,h-91.974804], [37.876993,h-89.109094], [39.591466,h-95.5076], [28.896487,h-98.37331]]]}},
	
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[232.07553,h-1643.216], [232.07553,h-1692.2655], [284.9183,h-1692.2655], [284.9183,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[284.9183,h-1643.2161], [284.9183,h-1692.2605], [331.22024,h-1692.2655], [331.22024,h-1643.216]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[331.22024,h-1643.216], [331.22024,h-1692.2655], [359.9771,h-1692.2655], [359.9771,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[359.9771,h-1643.2161], [359.9771,h-1692.2014], [387.5974,h-1692.2655], [387.5974,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[387.5974,h-1643.2161], [387.5974,h-1692.2655], [437.02324,h-1692.2655], [437.02324,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[437.02324,h-1643.2161], [437.02324,h-1692.2655], [462.89912,h-1692.2655], [462.89912,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[462.89912,h-1643.2161], [462.89912,h-1691.981], [496.0435,h-1692.2655], [496.0435,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[496.0435,h-1643.2161], [496.0435,h-1692.2655], [532.53141,h-1692.2655], [532.53141,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[532.53141,h-1643.2161], [532.53141,h-1692.2655], [562.91372,h-1692.2655], [562.91372,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[562.91372,h-1643.2161], [562.91372,h-1692.2655], [596.05809,h-1692.2655], [596.05809,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[596.05809,h-1643.2161], [596.05809,h-1692.2655], [639.95986,h-1692.2655], [639.95986,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"Лестница раб.","density":0},"geometry":{"type":"Polygon","coordinates":[[[639.95986,h-1643.2161], [639.95986,h-1692.2655], [725.14675,h-1692.2655], [725.14675,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[725.14675,h-1643.2161], [725.14675,h-1692.2655], [757.70964,h-1692.2655], [757.70964,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[757.70964,h-1643.2161], [757.70964,h-1692.2655], [787.07439,h-1692.2655], [787.07439,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[787.07439,h-1643.2161], [787.07439,h-1692.2655], [815.85766,h-1692.2655], [815.85766,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[815.85766,h-1643.2161], [815.85766,h-1692.2655], [853.65391,h-1692.2655], [853.65391,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[853.65391,h-1643.2161], [853.65391,h-1692.2655], [889.70569,h-1692.2655], [889.70569,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[889.70569,h-1643.2161], [889.70569,h-1692.2655], [926.62966,h-1692.2655], [926.62962,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"Лестница раб.","density":0},"geometry":{"type":"Polygon","coordinates":[[[926.62962,h-1566.5816], [926.62966,h-1667.7408], [990.20713,h-1667.7408], [990.20713,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[858.62551,h-1566.5816], [858.62551,h-1620.2535], [926.62962,h-1620.1191], [926.62962,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[796.7446,h-1566.5816], [796.7446,h-1620.3759], [858.62551,h-1620.2535], [858.62551,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"Ж","density":0},"geometry":{"type":"Polygon","coordinates":[[[752.33834,h-1566.5816], [752.33834,h-1620.4636], [796.7446,h-1620.3759], [796.7446,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"М","density":0},"geometry":{"type":"Polygon","coordinates":[[[706.49307,h-1566.5816], [706.49307,h-1620.5543], [752.33834,h-1620.4636], [752.33834,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[672.98282,h-1566.5816], [672.98282,h-1620.6206], [706.49307,h-1620.5543], [706.49307,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[623.23138,h-1566.5816], [623.23138,h-1620.7188], [672.98282,h-1620.6206], [672.98282,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[579.85312,h-1566.5816], [579.85312,h-1620.8046], [623.23138,h-1620.7188], [623.23138,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[537.09159,h-1566.5816], [537.09159,h-1605.7163], [526.81235,h-1605.7163], [526.81235,h-1620.908], [579.85312,h-1620.8046], [579.85312,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[502.96456,h-1566.5816], [502.96456,h-1620.9568], [526.81235,h-1620.908], [526.81235,h-1605.7163], [537.09159,h-1605.7163], [537.09159,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[449.71821,h-1566.5816], [449.71821,h-1621.062], [502.96456,h-1620.9568], [502.96456,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[421.34758,h-1566.5816], [421.34758,h-1621.1176], [449.71821,h-1621.062], [449.71821,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[379.3455,h-1566.5816], [379.3455,h-1621.2012], [421.34758,h-1621.1176], [421.34758,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"Лестница раб.","density":0},"geometry":{"type":"Polygon","coordinates":[[[302.51495,h-1566.5816], [302.51495,h-1621.3531], [379.3455,h-1621.2012], [379.3455,h-1566.5816]]]}},

    {"type":"Feature","id":"0","properties":{"name":"Лестница нераб.","density":0},"geometry":{"type":"Polygon","coordinates":[[[316.75667,h-1400.6426], [316.75667,h-1437.9504], [344.30775,h-1437.9505], [344.30775,h-1400.6426]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[296.41306,h-1400.6426], [296.41306,h-1437.9504], [316.75667,h-1437.9504], [316.75667,h-1400.6426]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[270.43803,h-1400.6426], [270.43803,h-1437.9505], [296.41306,h-1437.9504], [296.41306,h-1400.6426]]]}},
    {"type":"Feature","id":"01","properties":{"name":"1530","density":1032,"test":123},"geometry":{"type":"Polygon","coordinates":[[[243.30857,h-1437.9505], [270.43803,h-1437.9505], [270.43803,h-1400.6426], [243.30857,h-1400.6427]]]}},
    {"type":"Feature","id":"01","properties":{"name":"1531","density":1032},"geometry":{"type":"Polygon","coordinates":[[[243.30857,h-1437.9505], [243.30857,h-1400.6426], [196.8528,h-1400.6426], [196.8528,h-1437.9505]]]}},

    {"type":"Feature","id":"0","properties":{"name":"Лестница раб.","density":0},"geometry":{"type":"Polygon","coordinates":[[[170.38218,h-1400.6426], [170.38218,h-1437.9504], [196.8528,h-1437.9505], [196.8528,h-1400.6426]]]}},

    {"type":"Feature","id":"01","properties":{"name":"1532","density":1032},"geometry":{"type":"Polygon","coordinates":[[[111.51556,h-1372.8199], [151.91303,h-1362.0236], [160.60658,h-1394.384], [120.2091,h-1405.1802]]]}},

    {"type":"Feature","id":"03","properties":{"name":"1533","density":400},"geometry":{"type":"Polygon","coordinates":[[[111.51557,h-1372.8199], [105.03958,h-1348.7141], [145.43706,h-1337.9178], [151.91302,h-1362.0236]]]}},
    {"type":"Feature","id":"04","properties":{"name":"1534","density":123},"geometry":{"type":"Polygon","coordinates":[[[105.03959,h-1348.7141], [98.575897,h-1324.654], [138.97336,h-1313.8577], [145.43707,h-1337.9178]]]}},

    {"type":"Feature","id":"05","properties":{"name":"1535","density":123},"geometry":{"type":"Polygon","coordinates":[[[98.575904,h-1324.654], [92.390086,h-1301.6283], [132.78754,h-1290.832], [138.97336,h-1313.8577]]]}},
    {"type":"Feature","id":"06","properties":{"name":"1536","density":123},"geometry":{"type":"Polygon","coordinates":[[[92.390093,h-1301.6283], [87.305368,h-1282.7012], [127.70316,h-1271.9048], [132.78754,h-1290.832]]]}},
    {"type":"Feature","id":"07","properties":{"name":"Ж","density":0},"geometry":{"type":"Polygon","coordinates":[[[87.305376,h-1282.7012], [81.178996,h-1259.8968], [121.57648,h-1249.1005], [127.70283,h-1271.9049]]]}},
    {"type":"Feature","id":"07","properties":{"name":"Лестница нераб.","density":23, "title":"qqq"},"geometry":{"type":"Polygon","coordinates":[[[121.57648,h-1249.1005], [114.89806,h-1224.2412], [74.500585,h-1235.0375], [81.178997,h-1259.8968]]]}},


    {"type":"Feature","id":"08","properties":{"name":"1537","density":235},"geometry":{"type":"Polygon","coordinates":[[[157.30983,h-1212.9065], [145.14923,h-1167.6361], [71.898154,h-1187.2116], [83.595374,h-1232.6069]]]}},

    {"type":"Feature","id":"09","properties":{"name":"1538","density":235},"geometry":{"type":"Polygon","coordinates":[[[62.00717,h-1240.9896], [55.494629,h-1216.7477], [20.26619,h-1226.1633], [27.384768,h-1250.2425]]]}},
    {"type":"Feature","id":"10","properties":{"name":"1539","density":223},"geometry":{"type":"Polygon","coordinates":[[[70.980723,h-1274.3922], [62.007167,h-1240.9896], [27.384761,h-1250.2425], [36.358478,h-1283.6451]]]}},
    {"type":"Feature","id":"11","properties":{"name":"1540","density":377},"geometry":{"type":"Polygon","coordinates":[[[92.1295,h-1353.1152], [70.980723,h-1274.3922], [36.358478,h-1283.6451], [57.507641,h-1362.368]]]}},
    {"type":"Feature","id":"12","properties":{"name":"1541","density":235},"geometry":{"type":"Polygon","coordinates":[[[92.1295,h-1353.1152], [57.507641,h-1362.368], [69.76037,h-1407.976], [104.38199,h-1398.7233]]]}},
    {"type":"Feature","id":"13","properties":{"name":"1542","density":235},"geometry":{"type":"Polygon","coordinates":[[[119.64002,h-1455.5189], [104.38199,h-1398.7233], [69.76037,h-1407.976], [82.532914,h-1455.518]]]}},

    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[307.41848,h-1494.7986], [307.41848,h-1549.7293], [343.40831,h-1549.7293], [343.4083,h-1494.7986]]]}},
    {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[307.41848,h-1455.5189], [307.41848,h-1494.7986], [343.4083,h-1494.7986], [343.40831,h-1455.5189]]]}},
    ]};

function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}

function style(feature) {
    //console.log(feature);
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.5
    };
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
    console.log(e);
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);
//________________________________________
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>Аудитория</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
        : 'Наведите на аудиторию');
};

info.addTo(map);
//___ДОБАВЛЕНИЕ ВЫБОРА ЭТАЖЕЙ И ВЫДЕЛЕНИЙ
var baseMaps = {
    "5": grayscale,
    "7": streets
};

var overlays = {
    "Выделнеия": geojson
};

L.control.layers(baseMaps,overlays).addTo(map);

function customTip(q,val) {
		return '<a href="#">'+q+'/'+val.layer.feature.properties.density+'</a>';
  }

var searchControl = new L.Control.Search({
		layer: geojson,
		propertyName: 'name',
		marker: false,
    buildTip: customTip,
    autoType: false,
		moveToLocation: function(latlng, title, map) {
			var zoom = map.getBoundsZoom(latlng.layer.getBounds());
  			map.setView(latlng, zoom);
		}
	});
  searchControl.on('search:locationfound', function(e) {

  		e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
  		if(e.layer._popup)
  			e.layer.openPopup();

  	}).on('search:collapsed', function(e) {

  		featuresLayer.eachLayer(function(layer) {	//restore feature color
  			featuresLayer.resetStyle(layer);
  		});
  	});

  	map.addControl( searchControl );  //inizialize search control


 /*
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 20, 50, 100, 200, 500, 1000],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);*/
