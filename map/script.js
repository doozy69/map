
var w = 2000, h = 2000, url3 = 'map3COPY2020.svg', url4= 'map4.svg';
var bounds = [[0,0], [w,h]];

var floor_map = [
    L.imageOverlay('images/shaba/11.svg', bounds),
    L.imageOverlay('images/shaba/22.svg', bounds),
    L.imageOverlay('images/shaba/3.svg', bounds),
    L.imageOverlay('images/shaba/4.svg', bounds),
    L.imageOverlay('images/shaba/5.svg', bounds),
    L.imageOverlay('images/shaba/6.svg', bounds),
    L.imageOverlay('images/shaba/7.svg', bounds),
    L.imageOverlay('images/shaba/8.svg', bounds)
];

var floor = 0;

var grayscale = L.imageOverlay(url3, bounds),
    streets   = L.imageOverlay(url4, bounds);

var map = L.map('map', {
  editable: true,
  minZoom: -1,
  maxZoom: 4,
  center: [450, 500],
  zoom: 1,
  crs: L.CRS.Simple,
  layers: [floor_map[floor]],
});


/*var statesDataShaba8 = {"type":"FeatureCollection","features":[

    {"type":"Feature","id":"0","properties":{"name":"1801 лаборатория моделирования","density":0},"geometry":{"type":"Polygon","coordinates":[[[232.07553,h-1643.216], [232.07553,h-1692.2655], [331.22024,h-1692.2655], [331.22024,h-1643.216]]]}},
    {"type":"Feature","id":"0","properties":{"name":"1802 Лаборатория электроники и микроэлектронной техники","density":0},"geometry":{"type":"Polygon","coordinates":[[[331.22024,h-1643.216], [331.22024,h-1692.2655], [359.9771,h-1692.2655], [359.9771,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"1803 студенческое КБ","density":0},"geometry":{"type":"Polygon","coordinates":[[[359.9771,h-1643.2161], [359.9771,h-1692.2655], [437.02324,h-1692.2655], [437.02324,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"1804 Лаборатория метрологии и измерительной техники","density":0},"geometry":{"type":"Polygon","coordinates":[[[437.02324,h-1643.2161], [437.02324,h-1692.2655], [496.0435,h-1692.2655], [496.0435,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"1805 Лаборатория микропроцессорной техники","density":0},"geometry":{"type":"Polygon","coordinates":[[[496.0435,h-1643.2161], [496.0435,h-1692.2655], [562.91372,h-1692.2655], [562.91372,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"1806 Лаборатория","density":0},"geometry":{"type":"Polygon","coordinates":[[[562.91372,h-1643.2161], [562.91372,h-1692.2655], [596.05809,h-1692.2655], [596.05809,h-1643.2161]]]}},
    //{"type":"Feature","id":"0","properties":{"name":"1807","density":0},"geometry":{"type":"Polygon","coordinates":[[[596.05809,h-1643.2161], [596.05809,h-1692.2655], [639.95986,h-1692.2655], [639.95986,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"1808 Дисплейный класс","density":0},"geometry":{"type":"Polygon","coordinates":[[[725.14675,h-1643.2161], [725.14675,h-1692.2655], [757.70964,h-1692.2655], [757.70964,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"1809 Преподавательская","density":0},"geometry":{"type":"Polygon","coordinates":[[[757.70964,h-1643.2161], [757.70964,h-1692.2655], [787.07439,h-1692.2655], [787.07439,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"1810","density":0},"geometry":{"type":"Polygon","coordinates":[[[787.07439,h-1643.2161], [787.07439,h-1692.2655], [853.65391,h-1692.2655], [853.65391,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"1811 Научная лабаратория магистров","density":0},"geometry":{"type":"Polygon","coordinates":[[[853.65391,h-1643.2161], [853.65391,h-1692.2655], [889.875,h-1692.2655], [889.875,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"1812 кафедра афтоматизированных систем обработки информации и управления","density":0},"geometry":{"type":"Polygon","coordinates":[[[889.70569,h-1643.2161], [889.70569,h-1692.2655], [926.62966,h-1692.2655], [926.62966,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"1813 Художественные мастерские","density":0},"geometry":{"type":"Polygon","coordinates":[[[830.6062,h-1566.5816], [830.6062,h-1620.2797], [926.625,h-1620.2797], [926.625,h-1566.625]]]}},
    {"type":"Feature","id":"0","properties":{"name":"1814 Лаборатория…","density":0},"geometry":{"type":"Polygon","coordinates":[[[749.19167,h-1566.5816], [749.19167,h-1620.3878], [830.63892,h-1620.2797], [830.67257,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"Туалет Ж","density":0},"geometry":{"type":"Polygon","coordinates":[[[719.10432,h-1566.5816], [719.10432,h-1620.4637], [749.23652,h-1620.3877], [749.19167,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"Туалет М","density":0},"geometry":{"type":"Polygon","coordinates":[[[691.37779,h-1566.5816], [691.37779,h-1620.5543], [719.10432,h-1620.4587], [719.10432,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"1815 Учебная аудитория","density":0},"geometry":{"type":"Polygon","coordinates":[[[625.78344,h-1566.5816], [625.78344,h-1620.6206], [691.37779,h-1620.5452], [691.37779,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"1816","density":0},"geometry":{"type":"Polygon","coordinates":[[[575.71548,h-1566.5816], [575.71548,h-1620.719], [625.78344,h-1620.6206], [625.78344,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"1817 кафедра афтоматизированных систем обработки информации и управления","density":0},"geometry":{"type":"Polygon","coordinates":[[[546.79588,h-1566.5816], [546.79588,h-1620.8047], [575.71548,h-1620.719], [575.71548,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"1818 учебная лаборатория и компьютерный класс","density":0},"geometry":{"type":"Polygon","coordinates":[[[505.87501,h-1566.5976], [505.87501,h-1620.9187], [546.79588,h-1620.8047], [546.79588,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"1819","density":0},"geometry":{"type":"Polygon","coordinates":[[[471.33956,h-1566.5816], [471.33956,h-1620.9568], [505.87501,h-1620.9187], [505.87501,h-1566.5976]]]}},
    {"type":"Feature","id":"0","properties":{"name":"1820 Служебное помещение","density":0},"geometry":{"type":"Polygon","coordinates":[[[438.93483,h-1566.5816], [438.93483,h-1621.0064], [471.33956,h-1620.9568], [471.33956,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"1821 учебная лаборатория","density":0},"geometry":{"type":"Polygon","coordinates":[[[407.39976,h-1566.5816], [407.39976,h-1621.1182], [438.93483,h-1621.0064], [438.93483,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"1822 заведующий кафедры автоматики и электроники","density":0},"geometry":{"type":"Polygon","coordinates":[[[379.3455,h-1566.5816], [379.3455,h-1621.2023], [407.39976,h-1621.1182], [407.39976,h-1566.5816]],[[596.05809,h-1643.2161], [596.05809,h-1692.2655], [639.95986,h-1692.2655], [639.95986,h-1643.2161]]]}},
]};


var statesDataShaba4 = {"type":"FeatureCollection","features":[

   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[232.07553,h-1643.216], [232.07553,h-1692.2655], [284.9183,h-1692.2655], [284.9183,h-1643.2161]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[284.9183,h-1643.2161], [284.9183,h-1692.2655], [331.22024,h-1692.2655], [331.22024,h-1643.216]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[331.22024,h-1643.216], [331.22024,h-1692.2655], [359.9771,h-1692.2655], [359.9771,h-1643.2161]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[359.9771,h-1643.2161], [359.9771,h-1692.2655], [387.5974,h-1692.2655], [387.5974,h-1643.2161]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[387.5974,h-1643.2161], [387.5974,h-1692.2655], [437.02324,h-1692.2655], [437.02324,h-1643.2161]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[437.02324,h-1643.2161], [437.02324,h-1692.2655], [462.89912,h-1692.2655], [462.89912,h-1643.2161]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[462.89912,h-1643.2161], [462.89912,h-1692.2655], [496.0435,h-1692.2655], [496.0435,h-1643.2161]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[496.0435,h-1643.2161], [496.0435,h-1692.2655], [532.53141,h-1692.2655], [532.53141,h-1643.2161]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[532.53141,h-1643.2161], [532.53141,h-1692.2655], [562.91372,h-1692.2655], [562.91372,h-1643.2161]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[562.91372,h-1643.2161], [562.91372,h-1692.2655], [596.05809,h-1692.2655], [596.05809,h-1643.2161]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[596.05809,h-1643.2161], [596.05809,h-1692.2655], [639.95986,h-1692.2655], [639.95986,h-1643.2161]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[639.95986,h-1643.2161], [639.95986,h-1692.2655], [725.14675,h-1692.2655], [725.14675,h-1643.2161]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[725.14675,h-1643.2161], [725.14675,h-1692.2655], [757.70964,h-1692.2655], [757.70964,h-1643.2161]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[757.70964,h-1643.2161], [757.70964,h-1692.2655], [787.07439,h-1692.2655], [787.07439,h-1643.2161]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[787.07439,h-1643.2161], [787.07439,h-1692.2655], [815.85766,h-1692.2655], [815.85766,h-1643.2161]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[815.85766,h-1643.2161], [815.85766,h-1692.2655], [842.59062,h-1692.2655], [842.59062,h-1643.2161]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[842.59062,h-1643.2161], [842.59062,h-1692.2655], [868.49249,h-1692.2655], [868.49249,h-1643.2161]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[868.49249,h-1643.2161], [868.49249,h-1692.2655], [894.84364,h-1692.2655], [894.84364,h-1643.2161]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[894.84364,h-1643.2161], [894.84364,h-1692.2655], [926.62966,h-1692.2655], [926.62966,h-1643.2161]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[926.62962,h-1566.5816], [926.62962,h-1667.7408], [990.20713,h-1667.7408], [990.20713,h-1566.5816]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[879.45975,h-1566.5817], [879.45975,h-1621.3533], [926.62962,h-1621.3533], [926.62962,h-1566.5816]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[832.0836,h-1566.5817], [832.0836,h-1621.3533], [879.45975,h-1621.3533], [879.45975,h-1566.5817]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[794.34176,h-1566.5817], [794.34176,h-1621.3533], [832.0836,h-1621.3533], [832.0836,h-1566.5817]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[761.28452,h-1566.5817], [761.28452,h-1621.3533], [794.34176,h-1621.3533], [794.34176,h-1566.5817]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[735.56351,h-1566.5817], [735.56351,h-1621.3533], [761.28452,h-1621.3533], [761.28452,h-1566.5817]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[707.01407,h-1566.5817], [707.01407,h-1621.3533], [735.56351,h-1621.3533], [735.56351,h-1566.5817]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[670.15613,h-1566.5817], [670.15613,h-1621.3533], [707.01407,h-1621.3533], [707.01407,h-1566.5817]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[626.31551,h-1566.5817], [626.31551,h-1621.3533], [670.15613,h-1621.3533], [670.15613,h-1566.5817]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[581.14907,h-1566.5817], [581.14907,h-1621.3533], [626.31551,h-1621.3533], [626.31551,h-1566.5817]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[541.4627,h-1566.5817], [541.4627,h-1621.3533], [581.14907,h-1621.3533], [581.14907,h-1566.5817]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[504.42798,h-1566.5817], [504.42798,h-1621.3533], [541.4627,h-1621.3533], [541.4627,h-1566.5817]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[472.4314,h-1566.5817], [472.4314,h-1621.3533], [504.42798,h-1621.3533], [504.42798,h-1566.5817]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[440.52321,h-1566.5817], [440.52321,h-1621.3533], [472.4314,h-1621.3533], [472.4314,h-1566.5817]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[410.47117,h-1566.5817], [410.47117,h-1621.3533], [440.52321,h-1621.3533], [440.52321,h-1566.5817]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[378.82813,h-1566.5817], [378.82813,h-1621.3533], [410.47117,h-1621.3533], [410.47117,h-1566.5817]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[302.51062,h-1566.5817], [302.51062,h-1621.3533], [378.82813,h-1621.3533], [378.82813,h-1566.5817]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[316.75234,h-1400.6426], [316.75234,h-1437.9505], [344.30342,h-1437.9505], [344.30342,h-1400.6427]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[296.40873,h-1400.6426], [296.40873,h-1437.9505], [316.75234,h-1437.9505], [316.75234,h-1400.6426]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[243.30424,h-1400.6426], [243.30424,h-1437.9506], [296.40873,h-1437.9505], [296.40873,h-1400.6426]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[196.84847,h-1400.6426], [196.84847,h-1437.9506], [243.30424,h-1437.9506], [243.30424,h-1400.6426]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[170.37785,h-1400.6427], [170.37785,h-1437.9505], [196.84847,h-1437.9506], [196.84847,h-1400.6426]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[111.51123,h-1372.82], [120.19347,h-1405.2226], [160.60225,h-1394.3841], [151.9087,h-1362.0237]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[101.51854,h-1335.6237], [111.51123,h-1372.82], [151.94421,h-1361.986], [141.90962,h-1324.801]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[87.30104,h-1282.7013], [101.51854,h-1335.6237], [141.90962,h-1324.801], [127.69883,h-1271.9049]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[81.174661,h-1259.897], [87.30104,h-1282.7013], [127.69883,h-1271.9049], [121.57215,h-1249.1007]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[74.496253,h-1235.0376], [81.174661,h-1259.897], [121.57215,h-1249.1007], [114.89374,h-1224.2413]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[21.017715,h-1225.9615], [26.178783,h-1245.2229], [60.658081,h-1235.9841], [55.490296,h-1216.7478]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[26.178783,h-1245.2229], [33.566977,h-1272.796], [68.064277,h-1263.5525], [60.658081,h-1235.9841]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[33.566977,h-1272.796], [39.707263,h-1295.7118], [74.219497,h-1286.4643], [68.064277,h-1263.5525]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[39.707263,h-1295.7118], [46.42638,h-1320.7879], [80.954941,h-1311.536], [74.219497,h-1286.4643]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[46.42638,h-1320.7879], [53.235004,h-1346.198], [87.7801,h-1336.9417], [80.954941,h-1311.536]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[53.235004,h-1346.198], [60.222279,h-1372.2749], [94.78438,h-1363.014], [87.7801,h-1336.9417]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[60.222279,h-1372.2749], [66.817664,h-1396.8892], [101.39582,h-1387.624], [94.78438,h-1363.014]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[66.817664,h-1396.8892], [72.879735,h-1419.5131], [107.47264,h-1410.244], [101.39582,h-1387.624]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[72.879735,h-1419.5131], [82.528582,h-1455.5191], [119.63569,h-1455.5191], [107.47264,h-1410.244]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[307.41415,h-1455.5191], [307.41415,h-1494.7987], [343.40397,h-1494.7987], [343.40361,h-1455.5191]]]}},
   {"type":"Feature","id":"0","properties":{"name":"0","density":0},"geometry":{"type":"Polygon","coordinates":[[[307.41415,h-1494.7987], [307.41415,h-1549.7295], [343.40398,h-1549.7295], [343.40397,h-1494.7987]]]}},

]};
console.log(statesDataShaba8);
var statesData = {"type":"FeatureCollection","features":[]};*/

/*var statesData1 = {"type":"FeatureCollection","features":[
    {"type":"Feature","id":"0","properties":{"name":"1","density":0},"geometry":{"type":"Polygon","coordinates":[[[232.07553,h-1643.216], [232.07553,h-1692.2655], [284.9183,h-1692.2655], [284.9183,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"2","density":0},"geometry":{"type":"Polygon","coordinates":[[[284.9183,h-1643.2161], [284.9183,h-1692.2605], [331.22024,h-1692.2655], [331.22024,h-1643.216]]]}},
    {"type":"Feature","id":"0","properties":{"name":"3","density":1},"geometry":{"type":"Polygon","coordinates":[[[331.22024,h-1643.216], [331.22024,h-1692.2655], [359.9771,h-1692.2655], [359.9771,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"4","density":0},"geometry":{"type":"Polygon","coordinates":[[[359.9771,h-1643.2161], [359.9771,h-1692.2014], [387.5974,h-1692.2655], [387.5974,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"5","density":0},"geometry":{"type":"Polygon","coordinates":[[[387.5974,h-1643.2161], [387.5974,h-1692.2655], [437.02324,h-1692.2655], [437.02324,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"6","density":0},"geometry":{"type":"Polygon","coordinates":[[[437.02324,h-1643.2161], [437.02324,h-1692.2655], [462.89912,h-1692.2655], [462.89912,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"7","density":0},"geometry":{"type":"Polygon","coordinates":[[[462.89912,h-1643.2161], [462.89912,h-1691.981], [496.0435,h-1692.2655], [496.0435,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"8","density":1},"geometry":{"type":"Polygon","coordinates":[[[496.0435,h-1643.2161], [496.0435,h-1692.2655], [532.53141,h-1692.2655], [532.53141,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"9","density":0},"geometry":{"type":"Polygon","coordinates":[[[532.53141,h-1643.2161], [532.53141,h-1692.2655], [562.91372,h-1692.2655], [562.91372,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"10","density":0},"geometry":{"type":"Polygon","coordinates":[[[562.91372,h-1643.2161], [562.91372,h-1692.2655], [596.05809,h-1692.2655], [596.05809,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"11","density":0},"geometry":{"type":"Polygon","coordinates":[[[596.05809,h-1643.2161], [596.05809,h-1692.2655], [639.95986,h-1692.2655], [639.95986,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"Лестница раб.","density":0},"geometry":{"type":"Polygon","coordinates":[[[639.95986,h-1643.2161], [639.95986,h-1692.2655], [725.14675,h-1692.2655], [725.14675,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"12","density":1},"geometry":{"type":"Polygon","coordinates":[[[725.14675,h-1643.2161], [725.14675,h-1692.2655], [757.70964,h-1692.2655], [757.70964,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"13","density":0},"geometry":{"type":"Polygon","coordinates":[[[757.70964,h-1643.2161], [757.70964,h-1692.2655], [787.07439,h-1692.2655], [787.07439,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"14","density":0},"geometry":{"type":"Polygon","coordinates":[[[787.07439,h-1643.2161], [787.07439,h-1692.2655], [815.85766,h-1692.2655], [815.85766,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"15","density":0},"geometry":{"type":"Polygon","coordinates":[[[815.85766,h-1643.2161], [815.85766,h-1692.2655], [853.65391,h-1692.2655], [853.65391,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"16","density":0},"geometry":{"type":"Polygon","coordinates":[[[853.65391,h-1643.2161], [853.65391,h-1692.2655], [889.70569,h-1692.2655], [889.70569,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"17","density":0},"geometry":{"type":"Polygon","coordinates":[[[889.70569,h-1643.2161], [889.70569,h-1692.2655], [926.62966,h-1692.2655], [926.62962,h-1643.2161]]]}},
    {"type":"Feature","id":"0","properties":{"name":"Лестница раб.","density":0},"geometry":{"type":"Polygon","coordinates":[[[926.62962,h-1566.5816], [926.62966,h-1667.7408], [990.20713,h-1667.7408], [990.20713,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"18","density":0},"geometry":{"type":"Polygon","coordinates":[[[858.62551,h-1566.5816], [858.62551,h-1620.2535], [926.62962,h-1620.1191], [926.62962,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"19","density":1},"geometry":{"type":"Polygon","coordinates":[[[796.7446,h-1566.5816], [796.7446,h-1620.3759], [858.62551,h-1620.2535], [858.62551,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"Ж","density":0},"geometry":{"type":"Polygon","coordinates":[[[752.33834,h-1566.5816], [752.33834,h-1620.4636], [796.7446,h-1620.3759], [796.7446,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"М","density":0},"geometry":{"type":"Polygon","coordinates":[[[706.49307,h-1566.5816], [706.49307,h-1620.5543], [752.33834,h-1620.4636], [752.33834,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"20","density":0},"geometry":{"type":"Polygon","coordinates":[[[672.98282,h-1566.5816], [672.98282,h-1620.6206], [706.49307,h-1620.5543], [706.49307,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"21","density":0},"geometry":{"type":"Polygon","coordinates":[[[623.23138,h-1566.5816], [623.23138,h-1620.7188], [672.98282,h-1620.6206], [672.98282,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"22","density":0},"geometry":{"type":"Polygon","coordinates":[[[579.85312,h-1566.5816], [579.85312,h-1620.8046], [623.23138,h-1620.7188], [623.23138,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"23","density":1},"geometry":{"type":"Polygon","coordinates":[[[537.09159,h-1566.5816], [537.09159,h-1605.7163], [526.81235,h-1605.7163], [526.81235,h-1620.908], [579.85312,h-1620.8046], [579.85312,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"24","density":0},"geometry":{"type":"Polygon","coordinates":[[[502.96456,h-1566.5816], [502.96456,h-1620.9568], [526.81235,h-1620.908], [526.81235,h-1605.7163], [537.09159,h-1605.7163], [537.09159,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"25","density":0},"geometry":{"type":"Polygon","coordinates":[[[449.71821,h-1566.5816], [449.71821,h-1621.062], [502.96456,h-1620.9568], [502.96456,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"26","density":0},"geometry":{"type":"Polygon","coordinates":[[[421.34758,h-1566.5816], [421.34758,h-1621.1176], [449.71821,h-1621.062], [449.71821,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"27","density":0},"geometry":{"type":"Polygon","coordinates":[[[379.3455,h-1566.5816], [379.3455,h-1621.2012], [421.34758,h-1621.1176], [421.34758,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"Лестница раб.","density":0},"geometry":{"type":"Polygon","coordinates":[[[302.51495,h-1566.5816], [302.51495,h-1621.3531], [379.3455,h-1621.2012], [379.3455,h-1566.5816]]]}},
    {"type":"Feature","id":"0","properties":{"name":"Лестница нераб.","density":0},"geometry":{"type":"Polygon","coordinates":[[[316.75667,h-1400.6426], [316.75667,h-1437.9504], [344.30775,h-1437.9505], [344.30775,h-1400.6426]]]}},
    {"type":"Feature","id":"0","properties":{"name":"28","density":0},"geometry":{"type":"Polygon","coordinates":[[[296.41306,h-1400.6426], [296.41306,h-1437.9504], [316.75667,h-1437.9504], [316.75667,h-1400.6426]]]}},
    {"type":"Feature","id":"0","properties":{"name":"29","density":0},"geometry":{"type":"Polygon","coordinates":[[[270.43803,h-1400.6426], [270.43803,h-1437.9505], [296.41306,h-1437.9504], [296.41306,h-1400.6426]]]}},
    {"type":"Feature","id":"01","properties":{"name":"1530","density":1032,"test":123},"geometry":{"type":"Polygon","coordinates":[[[243.30857,h-1437.9505], [270.43803,h-1437.9505], [270.43803,h-1400.6426], [243.30857,h-1400.6427]]]}},
    {"type":"Feature","id":"01","properties":{"name":"1531","density":1032},"geometry":{"type":"Polygon","coordinates":[[[243.30857,h-1437.9505], [243.30857,h-1400.6426], [196.8528,h-1400.6426], [196.8528,h-1437.9505]]]}},
    {"type":"Feature","id":"0","properties":{"name":"Лестница раб.","density":0},"geometry":{"type":"Polygon","coordinates":[[[170.38218,h-1400.6426], [170.38218,h-1437.9504], [196.8528,h-1437.9505], [196.8528,h-1400.6426]]]}},
    {"type":"Feature","id":"01","properties":{"name":"1532","density":1032},"geometry":{"type":"Polygon","coordinates":[[[111.51556,h-1372.8199], [151.91303,h-1362.0236], [160.60658,h-1394.384], [120.2091,h-1405.1802]]]}},
    {"type":"Feature","id":"03","properties":{"name":"1533","density":400},"geometry":{"type":"Polygon","coordinates":[[[111.51557,h-1372.8199], [105.03958,h-1348.7141], [145.43706,h-1337.9178], [151.91302,h-1362.0236]]]}},
    {"type":"Feature","id":"04","properties":{"name":"1534","density":1},"geometry":{"type":"Polygon","coordinates":[[[105.03959,h-1348.7141], [98.575897,h-1324.654], [138.97336,h-1313.8577], [145.43707,h-1337.9178]]]}},
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
    {"type":"Feature","id":"0","properties":{"name":"Returns the maximum zoom level on which the given bounds fit to the map view in its entirety. If inside (optional) is set to true, the method instead returns the minimum zoom level on which the map view fits into the given bounds in its entirety.","density":0},"geometry":{"type":"Polygon","coordinates":[[[307.41848,h-1494.7986], [307.41848,h-1549.7293], [343.40831,h-1549.7293], [343.4083,h-1494.7986]]]}},
    {"type":"Feature","id":"0","properties":{"name":"1543, Монахов, МВА-16","density":0},"geometry":{"type":"Polygon","coordinates":[[[307.41848,h-1455.5189], [307.41848,h-1494.7986], [343.4083,h-1494.7986], [343.40831,h-1455.5189]]]}},

    ]};*/



function getColor(d) {
    return d == null   ? '#b1ff8c' :
                      '#ff8080';
}

function style(feature) {
    //console.log(feature);
    return {
        fillColor: getColor(feature.properties.fio),
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

function onMapClick(e) {
    zoom_info.update();
    //info.update();
}

map.on('mouseup', onMapClick);

function zoomToFeature(e) {

    $.ajax({
        type: "POST",
        url: "rasp_classroom.php",
        dataType: "json",
        dataType: "json",
        data: {number: e.target.feature.properties.number},
        success: function(data){
          console.log("rasp_classroom SUCCESS");
          console.log(data);
          zoom_info.update(data.zoom_info, data.count);
        },
          
        error: function(data){
          console.log("rasp_classroom ERROR");
          console.log(data);
        }
            
  });


    //map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {

    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

var geojson = L.geoJson();
var geojson123 = L.geoJson();

/*geojson1 = L.geoJson(statesDataShaba8, {
    style: style,
    onEachFeature: onEachFeature
});*/


var zoom_info = L.control({position: 'bottomleft'});

zoom_info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'zoom_info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
zoom_info.update = function (props, count) {
    if (props){
      this._div.innerHTML = '<h3>Пары на сегодня</h3>';
      for (var i = 0; i < count; i++) {
        this._div.innerHTML += '<p>Номер пары: ' + props[i].idnt + '</p>';
        this._div.innerHTML += '<p>Название предмета: ' + props[i].pn + '</p>';
        this._div.innerHTML += '<p>Преподаватель: ' + props[i].fio + '</p>';
        this._div.innerHTML += '<p>Группа:' + props[i].ugn + '</p>';
        this._div.innerHTML += count>1?"</br>":"";
      }
    }else{
      this._div.innerHTML = '<h3>Нажмите на аудиторию, чтобы увидеть пары на сегодня</h3>';
    }
    
    
};

zoom_info.addTo(map);

//________________________________________
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    if (props) {
      this._div.innerHTML = '';
      if (props.number) {
        this._div.innerHTML = '<h3>Аудитория: ' + props.number + '</h3>';
      }
      if (props.name && !props.number) {
        this._div.innerHTML += '<h3>' + props.name + '</h3>';
      }else if(props.name) {
        this._div.innerHTML += '<p>' + props.name + '</p>';
      }
      if (props.fio) {
        this._div.innerHTML += '<p>Преподаватель: ' + props.fio + ' Группа: '+ props.ugn +'</p>';
      }
      if (props.predmet) {
        this._div.innerHTML += '<p>Предмет: ' + props.predmet +'</p>';
      }
    }else{
      this._div.innerHTML = '<h3>Наведите на аудиторию</h3>';
    }
    /*this._div.innerHTML = (props ? '<h3>Аудитория: ' + props.n + '</h3><br />' + props.fio
        : '<h3>Наведите на аудиторию</h3>');*/
};

info.addTo(map);
//___ДОБАВЛЕНИЕ ВЫБОРА ЭТАЖЕЙ И ВЫДЕЛЕНИЙ


function customTip(q,val) {
        return '<a href="#">'+q+'</a>';
}


    $.ajax({
        type: "POST",
        url: "test.php",
        dataType: "json",
        success: function(data){
          console.log("SUCCESS AJAX");
          console.log(data);
          geojson123 = L.geoJson(data, {
                style: style,
                onEachFeature: onEachFeature
          });
          console.log(geojson123);

          var searchControl = new L.Control.Search({
          layer: geojson123,
          propertyName: 'full_name',
          marker: false,
          buildTip: customTip,
          autoType: false,
          initial: false,
          textPlaceholder: 'Поиск...',

          moveToLocation: function(latlng, title, map) {
                  var zoom = map.getBoundsZoom(latlng.layer.getBounds());
                  map.setView(latlng, zoom);
              }
          });
          
          searchControl.on('search:locationfound', function(e) {
            console.log("locationfound");

            //ИЗМЕНЕНИЕ ЭТАЖА ПРИ ПОИСКЕ
            if ($.cookie('floor') != null){

              if ($.cookie('floor') != e.layer.feature.properties.floor){
                $('#nav-text').val(e.layer.feature.properties.floor);
                $('#nav-text').change();
              }
              console.log(e.layer.feature.properties.floor);  
            }
            



            if (typeof layerFound !== 'undefined') {
                  layerFound.remove(map);
                  layerFound.setStyle({fillColor: '#b1ff8c', color: 'white'});
              }
            layerFound = e.layer.addTo(map);
            e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
            
            if(e.layer._popup)
                e.layer.openPopup();

            }).on('search:collapsed', function(e) {
              console.log("collapsed");
              if (typeof layerFound !== 'undefined') {
                  layerFound.remove(map);
              }
              /*featuresLayer.eachLayer(function(layer) {   //restore feature color
                  featuresLayer.resetStyle(layer);
              });*/
            }).on('search:expanded', function(e) {
              console.log("expanded");
            });
              searchControl.addTo(map);  
              geojson123.remove(map)
            },
            error: function(data){
              console.log("ERROR AJAX");
              console.log(data);
            }
            
  });


var floor_control = L.control({position: 'bottomright'});

floor_control.onAdd = function (map) {

    var div = L.DomUtil.create('div', '');

    // loop through our density intervals and generate a label with a colored square for each interval
        div.innerHTML +=
            '<div id="nav">'+
        '<span id="nav-plus" class="nav-inp"></span>'+
        '<input id="nav-text" class="nav-inp" type="text" value="1"/>'+
        '<span id="floor-text">этаж</span>'+
        '<span id="nav-minus" class="nav-inp"></span>'+
    '</div>';

    return div;
};

floor_control.addTo(map);

var remove_geojson = L.control({position: 'topright'});

remove_geojson.onAdd = function (map) {

    var div = L.DomUtil.create('div', '');

    // loop through our density intervals and generate a label with a colored square for each interval
        div.innerHTML +=
            '<label class="container">'+
            '<input id="check_geojson" type="checkbox">'+
            '<span class="checkmark"></span> Выделения'+
            '</label>';

    return div;
};

remove_geojson.addTo(map);


//grayscale.remove(map);
//streets.addTo(map);

function myFunc(){
    geojson.remove(map);
    grayscale.remove(map);
    streets.addTo(map);
}


function myFunc2(){
    geojson.addTo(map);
    streets.remove(map);
    grayscale.addTo(map);
}

$(document).ready(function(){
    
    $('#check_geojson').click(function(){
      if ($(this).is(':checked')){
        $.cookie('disable_selection', 1, { expires: 7*365, path: '/' });
        $('.info').show();
        $('.zoom_info').show();
        loadfloor();
      } else {
        $.cookie('disable_selection', 0, { expires: 7*365, path: '/' });
        $('.info').hide();
        $('.zoom_info').hide();
        geojson.remove(map);
      }
    }); 
    //ДЕЙСТВИЕ ПРИ ЗАГРУЗКЕ САЙТА
    if ( $.cookie('disable_selection') != null){
      if ( $.cookie('disable_selection') == 1){
        $('.info').show();
        $('.zoom_info').show();
        $('#check_geojson').prop('checked', true);
      }else{
        $('.info').hide();
        $('.zoom_info').hide();
      }
    }else{
        $('#check_geojson').prop('checked', true);
        $('.info').show();
        $('.zoom_info').show();
        $.cookie('disable_selection', 1, { expires: 7*365, path: '/' });
    }

    if ( $.cookie('floor') != null ) {

        $('#nav-text').val(parseInt($.cookie('floor'))+1);

        floor_map[floor].remove(map);
        floor = $.cookie('floor');
        floor_map[floor].addTo(map);
        geojson.remove(map);
        console.log(floor);
        loadfloor();
    }else{
      geojson.addTo(map)//добавить первый этаж
    }

    $('#nav-plus').on('click', function(){
        var $input = $('#nav-text');
        var count = parseInt($input.val()) + 1;
        count = count > floor_map.length ? floor_map.length : count;

        //floor_map[floor].remove(map);
        //floor = count-1;
        //floor_map[floor].addTo(map);

        $input.val(count);
        $input.change();
        return false;
    });

    $('#nav-minus').on('click', function(){
        var $input = $('#nav-text');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;

        //floor_map[floor].remove(map);
        //floor = count-1;
        //floor_map[floor].addTo(map);

        $input.val(count);
        $input.change();
        return false;
    });

    $('#nav-text').on('change', function(){
        var val = Math.abs(parseInt(this.value, 10) || 1);
        this.value = val > floor_map.length ? floor_map.length : val;

        floor_map[floor].remove(map);
        floor = this.value-1;
        $.cookie('floor', floor, { expires: 7*365, path: '/' });
        floor_map[floor].addTo(map);

        console.log(floor)
        geojson.remove(map);

        loadfloor();
        
    });
    
});

function loadfloor(){
  if ($.cookie('disable_selection') == 1){
    console.log('disable_selection = ' + $.cookie('disable_selection'));
    $.ajax({
          type: "POST",
          url: "floor.php",
          dataType: "json",
          data: {floor: floor},
          success: function(data){
            console.log("floor success ");
            console.log(data);
            geojson = L.geoJson(data, {
                style: style,
                onEachFeature: onEachFeature
            }).addTo(map);
          },
          error: function(data){
            console.log("floor error");
            console.log(data);
          }
        });  
  }
  
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);