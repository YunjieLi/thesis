mapboxgl.accessToken = 'pk.eyJ1IjoieXVuamllIiwiYSI6ImNpZnd0ZjZkczNjNHd0Mm0xcGRoc21nY28ifQ.8lFXo9aC9PfoKQF9ywWW-g';
var map = new mapboxgl.Map({
	container: 'map', // container id
	style: 'mapbox://styles/mapbox/light-v9', //stylesheet location
	center: [111.87163056653998, 33.76161539482898], // starting position
	zoom: 4.14 // starting zoom
});

var isMobile;
$(window).width() <= 640 ? isMobile = true : isMobile = false;


var schools = {
	"features": [{
		"type": "Feature",
		"properties": {
			"name": "洛阳",
			"type": "city"
		},
		"geometry": {
			"coordinates": [
				112.421753,
				34.658699
			],
			"type": "Point"
		},
		"id": "33422e72fd0d845b7454739af494b063"
	}, {
		"type": "Feature",
		"properties": {
			"name": "西岳华山",
			"type": "mountain"
		},
		"geometry": {
			"coordinates": [
				110.06944,
				34.47888
			],
			"type": "Point"
		},
		"id": "3bcba975e81ae2880f62a3967b296066"
	}, {
		"type": "Feature",
		"properties": {
			"name": "北岳恒山",
			"type": "mountain"
		},
		"geometry": {
			"coordinates": [
				113.71467,
				39.66312
			],
			"type": "Point"
		},
		"id": "3d34cc5724b23510a6d0d036a9da8fd6"
	}, {
		"type": "Feature",
		"properties": {
			"type": "mountain",
			"name": "中岳嵩山"
		},
		"geometry": {
			"coordinates": [
				113.00394,
				34.51965
			],
			"type": "Point"
		},
		"id": "7d4f37bbd709e363bb2f24dce1e4c035"
	}, {
		"type": "Feature",
		"properties": {
			"name": "福州",
			"type": "city"
		},
		"geometry": {
			"coordinates": [
				119.292081,
				26.077731
			],
			"type": "Point"
		},
		"id": "b95aab5d916d976ff1e0bfba6b3ca918"
	}, {
		"type": "Feature",
		"properties": {
			"name": "少林寺",
			"type": "mountain"
		},
		"geometry": {
			"coordinates": [
				112.94206,
				34.50654
			],
			"type": "Point"
		},
		"id": "c79fdef8e2053f5d0a37ef498ec832ac"
	}, {
		"type": "Feature",
		"properties": {
			"name": "武当山",
			"type": "mountain"
		},
		"geometry": {
			"coordinates": [
				111.029267,
				32.423668
			],
			"type": "Point"
		},
		"id": "c7b281fde5a3bea0a5012b8ec773108c"
	}, {
		"type": "Feature",
		"properties": {
			"name": "杭州",
			"type": "city"
		},
		"geometry": {
			"coordinates": [
				120.152353,
				30.276471
			],
			"type": "Point"
		},
		"id": "d1e03a79ab0f08fee323b4d1512fd62c"
	}, {
		"type": "Feature",
		"properties": {
			"name": "南岳衡山",
			"type": "mountain"
		},
		"geometry": {
			"coordinates": [
				112.719912,
				27.251833
			],
			"type": "Point"
		},
		"id": "d2cd8cc66f2ff81577e8311c81b342ad"
	}, {
		"type": "Feature",
		"properties": {
			"name": "黑木崖",
			"type": "mountain"
		},
		"geometry": {
			"coordinates": [
				113.80943,
				37.90899
			],
			"type": "Point"
		},
		"id": "d50d30189e4d92c8f00c7153bce0a3cb"
	}, {
		"type": "Feature",
		"properties": {
			"name": "东岳泰山",
			"type": "mountain"
		},
		"geometry": {
			"coordinates": [
				117.104015,
				36.25607
			],
			"type": "Point"
		},
		"id": "ec2f67c6cbc4cd2fc3479ac89364af1c"
	}],
	"type": "FeatureCollection"
};
var trips_straight = {
	"type": "FeatureCollection",
	"features": [{
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[119.286967, 26.072735],
					[119.271269, 26.08554]
				]
			]
		},
		"properties": {
			"segID": 1,
			"vehicle": "short"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[119.271269, 26.08554],
					[119.286967, 26.072735]
				]
			]
		},
		"properties": {
			"segID": 2,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[119.286967, 26.072735],
					[119.298727, 26.046117],
					[119.267211, 25.998551],
					[119.22329, 25.967305]
				]
			]
		},
		"properties": {
			"segID": 3,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[119.22329, 25.967305],
					[119.063543, 26.17953],
					[118.071021, 26.706971],
					[117.471421, 27.334287],
					[117.023216, 27.84305],
					[116.410913, 28.11399],
					[115.89992, 28.675991]
				]
			]
		},
		"properties": {
			"segID": 4,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[115.89992, 28.675991],
					[114.133766, 27.690196],
					[112.98127, 28.200825]
				]
			]
		},
		"properties": {
			"segID": 5,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[112.98127, 28.200825],
					[112.868268, 27.230291]
				]
			]
		},
		"properties": {
			"segID": 6,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[112.868268, 27.230291],
					[112.861691, 27.231737]
				]
			]
		},
		"properties": {
			"segID": 9,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[112.861691, 27.231737],
					[112.868268, 27.230291]
				]
			]
		},
		"properties": {
			"segID": 10,
			"vehicle": "abrupt"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[112.868268, 27.230291],
					[112.861691, 27.231737]
				]
			]
		},
		"properties": {
			"segID": 11,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[112.861691, 27.231737],
					[112.868268, 27.230291],
					[112.293999, 31.176358],
					[111.517537, 32.993652],
					[109.798293, 33.935174],
					[109.463262, 34.34733],
					[110.069444, 34.478889]
				]
			]
		},
		"properties": {
			"segID": 12,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[110.06944, 34.47888],
					[110.074081, 34.470901]
				]
			]
		},
		"properties": {
			"segID": 13,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[110.074081, 34.470901],
					[110.06944, 34.47888]
				]
			]
		},
		"properties": {
			"segID": 14,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[110.069444, 34.478889],
					[110.057945, 34.519853]
				]
			]
		},
		"properties": {
			"segID": 15,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[110.057945, 34.519853],
					[110.083008, 34.704929]
				]
			]
		},
		"properties": {
			"segID": 16,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[110.083008, 34.704929],
					[110.619463, 34.573679],
					[111.882388, 35.082022],
					[112.45404, 34.624345]
				]
			]
		},
		"properties": {
			"segID": 17,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[112.45404, 34.624345],
					[113.041595, 34.904935],
					[114.339859, 34.897159],
					[114.267054, 34.615252]
				]
			]
		},
		"properties": {
			"segID": 19,
			"vehicle": "water"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[114.267054, 34.615252],
					[114.339859, 34.897159],
					[114.528697, 34.910374]
				]
			]
		},
		"properties": {
			"segID": 20,
			"vehicle": "water"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[114.528697, 34.910374],
					[114.594871, 34.903727],
					[114.600067, 34.964414]
				]
			]
		},
		"properties": {
			"segID": 21,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[114.600067, 34.964414],
					[114.594871, 34.903727],
					[114.795777, 34.970413],
					[114.864133, 35.119721]
				]
			]
		},
		"properties": {
			"segID": 22,
			"vehicle": "water"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[114.864133, 35.119721],
					[115.20401, 35.405002]
				]
			]
		},
		"properties": {
			"segID": 23,
			"vehicle": "water"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[115.20401, 35.405002],
					[114.339859, 34.897159],
					[113.041595, 34.904935],
					[112.942068, 34.506545]
				]
			]
		},
		"properties": {
			"segID": 24,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[112.94206, 34.50654],
					[112.968838, 34.512619],
					[112.987261, 34.493471]
				]
			]
		},
		"properties": {
			"segID": 25,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[112.987261, 34.493471],
					[112.990588, 34.522993],
					[113.040562, 34.55266]
				]
			]
		},
		"properties": {
			"segID": 26,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[113.040562, 34.55266],
					[113.066689, 34.534022],
					[118.748727, 32.07073],
					[119.85287, 31.32565],
					[120.122151, 30.23623]
				]
			]
		},
		"properties": {
			"segID": 27,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[120.122151, 30.23623],
					[120.129104, 30.240161]
				]
			]
		},
		"properties": {
			"segID": 28,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[120.129104, 30.240161],
					[120.122151, 30.23623]
				]
			]
		},
		"properties": {
			"segID": 29,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[120.122228, 30.236455],
					[119.046205, 29.070925],
					[118.506495, 28.355562]
				]
			]
		},
		"properties": {
			"segID": 30,
			"vehicle": "short"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[118.506495, 28.355562],
					[118.481034, 28.295298]
				]
			]
		},
		"properties": {
			"segID": 31,
			"vehicle": "short"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[118.481034, 28.295298],
					[118.176882, 26.651553],
					[119.286967, 26.072735],
					[119.298821, 26.07097]
				]
			]
		},
		"properties": {
			"segID": 32,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[119.286967, 26.072735],
					[119.298821, 26.07097]
				]
			]
		},
		"properties": {
			"segID": 33,
			"vehicle": "short"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[119.29882, 26.07097],
					[119.286966, 26.072734]
				]
			]
		},
		"properties": {
			"segID": null,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[119.286967, 26.072735],
					[118.176882, 26.651553],
					[118.378079, 27.746084],
					[119.076004, 28.082582]
				]
			]
		},
		"properties": {
			"segID": 34,
			"vehicle": "water"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[119.076004, 28.082582],
					[118.143537, 28.399168],
					[116.902902, 28.339239],
					[115.980949, 29.726819]
				]
			]
		},
		"properties": {
			"segID": 35,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[115.980949, 29.726819],
					[114.534126, 30.455827],
					[113.368512, 30.426226],
					[112.615356, 30.730032]
				]
			]
		},
		"properties": {
			"segID": 36,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[112.615356, 30.730032],
					[111.805115, 31.961484]
				]
			]
		},
		"properties": {
			"segID": 37,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[111.805115, 31.961484],
					[111.248932, 32.420543]
				]
			]
		},
		"properties": {
			"segID": 38,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[111.248932, 32.420543],
					[113.285964, 33.491343],
					[112.987261, 34.493471],
					[112.968838, 34.512619],
					[112.942068, 34.506545]
				]
			]
		},
		"properties": {
			"segID": 39,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[112.942068, 34.506545],
					[111.37426, 35.595414],
					[112.564063, 37.873871],
					[112.809679, 39.434672],
					[113.672837, 39.683697],
					[113.714676, 39.66313]
				]
			]
		},
		"properties": {
			"segID": 40,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[113.714676, 39.66313],
					[113.712312, 39.658174]
				]
			]
		},
		"properties": {
			"segID": 41,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[113.712312, 39.658174],
					[113.714676, 39.66313],
					[113.672837, 39.683697],
					[112.809679, 39.434672],
					[112.564063, 37.873871],
					[113.657841, 37.786653]
				]
			]
		},
		"properties": {
			"segID": 42,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[113.657841, 37.786653],
					[113.809433, 37.908992]
				]
			]
		},
		"properties": {
			"segID": 43,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[113.809433, 37.908992],
					[113.657841, 37.786653],
					[112.564063, 37.873871],
					[112.809679, 39.434672],
					[113.672837, 39.683697],
					[113.714676, 39.66313]
				]
			]
		},
		"properties": {
			"segID": 44,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[113.714676, 39.66313],
					[113.672837, 39.683697],
					[112.809679, 39.434672],
					[112.564063, 37.873871],
					[111.37426, 35.595414],
					[112.94941, 34.517236],
					[112.955933, 34.515539],
					[112.97327, 34.514266],
					[113.003943, 34.519651]
				]
			]
		},
		"properties": {
			"segID": 45,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[113.003943, 34.519651],
					[112.990183, 34.517236]
				]
			]
		},
		"properties": {
			"segID": 46,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[112.990183, 34.517236],
					[112.97327, 34.514266]
				]
			]
		},
		"properties": {
			"segID": 47,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[112.97327, 34.514266],
					[112.955933, 34.515539]
				]
			]
		},
		"properties": {
			"segID": 48,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[112.955933, 34.515539],
					[112.94941, 34.517236]
				]
			]
		},
		"properties": {
			"segID": 49,
			"vehicle": "short"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[112.949315, 34.517189],
					[112.946234, 34.522116]
				]
			]
		},
		"properties": {
			"segID": 50,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[112.946234, 34.522116],
					[112.934498, 34.526225],
					[111.37426, 35.595414],
					[112.564063, 37.873871],
					[112.809679, 39.434672],
					[113.672837, 39.683697],
					[113.714676, 39.66313]
				]
			]
		},
		"properties": {
			"segID": 51,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[113.714676, 39.66313],
					[113.672837, 39.683697],
					[112.809679, 39.434672],
					[112.564063, 37.873871],
					[111.37426, 35.595414],
					[110.083008, 34.704929],
					[110.074081, 34.470901]
				]
			]
		},
		"properties": {
			"segID": 52,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[110.074081, 34.470901],
					[110.069444, 34.478889]
				]
			]
		},
		"properties": {
			"segID": 53,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[110.069444, 34.478889],
					[110.083008, 34.704929],
					[111.37426, 35.595414],
					[112.564063, 37.873871],
					[112.809679, 39.434672],
					[113.672837, 39.683697],
					[113.714676, 39.66313]
				]
			]
		},
		"properties": {
			"segID": 54,
			"vehicle": "abrupt"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[113.714676, 39.66313],
					[114.400467, 39.275425],
					[115.526195, 38.823448],
					[117.261489, 34.270475],
					[118.748727, 32.07073],
					[119.85287, 31.32565],
					[120.122151, 30.23623]
				]
			]
		},
		"properties": {
			"segID": 55,
			"vehicle": "abrupt"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiLineString",
			"coordinates": [
				[
					[120.129104, 30.240161],
					[119.85287, 31.32565],
					[118.748727, 32.07073],
					[117.261489, 34.270475],
					[114.344302, 34.912212],
					[112.453345, 34.623609],
					[111.882388, 35.082022],
					[110.619463, 34.573679],
					[110.083008, 34.704929],
					[110.074081, 34.470901]
				]
			]
		},
		"properties": {
			"segID": 56,
			"vehicle": "abrupt"
		}
	}]
};
var places = {
	"features": [{
		"type": "Feature",
		"properties": {
			"name": "西湖牢底",
			"pointID": 0,
			"confidence": "1"
		},
		"geometry": {
			"coordinates": [120.129103, 30.24016],
			"type": "Point"
		},
		"id": "04a9920736328116f4e12fed4dacf1ae"
	}, {
		"type": "Feature",
		"properties": {
			"name": "华山思过崖",
			"pointID": 1,
			"confidence": "2"
		},
		"geometry": {
			"coordinates": [110.074081, 34.470901],
			"type": "Point"
		},
		"id": "0799138fc1312e1dd26f51b3e7858762"
	}, {
		"type": "Feature",
		"properties": {
			"name": "福威镖局长沙分局",
			"pointID": 2,
			"confidence": "1"
		},
		"geometry": {
			"coordinates": [112.98127, 28.200824],
			"type": "Point"
		},
		"id": "17d29974164b2677c65a2d6b258182b7"
	}, {
		"type": "Feature",
		"properties": {
			"name": "华山脚下",
			"pointID": 3,
			"confidence": "2"
		},
		"geometry": {
			"coordinates": [110.057945, 34.519851],
			"type": "Point"
		},
		"id": "1cdc34d44f7a95d5ec82defb346ee58c"
	}, {
		"type": "Feature",
		"properties": {
			"name": "华山",
			"pointID": 4,
			"confidence": "1"
		},
		"geometry": {
			"coordinates": [110.069444, 34.478889],
			"type": "Point"
		},
		"id": "1eaf169f827c1cb50b3fd1876fd54a21"
	}, {
		"type": "Feature",
		"properties": {
			"name": "乡间饭铺",
			"pointID": 5,
			"confidence": "3"
		},
		"geometry": {
			"coordinates": [119.223289, 25.967304],
			"type": "Point"
		},
		"id": "205be0641a2aa1ea90d0a8e29fddcdad"
	}, {
		"type": "Feature",
		"properties": {
			"name": "药王庙",
			"pointID": 6,
			"confidence": "2"
		},
		"geometry": {
			"coordinates": [110.083007, 34.704929],
			"type": "Point"
		},
		"id": "221b2bcc8ad459df2b203da0270aab2e"
	}, {
		"type": "Feature",
		"properties": {
			"name": "嵩山",
			"pointID": 7,
			"confidence": "1"
		},
		"geometry": {
			"coordinates": [113.003943, 34.519649],
			"type": "Point"
		},
		"id": "2eb1e601e6b3d1542028e986b7e12146"
	}, {
		"type": "Feature",
		"properties": {
			"name": "武当山脚",
			"pointID": 8,
			"confidence": "2"
		},
		"geometry": {
			"coordinates": [111.248931, 32.420543],
			"type": "Point"
		},
		"id": "310c8ac1029df057ab319c2e9d22eb1e"
	}, {
		"type": "Feature",
		"properties": {
			"name": "官道上",
			"pointID": 9,
			"confidence": "3"
		},
		"geometry": {
			"coordinates": [112.949409, 34.517234],
			"type": "Point"
		},
		"id": "3625d275108fae95a51e38334eada7fa"
	}, {
		"type": "Feature",
		"properties": {
			"name": "西湖梅庄",
			"pointID": 10,
			"confidence": "1"
		},
		"geometry": {
			"coordinates": [120.122151, 30.23623],
			"type": "Point"
		},
		"id": "3b4d32589419c4598b10f67ac4aafcc2"
	}, {
		"type": "Feature",
		"properties": {
			"name": "恒山",
			"pointID": 11,
			"confidence": "1"
		},
		"geometry": {
			"coordinates": [113.714675, 39.663127],
			"type": "Point"
		},
		"id": "3dc783c94f637b0496934cd2b3f5b60f"
	}, {
		"type": "Feature",
		"properties": {
			"name": "黄河舟中",
			"pointID": 12,
			"confidence": "2"
		},
		"geometry": {
			"coordinates": [114.528696, 34.910373],
			"type": "Point"
		},
		"id": "3f13074dbd44ee91d6ecd73f39eea1d0"
	}, {
		"type": "Feature",
		"properties": {
			"name": "廿八铺",
			"pointID": 13,
			"confidence": "1"
		},
		"geometry": {
			"coordinates": [118.481034, 28.295297],
			"type": "Point"
		},
		"id": "47a2e9032bec72561c9f8b2e89bb8b64"
	}, {
		"type": "Feature",
		"properties": {
			"name": "福威镖局",
			"pointID": 14,
			"confidence": "1"
		},
		"geometry": {
			"coordinates": [119.286966, 26.072734],
			"type": "Point"
		},
		"id": "4d08ad375c9b03b7b4263d3790658ab2"
	}, {
		"type": "Feature",
		"properties": {
			"name": "朱仙镇",
			"pointID": 15,
			"confidence": "1"
		},
		"geometry": {
			"coordinates": [114.267054, 34.615253],
			"type": "Point"
		},
		"id": "566bec5f3e286fdda81ad4da54229c94"
	}, {
		"type": "Feature",
		"properties": {
			"name": "黄保坪",
			"pointID": 16,
			"confidence": "2"
		},
		"geometry": {
			"coordinates": [111.805114, 31.961483],
			"type": "Point"
		},
		"id": "595ed9e22b40a4eb6b80ecf5ba96a4e6"
	}, {
		"type": "Feature",
		"properties": {
			"name": "黑木崖",
			"pointID": 17,
			"confidence": "3"
		},
		"geometry": {
			"coordinates": [113.809433, 37.908992],
			"type": "Point"
		},
		"id": "5b7bc22f94a2c4a8bb2a8e7ae9fb98c5"
	}, {
		"type": "Feature",
		"properties": {
			"name": "五霸岗",
			"pointID": 18,
			"confidence": "2"
		},
		"geometry": {
			"coordinates": [115.20401, 35.405002],
			"type": "Point"
		},
		"id": "66999b91bc3f5238df47d39a1e4785db"
	}, {
		"type": "Feature",
		"properties": {
			"name": "少林寺",
			"pointID": 19,
			"confidence": "1"
		},
		"geometry": {
			"coordinates": [112.942068, 34.506546],
			"type": "Point"
		},
		"id": "6c69cf330ea4129654d255bd64d54116"
	}, {
		"type": "Feature",
		"properties": {
			"name": "衡山城",
			"pointID": 20,
			"confidence": "1"
		},
		"geometry": {
			"coordinates": [112.868268, 27.230291],
			"type": "Point"
		},
		"id": "6f96ecc65ffb4d2cf10e040e3481bf1f"
	}, {
		"type": "Feature",
		"properties": {
			"name": "城外荒山",
			"pointID": 21,
			"confidence": "2"
		},
		"geometry": {
			"coordinates": [112.86169, 27.231737],
			"type": "Point"
		},
		"id": "734571a72f13fba733285d5d06f005d5"
	}, {
		"type": "Feature",
		"properties": {
			"name": "路边草棚",
			"pointID": 22,
			"confidence": "3"
		},
		"geometry": {
			"coordinates": [112.955932, 34.515537],
			"type": "Point"
		},
		"id": "7f5cfd50ec7843f026fbbac3d65d8632"
	}, {
		"type": "Feature",
		"properties": {
			"name": "江边市镇",
			"pointID": 23,
			"confidence": "3"
		},
		"geometry": {
			"coordinates": [112.97327, 34.514267],
			"type": "Point"
		},
		"id": "87a71b91a440c975cf74a93db3e53b71"
	}, {
		"type": "Feature",
		"properties": {
			"name": "洛阳",
			"pointID": 24,
			"confidence": "1"
		},
		"geometry": {
			"coordinates": [112.45404, 34.624343],
			"type": "Point"
		},
		"id": "89b9a5279e3202aeefcb934ce1e7338d"
	}, {
		"type": "Feature",
		"properties": {
			"name": "无名荒谷",
			"pointID": 25,
			"confidence": "3"
		},
		"geometry": {
			"coordinates": [112.946233, 34.522113],
			"type": "Point"
		},
		"id": "89bf155dddf1d41b3543be5f3d8919dc"
	}, {
		"type": "Feature",
		"properties": {
			"name": "龙泉铸剑谷",
			"pointID": 26,
			"confidence": "1"
		},
		"geometry": {
			"coordinates": [119.076004, 28.082582],
			"type": "Point"
		},
		"id": "915ac2623a2c3c683811a69fdc74ba4c"
	}, {
		"type": "Feature",
		"properties": {
			"name": "仙霞岭",
			"pointID": 27,
			"confidence": "1"
		},
		"geometry": {
			"coordinates": [118.506495, 28.355562],
			"type": "Point"
		},
		"id": "9559efe9702b26a5e7ee79ae48108bf5"
	}, {
		"type": "Feature",
		"properties": {
			"name": "鸡鸣渡",
			"pointID": 28,
			"confidence": "2"
		},
		"geometry": {
			"coordinates": [112.615356, 30.730032],
			"type": "Point"
		},
		"id": "b07a9583ce4b8a4b010ee54361a6873b"
	}, {
		"type": "Feature",
		"properties": {
			"name": "山下小镇",
			"pointID": 29,
			"confidence": "2"
		},
		"geometry": {
			"coordinates": [112.990183, 34.517234],
			"type": "Point"
		},
		"id": "be447bca9f0a211b302bd9cda4e6609b"
	}, {
		"type": "Feature",
		"properties": {
			"name": "平定州",
			"pointID": 30,
			"confidence": "1"
		},
		"geometry": {
			"coordinates": [113.657841, 37.786651],
			"type": "Point"
		},
		"id": "bff61120edae0c219480204745deb4ed"
	}, {
		"type": "Feature",
		"properties": {
			"name": "乡间茶肆",
			"pointID": 31,
			"confidence": "2"
		},
		"geometry": {
			"coordinates": [119.271268, 26.08554],
			"type": "Point"
		},
		"id": "c0016fcb85b1942b99f88cbacf750b45"
	}, {
		"type": "Feature",
		"properties": {
			"name": "黄河舟中续",
			"pointID": 32,
			"confidence": "3"
		},
		"geometry": {
			"coordinates": [114.864132, 35.11972],
			"type": "Point"
		},
		"id": "cb33895d1478b2bc901088cfa7976b28"
	}, {
		"type": "Feature",
		"properties": {
			"name": "恒山悬空寺",
			"pointID": 33,
			"confidence": "1"
		},
		"geometry": {
			"coordinates": [113.712312, 39.658172],
			"type": "Point"
		},
		"id": "cea2c08805493e8a81cb71ec1d9285d8"
	}, {
		"type": "Feature",
		"properties": {
			"name": "福州向阳巷老宅",
			"pointID": 34,
			"confidence": "1"
		},
		"geometry": {
			"coordinates": [119.29882, 26.07097],
			"type": "Point"
		},
		"id": "df0854ece5d27879b67d1394a4b3bf7a"
	}, {
		"type": "Feature",
		"properties": {
			"name": "老头子居",
			"pointID": 35,
			"confidence": "2"
		},
		"geometry": {
			"coordinates": [114.600067, 34.964412],
			"type": "Point"
		},
		"id": "df6b669cbbf33aff5c0a4ed40f0f5d92"
	}, {
		"type": "Feature",
		"properties": {
			"name": "九江",
			"pointID": 36,
			"confidence": "1"
		},
		"geometry": {
			"coordinates": [115.980949, 29.726818],
			"type": "Point"
		},
		"id": "eb465fd418d367fbc4f44f14a31bcc60"
	}, {
		"type": "Feature",
		"properties": {
			"name": "仙愁峡",
			"pointID": 37,
			"confidence": "3"
		},
		"geometry": {
			"coordinates": [113.040561, 34.552658],
			"type": "Point"
		},
		"id": "f37862013772e75437a637321575cec0"
	}, {
		"type": "Feature",
		"properties": {
			"name": "福威镖局南昌分局",
			"pointID": 38,
			"confidence": "1"
		},
		"geometry": {
			"coordinates": [115.89992, 28.675991],
			"type": "Point"
		},
		"id": "f5d9cb43b5a993e9d220a35fcff65e70"
	}, {
		"type": "Feature",
		"properties": {
			"name": "山下凉亭",
			"pointID": 39,
			"confidence": "2"
		},
		"geometry": {
			"coordinates": [112.98726, 34.493469],
			"type": "Point"
		},
		"id": "f78a54f1ce69d7ee6335b73fe46ca50e"
	}],
	"type": "FeatureCollection"
};
var people = {
	"Pingzhi": {
		"name": "林平之"
	},
	"Yilin": {
		"name": "仪琳"
	},
	"Chong": {
		"name": "令狐冲"
	},
	"Lingshan": {
		"name": "岳灵珊"
	},
	"Yingying": {
		"name": "任盈盈"
	},
	"Narrator": {
		"name": "旁白"
	}
};
var events = {
	"features": [{
		"type": "Feature",
		"properties": {
			"name": "福威镖局",
			"event": "林平之出门打猎。",
			"chapter": "1",
			"pointID": 14,
			"segID": "seg0",
			"people": ["Pingzhi"]
		},
		"geometry": {
			"coordinates": [119.286966, 26.072734],
			"type": "Point"
		},
		"id": "bd08c70d464cb7770d87e54988eb5b19"
	}, {
		"type": "Feature",
		"properties": {
			"name": "乡间茶肆",
			"event": "林平之乡间遇偶遇岳灵珊，误杀余沧海之子。",
			"chapter": "1",
			"pointID": 31,
			"segID": "seg1",
			"people": ["Pingzhi", "Lingshan"]
		},
		"geometry": {
			"coordinates": [119.271268, 26.08554],
			"type": "Point"
		},
		"id": "c0016fcb85b1942b99f88cbacf750b45"
	}, {
		"type": "Feature",
		"properties": {
			"name": "福威镖局",
			"event": "福威镖局中人接连离奇死亡。林振南全家出逃，被青城派所擒。",
			"chapter": "1",
			"pointID": 14,
			"segID": "seg2",
			"people": ["Pingzhi"]
		},
		"geometry": {
			"coordinates": [119.286966, 26.072734],
			"type": "Point"
		},
		"id": "b4ddbc5f06ee963e4c1c919856e3f13e"
	}, {
		"type": "Feature",
		"properties": {
			"name": "乡间饭铺",
			"event": "林平之得以逃跑。",
			"chapter": "1",
			"pointID": 5,
			"segID": "seg3",
			"people": ["Pingzhi"]
		},
		"geometry": {
			"coordinates": [119.223289, 25.967304],
			"type": "Point"
		},
		"id": "205be0641a2aa1ea90d0a8e29fddcdad"
	}, {
		"type": "Feature",
		"properties": {
			"name": "福威镖局南昌分局",
			"event": "平之转至南昌，福威镖局南昌分局已毁。",
			"chapter": "2",
			"pointID": 38,
			"segID": "seg4",
			"people": ["Pingzhi"]
		},
		"geometry": {
			"coordinates": [115.89992, 28.675991],
			"type": "Point"
		},
		"id": "f5d9cb43b5a993e9d220a35fcff65e70"
	}, {
		"type": "Feature",
		"properties": {
			"name": "福威镖局长沙分局",
			"event": "平之转至长沙，福威镖局长沙镖局已毁。折而赴衡山刘正风金盆洗手大会。",
			"chapter": "2",
			"pointID": 2,
			"segID": "seg5",
			"people": ["Pingzhi"]
		},
		"geometry": {
			"coordinates": [112.98127, 28.200824],
			"type": "Point"
		},
		"id": "17d29974164b2677c65a2d6b258182b7"
	}, {
		"type": "Feature",
		"properties": {
			"name": "衡山城",
			"event": "刘正风宅中，仪琳回忆被田伯光所擒，蒙令狐冲相救经过。",
			"chapter": "2",
			"pointID": 20,
			"segID": "seg6",
			"people": ["Yilin", "Chong"]
		},
		"geometry": {
			"coordinates": [112.868268, 27.230291],
			"type": "Point"
		},
		"id": "bda7c6388edf660057f130f34fc39d5b"
	}, {
		"type": "Feature",
		"properties": {
			"name": "城外荒山",
			"event": "令狐冲重伤，由仪琳陪伴城外荒山养伤。",
			"chapter": "5",
			"pointID": 21,
			"segID": "seg9",
			"people": ["Yilin", "Chong"]
		},
		"geometry": {
			"coordinates": [112.86169, 27.231737],
			"type": "Point"
		},
		"id": "734571a72f13fba733285d5d06f005d5"
	}, {
		"type": "Feature",
		"properties": {
			"name": "衡山城",
			"event": "刘正风金盆洗手大会。嵩山派对其发难。",
			"chapter": "6",
			"pointID": 20,
			"segID": "seg10",
			"people": ["Narrator"]
		},
		"geometry": {
			"coordinates": [112.868268, 27.230291],
			"type": "Point"
		},
		"id": "6f96ecc65ffb4d2cf10e040e3481bf1f"
	}, {
		"type": "Feature",
		"properties": {
			"name": "城外荒山",
			"event": "刘正风、曲洋死于城外荒山，临终前将《笑傲江湖之曲》托付于令狐冲。同日，林振南夫妇托令狐冲向林平之转告遗言。",
			"chapter": "7",
			"pointID": 21,
			"segID": "seg11",
			"people": ["Chong", "Yilin"]
		},
		"geometry": {
			"coordinates": [112.86169, 27.231737],
			"type": "Point"
		},
		"id": "f242205c43dbd8c63f31cba3f4561a4a"
	}, {
		"type": "Feature",
		"properties": {
			"name": "华山",
			"event": "岳不群收林平之为徒，众人回归华山。",
			"chapter": "7",
			"pointID": 4,
			"segID": "seg12",
			"people": ["Chong", "Lingshan"]
		},
		"geometry": {
			"coordinates": [110.069444, 34.478889],
			"type": "Point"
		},
		"id": "586ab8dfe48e61c2307c88008084e71a"
	}, {
		"type": "Feature",
		"properties": {
			"name": "华山思过崖",
			"event": "令狐冲思过于崖思过。蒙风清扬授独孤九剑。",
			"chapter": "8",
			"pointID": 1,
			"segID": "seg13",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [110.074081, 34.470901],
			"type": "Point"
		},
		"id": "0799138fc1312e1dd26f51b3e7858762"
	}, {
		"type": "Feature",
		"properties": {
			"name": "华山",
			"event": "华山剑宗重现江湖，华山派外出避乱。令狐冲受桃谷六仙传授内力，伤势日重。",
			"chapter": "10",
			"pointID": 4,
			"segID": "seg14",
			"people": ["Chong", "Lingshan"]
		},
		"geometry": {
			"coordinates": [110.069444, 34.478889],
			"type": "Point"
		},
		"id": "a741ebd7f0b137b544a13b5a78309317"
	}, {
		"type": "Feature",
		"properties": {
			"name": "华山脚下",
			"event": "华山脚下，令狐冲再受不戒和尚传授内力，伤势愈重。",
			"chapter": "12",
			"pointID": 3,
			"segID": "seg15",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [110.057945, 34.519851],
			"type": "Point"
		},
		"id": "1cdc34d44f7a95d5ec82defb346ee58c"
	}, {
		"type": "Feature",
		"properties": {
			"name": "药王庙",
			"event": "药王庙中，令狐冲以独孤九剑破华山剑宗高手、十五蒙面客。",
			"chapter": "12",
			"pointID": 6,
			"segID": "seg16",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [110.083007, 34.704929],
			"type": "Point"
		},
		"id": "221b2bcc8ad459df2b203da0270aab2e"
	}, {
		"type": "Feature",
		"properties": {
			"name": "洛阳",
			"event": "华山派拜访洛阳金刀王元霸。令狐冲于绿竹巷重闻笑傲江湖曲，向绿竹翁及婆婆学琴。",
			"chapter": "13",
			"pointID": 24,
			"segID": "seg17",
			"people": ["Chong", "Yingying"]
		},
		"geometry": {
			"coordinates": [112.45404, 34.624343],
			"type": "Point"
		},
		"id": "89b9a5279e3202aeefcb934ce1e7338d"
	}, {
		"type": "Feature",
		"properties": {
			"name": "朱仙镇",
			"event": "华山派由黄河而下，在朱仙镇平一指居再遇桃谷六仙。",
			"chapter": "14",
			"pointID": 15,
			"segID": "seg19",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [114.267054, 34.615253],
			"type": "Point"
		},
		"id": "566bec5f3e286fdda81ad4da54229c94"
	}, {
		"type": "Feature",
		"properties": {
			"name": "黄河舟中",
			"event": "祖千秋与令狐冲在黄河舟中论杯。",
			"chapter": "14",
			"pointID": 12,
			"segID": "seg20",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [114.528696, 34.910373],
			"type": "Point"
		},
		"id": "3f13074dbd44ee91d6ecd73f39eea1d0"
	}, {
		"type": "Feature",
		"properties": {
			"name": "老头子居",
			"event": "令狐冲被绑至老头子居，放血救治其女老不死。",
			"chapter": "15",
			"pointID": 35,
			"segID": "seg21",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [114.600067, 34.964412],
			"type": "Point"
		},
		"id": "df6b669cbbf33aff5c0a4ed40f0f5d92"
	}, {
		"type": "Feature",
		"properties": {
			"name": "黄河舟中续",
			"event": "黄河舟中，蓝凤凰以药酒相赠令狐冲，以水蛭取血为其疗伤。",
			"chapter": "16",
			"pointID": 32,
			"segID": "seg22",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [114.864132, 35.11972],
			"type": "Point"
		},
		"id": "cb33895d1478b2bc901088cfa7976b28"
	}, {
		"type": "Feature",
		"properties": {
			"name": "五霸岗",
			"event": "武林群豪聚会五霸岗为令狐冲治伤。令狐冲又见婆婆，得悉任盈盈真容。",
			"chapter": "17",
			"pointID": 18,
			"segID": "seg23",
			"people": ["Chong", "Yingying"]
		},
		"geometry": {
			"coordinates": [115.20401, 35.405002],
			"type": "Point"
		},
		"id": "66999b91bc3f5238df47d39a1e4785db"
	}, {
		"type": "Feature",
		"properties": {
			"name": "少林寺",
			"event": "任盈盈负令狐冲上少林。令狐冲得悉自己已为华山逐出门墙，因不愿改投他派拜别少林方丈。",
			"chapter": "18",
			"pointID": 19,
			"segID": "seg24",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [112.942068, 34.506546],
			"type": "Point"
		},
		"id": "6c69cf330ea4129654d255bd64d54116"
	}, {
		"type": "Feature",
		"properties": {
			"name": "山下凉亭",
			"event": "少林寺山下凉亭，向问天受武林群豪围攻，令狐冲出手相助。",
			"chapter": "18",
			"pointID": 39,
			"segID": "seg25",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [112.98726, 34.493469],
			"type": "Point"
		},
		"id": "f78a54f1ce69d7ee6335b73fe46ca50e"
	}, {
		"type": "Feature",
		"properties": {
			"name": "仙愁峡",
			"event": "向问天与令狐冲退至仙愁峡，向问天以计摆脱追击。",
			"chapter": "18",
			"pointID": 37,
			"segID": "seg26",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [113.040561, 34.552658],
			"type": "Point"
		},
		"id": "f37862013772e75437a637321575cec0"
	}, {
		"type": "Feature",
		"properties": {
			"name": "西湖梅庄",
			"event": "向问天与令狐冲来到西湖，与梅庄四友打赌比剑。",
			"chapter": "19",
			"pointID": 10,
			"segID": "seg27",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [120.122151, 30.23623],
			"type": "Point"
		},
		"id": "877622c5deca76083d9c4de7be2230dd"
	}, {
		"type": "Feature",
		"properties": {
			"name": "西湖牢底",
			"event": "令狐冲被困西湖牢底，无意中习得吸星大法。",
			"chapter": "20",
			"pointID": 0,
			"segID": "seg28",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [120.129103, 30.24016],
			"type": "Point"
		},
		"id": "04a9920736328116f4e12fed4dacf1ae"
	}, {
		"type": "Feature",
		"properties": {
			"name": "西湖梅庄",
			"event": "任我行重出江湖，令狐冲婉拒任我行入教邀请，出发前往福州寻找华山派。",
			"chapter": "21",
			"pointID": 10,
			"segID": "seg29",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [120.122151, 30.23623],
			"type": "Point"
		},
		"id": "3b4d32589419c4598b10f67ac4aafcc2"
	}, {
		"type": "Feature",
		"properties": {
			"name": "仙霞岭",
			"event": "令狐冲化装吴天德将军，在仙霞岭出手助恒山弟子脱困。",
			"chapter": "22",
			"pointID": 27,
			"segID": "seg30",
			"people": ["Chong", "Yilin"]
		},
		"geometry": {
			"coordinates": [118.506495, 28.355562],
			"type": "Point"
		},
		"id": "9559efe9702b26a5e7ee79ae48108bf5"
	}, {
		"type": "Feature",
		"properties": {
			"name": "廿八铺",
			"event": "恒山派在廿八铺再遭突袭，蒙令狐冲相助。",
			"chapter": "23",
			"pointID": 13,
			"segID": "seg31",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [118.481034, 28.295297],
			"type": "Point"
		},
		"id": "47a2e9032bec72561c9f8b2e89bb8b64"
	}, {
		"type": "Feature",
		"properties": {
			"name": "福州向阳巷老宅",
			"event": "福州向阳巷老宅中，林家辟邪剑谱重现江湖。令狐冲获得剑谱后伤重昏迷。",
			"chapter": "24",
			"pointID": 34,
			"segID": "seg32",
			"people": ["Chong", "Pingzhi"]
		},
		"geometry": {
			"coordinates": [119.29882, 26.07097],
			"type": "Point"
		},
		"id": "df0854ece5d27879b67d1394a4b3bf7a"
	}, {
		"type": "Feature",
		"properties": {
			"name": "福威镖局",
			"event": "令狐冲在华山派养伤时辟邪剑谱不翼而飞，令狐冲与华山派嫌隙日深。",
			"chapter": "24",
			"pointID": 14,
			"segID": "seg33",
			"people": ["Chong", "Lingshan"]
		},
		"geometry": {
			"coordinates": [119.286966, 26.072734],
			"type": "Point"
		},
		"id": "4d08ad375c9b03b7b4263d3790658ab2"
	}, {
		"type": "Feature",
		"properties": {
			"name": "龙泉铸剑谷",
			"event": "恒山派在龙泉铸剑谷遭到重挫，令狐冲率恒山弟子前往救援。",
			"chapter": "25",
			"pointID": 26,
			"segID": "seg34",
			"people": ["Chong", "Yilin"]
		},
		"geometry": {
			"coordinates": [119.076004, 28.082582],
			"type": "Point"
		},
		"id": "915ac2623a2c3c683811a69fdc74ba4c"
	}, {
		"type": "Feature",
		"properties": {
			"name": "九江",
			"event": "令狐冲率恒山派行至九江，得知任盈盈为相救自己现被困少林，遂转赴少林。",
			"chapter": "25",
			"pointID": 36,
			"segID": "seg35",
			"people": ["Chong", "Yilin"]
		},
		"geometry": {
			"coordinates": [115.980949, 29.726818],
			"type": "Point"
		},
		"id": "eb465fd418d367fbc4f44f14a31bcc60"
	}, {
		"type": "Feature",
		"properties": {
			"name": "鸡鸣渡",
			"event": "令狐冲在长江鸡鸣渡遇莫大。恒山派转由莫大护送，令狐冲独自前往少林。",
			"chapter": "25",
			"pointID": 28,
			"segID": "seg36",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [112.615356, 30.730032],
			"type": "Point"
		},
		"id": "b07a9583ce4b8a4b010ee54361a6873b"
	}, {
		"type": "Feature",
		"properties": {
			"name": "黄保坪",
			"event": "武林群豪在黄保坪聚会，推举令狐冲为武林盟主，率领众人前往少林相救圣姑。",
			"chapter": "26",
			"pointID": 16,
			"segID": "seg37",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [111.805114, 31.961483],
			"type": "Point"
		},
		"id": "595ed9e22b40a4eb6b80ecf5ba96a4e6"
	}, {
		"type": "Feature",
		"properties": {
			"name": "武当山脚",
			"event": "令狐冲一行在武当山脚路遇化装成农人的掌门冲虚，令狐冲破武当太极剑。",
			"chapter": "26",
			"pointID": 8,
			"segID": "seg38",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [111.248931, 32.420543],
			"type": "Point"
		},
		"id": "310c8ac1029df057ab319c2e9d22eb1e"
	}, {
		"type": "Feature",
		"properties": {
			"name": "少林寺",
			"event": "令狐冲来到少林，得知任盈盈早已离开。令狐冲助任我行一方与正派高手三战得胜。",
			"chapter": "26",
			"pointID": 19,
			"segID": "seg39",
			"people": ["Chong", "Yingying"]
		},
		"geometry": {
			"coordinates": [112.942068, 34.506546],
			"type": "Point"
		},
		"id": "7b86e102c0965d180e9d573cbd2c2e8a"
	}, {
		"type": "Feature",
		"properties": {
			"name": "恒山",
			"event": "令狐冲受定逸师太临终嘱托，接任恒山掌门。",
			"chapter": "29",
			"pointID": 11,
			"segID": "seg40",
			"people": ["Chong", "Yilin"]
		},
		"geometry": {
			"coordinates": [113.714675, 39.663127],
			"type": "Point"
		},
		"id": "62340fafc48b1f59fc1e90d4da01454f"
	}, {
		"type": "Feature",
		"properties": {
			"name": "恒山悬空寺",
			"event": "方正、冲虚前往恒山道贺，在悬空寺向令狐冲讲述辟邪剑谱来历。",
			"chapter": "30",
			"pointID": 33,
			"segID": "seg41",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [113.712312, 39.658172],
			"type": "Point"
		},
		"id": "cea2c08805493e8a81cb71ec1d9285d8"
	}, {
		"type": "Feature",
		"properties": {
			"name": "平定州",
			"event": "令狐冲加入任我行、向问天、任盈盈，谋划重返黑木崖。",
			"chapter": "30",
			"pointID": 30,
			"segID": "seg42",
			"people": ["Chong", "Yingying"]
		},
		"geometry": {
			"coordinates": [113.657841, 37.786651],
			"type": "Point"
		},
		"id": "bff61120edae0c219480204745deb4ed"
	}, {
		"type": "Feature",
		"properties": {
			"name": "黑木崖",
			"event": "任我行、令狐冲一行重返黑木崖，恶斗东方不败。任我行重夺日月神教教主之位。",
			"chapter": "31",
			"pointID": 17,
			"segID": "seg43",
			"people": ["Chong", "Yingying"]
		},
		"geometry": {
			"coordinates": [113.809433, 37.908992],
			"type": "Point"
		},
		"id": "5b7bc22f94a2c4a8bb2a8e7ae9fb98c5"
	}, {
		"type": "Feature",
		"properties": {
			"name": "恒山",
			"event": "令狐冲率恒山派前往嵩山，商议五岳并派事宜。",
			"chapter": "32",
			"pointID": 11,
			"segID": "seg44",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [113.714675, 39.663127],
			"type": "Point"
		},
		"id": "3dc783c94f637b0496934cd2b3f5b60f"
	}, {
		"type": "Feature",
		"properties": {
			"name": "嵩山",
			"event": "五岳剑派合并，在嵩山封禅台比剑夺帅。令狐冲为岳灵珊所伤，岳不群夺得五岳盟主。",
			"chapter": "32",
			"pointID": 7,
			"segID": "seg45",
			"people": ["Chong", "Lingshan"]
		},
		"geometry": {
			"coordinates": [113.003943, 34.519649],
			"type": "Point"
		},
		"id": "2eb1e601e6b3d1542028e986b7e12146"
	}, {
		"type": "Feature",
		"properties": {
			"name": "山下小镇",
			"event": "嵩山脚下小镇上，林平之挑衅余沧海。令狐冲与恒山派冷眼旁观。",
			"chapter": "35",
			"pointID": 29,
			"segID": "seg46",
			"people": ["Pingzhi"]
		},
		"geometry": {
			"coordinates": [112.990183, 34.517234],
			"type": "Point"
		},
		"id": "be447bca9f0a211b302bd9cda4e6609b"
	}, {
		"type": "Feature",
		"properties": {
			"name": "江边市镇",
			"event": "一行人行至江边，余沧海再遭林平之挑衅。",
			"chapter": "35",
			"pointID": 23,
			"segID": "seg47",
			"people": ["Pingzhi"]
		},
		"geometry": {
			"coordinates": [112.97327, 34.514267],
			"type": "Point"
		},
		"id": "87a71b91a440c975cf74a93db3e53b71"
	}, {
		"type": "Feature",
		"properties": {
			"name": "路边草棚",
			"event": "林平之杀余沧海、木高峰于路边草棚，报得林家灭门之仇。",
			"chapter": "35",
			"pointID": 22,
			"segID": "seg48",
			"people": ["Pingzhi"]
		},
		"geometry": {
			"coordinates": [112.955932, 34.515537],
			"type": "Point"
		},
		"id": "7f5cfd50ec7843f026fbbac3d65d8632"
	}, {
		"type": "Feature",
		"properties": {
			"name": "官道上",
			"event": "官道上，任盈盈听到林平之与岳灵珊车中对话。林平之详述岳不群处心积虑盗取辟邪剑谱始末，令狐冲沉冤得雪。",
			"chapter": "35",
			"pointID": 9,
			"segID": "seg49",
			"people": ["Yingying", "Pingzhi"]
		},
		"geometry": {
			"coordinates": [112.949409, 34.517234],
			"type": "Point"
		},
		"id": "3625d275108fae95a51e38334eada7fa"
	}, {
		"type": "Feature",
		"properties": {
			"name": "无名荒谷",
			"event": "一处无名荒谷中，岳灵珊为林平之所杀。宁中则自尽。令狐冲、任盈盈为其安葬。",
			"chapter": "36",
			"pointID": 25,
			"segID": "seg50",
			"people": ["Chong", "Lingshan"]
		},
		"geometry": {
			"coordinates": [112.946233, 34.522113],
			"type": "Point"
		},
		"id": "89bf155dddf1d41b3543be5f3d8919dc"
	}, {
		"type": "Feature",
		"properties": {
			"name": "恒山",
			"event": "恒山上，仪琳向哑婆婆吐露对令狐冲一片痴情，而不知对方正是令狐冲。",
			"chapter": "37",
			"pointID": 11,
			"segID": "seg51",
			"people": ["Yilin", "Chong"]
		},
		"geometry": {
			"coordinates": [113.714675, 39.663127],
			"type": "Point"
		},
		"id": "784cf46d92f91665961b771f31ca78bd"
	}, {
		"type": "Feature",
		"properties": {
			"name": "华山思过崖",
			"event": "群雄应邀请前往华山，被困思过崖。令狐冲脱险，岳不群被仪琳所杀，恒山派大仇得报。",
			"chapter": "38",
			"pointID": 1,
			"segID": "seg52",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [110.074081, 34.470901],
			"type": "Point"
		},
		"id": "999c5f435d9432b4897ff35ce66bacd5"
	}, {
		"type": "Feature",
		"properties": {
			"name": "华山",
			"event": "任我行驾临华山，五岳剑派高手凋零，更无对抗之力。",
			"chapter": "39",
			"pointID": 4,
			"segID": "seg53",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [110.069444, 34.478889],
			"type": "Point"
		},
		"id": "1eaf169f827c1cb50b3fd1876fd54a21"
	}, {
		"type": "Feature",
		"properties": {
			"name": "恒山",
			"event": "任我行逝世，任盈盈代父前往恒山赴约，日月神教与武林正教尽释前嫌。",
			"chapter": "40",
			"pointID": 11,
			"segID": "seg54",
			"people": ["Chong"]
		},
		"geometry": {
			"coordinates": [113.714675, 39.663127],
			"type": "Point"
		},
		"id": "7955307e262ee6ac4e0cd44f757e5c57"
	}, {
		"type": "Feature",
		"properties": {
			"name": "西湖梅庄",
			"event": "三年后，令狐冲、任盈盈在西湖梅庄成婚，琴瑟和鸣。",
			"chapter": "40",
			"pointID": 10,
			"segID": "seg55",
			"people": ["Chong", "Yingying"]
		},
		"geometry": {
			"coordinates": [120.122151, 30.23623],
			"type": "Point"
		},
		"id": "73fb4e663bc392a32406e0a23b573172"
	}, {
		"type": "Feature",
		"properties": {
			"name": "华山",
			"event": "令狐冲携任盈盈同游华山，《笑傲江湖》全书完。",
			"chapter": "40",
			"pointID": 4,
			"segID": "seg56",
			"people": ["Chong", "Yingying"]
		},
		"geometry": {
			"coordinates": [110.069444, 34.478889],
			"type": "Point"
		},
		"id": "559d6c3cd47831e3eeab123cf15a2c58"
	}],
	"type": "FeatureCollection"
};
var empty = {
	"type": "FeatureCollection",
	"features": []
};
var trips = {
	"type": "FeatureCollection",
	"features": [{
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[119.286967, 26.072735],
				[119.28665307365229, 26.072991116640797],
				[119.28633914593132, 26.073247232602565],
				[119.28602521683703, 26.073503347885268],
				[119.28571128636943, 26.073759462488905],
				[119.28539735452851, 26.074015576413462],
				[119.28508342131424, 26.074271689658925],
				[119.2847694867266, 26.0745278022253],
				[119.28445555076557, 26.07478391411256],
				[119.28414161343116, 26.0750400253207],
				[119.28382767472333, 26.075296135849708],
				[119.28351373464206, 26.075552245699576],
				[119.28319979318732, 26.07580835487029],
				[119.2828858503591, 26.076064463361842],
				[119.2825719061574, 26.076320571174215],
				[119.2822579605822, 26.076576678307408],
				[119.28194401363348, 26.076832784761404],
				[119.28163006531118, 26.077088890536196],
				[119.28131611561535, 26.07734499563177],
				[119.28100216454592, 26.077601100048117],
				[119.2806882121029, 26.07785720378523],
				[119.28037425828627, 26.07811330684309],
				[119.280060303096, 26.078369409221686],
				[119.27974634653206, 26.078625510921025],
				[119.27943238859447, 26.07888161194107],
				[119.27911842928319, 26.07913771228183],
				[119.27880446859821, 26.07939381194329],
				[119.27849050653948, 26.079649910925436],
				[119.27817654310704, 26.07990600922826],
				[119.27786257830083, 26.08016210685175],
				[119.27754861212081, 26.080418203795894],
				[119.27723464456703, 26.080674300060682],
				[119.27692067563943, 26.080930395646106],
				[119.276606705338, 26.08118649055215],
				[119.2762927336627, 26.08144258477881],
				[119.27597876061355, 26.081698678326074],
				[119.27566478619052, 26.081954771193924],
				[119.27535081039358, 26.082210863382358],
				[119.27503683322273, 26.082466954891363],
				[119.27472285467792, 26.082723045720922],
				[119.27440887475916, 26.08297913587104],
				[119.27409489346643, 26.08323522534169],
				[119.27378091079972, 26.083491314132868],
				[119.27346692675899, 26.08374740224456],
				[119.27315294134422, 26.084003489676764],
				[119.27283895455538, 26.08425957642946],
				[119.27252496639252, 26.084515662502643],
				[119.27221097685556, 26.084771747896298],
				[119.2718969859445, 26.085027832610418],
				[119.27158299365934, 26.08528391664499],
				[119.271269, 26.08554]
			]
		},
		"properties": {
			"segID": 1,
			"vehicle": "short"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[119.271269, 26.08554],
				[119.27158299365934, 26.085283916644993],
				[119.2718969859445, 26.08502783261042],
				[119.27221097685556, 26.0847717478963],
				[119.27252496639252, 26.084515662502646],
				[119.27283895455538, 26.084259576429464],
				[119.2731529413442, 26.084003489676764],
				[119.27346692675896, 26.083747402244565],
				[119.27378091079969, 26.08349131413287],
				[119.27409489346643, 26.083235225341692],
				[119.27440887475916, 26.082979135871042],
				[119.27472285467792, 26.08272304572093],
				[119.27503683322271, 26.082466954891366],
				[119.27535081039358, 26.08221086338236],
				[119.27566478619052, 26.081954771193928],
				[119.27597876061355, 26.081698678326077],
				[119.2762927336627, 26.08144258477881],
				[119.276606705338, 26.081186490552152],
				[119.27692067563943, 26.080930395646106],
				[119.27723464456703, 26.080674300060682],
				[119.27754861212081, 26.080418203795894],
				[119.2778625783008, 26.08016210685175],
				[119.27817654310701, 26.07990600922826],
				[119.27849050653948, 26.079649910925436],
				[119.27880446859818, 26.07939381194329],
				[119.27911842928319, 26.079137712281835],
				[119.27943238859447, 26.07888161194108],
				[119.27974634653206, 26.07862551092103],
				[119.280060303096, 26.07836940922169],
				[119.28037425828627, 26.07811330684309],
				[119.2806882121029, 26.077857203785232],
				[119.28100216454592, 26.07760110004812],
				[119.28131611561535, 26.077344995631773],
				[119.28163006531118, 26.0770888905362],
				[119.28194401363348, 26.07683278476141],
				[119.2822579605822, 26.076576678307415],
				[119.2825719061574, 26.076320571174218],
				[119.2828858503591, 26.076064463361842],
				[119.2831997931873, 26.075808354870293],
				[119.28351373464203, 26.075552245699576],
				[119.28382767472333, 26.07529613584971],
				[119.28414161343116, 26.075040025320703],
				[119.28445555076557, 26.074783914112565],
				[119.2847694867266, 26.074527802225305],
				[119.28508342131424, 26.074271689658936],
				[119.28539735452851, 26.074015576413462],
				[119.28571128636943, 26.07375946248891],
				[119.28602521683703, 26.07350334788527],
				[119.28633914593132, 26.073247232602565],
				[119.28665307365229, 26.0729911166408],
				[119.286967, 26.072735]
			]
		},
		"properties": {
			"segID": 2,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[119.286967, 26.072735],
				[119.28807060393203, 26.070237618575298],
				[119.28917416079577, 26.067740228759533],
				[119.29027767059821, 26.065242830553988],
				[119.29138113334643, 26.062745423959942],
				[119.29248454904749, 26.060248008978675],
				[119.2935879177084, 26.05775058561148],
				[119.29469123933619, 26.055253153859635],
				[119.29579451393796, 26.052755713724423],
				[119.29689774152071, 26.05025826520713],
				[119.29800092209146, 26.047760808309036],
				[119.29820393304622, 26.045327923737865],
				[119.29667368315542, 26.04301938289725],
				[119.29514349352182, 26.04071082593549],
				[119.29361336413736, 26.038402252854866],
				[119.29208329499387, 26.036093663657656],
				[119.29055328608332, 26.03378505834615],
				[119.28902333739758, 26.031476436922627],
				[119.28749344892854, 26.02916779938936],
				[119.28596362066813, 26.02685914574863],
				[119.28443385260817, 26.024550476002723],
				[119.28290414474063, 26.02224179015391],
				[119.28137449705739, 26.01993308820448],
				[119.27984490955035, 26.017624370156703],
				[119.27831538221142, 26.015315636012865],
				[119.27678591503248, 26.01300688577524],
				[119.27525650800546, 26.01069811944611],
				[119.27372716112224, 26.008389337027747],
				[119.27219787437475, 26.006080538522433],
				[119.27066864775487, 26.003771723932438],
				[119.26913948125453, 26.001462893260047],
				[119.26761037486563, 25.99915404650754],
				[119.26547889266824, 25.9973193209005],
				[119.26313450004646, 25.995652179667776],
				[119.2607901739531, 25.993985000645093],
				[119.25844591438283, 25.99231778383632],
				[119.25610172133032, 25.99065052924531],
				[119.25375759479034, 25.98898323687595],
				[119.2514135347576, 25.987315906732075],
				[119.24906954122675, 25.985648538817568],
				[119.24672561419253, 25.983981133136272],
				[119.24438175364962, 25.982313689692067],
				[119.24203795959276, 25.9806462084888],
				[119.23969423201666, 25.978978689530344],
				[119.23735057091599, 25.977311132820553],
				[119.23500697628549, 25.97564353836329],
				[119.23266344811984, 25.973975906162412],
				[119.23031998641378, 25.972308236221785],
				[119.22797659116196, 25.97064052854527],
				[119.22563326235912, 25.96897278313672],
				[119.22328999999999, 25.967305]
			]
		},
		"properties": {
			"segID": 3,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[119.22329, 25.967305],
				[119.17242636582472, 26.0349802400511],
				[119.12150401077507, 26.10263765183329],
				[119.07052270640916, 26.170277161262636],
				[118.99612478027764, 26.21572698446879],
				[118.91796813613838, 26.25762195800668],
				[118.83975511617356, 26.29947460160634],
				[118.7614856330055, 26.341284806704177],
				[118.68315959951401, 26.383052464599555],
				[118.60477692883859, 26.424777466454913],
				[118.52633753438039, 26.46645970329597],
				[118.4478413298043, 26.50809906601186],
				[118.36928822904126, 26.54969544535531],
				[118.2906781462901, 26.591248731942837],
				[118.21201099601984, 26.632758816254903],
				[118.13328669297182, 26.67422558863612],
				[118.05863244398775, 26.720028747913243],
				[117.99948216270113, 26.78231802332085],
				[117.94026694240485, 26.844582707604996],
				[117.88098656178784, 26.906822707193808],
				[117.82164079907957, 26.96903792822988],
				[117.76222943204934, 27.031228276569106],
				[117.70275223800526, 27.09339365777944],
				[117.64320899379369, 27.15553397713977],
				[117.58359947579834, 27.21764913963866],
				[117.52392345993954, 27.2797390499732],
				[117.4645829626534, 27.34209520921013],
				[117.40809468527478, 27.406543146232263],
				[117.3515404910389, 27.47096829875134],
				[117.2949201446814, 27.53537057734298],
				[117.23823341036564, 27.599749892289555],
				[117.18148005168143, 27.664106153578853],
				[117.12465983164338, 27.72843927090278],
				[117.06777251268937, 27.79274915365597],
				[117.00527006990866, 27.85104890073715],
				[116.92275769968704, 27.88778144611953],
				[116.84018935969233, 27.92446483263182],
				[116.75756500039394, 27.961098950717517],
				[116.67488457267044, 27.997683690738068],
				[116.59214802781173, 28.034218942973403],
				[116.50935531752137, 28.07070459762251],
				[116.42650639391876, 28.107140544803926],
				[116.36405950192118, 28.165848067687563],
				[116.30628582528713, 28.229701670714658],
				[116.24844298729862, 28.2935309668323],
				[116.19053074634105, 28.357335861816047],
				[116.13254886022234, 28.421116261130127],
				[116.07449708617125, 28.484872069926038],
				[116.01637518083636, 28.54860319304117],
				[115.95818290028463, 28.61230953499747],
				[115.89992, 28.675991]
			]
		},
		"properties": {
			"segID": 4,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[115.89992, 28.675991],
				[115.84224958251909, 28.644446176745873],
				[115.78461385445537, 28.61287694741987],
				[115.7270127763091, 28.58128335863392],
				[115.66944630849791, 28.549665456950265],
				[115.61191441135732, 28.5180232888814],
				[115.55441704514135, 28.486356900890055],
				[115.49695417002305, 28.454666339389163],
				[115.439525746095, 28.422951650741833],
				[115.38213173336996, 28.391212881261303],
				[115.32477209178136, 28.359450077210916],
				[115.26744678118384, 28.32766328480411],
				[115.21015576135379, 28.295852550204376],
				[115.15289899198999, 28.264017919525223],
				[115.09567643271397, 28.23215943883015],
				[115.03848804307071, 28.20027715413265],
				[114.98133378252912, 28.168371111396162],
				[114.92421361048255, 28.13644135653404],
				[114.86712748624937, 28.10448793540954],
				[114.8100753690734, 28.072510893835812],
				[114.75305721812461, 28.040510277575844],
				[114.6960729924995, 28.008486132342487],
				[114.63912265122165, 27.976438503798377],
				[114.58220615324237, 27.944367437555975],
				[114.52532345744095, 27.9122729791775],
				[114.46847452262548, 27.880155174174938],
				[114.4116593075332, 27.848014068010023],
				[114.35487777083102, 27.815849706094216],
				[114.29812987111609, 27.783662133788667],
				[114.24141556691623, 27.75145139640425],
				[114.18473481669054, 27.71921753920149],
				[114.12774427213441, 27.692901520919122],
				[114.06767188782939, 27.719870032479477],
				[114.00756979559144, 27.74681259679311],
				[113.94743797544291, 27.77372917137326],
				[113.88727640751944, 27.800619713709175],
				[113.82708507207047, 27.827484181266225],
				[113.76686394945966, 27.854322531486034],
				[113.70661302016536, 27.88113472178653],
				[113.64633226478107, 27.90792070956212],
				[113.58602166401587, 27.934680452183745],
				[113.52568119869495, 27.961413906999024],
				[113.46531084976002, 27.988121031332344],
				[113.40491059826972, 28.014801782484987],
				[113.34448042540023, 28.04145611773522],
				[113.28402031244562, 28.06808399433843],
				[113.22353024081829, 28.094685369527244],
				[113.16301019204953, 28.121260200511596],
				[113.10246014778994, 28.147808444478912],
				[113.0418800898099, 28.17433005859415],
				[112.98127, 28.200825]
			]
		},
		"properties": {
			"segID": 5,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.98127, 28.200825],
				[112.97899006275236, 28.181415227768174],
				[112.97671095298374, 28.162005417783288],
				[112.97443266972249, 28.142595570089757],
				[112.97215521199811, 28.12318568473192],
				[112.96987857884109, 28.103775761754086],
				[112.96760276928305, 28.08436580120051],
				[112.96532778235665, 28.064955803115396],
				[112.96305361709565, 28.045545767542905],
				[112.96078027253486, 28.02613569452714],
				[112.95850774771017, 28.006725584112164],
				[112.95623604165853, 27.98731543634198],
				[112.95396515341793, 27.967905251260554],
				[112.95169508202746, 27.9484950289118],
				[112.94942582652722, 27.92908476933958],
				[112.94715738595845, 27.909674472587703],
				[112.94488975936333, 27.890264138699948],
				[112.94262294578523, 27.87085376772002],
				[112.94035694426846, 27.8514433596916],
				[112.93809175385843, 27.832032914658306],
				[112.93582737360158, 27.81262243266371],
				[112.93356380254546, 27.793211913751335],
				[112.93130103973857, 27.773801357964672],
				[112.92903908423051, 27.75439076534714],
				[112.92677793507191, 27.73498013594212],
				[112.92451759131445, 27.715569469792946],
				[112.92225805201086, 27.69615876694291],
				[112.91999931621487, 27.676748027435256],
				[112.91774138298125, 27.657337251313162],
				[112.91548425136585, 27.637926438619786],
				[112.91322792042551, 27.618515589398214],
				[112.91097238921812, 27.5991047036915],
				[112.90871765680257, 27.579693781542645],
				[112.90646372223881, 27.560282822994605],
				[112.9042105845878, 27.540871828090296],
				[112.90195824291153, 27.52146079687257],
				[112.89970669627301, 27.502049729384243],
				[112.89745594373628, 27.482638625668084],
				[112.89520598436636, 27.46322748576681],
				[112.89295681722932, 27.443816309723108],
				[112.89070844139226, 27.42440509757959],
				[112.88846085592326, 27.40499384937885],
				[112.88621405989144, 27.385582565163418],
				[112.88396805236688, 27.36617124497578],
				[112.88172283242073, 27.34675988885839],
				[112.87947839912513, 27.327348496853627],
				[112.87723475155319, 27.307937069003852],
				[112.87499188877906, 27.288525605351367],
				[112.8727498098779, 27.269114105938424],
				[112.87050851392583, 27.249702570807248],
				[112.868268, 27.230291]
			]
		},
		"properties": {
			"segID": 6,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.868268, 27.230291],
				[112.86813646167425, 27.230319923010253],
				[112.86800492328017, 27.23034884589765],
				[112.86787338481774, 27.23037776866218],
				[112.86774184628696, 27.230406691303845],
				[112.86761030768785, 27.230435613822646],
				[112.86747876902042, 27.230464536218577],
				[112.86734723028464, 27.230493458491647],
				[112.86721569148051, 27.230522380641847],
				[112.86708415260804, 27.23055130266919],
				[112.86695261366725, 27.23058022457366],
				[112.86682107465812, 27.230609146355263],
				[112.86668953558063, 27.230638068014006],
				[112.86655799643484, 27.230666989549878],
				[112.86642645722068, 27.230695910962883],
				[112.86629491793819, 27.23072483225302],
				[112.86616337858736, 27.23075375342029],
				[112.8660318391682, 27.230782674464695],
				[112.8659002996807, 27.230811595386232],
				[112.86576876012487, 27.230840516184905],
				[112.8656372205007, 27.230869436860704],
				[112.86550568080818, 27.230898357413636],
				[112.86537414104735, 27.230927277843694],
				[112.86524260121817, 27.230956198150896],
				[112.86511106132066, 27.230985118335223],
				[112.86497952135481, 27.231014038396673],
				[112.86484798132062, 27.23104295833527],
				[112.86471644121809, 27.231071878150985],
				[112.86458490104725, 27.23110079784383],
				[112.86445336080806, 27.23112971741381],
				[112.86432182050054, 27.231158636860922],
				[112.86419028012467, 27.231187556185155],
				[112.86405873968047, 27.231216475386525],
				[112.86392719916795, 27.231245394465024],
				[112.86379565858708, 27.23127431342065],
				[112.86366411793789, 27.2313032322534],
				[112.86353257722035, 27.231332150963283],
				[112.8634010364345, 27.23136106955029],
				[112.8632694955803, 27.231389988014428],
				[112.86313795465776, 27.231418906355692],
				[112.86300641366691, 27.231447824574087],
				[112.86287487260772, 27.23147674266961],
				[112.86274333148017, 27.231505660642256],
				[112.86261179028432, 27.23153457849203],
				[112.86248024902012, 27.231563496218936],
				[112.8623487076876, 27.23159241382296],
				[112.86221716628674, 27.23162133130412],
				[112.86208562481755, 27.2316502486624],
				[112.86195408328003, 27.23167916589781],
				[112.86182254167419, 27.231708083010336],
				[112.861691, 27.231737]
			]
		},
		"properties": {
			"segID": 9,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.861691, 27.231737],
				[112.86182254167419, 27.231708083010332],
				[112.86195408328003, 27.231679165897805],
				[112.86208562481755, 27.231650248662397],
				[112.86221716628674, 27.231621331304115],
				[112.86234870768759, 27.231592413822963],
				[112.86248024902012, 27.231563496218932],
				[112.86261179028432, 27.23153457849203],
				[112.86274333148017, 27.231505660642256],
				[112.8628748726077, 27.231476742669606],
				[112.86300641366691, 27.231447824574087],
				[112.86313795465776, 27.231418906355692],
				[112.8632694955803, 27.231389988014428],
				[112.8634010364345, 27.23136106955029],
				[112.86353257722035, 27.231332150963276],
				[112.86366411793789, 27.231303232253396],
				[112.86379565858707, 27.231274313420645],
				[112.86392719916795, 27.231245394465017],
				[112.86405873968046, 27.231216475386518],
				[112.86419028012466, 27.231187556185155],
				[112.86432182050052, 27.23115863686092],
				[112.86445336080806, 27.231129717413808],
				[112.86458490104724, 27.23110079784383],
				[112.86471644121809, 27.231071878150985],
				[112.86484798132061, 27.231042958335266],
				[112.8649795213548, 27.231014038396673],
				[112.86511106132066, 27.230985118335223],
				[112.86524260121817, 27.230956198150896],
				[112.86537414104735, 27.230927277843694],
				[112.86550568080818, 27.230898357413633],
				[112.8656372205007, 27.2308694368607],
				[112.86576876012487, 27.230840516184895],
				[112.8659002996807, 27.230811595386232],
				[112.8660318391682, 27.230782674464695],
				[112.86616337858736, 27.23075375342029],
				[112.86629491793819, 27.23072483225302],
				[112.86642645722067, 27.23069591096288],
				[112.86655799643482, 27.23066698954987],
				[112.86668953558063, 27.230638068014006],
				[112.8668210746581, 27.230609146355263],
				[112.86695261366725, 27.23058022457366],
				[112.86708415260804, 27.230551302669188],
				[112.86721569148051, 27.23052238064185],
				[112.86734723028462, 27.230493458491644],
				[112.86747876902041, 27.230464536218577],
				[112.86761030768785, 27.230435613822642],
				[112.86774184628696, 27.23040669130384],
				[112.86787338481773, 27.23037776866218],
				[112.86800492328017, 27.23034884589765],
				[112.86813646167425, 27.230319923010253],
				[112.868268, 27.230291]
			]
		},
		"properties": {
			"segID": 10,
			"vehicle": "abrupt"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.868268, 27.230291],
				[112.86813646167425, 27.230319923010253],
				[112.86800492328017, 27.23034884589765],
				[112.86787338481774, 27.23037776866218],
				[112.86774184628696, 27.230406691303845],
				[112.86761030768785, 27.230435613822646],
				[112.86747876902042, 27.230464536218577],
				[112.86734723028464, 27.230493458491647],
				[112.86721569148051, 27.230522380641847],
				[112.86708415260804, 27.23055130266919],
				[112.86695261366725, 27.23058022457366],
				[112.86682107465812, 27.230609146355263],
				[112.86668953558063, 27.230638068014006],
				[112.86655799643484, 27.230666989549878],
				[112.86642645722068, 27.230695910962883],
				[112.86629491793819, 27.23072483225302],
				[112.86616337858736, 27.23075375342029],
				[112.8660318391682, 27.230782674464695],
				[112.8659002996807, 27.230811595386232],
				[112.86576876012487, 27.230840516184905],
				[112.8656372205007, 27.230869436860704],
				[112.86550568080818, 27.230898357413636],
				[112.86537414104735, 27.230927277843694],
				[112.86524260121817, 27.230956198150896],
				[112.86511106132066, 27.230985118335223],
				[112.86497952135481, 27.231014038396673],
				[112.86484798132062, 27.23104295833527],
				[112.86471644121809, 27.231071878150985],
				[112.86458490104725, 27.23110079784383],
				[112.86445336080806, 27.23112971741381],
				[112.86432182050054, 27.231158636860922],
				[112.86419028012467, 27.231187556185155],
				[112.86405873968047, 27.231216475386525],
				[112.86392719916795, 27.231245394465024],
				[112.86379565858708, 27.23127431342065],
				[112.86366411793789, 27.2313032322534],
				[112.86353257722035, 27.231332150963283],
				[112.8634010364345, 27.23136106955029],
				[112.8632694955803, 27.231389988014428],
				[112.86313795465776, 27.231418906355692],
				[112.86300641366691, 27.231447824574087],
				[112.86287487260772, 27.23147674266961],
				[112.86274333148017, 27.231505660642256],
				[112.86261179028432, 27.23153457849203],
				[112.86248024902012, 27.231563496218936],
				[112.8623487076876, 27.23159241382296],
				[112.86221716628674, 27.23162133130412],
				[112.86208562481755, 27.2316502486624],
				[112.86195408328003, 27.23167916589781],
				[112.86182254167419, 27.231708083010336],
				[112.861691, 27.231737]
			]
		},
		"properties": {
			"segID": 11,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.861691, 27.231737],
				[112.84503091571851, 27.395903620594577],
				[112.8208815195753, 27.567490074045146],
				[112.79665649296082, 27.73907233862417],
				[112.77235504534902, 27.91065037044368],
				[112.74797637853516, 28.08222412518713],
				[112.72351968652319, 28.253793558103094],
				[112.69898415541137, 28.425358623998857],
				[112.67436896327595, 28.59691927723388],
				[112.64967328005315, 28.768475471713177],
				[112.62489626741906, 28.940027160880597],
				[112.60003707866775, 29.111574297711964],
				[112.57509485858729, 29.283116834708146],
				[112.55006874333387, 29.45465472388794],
				[112.52495786030367, 29.626187916780964],
				[112.4997613280029, 29.797716364420264],
				[112.47447825591549, 29.969240017334975],
				[112.44910774436859, 30.140758825542722],
				[112.42364888439607, 30.31227273854193],
				[112.39810075759947, 30.48378170530413],
				[112.37246243600681, 30.655285674265873],
				[112.34673298192901, 30.826784593320767],
				[112.32091144781378, 30.998278409811263],
				[112.2949968760973, 31.16976707052028],
				[112.22839467261957, 31.33288699840015],
				[112.15993623627249, 31.49563701734087],
				[112.09123912370423, 31.65835047174778],
				[112.02230102508203, 31.821026999422628],
				[111.95311960831914, 31.983666234509236],
				[111.88369251877907, 32.14626780744238],
				[111.81401737897536, 32.3088313448958],
				[111.74409178826733, 32.471356469729486],
				[111.67391332255131, 32.63384280093601],
				[111.60347953394752, 32.79628995358619],
				[111.53278795048244, 32.9586975387738],
				[111.38290820624042, 33.068978674954046],
				[111.21101593529201, 33.164757822004255],
				[111.03874815601002, 33.260300299905865],
				[110.8661036129152, 33.35560472670586],
				[110.69308105864057, 33.45066971521455],
				[110.51967925412612, 33.5454938730157],
				[110.3458969688159, 33.640075802477604],
				[110.17173298085733, 33.73441410076495],
				[109.99718607730286, 33.82850735985151],
				[109.82225505431377, 33.922354166533665],
				[109.6979671004127, 34.05911259176473],
				[109.58137294324631, 34.202592209546985],
				[109.46438137302155, 34.345961146353424],
				[109.66382051511364, 34.391233892296384],
				[109.86652589250498, 34.435228854610756],
				[110.069444, 34.478889]
			]
		},
		"properties": {
			"segID": 12,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[110.06944, 34.47888],
				[110.06953282869867, 34.47872042171924],
				[110.06962565704222, 34.47856084336829],
				[110.06971848503069, 34.478401264947166],
				[110.06981131266406, 34.47824168645585],
				[110.06990413994234, 34.47808210789435],
				[110.06999696686553, 34.47792252926268],
				[110.07008979343364, 34.47776295056083],
				[110.07018261964667, 34.477603371788796],
				[110.07027544550462, 34.47744379294658],
				[110.0703682710075, 34.477284214034185],
				[110.07046109615531, 34.47712463505161],
				[110.07055392094804, 34.47696505599887],
				[110.07064674538572, 34.476805476875946],
				[110.07073956946833, 34.47664589768284],
				[110.07083239319589, 34.47648631841955],
				[110.07092521656838, 34.47632673908611],
				[110.07101803958584, 34.47616715968249],
				[110.07111086224825, 34.476007580208694],
				[110.0712036845556, 34.475848000664726],
				[110.07129650650792, 34.47568842105059],
				[110.0713893281052, 34.475528841366284],
				[110.07148214934746, 34.4753692616118],
				[110.07157497023466, 34.47520968178714],
				[110.07166779076685, 34.47505010189232],
				[110.07176061094403, 34.474890521927335],
				[110.07185343076617, 34.47473094189218],
				[110.0719462502333, 34.474571361786865],
				[110.07203906934541, 34.474411781611366],
				[110.0721318881025, 34.47425220136572],
				[110.0722247065046, 34.4740926210499],
				[110.07231752455169, 34.473933040663916],
				[110.07241034224378, 34.47377346020777],
				[110.07250315958088, 34.47361387968147],
				[110.07259597656297, 34.47345429908499],
				[110.07268879319008, 34.473294718418366],
				[110.0727816094622, 34.47313513768157],
				[110.07287442537933, 34.472975556874616],
				[110.07296724094148, 34.47281597599751],
				[110.07306005614866, 34.47265639505024],
				[110.07315287100086, 34.47249681403281],
				[110.07324568549808, 34.47233723294522],
				[110.07333849964034, 34.472177651787476],
				[110.07343131342765, 34.47201807055959],
				[110.07352412686, 34.471858489261535],
				[110.07361693993737, 34.47169890789333],
				[110.07370975265978, 34.47153932645495],
				[110.07380256502726, 34.47137974494645],
				[110.07389537703979, 34.47122016336779],
				[110.07398818869737, 34.47106058171897],
				[110.074081, 34.470901]
			]
		},
		"properties": {
			"segID": 13,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[110.074081, 34.470901],
				[110.07398818869737, 34.47106058171897],
				[110.07389537703978, 34.47122016336779],
				[110.07380256502725, 34.471379744946454],
				[110.07370975265978, 34.47153932645496],
				[110.07361693993737, 34.47169890789332],
				[110.07352412685998, 34.471858489261535],
				[110.07343131342765, 34.472018070559585],
				[110.07333849964034, 34.472177651787476],
				[110.07324568549808, 34.47233723294523],
				[110.07315287100086, 34.47249681403281],
				[110.07306005614866, 34.47265639505024],
				[110.07296724094148, 34.47281597599751],
				[110.07287442537933, 34.472975556874616],
				[110.0727816094622, 34.473135137681574],
				[110.07268879319008, 34.473294718418366],
				[110.07259597656297, 34.473454299085],
				[110.07250315958086, 34.47361387968147],
				[110.07241034224377, 34.47377346020778],
				[110.07231752455169, 34.473933040663916],
				[110.0722247065046, 34.474092621049905],
				[110.0721318881025, 34.47425220136572],
				[110.07203906934541, 34.47441178161138],
				[110.0719462502333, 34.474571361786865],
				[110.07185343076617, 34.47473094189218],
				[110.07176061094403, 34.474890521927335],
				[110.07166779076685, 34.47505010189233],
				[110.07157497023466, 34.47520968178715],
				[110.07148214934746, 34.4753692616118],
				[110.0713893281052, 34.475528841366284],
				[110.07129650650792, 34.47568842105059],
				[110.0712036845556, 34.475848000664726],
				[110.07111086224825, 34.4760075802087],
				[110.07101803958584, 34.47616715968249],
				[110.07092521656838, 34.47632673908611],
				[110.07083239319589, 34.47648631841956],
				[110.07073956946832, 34.47664589768284],
				[110.07064674538572, 34.47680547687594],
				[110.07055392094804, 34.47696505599887],
				[110.07046109615531, 34.47712463505161],
				[110.0703682710075, 34.477284214034185],
				[110.07027544550462, 34.47744379294658],
				[110.07018261964667, 34.47760337178879],
				[110.07008979343364, 34.47776295056083],
				[110.06999696686553, 34.47792252926268],
				[110.06990413994234, 34.47808210789435],
				[110.06981131266406, 34.47824168645585],
				[110.06971848503069, 34.478401264947166],
				[110.06962565704222, 34.478560843368285],
				[110.06953282869866, 34.47872042171924],
				[110.06944, 34.47888]
			]
		},
		"properties": {
			"segID": 14,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[110.069444, 34.478889],
				[110.06921413069988, 34.479708290552786],
				[110.06898425688497, 34.48052758067519],
				[110.0687543785551, 34.48134687036719],
				[110.06852449571, 34.48216615962877],
				[110.06829460834946, 34.48298544845991],
				[110.06806471647326, 34.48380473686058],
				[110.06783482008116, 34.48462402483075],
				[110.06760491917296, 34.48544331237043],
				[110.06737501374842, 34.486262599479566],
				[110.06714510380732, 34.48708188615816],
				[110.06691518934943, 34.48790117240617],
				[110.06668527037452, 34.48872045822359],
				[110.06645534688238, 34.48953974361039],
				[110.06622541887276, 34.49035902856655],
				[110.06599548634547, 34.49117831309206],
				[110.06576554930028, 34.49199759718687],
				[110.06553560773693, 34.49281688085098],
				[110.06530566165523, 34.49363616408438],
				[110.06507571105494, 34.494455446887024],
				[110.06484575593583, 34.495274729258895],
				[110.0646157962977, 34.49609401119997],
				[110.06438583214032, 34.496913292710246],
				[110.06415586346343, 34.497732573789676],
				[110.06392589026684, 34.49855185443826],
				[110.06369591255032, 34.499371134655966],
				[110.06346593031363, 34.50019041444277],
				[110.06323594355655, 34.50100969379864],
				[110.06300595227887, 34.501828972723594],
				[110.06277595648035, 34.50264825121757],
				[110.06254595616078, 34.503467529280556],
				[110.06231595131992, 34.50428680691254],
				[110.06208594195753, 34.50510608411349],
				[110.06185592807343, 34.5059253608834],
				[110.06162590966737, 34.50674463722224],
				[110.0613958867391, 34.50756391312998],
				[110.06116585928844, 34.50838318860659],
				[110.06093582731513, 34.50920246365209],
				[110.06070579081899, 34.5100217382664],
				[110.06047574979974, 34.510841012449546],
				[110.06024570425718, 34.51166028620149],
				[110.06001565419109, 34.51247955952221],
				[110.05978559960124, 34.513298832411685],
				[110.0595555404874, 34.51411810486989],
				[110.05932547684934, 34.51493737689681],
				[110.05909540868686, 34.515756648492406],
				[110.05886533599971, 34.516575919656674],
				[110.05863525878767, 34.51739519038959],
				[110.05840517705053, 34.518214460691134],
				[110.05817509078805, 34.519033730561276],
				[110.057945, 34.519853]
			]
		},
		"properties": {
			"segID": 15,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[110.057945, 34.519853],
				[110.0584451668308, 34.52355457013622],
				[110.05894537811898, 34.527256138233476],
				[110.05944563387465, 34.53095770429135],
				[110.05994593410789, 34.53465926830935],
				[110.0604462788288, 34.53836083028701],
				[110.06094666804745, 34.54206239022388],
				[110.06144710177392, 34.5457639481195],
				[110.06194758001831, 34.54946550397339],
				[110.06244810279073, 34.553167057785096],
				[110.06294867010126, 34.55686860955415],
				[110.06344928196, 34.5605701592801],
				[110.06394993837705, 34.56427170696246],
				[110.06445063936253, 34.56797325260079],
				[110.06495138492653, 34.57167479619461],
				[110.06545217507917, 34.57537633774344],
				[110.06595300983057, 34.579077877246846],
				[110.06645388919081, 34.58277941470435],
				[110.06695481317004, 34.58648095011548],
				[110.06745578177836, 34.59018248347978],
				[110.06795679502592, 34.59388401479677],
				[110.06845785292282, 34.597585544066014],
				[110.06895895547919, 34.601287071287025],
				[110.06946010270515, 34.60498859645933],
				[110.06996129461086, 34.608690119582484],
				[110.07046253120645, 34.612391640656014],
				[110.07096381250201, 34.61609315967944],
				[110.07146513850776, 34.619794676652305],
				[110.07196650923379, 34.623496191574155],
				[110.07246792469024, 34.62719770444452],
				[110.07296938488727, 34.63089921526291],
				[110.07347088983505, 34.63460072402888],
				[110.07397243954371, 34.63830223074195],
				[110.0744740340234, 34.64200373540167],
				[110.0749756732843, 34.64570523800757],
				[110.07547735733655, 34.649406738559165],
				[110.07597908619033, 34.653108237056],
				[110.07648085985578, 34.65680973349762],
				[110.0769826783431, 34.66051122788353],
				[110.07748454166243, 34.66421272021329],
				[110.07798644982397, 34.667914210486416],
				[110.07848840283788, 34.67161569870244],
				[110.07899040071433, 34.6753171848609],
				[110.07949244346352, 34.679018668961334],
				[110.07999453109562, 34.68272015100325],
				[110.08049666362082, 34.6864216309862],
				[110.08099884104932, 34.69012310890972],
				[110.08150106339129, 34.693824584773324],
				[110.08200333065692, 34.69752605857655],
				[110.08250564285643, 34.70122753031893],
				[110.083008, 34.704929]
			]
		},
		"properties": {
			"segID": 16,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[110.083008, 34.704929],
				[110.13598615695324, 34.69209022493622],
				[110.18894786650459, 34.67922853251052],
				[110.24189311235148, 34.666343940830096],
				[110.29482187827249, 34.65343646801854],
				[110.34773414812753, 34.640506132215656],
				[110.40062990585758, 34.62755295157743],
				[110.45350913548481, 34.614576944275875],
				[110.50637182111245, 34.60157812849899],
				[110.55921794692482, 34.588556522450666],
				[110.61204749718725, 34.57551214435058],
				[110.66190452823322, 34.59107676445099],
				[110.71129999224136, 34.61129744425308],
				[110.76071951218196, 34.631498206838835],
				[110.81016309417427, 34.651679027477265],
				[110.8596307442606, 34.67183988142782],
				[110.9091224684061, 34.69198074394048],
				[110.95863827249859, 34.71210159025579],
				[111.00817816234824, 34.732202395604936],
				[111.0577421436874, 34.75228313520984],
				[111.1073302221703, 34.772343784283194],
				[111.15694240337284, 34.792384318028546],
				[111.2065786927924, 34.81240471164038],
				[111.25623909584749, 34.83240494030415],
				[111.30592361787765, 34.8523849791964],
				[111.3556322641431, 34.87234480348479],
				[111.40536503982455, 34.89228438832821],
				[111.45512195002297, 34.912203708876774],
				[111.50490299975934, 34.932102740272],
				[111.5547081939744, 34.951981457646816],
				[111.60453753752844, 34.97183983612562],
				[111.65439103520102, 34.99167785082436],
				[111.70426869169077, 35.01149547685067],
				[111.75417051161513, 35.031292689303875],
				[111.80409649951015, 35.05106946327507],
				[111.85404665983019, 35.07082577384721],
				[111.89962397440254, 35.06833590088308],
				[111.93942412591178, 35.036706018497085],
				[111.97919347183178, 35.00506315031715],
				[112.01893205954033, 34.973407321629594],
				[112.05863993638307, 34.94173855767624],
				[112.0983171496734, 34.910056883654356],
				[112.13796374669235, 34.87836232471684],
				[112.17757977468841, 34.84665490597222],
				[112.21716528087741, 34.81493465248477],
				[112.25672031244237, 34.783201589274555],
				[112.29624491653338, 34.75145574131752],
				[112.3357391402675, 34.71969713354556],
				[112.37520303072856, 34.687925790846606],
				[112.41463663496704, 34.65614173806469],
				[112.45404, 34.624345]
			]
		},
		"properties": {
			"segID": 17,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.45404, 34.624345],
				[112.49414070769414, 34.64364585477161],
				[112.53426008150004, 34.66293357741943],
				[112.57439813082442, 34.68220815237157],
				[112.61455486504286, 34.70146956404636],
				[112.6547302934994, 34.720717796852256],
				[112.69492442550663, 34.73995283518798],
				[112.73513727034545, 34.75917466344243],
				[112.77536883726502, 34.77838326599476],
				[112.81561913548256, 34.79757862721437],
				[112.85588817418339, 34.816760731460974],
				[112.89617596252062, 34.835929563084534],
				[112.93648250961513, 34.85508510642536],
				[112.97680782455548, 34.874227345814084],
				[113.01715191639774, 34.893356265571676],
				[113.05997636960414, 34.90492125313382],
				[113.1065868365395, 34.904873988946875],
				[113.15319723971935, 34.90480893082759],
				[113.19980755894397, 34.90472607884721],
				[113.24641777401399, 34.90462543309648],
				[113.29302786473052, 34.90450699368561],
				[113.33963781089518, 34.90437076074431],
				[113.38624759231026, 34.90421673442178],
				[113.43285718877875, 34.9040449148867],
				[113.47946658010444, 34.90385530232722],
				[113.52607574609208, 34.90364789695101],
				[113.57268466654732, 34.90342269898517],
				[113.61929332127693, 34.903179708676326],
				[113.66590169008884, 34.90291892629056],
				[113.71250975279226, 34.90264035211343],
				[113.75911748919769, 34.90234398645],
				[113.80572487911708, 34.902029829624766],
				[113.8523319023639, 34.901697881981725],
				[113.89893853875326, 34.90134814388436],
				[113.94554476810188, 34.90098061571558],
				[113.99215057022835, 34.900595297877814],
				[114.03875592495307, 34.90019219079293],
				[114.08536081209843, 34.899771294902244],
				[114.13196521148886, 34.89933261066657],
				[114.17856910295095, 34.898876138566166],
				[114.22517246631344, 34.89840187910075],
				[114.27177528140744, 34.8979098327895],
				[114.3183775280665, 34.89740000017104],
				[114.33463689387511, 34.877004065700746],
				[114.32495592173765, 34.83961320349888],
				[114.31528374054913, 34.802221575023346],
				[114.3056203302929, 34.76482918203458],
				[114.29596567100215, 34.72743602628855],
				[114.28631974275984, 34.69004210953677],
				[114.2766825256985, 34.652647433526354],
				[114.267054, 34.615252]
			]
		},
		"properties": {
			"segID": 19,
			"vehicle": "water"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[114.267054, 34.615252],
				[114.26928805065305, 34.62393171585743],
				[114.27152256871328, 34.63261139097753],
				[114.27375755442779, 34.64129102533856],
				[114.27599300804383, 34.649970618918815],
				[114.27822892980878, 34.65865017169652],
				[114.28046531997016, 34.6673296836499],
				[114.28270217877564, 34.6760091547572],
				[114.28493950647304, 34.68468858499662],
				[114.2871773033103, 34.693367974346344],
				[114.28941556953554, 34.702047322784566],
				[114.29165430539697, 34.710726630289464],
				[114.29389351114301, 34.71940589683918],
				[114.29613318702216, 34.72808512241187],
				[114.29837333328312, 34.736764306985656],
				[114.30061395017468, 34.74544345053866],
				[114.30285503794582, 34.754122553049],
				[114.30509659684563, 34.76280161449475],
				[114.30733862712334, 34.77148063485401],
				[114.3095811290284, 34.78015961410484],
				[114.31182410281029, 34.78883855222529],
				[114.31406754871874, 34.79751744919341],
				[114.31631146700353, 34.80619630498721],
				[114.31855585791465, 34.81487511958474],
				[114.32080072170223, 34.823553892963965],
				[114.32304605861651, 34.8322326251029],
				[114.32529186890791, 34.84091131597952],
				[114.32753815282697, 34.849589965571774],
				[114.3297849106244, 34.858268573857636],
				[114.33203214255101, 34.86694714081502],
				[114.33427984885785, 34.875625666421875],
				[114.33652802979599, 34.8843041506561],
				[114.33877668561672, 34.89298259349558],
				[114.34544992626705, 34.89755451345504],
				[114.35622757734653, 34.89831621321011],
				[114.3670054281974, 34.899076961648056],
				[114.37778347857936, 34.89983675872431],
				[114.38856172825201, 34.900595604394425],
				[114.39934017697499, 34.90135349861393],
				[114.41011882450779, 34.90211044133845],
				[114.42089767060992, 34.90286643252367],
				[114.43167671504084, 34.90362147212531],
				[114.44245595755993, 34.90437556009915],
				[114.45323539792653, 34.90512869640101],
				[114.4640150359, 34.905880880986786],
				[114.47479487123957, 34.90663211381243],
				[114.48557490370446, 34.9073823948339],
				[114.49635513305384, 34.90813172400727],
				[114.50713555904684, 34.90888010128864],
				[114.51791618144256, 34.90962752663414],
				[114.528697, 34.910374]
			]
		},
		"properties": {
			"segID": 20,
			"vehicle": "water"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[114.528697, 34.910374],
				[114.53149335620607, 34.910093861103505],
				[114.53428969332694, 34.90981365815737],
				[114.53708601135857, 34.909533391162704],
				[114.53988231029692, 34.90925306012059],
				[114.54267859013794, 34.90897266503215],
				[114.54547485087764, 34.9086922058985],
				[114.54827109251195, 34.908411682720725],
				[114.55106731503686, 34.90813109549995],
				[114.55386351844832, 34.90785044423724],
				[114.55665970274232, 34.90756972893376],
				[114.5594558679148, 34.907288949590566],
				[114.56225201396175, 34.9070081062088],
				[114.56504814087914, 34.906727198789554],
				[114.56784424866294, 34.90644622733394],
				[114.57064033730909, 34.90616519184306],
				[114.5734364068136, 34.90588409231801],
				[114.57623245717242, 34.905602928759926],
				[114.57902848838152, 34.90532170116989],
				[114.5818245004369, 34.90504040954903],
				[114.58462049333447, 34.904759053898445],
				[114.58741646707026, 34.90447763421924],
				[114.5902124216402, 34.90419615051253],
				[114.5930083570403, 34.90391460277943],
				[114.59493681488452, 34.90449625192038],
				[114.59513399118637, 34.9068007846779],
				[114.5953311785565, 34.90910531711697],
				[114.59552837699644, 34.911409849237536],
				[114.59572558650781, 34.913714381039554],
				[114.59592280709211, 34.916018912522965],
				[114.59612003875095, 34.91832344368776],
				[114.59631728148592, 34.92062797453386],
				[114.59651453529858, 34.92293250506124],
				[114.59671180019045, 34.925237035269845],
				[114.59690907616317, 34.92754156515962],
				[114.59710636321827, 34.92984609473055],
				[114.59730366135733, 34.93215062398256],
				[114.59750097058192, 34.934455152915625],
				[114.59769829089359, 34.93675968152968],
				[114.59789562229396, 34.93906420982469],
				[114.59809296478456, 34.94136873780062],
				[114.59829031836699, 34.94367326545741],
				[114.59848768304279, 34.945977792795034],
				[114.59868505881356, 34.948282319813416],
				[114.59888244568086, 34.95058684651253],
				[114.59907984364627, 34.952891372892324],
				[114.59927725271136, 34.95519589895276],
				[114.59947467287772, 34.9575004246938],
				[114.59967210414688, 34.95980495011538],
				[114.59986954652045, 34.96210947521746],
				[114.600067, 34.964414]
			]
		},
		"properties": {
			"segID": 21,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[114.600067, 34.964414],
				[114.59938674565622, 34.95647404840583],
				[114.59870662310139, 34.94853409301982],
				[114.59802663227114, 34.94059413384382],
				[114.59734677310121, 34.93265417087967],
				[114.59666704552724, 34.924714204129224],
				[114.59598744948508, 34.91677423359434],
				[114.59530798491048, 34.90883425927687],
				[114.59807918018069, 34.904795331170476],
				[114.60707200514086, 34.907789364509064],
				[114.61606548589324, 34.910782735408795],
				[114.62505962241346, 34.913775443747596],
				[114.63405441467712, 34.91676748940343],
				[114.64304986265975, 34.919758872254235],
				[114.6520459663368, 34.92274959217796],
				[114.66104272568359, 34.92573964905255],
				[114.67004014067543, 34.928729042755954],
				[114.67903821128748, 34.931717773166135],
				[114.68803693749486, 34.934705840161044],
				[114.69703631927258, 34.937693243618625],
				[114.70603635659562, 34.94067998341687],
				[114.71503704943875, 34.943666059433696],
				[114.72403839777687, 34.9466514715471],
				[114.73304040158457, 34.94963621963503],
				[114.74204306083651, 34.95262030357547],
				[114.75104637550723, 34.95560372324638],
				[114.76005034557114, 34.958586478525724],
				[114.76905497100262, 34.96156856929148],
				[114.77806025177597, 34.96454999542164],
				[114.78706618786535, 34.96753075679418],
				[114.7958888495064, 34.97065778686409],
				[114.79929514983402, 34.97811185383361],
				[114.80270207030767, 34.98556582566443],
				[114.80610961120418, 34.99301970231287],
				[114.80951777280048, 35.000473483735234],
				[114.81292655537358, 35.007927169887786],
				[114.81633595920076, 35.0153807607268],
				[114.81974598455929, 35.02283425620849],
				[114.82315663172665, 35.03028765628907],
				[114.82656790098045, 35.03774096092471],
				[114.8299797925984, 35.045194170071625],
				[114.83339230685834, 35.0526472836859],
				[114.8368054440383, 35.0601003017237],
				[114.8402192044164, 35.067553224141115],
				[114.8436335882708, 35.07500605089421],
				[114.84704859588001, 35.082458781939074],
				[114.8504642275225, 35.0899114172317],
				[114.85388048347686, 35.09736395672813],
				[114.85729736402195, 35.10481640038435],
				[114.86071486943663, 35.11226874815632],
				[114.86413299999998, 35.119721]
			]
		},
		"properties": {
			"segID": 22,
			"vehicle": "water"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[114.864133, 35.119721],
				[114.87090714135512, 35.12543590767355],
				[114.87768223339337, 35.131150438391636],
				[114.88445827638697, 35.13686459202143],
				[114.89123527060814, 35.14257836843009],
				[114.8980132163292, 35.148291767484686],
				[114.90479211382252, 35.1540047890523],
				[114.91157196336046, 35.15971743299993],
				[114.91835276521547, 35.165429699194554],
				[114.92513451966003, 35.17114158750309],
				[114.93191722696665, 35.17685309779241],
				[114.93870088740789, 35.18256422992936],
				[114.9454855012564, 35.18827498378074],
				[114.95227106878475, 35.19398535921327],
				[114.95905759026572, 35.199695356093684],
				[114.96584506597202, 35.20540497428864],
				[114.9726334961764, 35.21111421366474],
				[114.9794228811517, 35.21682307408858],
				[114.98621322117081, 35.22253155542668],
				[114.99300451650663, 35.22823965754552],
				[114.9997967674321, 35.233947380311555],
				[115.00658997422023, 35.23965472359118],
				[115.01338413714403, 35.24536168725076],
				[115.02017925647664, 35.25106827115658],
				[115.02697533249113, 35.256774475174936],
				[115.03377236546072, 35.26248029917203],
				[115.04057035565856, 35.268185743014065],
				[115.04736930335797, 35.27389080656716],
				[115.0541692088322, 35.279595489697414],
				[115.06097007235465, 35.28529979227089],
				[115.06777189419863, 35.29100371415356],
				[115.07457467463762, 35.296707255211416],
				[115.08137841394506, 35.30241041531036],
				[115.0881831123945, 35.30811319431627],
				[115.09498877025945, 35.31381559209496],
				[115.10179538781357, 35.31951760851224],
				[115.10860296533043, 35.32521924343385],
				[115.11541150308376, 35.33092049672546],
				[115.1222210013473, 35.33662136825275],
				[115.12903146039478, 35.342321857881316],
				[115.13584288050006, 35.34802196547672],
				[115.14265526193695, 35.35372169090449],
				[115.14946860497939, 35.359421034030106],
				[115.15628290990126, 35.365119994719],
				[115.16309817697665, 35.37081857283655],
				[115.16991440647949, 35.37651676824812],
				[115.17673159868389, 35.38221458081898],
				[115.18354975386397, 35.38791201041442],
				[115.19036887229387, 35.393609056899614],
				[115.19718895424779, 35.39930572013978],
				[115.20400999999998, 35.405002]
			]
		},
		"properties": {
			"segID": 23,
			"vehicle": "water"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[115.20401, 35.405002],
				[115.15722396179413, 35.377825677644786],
				[115.11046943876133, 35.35063133278258],
				[115.06374639886221, 35.323418995653654],
				[115.01705481001716, 35.29618869646131],
				[114.97039464010658, 35.26894046537184],
				[114.92376585697133, 35.24167433251468],
				[114.87716842841303, 35.21439032798223],
				[114.83060232219447, 35.18708848183],
				[114.78406750603979, 35.15976882407649],
				[114.73756394763501, 35.132431384703295],
				[114.6910916146283, 35.10507619365503],
				[114.64465047463027, 35.077703280839366],
				[114.59824049521436, 35.05031267612703],
				[114.55186164391718, 35.0229044093518],
				[114.50551388823887, 34.9954785103105],
				[114.45919719564333, 34.96803500876302],
				[114.41291153355868, 34.940573934432294],
				[114.36665686937754, 34.91309531700434],
				[114.31585987996282, 34.89742799810513],
				[114.25876451121033, 34.89804899463571],
				[114.20166829767678, 34.89864329334867],
				[114.14457127644991, 34.89921089326751],
				[114.08747348462278, 34.89975179345955],
				[114.03037495929348, 34.90026599303596],
				[113.97327573756493, 34.90075349115171],
				[113.91617585654463, 34.901214287005665],
				[113.85907535334441, 34.90164837984055],
				[113.8019742650802, 34.90205576894292],
				[113.74487262887178, 34.90243645364324],
				[113.6877704818425, 34.9027904333158],
				[113.63066786111912, 34.9031177073788],
				[113.57356480383145, 34.90341827529432],
				[113.51646134711223, 34.90369213656832],
				[113.45935752809677, 34.90393929075062],
				[113.40225338392283, 34.90415973743501],
				[113.34514895173024, 34.904353476259075],
				[113.28804426866076, 34.90452050690436],
				[113.2309393718578, 34.9046608290963],
				[113.17383429846616, 34.90477444260425],
				[113.1167290856318, 34.9048613472414],
				[113.05962377050163, 34.90492154286492],
				[113.03371773699659, 34.8735463122064],
				[113.02221695140948, 34.8276749106078],
				[113.01072897094969, 34.78180242796204],
				[112.9992537598404, 34.73592886731489],
				[112.98779128241424, 34.690054231702646],
				[112.97634150311283, 34.6441785241522],
				[112.96490438648648, 34.59830174768104],
				[112.95347989719352, 34.55242390529735],
				[112.942068, 34.506545]
			]
		},
		"properties": {
			"segID": 24,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.94206, 34.50654],
				[112.94316728009208, 34.506791502258054],
				[112.94427456686677, 34.50704299452632],
				[112.94538186032385, 34.507294476804645],
				[112.94648916046319, 34.50754594909287],
				[112.94759646728463, 34.507797411390854],
				[112.94870378078798, 34.50804886369843],
				[112.94981110097311, 34.50830030601545],
				[112.95091842783984, 34.50855173834175],
				[112.95202576138801, 34.50880316067719],
				[112.95313310161745, 34.509054573021615],
				[112.95424044852803, 34.509305975374865],
				[112.95534780211953, 34.50955736773677],
				[112.95645516239186, 34.50980875010721],
				[112.9575625293448, 34.51006012248601],
				[112.9586699029782, 34.51031148487301],
				[112.95977728329193, 34.51056283726807],
				[112.96088467028578, 34.51081417967102],
				[112.9619920639596, 34.511065512081736],
				[112.96309946431326, 34.51131683450003],
				[112.96420687134656, 34.51156814692576],
				[112.96531428505936, 34.51181944935878],
				[112.96642170545148, 34.51207074179893],
				[112.96752913252278, 34.51232202424605],
				[112.96863656627308, 34.512573296700005],
				[112.96942190653839, 34.51201229241255],
				[112.97013562267043, 34.511270690505526],
				[112.97084932609914, 34.51052908444794],
				[112.97156301682499, 34.509787474239964],
				[112.97227669484849, 34.50904585988181],
				[112.97299036017019, 34.50830424137363],
				[112.97370401279053, 34.507562618715646],
				[112.97441765271007, 34.50682099190803],
				[112.9751312799293, 34.506079360950984],
				[112.97584489444873, 34.50533772584467],
				[112.97655849626885, 34.504596086589316],
				[112.9772720853902, 34.503854443185084],
				[112.97798566181326, 34.50311279563216],
				[112.97869922553853, 34.50237114393075],
				[112.97941277656655, 34.501629488081036],
				[112.9801263148978, 34.500887828083194],
				[112.9808398405328, 34.50014616393744],
				[112.98155335347205, 34.499404495643944],
				[112.98226685371607, 34.498662823202885],
				[112.98298034126535, 34.49792114661447],
				[112.9836938161204, 34.4971794658789],
				[112.98440727828174, 34.496437780996324],
				[112.98512072774986, 34.49569609196696],
				[112.98583416452527, 34.494954398791],
				[112.98654758860847, 34.49421270146861],
				[112.987261, 34.493471]
			]
		},
		"properties": {
			"segID": 25,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.987261, 34.493471],
				[112.98744135837089, 34.49507194123536],
				[112.98762172366776, 34.496672882205694],
				[112.98780209589128, 34.49827382291101],
				[112.98798247504216, 34.49987476335125],
				[112.98816286112107, 34.50147570352641],
				[112.98834325412868, 34.50307664343645],
				[112.98852365406567, 34.50467758308137],
				[112.98870406093272, 34.506278522461116],
				[112.98888447473053, 34.50787946157566],
				[112.98906489545975, 34.509480400425005],
				[112.98924532312108, 34.5110813390091],
				[112.9894257577152, 34.512682277327926],
				[112.98960619924279, 34.51428321538146],
				[112.9897866477045, 34.51588415316967],
				[112.98996710310105, 34.51748509069253],
				[112.9901475654331, 34.519086027950024],
				[112.99032803470136, 34.52068696494211],
				[112.99050851090647, 34.52228790166878],
				[112.99147376080087, 34.52351919206021],
				[112.99305671605873, 34.52445952461678],
				[112.99463970705942, 34.525399836751824],
				[112.99622273380426, 34.526340128464135],
				[112.9978057962945, 34.52728039975257],
				[112.99938889453144, 34.52822065061593],
				[113.00097202851637, 34.52916088105302],
				[113.00255519825059, 34.53010109106271],
				[113.00413840373538, 34.53104128064378],
				[113.00572164497201, 34.53198144979507],
				[113.00730492196178, 34.532921598515394],
				[113.00888823470598, 34.533861726803565],
				[113.01047158320588, 34.534801834658424],
				[113.01205496746277, 34.53574192207876],
				[113.01363838747795, 34.536681989063425],
				[113.01522184325272, 34.53762203561122],
				[113.01680533478833, 34.53856206172098],
				[113.0183888620861, 34.53950206739152],
				[113.01997242514727, 34.54044205262165],
				[113.02155602397318, 34.541382017410214],
				[113.02313965856509, 34.54232196175599],
				[113.02472332892428, 34.54326188565785],
				[113.02630703505204, 34.54420178911457],
				[113.02789077694968, 34.545141672125],
				[113.02947455461845, 34.54608153468795],
				[113.03105836805966, 34.54702137680223],
				[113.03264221727459, 34.54796119846668],
				[113.03422610226451, 34.54890099968011],
				[113.03581002303073, 34.549840780441336],
				[113.03739397957453, 34.55078054074918],
				[113.03897797189718, 34.55172028060246],
				[113.040562, 34.55266]
			]
		},
		"properties": {
			"segID": 26,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[113.040562, 34.55266],
				[113.20352804202567, 34.479333890860566],
				[113.37120689249383, 34.412014435564],
				[113.53861558563914, 34.34446655648277],
				[113.70575432892132, 34.27669119799715],
				[113.87262333974135, 34.208689303345295],
				[114.0392228453412, 34.140461814593785],
				[114.20555308270355, 34.0720096726085],
				[114.3716142984518, 34.00333381702598],
				[114.53740674875026, 33.93443518622527],
				[114.70293069920442, 33.86531471730019],
				[114.8681864247616, 33.795973346032014],
				[115.03317420961181, 33.72641200686271],
				[115.19789434708859, 33.65663163286848],
				[115.36234713957057, 33.58663315573386],
				[115.52653289838285, 33.51641750572619],
				[115.69045194369895, 33.445985611670565],
				[115.85410460444298, 33.37533840092517],
				[116.01749121819205, 33.304476799357104],
				[116.18061213107906, 33.23340173131856],
				[116.3434676976958, 33.16211411962354],
				[116.50605828099647, 33.09061488552486],
				[116.66838425220149, 33.0189049486917],
				[116.83044599070155, 32.946985227187476],
				[116.99224388396232, 32.87485663744822],
				[117.1537783274293, 32.80252009426126],
				[117.31504972443318, 32.72997651074443],
				[117.47605848609562, 32.65722679832557],
				[117.63680503123535, 32.5842718667225],
				[117.79728978627479, 32.51111262392349],
				[117.95751318514701, 32.437749976167815],
				[118.11747566920333, 32.36418482792709],
				[118.27717768712111, 32.29041808188677],
				[118.43661969481215, 32.216450638928045],
				[118.59580215533151, 32.14228339811019],
				[118.75411979951325, 32.06714303042155],
				[118.89672936485738, 31.97210255746076],
				[119.03904367557872, 31.876902974155648],
				[119.18106394148614, 31.781545196318806],
				[119.32279137339056, 31.68603013575022],
				[119.46422718302698, 31.590358700248007],
				[119.605372582978, 31.494531793619508],
				[119.7462287865983, 31.398550315692408],
				[119.86195127809266, 31.2893212042946],
				[119.89947389089036, 31.138911642559915],
				[119.93687766442798, 30.988491238960894],
				[119.97416366709864, 30.83806009173935],
				[120.01133295759335, 30.68761829823109],
				[120.04838658502553, 30.53716595487768],
				[120.08532558905323, 30.386703157238063],
				[120.122151, 30.23623]
			]
		},
		"properties": {
			"segID": 27,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[120.122151, 30.23623],
				[120.12229005455, 30.236308623597466],
				[120.12242910932243, 30.23638724704811],
				[120.12256816431729, 30.236465870351932],
				[120.12270721953458, 30.236544493508916],
				[120.12284627497434, 30.236623116519095],
				[120.12298533063652, 30.236701739382426],
				[120.12312438652116, 30.23678036209894],
				[120.12326344262821, 30.236858984668626],
				[120.12340249895773, 30.236937607091473],
				[120.12354155550969, 30.237016229367505],
				[120.1236806122841, 30.237094851496686],
				[120.12381966928096, 30.237173473479054],
				[120.12395872650025, 30.23725209531459],
				[120.124097783942, 30.237330717003285],
				[120.1242368416062, 30.237409338545145],
				[120.12437589949283, 30.237487959940182],
				[120.12451495760193, 30.237566581188375],
				[120.12465401593347, 30.237645202289738],
				[120.12479307448746, 30.23772382324426],
				[120.12493213326391, 30.237802444051948],
				[120.12507119226278, 30.237881064712802],
				[120.12521025148415, 30.23795968522681],
				[120.12534931092793, 30.23803830559399],
				[120.12548837059418, 30.238116925814317],
				[120.12562743048291, 30.238195545887812],
				[120.12576649059406, 30.238274165814463],
				[120.12590555092767, 30.238352785594277],
				[120.12604461148374, 30.23843140522724],
				[120.12618367226227, 30.238510024713364],
				[120.12632273326327, 30.238588644052644],
				[120.12646179448669, 30.23866726324508],
				[120.12660085593261, 30.23874588229068],
				[120.12673991760096, 30.238824501189423],
				[120.12687897949179, 30.23890311994132],
				[120.12701804160507, 30.23898173854638],
				[120.12715710394082, 30.23906035700458],
				[120.12729616649901, 30.23913897531593],
				[120.1274352292797, 30.23921759348044],
				[120.1275742922828, 30.2392962114981],
				[120.1277133555084, 30.239374829368895],
				[120.12785241895646, 30.23945344709285],
				[120.127991482627, 30.239532064669955],
				[120.12813054652, 30.2396106821002],
				[120.12826961063544, 30.239689299383596],
				[120.12840867497337, 30.239767916520133],
				[120.12854773953376, 30.23984653350982],
				[120.12868680431662, 30.239925150352654],
				[120.12882586932194, 30.240003767048634],
				[120.12896493454974, 30.240082383597745],
				[120.129104, 30.240161]
			]
		},
		"properties": {
			"segID": 28,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[120.129104, 30.240161],
				[120.12896493454974, 30.240082383597752],
				[120.12882586932194, 30.240003767048623],
				[120.12868680431662, 30.23992515035266],
				[120.12854773953376, 30.23984653350982],
				[120.12840867497337, 30.23976791652014],
				[120.12826961063544, 30.239689299383596],
				[120.12813054652, 30.23961068210021],
				[120.127991482627, 30.23953206466996],
				[120.12785241895646, 30.23945344709285],
				[120.1277133555084, 30.239374829368902],
				[120.12757429228283, 30.2392962114981],
				[120.1274352292797, 30.239217593480447],
				[120.12729616649904, 30.23913897531594],
				[120.12715710394082, 30.23906035700458],
				[120.12701804160508, 30.238981738546386],
				[120.12687897949179, 30.23890311994132],
				[120.12673991760099, 30.238824501189423],
				[120.12660085593261, 30.23874588229068],
				[120.12646179448672, 30.238667263245087],
				[120.12632273326327, 30.23858864405266],
				[120.12618367226227, 30.238510024713374],
				[120.12604461148376, 30.23843140522724],
				[120.1259055509277, 30.238352785594277],
				[120.12576649059406, 30.238274165814467],
				[120.12562743048291, 30.238195545887812],
				[120.12548837059418, 30.238116925814325],
				[120.12534931092793, 30.23803830559399],
				[120.12521025148415, 30.23795968522681],
				[120.12507119226281, 30.237881064712806],
				[120.12493213326391, 30.237802444051958],
				[120.12479307448747, 30.23772382324426],
				[120.12465401593347, 30.237645202289745],
				[120.12451495760193, 30.237566581188382],
				[120.12437589949285, 30.237487959940182],
				[120.1242368416062, 30.237409338545152],
				[120.124097783942, 30.237330717003292],
				[120.12395872650028, 30.23725209531459],
				[120.12381966928096, 30.237173473479054],
				[120.1236806122841, 30.237094851496707],
				[120.12354155550972, 30.237016229367505],
				[120.12340249895773, 30.236937607091473],
				[120.12326344262824, 30.236858984668626],
				[120.12312438652116, 30.23678036209894],
				[120.12298533063652, 30.236701739382433],
				[120.12284627497434, 30.236623116519095],
				[120.12270721953458, 30.236544493508916],
				[120.12256816431729, 30.236465870351932],
				[120.12242910932243, 30.236387247048118],
				[120.12229005455, 30.236308623597473],
				[120.122151, 30.23623]
			]
		},
		"properties": {
			"segID": 29,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[120.122228, 30.236455],
				[120.0879698911312, 30.199896780778175],
				[120.0537372200275, 30.163329663037672],
				[120.01952993668102, 30.126753666430567],
				[119.98534799115403, 30.090168810570074],
				[119.95119133357879, 30.05357511503067],
				[119.91705991415765, 30.01697259934822],
				[119.88295368316278, 29.98036128302003],
				[119.8488725909363, 29.94374118550495],
				[119.81481658788995, 29.907112326223505],
				[119.7807856245052, 29.870474724557923],
				[119.74677965133317, 29.833828399852315],
				[119.71279861899434, 29.79717337141271],
				[119.67884247817875, 29.760509658507182],
				[119.64491117964569, 29.723837280365917],
				[119.61100467422374, 29.687156256181332],
				[119.57712291281068, 29.650466605108168],
				[119.54326584637329, 29.613768346263562],
				[119.5094334259474, 29.577061498727186],
				[119.47562560263779, 29.540346081541294],
				[119.44184232761805, 29.50362211371084],
				[119.40808355213048, 29.466889614203588],
				[119.37434922748606, 29.430148601950144],
				[119.34063930506437, 29.393399095844142],
				[119.30695373631345, 29.35664111474225],
				[119.27329247274976, 29.319874677464323],
				[119.23965546595802, 29.283099802793465],
				[119.20604266759129, 29.246316509476134],
				[119.17245402937061, 29.209524816222228],
				[119.13888950308521, 29.1727247417052],
				[119.1053490405922, 29.135916304562095],
				[119.0718325938166, 29.099099523393708],
				[119.03920557186079, 29.06172388776625],
				[119.00942074955664, 29.02254776329355],
				[118.97965851903368, 28.98336507522617],
				[118.94991883056299, 28.94417583910757],
				[118.92020163450299, 28.904980070447994],
				[118.89050688129946, 28.86577778472461],
				[118.86083452148517, 28.826568997381617],
				[118.83118450567976, 28.787353723830265],
				[118.8015567845896, 28.748131979449052],
				[118.77195130900742, 28.708903779583764],
				[118.74236802981237, 28.669669139547555],
				[118.71280689796961, 28.630428074621086],
				[118.68326786453025, 28.591180600052596],
				[118.65375088063104, 28.55192673105801],
				[118.62425589749427, 28.512666482821007],
				[118.59478286642761, 28.47339987049315],
				[118.56533173882373, 28.43412690919396],
				[118.5359024661604, 28.394847614011],
				[118.506495, 28.355562]
			]
		},
		"properties": {
			"segID": 30,
			"vehicle": "short"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[118.506495, 28.355562],
				[118.50598549691435, 28.35435676633823],
				[118.50547600539645, 28.353151530782892],
				[118.50496652544544, 28.351946293334123],
				[118.50445705706049, 28.350741053992063],
				[118.5039476002408, 28.349535812756855],
				[118.50343815498557, 28.348330569628633],
				[118.50292872129391, 28.347125324607532],
				[118.50241929916504, 28.345920077693695],
				[118.50190988859809, 28.344714828887255],
				[118.5014004895923, 28.34350957818836],
				[118.50089110214677, 28.34230432559714],
				[118.50038172626071, 28.341099071113735],
				[118.49987236193331, 28.339893814738286],
				[118.49936300916372, 28.338688556470924],
				[118.49885366795111, 28.33748329631179],
				[118.49834433829469, 28.33627803426103],
				[118.49783502019359, 28.335072770318774],
				[118.497325713647, 28.333867504485163],
				[118.4968164186541, 28.332662236760328],
				[118.49630713521407, 28.331456967144423],
				[118.49579786332608, 28.330251695637575],
				[118.49528860298928, 28.329046422239923],
				[118.49477935420288, 28.327841146951606],
				[118.49427011696602, 28.32663586977276],
				[118.4937608912779, 28.325430590703522],
				[118.4932516771377, 28.32422530974404],
				[118.49274247454457, 28.323020026894447],
				[118.49223328349771, 28.321814742154878],
				[118.49172410399628, 28.32060945552546],
				[118.49121493603946, 28.319404167006358],
				[118.49070577962641, 28.318198876597688],
				[118.49019663475632, 28.316993584299592],
				[118.48968750142835, 28.31578829011222],
				[118.48917837964171, 28.3145829940357],
				[118.48866926939554, 28.313377696070173],
				[118.48816017068903, 28.312172396215768],
				[118.48765108352134, 28.310967094472634],
				[118.48714200789168, 28.309761790840913],
				[118.48663294379917, 28.308556485320725],
				[118.48612389124304, 28.307351177912224],
				[118.48561485022243, 28.306145868615538],
				[118.48510582073655, 28.304940557430815],
				[118.48459680278454, 28.30373524435818],
				[118.48408779636559, 28.30252992939778],
				[118.48357880147887, 28.30132461254976],
				[118.48306981812358, 28.30011929381423],
				[118.48256084629887, 28.29891397319136],
				[118.48205188600392, 28.297708650681273],
				[118.48154293723789, 28.296503326284103],
				[118.481034, 28.295298]
			]
		},
		"properties": {
			"segID": 31,
			"vehicle": "short"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[118.481034, 28.295298],
				[118.47055790392025, 28.239509238052335],
				[118.46009275928748, 28.18371967848958],
				[118.44963852928066, 28.12792932400483],
				[118.43919517719512, 28.072138177282568],
				[118.42876266644195, 28.01634624099878],
				[118.41834096054752, 27.960553517820895],
				[118.40793002315291, 27.904760010407905],
				[118.39752981801328, 27.848965721410366],
				[118.38714030899756, 27.79317065347045],
				[118.37676146008762, 27.737374809221986],
				[118.36639323537807, 27.68157819129048],
				[118.3560355990754, 27.62578080229319],
				[118.34568851549767, 27.569982644839133],
				[118.33535194907401, 27.514183721529143],
				[118.32502586434389, 27.45838403495589],
				[118.3147102259568, 27.402583587703955],
				[118.30440499867169, 27.346782382349815],
				[118.29411014735636, 27.29098042146193],
				[118.28382563698712, 27.235177707600762],
				[118.27355143264809, 27.179374243318794],
				[118.26328749953092, 27.123570031160618],
				[118.25303380293401, 27.0677650736629],
				[118.2427903082623, 27.01195937335449],
				[118.23255698102655, 26.956152932756407],
				[118.22233378684295, 26.900345754381902],
				[118.21212069143265, 26.844537840736496],
				[118.20191766062118, 26.78872919431798],
				[118.19172466033804, 26.732919817616512],
				[118.18154165661616, 26.677109713114604],
				[118.20659515828139, 26.636246963277042],
				[118.2613873354419, 26.607995102612012],
				[118.31615244123878, 26.579722269584458],
				[118.37089050234134, 26.551428500377796],
				[118.42560154548474, 26.52311383114607],
				[118.48028559746966, 26.494778298013923],
				[118.53494268516181, 26.46642193707657],
				[118.58957283549186, 26.43804478439975],
				[118.64417607545484, 26.40964687601969],
				[118.69875243210998, 26.381228247943096],
				[118.75330193258027, 26.352788936147082],
				[118.80782460405229, 26.32432897657916],
				[118.8623204737756, 26.29584840515722],
				[118.91678956906271, 26.267347257769455],
				[118.97123191728858, 26.238825570274376],
				[119.0256475458903, 26.21028337850075],
				[119.08003648236681, 26.181720718247604],
				[119.13439875427858, 26.153137625284135],
				[119.1887343892472, 26.12453413534973],
				[119.2430434149552, 26.09591028415394],
				[119.298821, 26.07097]
			]
		},
		"properties": {
			"segID": 32,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[119.286967, 26.072735],
				[119.28720408350166, 26.07269970948837],
				[119.28744116686045, 26.072664418589454],
				[119.2876782500763, 26.072629127303237],
				[119.28791533314924, 26.07259383562974],
				[119.28815241607928, 26.072558543568935],
				[119.28838949886641, 26.07252325112085],
				[119.28862658151063, 26.072487958285475],
				[119.28886366401196, 26.07245266506281],
				[119.28910074637035, 26.07241737145285],
				[119.28933782858583, 26.07238207745561],
				[119.28957491065837, 26.072346783071083],
				[119.28981199258801, 26.072311488299274],
				[119.29004907437475, 26.07227619314017],
				[119.29028615601854, 26.07224089759379],
				[119.29052323751944, 26.072205601660116],
				[119.29076031887739, 26.072170305339174],
				[119.29099740009244, 26.072135008630944],
				[119.29123448116455, 26.072099711535436],
				[119.29147156209373, 26.072064414052644],
				[119.29170864288, 26.072029116182577],
				[119.29194572352331, 26.07199381792523],
				[119.2921828040237, 26.071958519280606],
				[119.29241988438118, 26.07192322024871],
				[119.29265696459571, 26.071887920829532],
				[119.2928940446673, 26.07185262102308],
				[119.29313112459596, 26.071817320829357],
				[119.2933682043817, 26.07178202024836],
				[119.2936052840245, 26.071746719280085],
				[119.29384236352433, 26.07171141792455],
				[119.29407944288126, 26.07167611618174],
				[119.2943165220952, 26.071640814051662],
				[119.29455360116623, 26.071605511534308],
				[119.29479068009431, 26.071570208629694],
				[119.29502775887944, 26.071534905337806],
				[119.29526483752163, 26.071499601658655],
				[119.29550191602087, 26.07146429759224],
				[119.29573899437716, 26.071428993138557],
				[119.29597607259052, 26.071393688297615],
				[119.29621315066092, 26.071358383069406],
				[119.29645022858834, 26.071323077453936],
				[119.29668730637282, 26.071287771451203],
				[119.29692438401436, 26.07125246506121],
				[119.29716146151291, 26.07121715828396],
				[119.29739853886853, 26.07118185111945],
				[119.29763561608117, 26.071146543567682],
				[119.29787269315086, 26.071111235628656],
				[119.29810977007759, 26.071075927302378],
				[119.29834684686136, 26.07104061858884],
				[119.29858392350218, 26.071005309488047],
				[119.298821, 26.07097]
			]
		},
		"properties": {
			"segID": 33,
			"vehicle": "short"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[119.29882, 26.07097],
				[119.29858292350018, 26.071005289488046],
				[119.29834584685747, 26.071040578588832],
				[119.29810877007189, 26.07107586730237],
				[119.2978716931434, 26.071111155628653],
				[119.29763461607206, 26.071146443567685],
				[119.29739753885784, 26.07118173111945],
				[119.29716046150072, 26.07121701828396],
				[119.29692338400073, 26.07125230506121],
				[119.29668630635788, 26.071287591451203],
				[119.29644922857213, 26.071322877453934],
				[119.29621215064353, 26.071358163069398],
				[119.29597507257203, 26.07139344829761],
				[119.2957379943577, 26.071428733138553],
				[119.29550091600046, 26.07146401759224],
				[119.29526383750039, 26.07149930165865],
				[119.2950267588574, 26.071534585337805],
				[119.29478968007159, 26.071569868629688],
				[119.2945526011429, 26.071605151534307],
				[119.29431552207136, 26.071640434051655],
				[119.29407844285696, 26.07167571618174],
				[119.29384136349967, 26.071710997924548],
				[119.29360428399953, 26.071746279280088],
				[119.29336720435653, 26.07178156024836],
				[119.2931301245707, 26.071816840829356],
				[119.29289304464199, 26.071852121023078],
				[119.29265596457043, 26.071887400829528],
				[119.29241888435602, 26.071922680248704],
				[119.29218180399876, 26.071957959280606],
				[119.29194472349864, 26.071993237925223],
				[119.29170764285568, 26.072028516182574],
				[119.29147056206989, 26.072063794052642],
				[119.2912334811412, 26.072099071535433],
				[119.29099640006972, 26.07213434863094],
				[119.29075931885538, 26.072169625339175],
				[119.29052223749817, 26.07220490166012],
				[119.29028515599813, 26.072240177593788],
				[119.29004807435525, 26.072275453140172],
				[119.28981099256956, 26.072310728299264],
				[119.289573910641, 26.072346003071086],
				[119.28933682856962, 26.07238127745561],
				[119.28909974635538, 26.07241655145285],
				[119.28886266399833, 26.072451825062807],
				[119.28862558149844, 26.07248709828547],
				[119.28838849885572, 26.07252237112085],
				[119.28815141607016, 26.072557643568935],
				[119.28791433314179, 26.072592915629734],
				[119.28767725007059, 26.07262818730324],
				[119.28744016685654, 26.07266345858945],
				[119.28720308349968, 26.072698729488373],
				[119.286966, 26.072734]
			]
		},
		"properties": {
			"segID": null,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[119.286967, 26.072735],
				[119.23008533314055, 26.10274302893429],
				[119.17317447705727, 26.13272873451889],
				[119.11623439985627, 26.162692075703347],
				[119.05926506971679, 26.192633011401202],
				[119.00226645489151, 26.22255150049002],
				[118.945238523707, 26.252447501811453],
				[118.88818124456414, 26.282320974171252],
				[118.83109458593846, 26.312171876339306],
				[118.77397851638074, 26.342000167049697],
				[118.71683300451711, 26.371805805000733],
				[118.65965801904986, 26.401588748854973],
				[118.60245352875752, 26.431348957239308],
				[118.54521950249543, 26.461086388744935],
				[118.48795590919617, 26.49080100192748],
				[118.43066271786995, 26.520492755306975],
				[118.373339897605, 26.55016160736794],
				[118.31598741756808, 26.579807516559406],
				[118.25860524700484, 26.609430441294972],
				[118.20119335524024, 26.63903033995285],
				[118.1830221785806, 26.685277952181824],
				[118.19367787142679, 26.74375641677397],
				[118.2043445304223, 26.802234084168212],
				[118.21502219461102, 26.86071095151529],
				[118.22571090316143, 26.91918701595676],
				[118.23641069536727, 26.977662274624947],
				[118.24712161064825, 27.036136724642915],
				[118.25784368855051, 27.094610363124392],
				[118.26857696874741, 27.153083187173767],
				[118.27932149104002, 27.211555193886003],
				[118.2900772953578, 27.270026380346607],
				[118.30084442175934, 27.328496743631593],
				[118.3116229104327, 27.386966280807403],
				[118.3224128016964, 27.445434988930906],
				[118.33321413599984, 27.503902865049312],
				[118.34402695392396, 27.562369906200143],
				[118.35485129618205, 27.620836109411172],
				[118.36568720362014, 27.67930147170038],
				[118.37653471721794, 27.73776599007593],
				[118.42841764799356, 27.77054211881869],
				[118.48713482722036, 27.799034213932867],
				[118.54588278953246, 27.827501471480613],
				[118.6046615612572, 27.85594384850201],
				[118.66347116862205, 27.88436130200511],
				[118.72231163775409, 27.912753788966004],
				[118.78118299467945, 27.941121266328906],
				[118.84008526532298, 27.96946369100624],
				[118.89901847550763, 27.99778101987871],
				[118.957982650954, 28.02607320979539],
				[119.01697781727994, 28.0543402175738],
				[119.076004, 28.082582]
			]
		},
		"properties": {
			"segID": 34,
			"vehicle": "water"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[119.076004, 28.082582],
				[119.00040777621766, 28.10855378588823],
				[118.92477496565085, 28.13448410145308],
				[118.84910556932887, 28.160372881434295],
				[118.77339958856413, 28.186220060579146],
				[118.69765702495282, 28.212025573642812],
				[118.62187788037569, 28.23778935538884],
				[118.54606215699887, 28.263511340589577],
				[118.47020985727454, 28.289191464026523],
				[118.39432098394168, 28.314829660490833],
				[118.31839554002694, 28.340425864783686],
				[118.2424335288452, 28.36598001171674],
				[118.16643495400045, 28.391492036112542],
				[118.08675549755063, 28.396671874503518],
				[118.00550442168232, 28.393058910552107],
				[117.92425892153607, 28.389397750699075],
				[117.84301906973626, 28.38568840563478],
				[117.76178493884161, 28.38193088618798],
				[117.68055660134429, 28.37812520332568],
				[117.5993341296691, 28.374271368153046],
				[117.51811759617276, 28.370369391913247],
				[117.43690707314296, 28.366419285987373],
				[117.35570263279762, 28.36242106189426],
				[117.27450434728404, 28.358374731290382],
				[117.19331228867811, 28.354280305969745],
				[117.1121265289835, 28.350137797863695],
				[117.03094714013082, 28.345947219040852],
				[116.94977419397684, 28.341708581706932],
				[116.88575508842801, 28.365443802693655],
				[116.8451395406313, 28.42745443286617],
				[116.80447637932753, 28.489452995573544],
				[116.76376543466736, 28.551439445406213],
				[116.72300653629648, 28.61341373679997],
				[116.68219951335352, 28.675375824035164],
				[116.64134419446803, 28.737325661235996],
				[116.60044040775831, 28.799263202369726],
				[116.55948798082946, 28.861188401245958],
				[116.51848674077112, 28.923101211515835],
				[116.47743651415554, 28.98500158667132],
				[116.43633712703533, 29.046889480044406],
				[116.39518840494149, 29.108764844806352],
				[116.35399017288115, 29.170627633966884],
				[116.31274225533556, 29.232477800373466],
				[116.27144447625788, 29.29431529671048],
				[116.2300966590711, 29.35614007549844],
				[116.18869862666588, 29.41795208909324],
				[116.14725020139834, 29.479751289685307],
				[116.10575120508801, 29.541537629298848],
				[116.06420145901556, 29.603311059791036],
				[116.02260078392071, 29.66507153285119],
				[115.980949, 29.726819]
			]
		},
		"properties": {
			"segID": 35,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[115.980949, 29.726819],
				[115.91807140694858, 29.75905465342012],
				[115.85515336653376, 29.791260554597773],
				[115.79219483737562, 29.823436645541516],
				[115.72919577823359, 29.85558286820136],
				[115.66615614800742, 29.887699164468838],
				[115.60307590573788, 29.91978547617716],
				[115.5399550106078, 29.95184174510124],
				[115.47679342194284, 29.983867912957884],
				[115.41359109921237, 30.015863921405852],
				[115.35034800203029, 30.047829712045992],
				[115.28706409015611, 30.0797652264213],
				[115.22373932349552, 30.111670406017097],
				[115.1603736621016, 30.143545192261126],
				[115.0969670661754, 30.17538952652362],
				[115.03351949606706, 30.207203350117474],
				[114.97003091227656, 30.23898660429836],
				[114.90650127545467, 30.270739230264777],
				[114.84293054640386, 30.302461169158274],
				[114.77931868607916, 30.334152362063502],
				[114.715665655589, 30.365812750008352],
				[114.65197141619632, 30.397442273964117],
				[114.58823592931918, 30.429040874845544],
				[114.52298432597212, 30.455593167957286],
				[114.449458548238, 30.454026305942413],
				[114.37593516601187, 30.45241822044193],
				[114.30241424125822, 30.450768915464206],
				[114.22889583591706, 30.449078395120022],
				[114.15538001190335, 30.4473466636224],
				[114.08186683110631, 30.445573725286643],
				[114.00835635538884, 30.443759584530266],
				[113.93484864658693, 30.44190424587292],
				[113.86134376650904, 30.44000771393641],
				[113.78784177693547, 30.43806999344459],
				[113.71434273961776, 30.436091089223353],
				[113.64084671627808, 30.43407100620056],
				[113.56735376860864, 30.432009749406024],
				[113.49386395827108, 30.429907323971406],
				[113.42037734689579, 30.427763735130203],
				[113.34895344344778, 30.43419445239781],
				[113.28244766831048, 30.461258364143685],
				[113.21590495429932, 30.488288523816344],
				[113.1493252871962, 30.5152848762016],
				[113.08270865298537, 30.542247366063023],
				[113.0160550378541, 30.56917593814213],
				[112.94936442819348, 30.596070537158663],
				[112.88263681059915, 30.622931107810853],
				[112.81587217187209, 30.649757594775583],
				[112.74907049901937, 30.676549942708736],
				[112.68223177925485, 30.703308096245372],
				[112.615356, 30.730032]
			]
		},
		"properties": {
			"segID": 36,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.615356, 30.730032],
				[112.59935676754657, 30.754710335167076],
				[112.58334933216311, 30.779386706044395],
				[112.5673336822509, 30.804061109697834],
				[112.55130980619649, 30.82873354318897],
				[112.53527769237158, 30.853404003575175],
				[112.51923732913306, 30.878072487909552],
				[112.50318870482306, 30.90273899324094],
				[112.48713180776875, 30.9274035166139],
				[112.47106662628245, 30.95206605506872],
				[112.4549931486616, 30.976726605641414],
				[112.43891136318864, 31.001385165363665],
				[112.42282125813105, 31.026041731262882],
				[112.40672282174143, 31.05069630036215],
				[112.39061604225721, 31.075348869680226],
				[112.37450090790088, 31.099999436231556],
				[112.35837740687985, 31.124647997026205],
				[112.34224552738642, 31.14929454906994],
				[112.32610525759782, 31.173939089364143],
				[112.30995658567609, 31.19858161490584],
				[112.29379949976814, 31.223222122687687],
				[112.27763398800566, 31.247860609697945],
				[112.26146003850518, 31.27249707292049],
				[112.24527763936793, 31.297131509334815],
				[112.22908677867991, 31.321763915915987],
				[112.21288744451184, 31.34639428963466],
				[112.19667962491907, 31.371022627457062],
				[112.1804633079417, 31.395648926345004],
				[112.16423848160434, 31.420273183255834],
				[112.14800513391634, 31.444895395142446],
				[112.13176325287155, 31.46951555895331],
				[112.1155128264484, 31.494133671632376],
				[112.09925384260983, 31.51874973011915],
				[112.08298628930335, 31.543363731348663],
				[112.06671015446085, 31.567975672251418],
				[112.05042542599878, 31.592585549753423],
				[112.03413209181794, 31.617193360776188],
				[112.01783013980355, 31.641799102236703],
				[112.00151955782528, 31.666402771047405],
				[111.98520033373704, 31.691004364116218],
				[111.96887245537711, 31.71560387834649],
				[111.95253591056812, 31.740201310637033],
				[111.93619068711689, 31.76479665788209],
				[111.91983677281455, 31.789389916971327],
				[111.90347415543643, 31.81398108478982],
				[111.88710282274204, 31.83857015821808],
				[111.8707227624751, 31.863157134131953],
				[111.8543339623634, 31.887742009402753],
				[111.83793641011896, 31.912324780897105],
				[111.82153009343779, 31.936905445477063],
				[111.805115, 31.961484]
			]
		},
		"properties": {
			"segID": 37,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[111.805115, 31.961484],
				[111.79404612515565, 31.970688928434154],
				[111.78297503034256, 31.979892896175357],
				[111.77190171455314, 31.989095902687243],
				[111.76082617677962, 31.998297947433162],
				[111.74974841601403, 32.007499029876215],
				[111.73866843124813, 32.01669914947924],
				[111.72758622147357, 32.02589830570483],
				[111.71650178568171, 32.035096498015314],
				[111.70541512286373, 32.04429372587275],
				[111.69432623201061, 32.05348998873895],
				[111.68323511211311, 32.06268528607547],
				[111.67214176216179, 32.07187961734359],
				[111.66104618114699, 32.08107298200434],
				[111.64994836805886, 32.09026537951849],
				[111.63884832188737, 32.09945680934655],
				[111.6277460416222, 32.10864727094876],
				[111.6166415262529, 32.117836763785135],
				[111.60553477476877, 32.12702528731538],
				[111.59442578615895, 32.13621284099898],
				[111.58331455941233, 32.145399424295135],
				[111.57220109351762, 32.1545850366628],
				[111.5610853874633, 32.163769677560644],
				[111.54996744023767, 32.172953346447116],
				[111.53884725082878, 32.18213604278038],
				[111.52772481822458, 32.19131776601832],
				[111.51660014141268, 32.2004985156186],
				[111.50547321938056, 32.20967829103859],
				[111.49434405111552, 32.21885709173542],
				[111.4832126356046, 32.22803491716595],
				[111.47207897183463, 32.23721176678675],
				[111.4609430587923, 32.2463876400542],
				[111.44980489546406, 32.25556253642433],
				[111.43866448083611, 32.264736455352974],
				[111.42752181389456, 32.27390939629568],
				[111.4163768936252, 32.28308135870773],
				[111.40522971901366, 32.292252342044144],
				[111.39408028904542, 32.3014223457597],
				[111.38292860270566, 32.310591369308874],
				[111.37177465897945, 32.3197594121459],
				[111.36061845685158, 32.32892647372477],
				[111.34945999530669, 32.338092553499195],
				[111.33829927332923, 32.3472576509226],
				[111.32713628990335, 32.35642176544818],
				[111.31597104401314, 32.365584896528844],
				[111.30480353464239, 32.37474704361726],
				[111.2936337607747, 32.38390820616582],
				[111.2824617213935, 32.39306838362664],
				[111.27128741548202, 32.40222757545159],
				[111.26011084202324, 32.41138578109226],
				[111.248932, 32.420543]
			]
		},
		"properties": {
			"segID": 38,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[111.248932, 32.420543],
				[111.31074934656523, 32.45390940136699],
				[111.3726124764423, 32.487245579644394],
				[111.43452144082342, 32.52055147356686],
				[111.49647629076294, 32.553827021793],
				[111.55847707717633, 32.587072162905436],
				[111.62052385083904, 32.62028683541089],
				[111.68261666238553, 32.65347097774028],
				[111.74475556230817, 32.68662452824875],
				[111.8069406009562, 32.71974742521583],
				[111.86917182853458, 32.75283960684546],
				[111.93144929510304, 32.785901011266105],
				[111.99377305057492, 32.81893157653085],
				[112.05614314471609, 32.85193124061747],
				[112.11855962714387, 32.88489994142855],
				[112.181022547326, 32.917837616791545],
				[112.24353195457947, 32.95074420445892],
				[112.30608789806945, 32.9836196421082],
				[112.36869042680819, 33.0164638673421],
				[112.4313395896539, 33.049276817688636],
				[112.4940354353097, 33.08205843060119],
				[112.55677801232241, 33.114808643458645],
				[112.61956736908154, 33.147527393565476],
				[112.68240355381806, 33.18021461815188],
				[112.74528661460336, 33.212870254373854],
				[112.80821659934807, 33.245494239313345],
				[112.87119355580097, 33.2780865099783],
				[112.93421753154783, 33.31064700330286],
				[112.99728857401024, 33.34317565614744],
				[113.06040673044453, 33.37567240529883],
				[113.12357204794056, 33.40813718747033],
				[113.1867845734206, 33.440569939301895],
				[113.25004435363819, 33.472970597360224],
				[113.2783013265652, 33.51735567649008],
				[113.26056735173893, 33.57749589727012],
				[113.24280864654123, 33.63763358532743],
				[113.22502512104292, 33.69776873134478],
				[113.20721668496621, 33.75790132596808],
				[113.18938324768285, 33.81803135980614],
				[113.17152471821242, 33.8781588234305],
				[113.1536410052203, 33.9382837073752],
				[113.13573201701585, 33.998406002136605],
				[113.11779766155063, 34.0585256981732],
				[113.09983784641635, 34.11864278590532],
				[113.08185247884303, 34.178757255715055],
				[113.06384146569715, 34.23886909794598],
				[113.04580471347955, 34.29897830290288],
				[113.02774212832372, 34.3590848608517],
				[113.00965361599361, 34.41918876201919],
				[112.99153908188187, 34.47928999659276],
				[112.942068, 34.506545]
			]
		},
		"properties": {
			"segID": 39,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.942068, 34.506545],
				[112.82292634298722, 34.59102426765184],
				[112.70354231767185, 34.675387514387026],
				[112.58391500034227, 34.75963413733387],
				[112.46404346702246, 34.843763530986465],
				[112.34392679351244, 34.92777508719638],
				[112.22356405542926, 35.01166819516445],
				[112.1029543282489, 35.09544224143259],
				[111.9820966873486, 35.179096609875714],
				[111.86099020805013, 35.26263068169371],
				[111.73963396566361, 35.346043835403606],
				[111.61802703553222, 35.429335446831736],
				[111.49616849307738, 35.51250488910596],
				[111.374360377863, 35.59561246866637],
				[111.43501785512653, 35.71535026954252],
				[111.49585786373761, 35.8350575421975],
				[111.5568817153028, 35.95473405939456],
				[111.61809073146611, 36.07437959204188],
				[111.67948624400798, 36.193993909172754],
				[111.74106959494523, 36.31357677792559],
				[111.80284213663217, 36.4331279635236],
				[111.86480523186266, 36.55264722925434],
				[111.92696025397335, 36.672134336448885],
				[111.9893085869479, 36.79158904446085],
				[112.0518516255224, 36.911011110645134],
				[112.11459077529182, 37.03040029033643],
				[112.1775274528176, 37.149756336827366],
				[112.24066308573644, 37.26907900134657],
				[112.30399911287017, 37.3883680330363],
				[112.36753698433677, 37.5076231789299],
				[112.43127816166253, 37.62684418392892],
				[112.49522411789565, 37.74603079078005],
				[112.55937633772064, 37.86518274005166],
				[112.58244021117241, 37.99303423586447],
				[112.60233014228969, 38.12156834312279],
				[112.6222902233699, 38.25009908524661],
				[112.64232102628476, 38.37862643471377],
				[112.66242312834645, 38.50715036373886],
				[112.6825971123759, 38.63567084427002],
				[112.7028435667722, 38.76418784798545],
				[112.72316308558287, 38.8927013462901],
				[112.74355626857529, 39.02121131031216],
				[112.76402372130913, 39.14971771089947],
				[112.78456605520988, 39.278220518616045],
				[112.80518388764354, 39.40671970373833],
				[112.93238102820251, 39.47057109484035],
				[113.08937934397285, 39.516262515526265],
				[113.24658385145476, 39.56174248889752],
				[113.4039941944994, 39.60701039507343],
				[113.56161000780646, 39.65206561491556],
				[113.714676, 39.66313]
			]
		},
		"properties": {
			"segID": 40,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[113.714676, 39.66313],
				[113.7146287166771, 39.66303088046968],
				[113.71458143348983, 39.66293176092019],
				[113.71453415043821, 39.66283264135152],
				[113.71448686752224, 39.662733521763684],
				[113.7144395847419, 39.662634402156684],
				[113.7143923020972, 39.6625352825305],
				[113.71434501958812, 39.66243616288514],
				[113.7142977372147, 39.662337043220624],
				[113.7142504549769, 39.66223792353693],
				[113.71420317287475, 39.66213880383407],
				[113.71415589090823, 39.66203968411202],
				[113.71410860907736, 39.66194056437081],
				[113.7140613273821, 39.661841444610424],
				[113.71401404582248, 39.66174232483087],
				[113.71396676439848, 39.66164320503214],
				[113.71391948311013, 39.66154408521425],
				[113.71387220195739, 39.661444965377186],
				[113.71382492094028, 39.661345845520955],
				[113.71377764005882, 39.66124672564555],
				[113.71373035931296, 39.66114760575096],
				[113.71368307870274, 39.66104848583723],
				[113.71363579822815, 39.6609493659043],
				[113.71358851788919, 39.66085024595221],
				[113.71354123768583, 39.66075112598096],
				[113.71349395761811, 39.660652005990535],
				[113.71344667768601, 39.660552885980934],
				[113.71339939788953, 39.66045376595216],
				[113.71335211822867, 39.66035464590423],
				[113.71330483870342, 39.66025552583712],
				[113.7132575593138, 39.66015640575085],
				[113.71321028005981, 39.6600572856454],
				[113.71316300094142, 39.659958165520784],
				[113.71311572195864, 39.659859045377004],
				[113.71306844311148, 39.659759925214054],
				[113.71302116439995, 39.65966080503193],
				[113.71297388582401, 39.65956168483064],
				[113.71292660738371, 39.659462564610195],
				[113.712879329079, 39.65936344437057],
				[113.71283205090991, 39.659264324111774],
				[113.71278477287643, 39.65916520383381],
				[113.71273749497855, 39.659066083536686],
				[113.71269021721629, 39.658966963220394],
				[113.71264293958963, 39.65886784288493],
				[113.7125956620986, 39.65876872253029],
				[113.71254838474314, 39.65866960215651],
				[113.71250110752331, 39.65857048176354],
				[113.71245383043907, 39.6584713613514],
				[113.71240655349044, 39.65837224092011],
				[113.71235927667742, 39.65827312046962],
				[113.712312, 39.658174]
			]
		},
		"properties": {
			"segID": 41,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[113.712312, 39.658174],
				[113.64796044344142, 39.67663418268251],
				[113.57010056338333, 39.65448497132178],
				[113.49229062211177, 39.63228380924434],
				[113.41453066496774, 39.61003077072868],
				[113.33682073674606, 39.58772593009993],
				[113.25916088169633, 39.5653693617291],
				[113.18155114352422, 39.542961140032176],
				[113.10399156539248, 39.52050133946932],
				[113.02648218992218, 39.49799003454396],
				[112.94902305919382, 39.47542729980205],
				[112.87161421474849, 39.45281320983111],
				[112.80764497938897, 39.422026494712],
				[112.7974567343228, 39.35861654096835],
				[112.78728696888828, 39.29520570051358],
				[112.77713560826439, 39.231793976950165],
				[112.76700257798745, 39.168381373863284],
				[112.75688780394893, 39.10496789482091],
				[112.74679121239316, 39.041553543373986],
				[112.73671272991517, 38.97813832305641],
				[112.72665228345858, 38.91472223738526],
				[112.7166098003133, 38.85130528986086],
				[112.70658520811347, 38.78788748396685],
				[112.69657843483535, 38.724468823170305],
				[112.68658940879507, 38.66104931092188],
				[112.67661805864672, 38.5976289506559],
				[112.66666431338014, 38.5342077457904],
				[112.65672810231877, 38.470785699727266],
				[112.64680935511781, 38.40736281585238],
				[112.63690800176202, 38.34393909753565],
				[112.6270239725637, 38.280514548131144],
				[112.61715719816074, 38.21708917097718],
				[112.60730760951459, 38.15366296939642],
				[112.59747513790826, 38.09023594669599],
				[112.58765971494438, 38.026808106167515],
				[112.5778612725432, 37.96337945108729],
				[112.56807974294072, 37.899949984716336],
				[112.61151306373199, 37.87030136569345],
				[112.69208279782053, 37.86419574505428],
				[112.7726391225672, 37.85803523297031],
				[112.85318192324344, 37.85181985079388],
				[112.93371108530573, 37.8455496200577],
				[113.01422649439708, 37.83922456247455],
				[113.09472803634833, 37.832844699936885],
				[113.17521559717976, 37.82641005451658],
				[113.25568906310238, 37.81992064846454],
				[113.33614832051936, 37.81337650421036],
				[113.41659325602751, 37.80677764436203],
				[113.4970237564186, 37.80012409170551],
				[113.57743970868077, 37.793415869204516],
				[113.657841, 37.786653]
			]
		},
		"properties": {
			"segID": 42,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[113.657841, 37.786653],
				[113.66086791530607, 37.78910168200494],
				[113.66389503122524, 37.79155028656883],
				[113.66692234778215, 37.79399881367972],
				[113.66994986500147, 37.79644726332563],
				[113.67297758290788, 37.79889563549461],
				[113.676005501526, 37.80134393017465],
				[113.67903362088055, 37.80379214735383],
				[113.68206194099614, 37.80624028702012],
				[113.68509046189746, 37.808688349161564],
				[113.68811918360917, 37.811136333766186],
				[113.69114810615598, 37.81358424082198],
				[113.6941772295625, 37.816032070317],
				[113.69720655385345, 37.81847982223925],
				[113.70023607905348, 37.820927496576694],
				[113.70326580518727, 37.823375093317416],
				[113.7062957322795, 37.82582261244939],
				[113.70932586035487, 37.828270053960615],
				[113.71235618943804, 37.830717417839104],
				[113.71538671955368, 37.83316470407288],
				[113.7184174507265, 37.8356119126499],
				[113.7214483829812, 37.838059043558225],
				[113.72447951634241, 37.8405060967858],
				[113.72751085083488, 37.84295307232066],
				[113.73054238648328, 37.84539997015076],
				[113.73357412331228, 37.84784679026413],
				[113.7366060613466, 37.85029353264875],
				[113.73963820061094, 37.8527401972926],
				[113.74267054113, 37.855186784183665],
				[113.74570308292846, 37.85763329330995],
				[113.74873582603102, 37.860079724659435],
				[113.7517687704624, 37.8625260782201],
				[113.7548019162473, 37.864972353979915],
				[113.75783526341043, 37.867418551926875],
				[113.76086881197648, 37.86986467204895],
				[113.76390256197018, 37.8723107143341],
				[113.76693651341623, 37.87475667877032],
				[113.76997066633935, 37.87720256534558],
				[113.77300502076422, 37.87964837404784],
				[113.77603957671562, 37.88209410486507],
				[113.77907433421822, 37.88453975778524],
				[113.78210929329674, 37.88698533279632],
				[113.78514445397595, 37.88943082988627],
				[113.7881798162805, 37.89187624904305],
				[113.79121538023516, 37.894321590254606],
				[113.79425114586465, 37.89676685350891],
				[113.79728711319369, 37.89921203879392],
				[113.80032328224702, 37.90165714609758],
				[113.80335965304936, 37.90410217540784],
				[113.80639622562543, 37.90654712671266],
				[113.809433, 37.908992]
			]
		},
		"properties": {
			"segID": 43,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[113.809433, 37.908992],
				[113.74984281800778, 37.86097264513603],
				[113.69033025848336, 37.8129232983737],
				[113.61948539238692, 37.78988621061747],
				[113.53490179365917, 37.79697130285082],
				[113.45030203804721, 37.80399591284498],
				[113.36568625699357, 37.81096001377855],
				[113.28105458218192, 37.81786357904748],
				[113.1964071455353, 37.82470658226557],
				[113.11174407921438, 37.83148899726483],
				[113.02706551561553, 37.83821079809602],
				[112.94237158736915, 37.844871959029035],
				[112.85766242733769, 37.85147245455328],
				[112.7729381686139, 37.85801225937828],
				[112.68819894451899, 37.864491348433866],
				[112.60344488860075, 37.870909696870804],
				[112.56956594830294, 37.9095945611827],
				[112.57985850922003, 37.97631721279427],
				[112.59016980006614, 38.04303896594675],
				[112.60049989980233, 38.10975981684029],
				[112.61084888777683, 38.176479761656275],
				[112.62121684372751, 38.243198796557266],
				[112.63160384778446, 38.30991691768683],
				[112.64200998047254, 38.37663412116949],
				[112.65243532271387, 38.44335040311047],
				[112.66287995583048, 38.51006575959571],
				[112.67334396154689, 38.57678018669166],
				[112.68382742199276, 38.64349368044517],
				[112.69433041970545, 38.71020623688335],
				[112.70485303763284, 38.776917852013476],
				[112.71539535913583, 38.843628521822794],
				[112.72595746799115, 38.91033824227848],
				[112.73653944839408, 38.97704700932743],
				[112.7471413849612, 39.04375481889614],
				[112.75776336273309, 39.11046166689062],
				[112.76840546717719, 39.177167549196184],
				[112.77906778419059, 39.243872461677405],
				[112.78975040010286, 39.31057640017786],
				[112.8004534016789, 39.37727936052009],
				[112.82103459829368, 39.43800129236093],
				[112.90242937528015, 39.4618234083725],
				[112.98387982333735, 39.48558874755024],
				[113.06538589447271, 39.50929722304745],
				[113.14694754003403, 39.53294874806783],
				[113.22856471070793, 39.556543235866606],
				[113.31023735651839, 39.58008059975152],
				[113.3919654268252, 39.60356075308399],
				[113.47374887032257, 39.62698360928018],
				[113.55558763503764, 39.650349081812074],
				[113.637481668329, 39.67365708420857],
				[113.714676, 39.66313]
			]
		},
		"properties": {
			"segID": 44,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[113.714676, 39.66313],
				[113.56055118301263, 39.65176385097887],
				[113.40187931051054, 39.60640399778551],
				[113.2434156813682, 39.560828601389694],
				[113.08516066813573, 39.51503829349627],
				[112.92711463396424, 39.46903370657186],
				[112.80435192394786, 39.40154376311756],
				[112.78359900478657, 39.27218174973939],
				[112.76292257173463, 39.142816066385606],
				[112.7423219952154, 39.01344674336754],
				[112.72179665174968, 38.88407381070143],
				[112.70134592387863, 38.75469729811213],
				[112.68096920008779, 38.625317235036874],
				[112.66066587473223, 38.49593365062884],
				[112.64043534796288, 38.36654657376082],
				[112.62027702565382, 38.237156033028704],
				[112.6001903193307, 38.107762056754936],
				[112.58017464610019, 37.97836467299203],
				[112.55161308157545, 37.850786090579355],
				[112.48705605159573, 37.73082987725046],
				[112.42270787139384, 37.610838573097276],
				[112.35856702774282, 37.49081244251932],
				[112.29463201935197, 37.37075174768197],
				[112.2309013567483, 37.25065674854065],
				[112.16737356215967, 37.13052770286463],
				[112.10404716939871, 37.01036486626069],
				[112.04092072374844, 36.89016849219634],
				[111.97799278184856, 36.76993883202287],
				[111.91526191158347, 36.649676134998145],
				[111.85272669197106, 36.52938064830897],
				[111.79038571305286, 36.40905261709333],
				[111.72823757578531, 36.2886922844624],
				[111.66628089193215, 36.16829989152206],
				[111.60451428395797, 36.04787567739447],
				[111.5429363849228, 35.92741987923913],
				[111.48154583837797, 35.80693273227381],
				[111.42034129826283, 35.68641446979522],
				[111.4045927622841, 35.57511084987554],
				[111.52819344239018, 35.492193912170286],
				[111.6515390901394, 35.409151191584996],
				[111.7746306272488, 35.32598333191779],
				[111.89746897577388, 35.24269097423132],
				[112.02005505805967, 35.15927475686001],
				[112.1423897966928, 35.07573531541725],
				[112.2644741144539, 34.99207328280286],
				[112.38630893427123, 34.9082892892106],
				[112.50789517917454, 34.8243839621357],
				[112.62923377225015, 34.74035792638256],
				[112.75032563659637, 34.65621180407257],
				[112.87117169527981, 34.571946214652],
				[113.003943, 34.519651]
			]
		},
		"properties": {
			"segID": 45,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[113.003943, 34.519651],
				[113.0036677921825, 34.519602715120975],
				[113.00339258468401, 34.51955442962472],
				[113.00311737750457, 34.51950614351127],
				[113.00284217064416, 34.519457856780605],
				[113.00256696410278, 34.519409569432746],
				[113.00229175788047, 34.51936128146767],
				[113.00201655197719, 34.51931299288539],
				[113.00174134639298, 34.51926470368592],
				[113.0014661411278, 34.519216413869245],
				[113.00119093618169, 34.51916812343537],
				[113.00091573155464, 34.519119832384305],
				[113.00064052724665, 34.51907154071604],
				[113.00036532325772, 34.51902324843059],
				[113.00009011958787, 34.51897495552796],
				[112.99981491623709, 34.51892666200813],
				[112.99953971320538, 34.5188783678711],
				[112.99926451049276, 34.518830073116916],
				[112.99898930809921, 34.51878177774553],
				[112.99871410602476, 34.51873348175697],
				[112.99843890426939, 34.51868518515123],
				[112.99816370283311, 34.51863688792831],
				[112.99788850171593, 34.51858859008822],
				[112.99761330091785, 34.51854029163095],
				[112.99733810043887, 34.51849199255651],
				[112.99706290027899, 34.518443692864906],
				[112.99678770043822, 34.51839539255614],
				[112.99651250091655, 34.5183470916302],
				[112.996237301714, 34.51829879008708],
				[112.99596210283057, 34.51825048792682],
				[112.99568690426626, 34.51820218514939],
				[112.99541170602107, 34.51815388175481],
				[112.995136508095, 34.51810557774307],
				[112.99486131048808, 34.51805727311418],
				[112.99458611320028, 34.51800896786812],
				[112.99431091623161, 34.51796066200492],
				[112.99403571958209, 34.517912355524565],
				[112.99376052325171, 34.517864048427064],
				[112.99348532724046, 34.51781574071242],
				[112.99321013154837, 34.51776743238064],
				[112.99293493617543, 34.51771912343171],
				[112.99265974112163, 34.51767081386563],
				[112.992384546387, 34.51762250368243],
				[112.99210935197154, 34.51757419288208],
				[112.99183415787523, 34.51752588146461],
				[112.99155896409809, 34.517477569429985],
				[112.99128377064012, 34.51742925677824],
				[112.99100857750133, 34.51738094350937],
				[112.9907333846817, 34.51733262962337],
				[112.99045819218126, 34.517284315120236],
				[112.990183, 34.517236]
			]
		},
		"properties": {
			"segID": 46,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.990183, 34.517236],
				[112.98984472818432, 34.51717662284392],
				[112.98950645685082, 34.51711724475538],
				[112.98916818599952, 34.5170578657344],
				[112.98882991563038, 34.51699848578095],
				[112.98849164574345, 34.516939104895066],
				[112.98815337633873, 34.51687972307672],
				[112.98781510741622, 34.51682034032594],
				[112.98747683897591, 34.51676095664273],
				[112.98713857101784, 34.516701572027074],
				[112.98680030354198, 34.51664218647898],
				[112.98646203654836, 34.51658279999847],
				[112.98612377003698, 34.51652341258552],
				[112.98578550400784, 34.516464024240165],
				[112.98544723846095, 34.516404634962385],
				[112.98510897339631, 34.51634524475219],
				[112.98477070881394, 34.51628585360957],
				[112.98443244471382, 34.51622646153456],
				[112.98409418109598, 34.516167068527125],
				[112.98375591796042, 34.516107674587296],
				[112.98341765530715, 34.51604827971507],
				[112.98307939313618, 34.51598888391045],
				[112.9827411314475, 34.515929487173445],
				[112.98240287024112, 34.51587008950405],
				[112.98206460951704, 34.51581069090227],
				[112.98172634927526, 34.5157512913681],
				[112.98138808951582, 34.51569189090156],
				[112.98104983023869, 34.51563248950264],
				[112.9807115714439, 34.51557308717135],
				[112.98037331313145, 34.5155136839077],
				[112.98003505530136, 34.51545427971167],
				[112.9796967979536, 34.51539487458329],
				[112.97935854108817, 34.51533546852256],
				[112.97902028470513, 34.51527606152946],
				[112.97868202880446, 34.515216653604014],
				[112.97834377338614, 34.51515724474623],
				[112.9780055184502, 34.51509783495609],
				[112.97766726399665, 34.51503842423362],
				[112.9773290100255, 34.51497901257881],
				[112.97699075653672, 34.51491959999166],
				[112.97665250353036, 34.514860186472184],
				[112.9763142510064, 34.51480077202038],
				[112.97597599896484, 34.51474135663626],
				[112.97563774740571, 34.514681940319804],
				[112.97529949632901, 34.51462252307104],
				[112.97496124573473, 34.514563104889966],
				[112.9746229956229, 34.51450368577658],
				[112.97428474599349, 34.51444426573089],
				[112.97394649684655, 34.51438484475289],
				[112.97360824818205, 34.514325422842596],
				[112.97327, 34.514266]
			]
		},
		"properties": {
			"segID": 47,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.97327, 34.514266],
				[112.97292326519326, 34.51429148400238],
				[112.97257653017444, 34.514316967025096],
				[112.97222979494352, 34.51434244906814],
				[112.97188305950051, 34.51436793013153],
				[112.97153632384546, 34.514393410215234],
				[112.97118958797832, 34.51441888931927],
				[112.97084285189912, 34.51444436744365],
				[112.97049611560789, 34.51446984458835],
				[112.97014937910461, 34.51449532075337],
				[112.9698026423893, 34.514520795938715],
				[112.96945590546197, 34.514546270144386],
				[112.9691091683226, 34.51457174337037],
				[112.96876243097125, 34.514597215616675],
				[112.96841569340788, 34.51462268688329],
				[112.96806895563253, 34.514648157170235],
				[112.96772221764519, 34.51467362647748],
				[112.96737547944586, 34.514699094805046],
				[112.96702874103457, 34.51472456215293],
				[112.96668200241132, 34.51475002852111],
				[112.96633526357613, 34.514775493909596],
				[112.96598852452897, 34.51480095831841],
				[112.96564178526988, 34.5148264217475],
				[112.96529504579885, 34.514851884196915],
				[112.96494830611591, 34.51487734566662],
				[112.96460156622105, 34.514902806156634],
				[112.96425482611428, 34.514928265666946],
				[112.96390808579562, 34.51495372419755],
				[112.96356134526505, 34.51497918174845],
				[112.96321460452262, 34.515004638319645],
				[112.9628678635683, 34.515030093911136],
				[112.96252112240211, 34.515055548522916],
				[112.96217438102407, 34.515081002154986],
				[112.96182763943416, 34.51510645480734],
				[112.96148089763243, 34.51513190647998],
				[112.96113415561884, 34.51515735717291],
				[112.96078741339342, 34.51518280688613],
				[112.9604406709562, 34.51520825561962],
				[112.96009392830716, 34.5152337033734],
				[112.9597471854463, 34.51525915014744],
				[112.95940044237365, 34.51528459594178],
				[112.95905369908922, 34.51531004075638],
				[112.95870695559299, 34.51533548459126],
				[112.95836021188501, 34.515360927446416],
				[112.95801346796524, 34.51538636932184],
				[112.95766672383371, 34.515411810217536],
				[112.95731997949045, 34.5154372501335],
				[112.95697323493543, 34.515462689069736],
				[112.95662649016867, 34.51548812702622],
				[112.9562797451902, 34.51551356400298],
				[112.955933, 34.515539]
			]
		},
		"properties": {
			"segID": 48,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.955933, 34.515539],
				[112.95580254260418, 34.51557294339787],
				[112.95567208510205, 34.515606886657075],
				[112.95554162749364, 34.51564082977758],
				[112.95541116977893, 34.515674772759404],
				[112.95528071195791, 34.51570871560254],
				[112.95515025403061, 34.515742658307005],
				[112.955019795997, 34.51577660087277],
				[112.95488933785713, 34.515810543299864],
				[112.95475887961092, 34.51584448558826],
				[112.95462842125843, 34.51587842773796],
				[112.95449796279966, 34.51591236974899],
				[112.9543675042346, 34.51594631162132],
				[112.95423704556322, 34.51598025335497],
				[112.95410658678557, 34.51601419494993],
				[112.95397612790161, 34.516048136406205],
				[112.95384566891137, 34.51608207772379],
				[112.95371520981482, 34.516116018902686],
				[112.953584750612, 34.51614995994289],
				[112.95345429130288, 34.5161839008444],
				[112.95332383188745, 34.51621784160724],
				[112.95319337236575, 34.51625178223137],
				[112.95306291273774, 34.51628572271682],
				[112.95293245300344, 34.516319663063584],
				[112.95280199316286, 34.51635360327164],
				[112.95267153321598, 34.51638754334102],
				[112.95254107316282, 34.51642148327171],
				[112.95241061300335, 34.516455423063704],
				[112.9522801527376, 34.516489362716996],
				[112.95214969236557, 34.516523302231604],
				[112.95201923188723, 34.51655724160752],
				[112.9518887713026, 34.51659118084475],
				[112.9517583106117, 34.51662511994327],
				[112.95162784981451, 34.51665905890311],
				[112.95149738891101, 34.516692997724256],
				[112.95136692790123, 34.516726936406705],
				[112.95123646678518, 34.51676087495046],
				[112.9511060055628, 34.516794813355524],
				[112.95097554423417, 34.51682875162189],
				[112.95084508279923, 34.51686268974956],
				[112.95071462125802, 34.51689662773853],
				[112.9505841596105, 34.516930565588815],
				[112.9504536978567, 34.5169645033004],
				[112.95032323599662, 34.51699844087329],
				[112.95019277403026, 34.51703237830748],
				[112.9500623119576, 34.51706631560298],
				[112.94993184977865, 34.51710025275978],
				[112.94980138749341, 34.51713418977788],
				[112.9496709251019, 34.51716812665728],
				[112.94954046260409, 34.51720206339799],
				[112.94941, 34.517236]
			]
		},
		"properties": {
			"segID": 49,
			"vehicle": "short"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.949315, 34.517189],
				[112.94925338357142, 34.517287540758055],
				[112.94919176699709, 34.51738608148517],
				[112.94913015027699, 34.51748462218136],
				[112.94906853341114, 34.5175831628466],
				[112.94900691639951, 34.5176817034809],
				[112.94894529924213, 34.51778024408427],
				[112.94888368193898, 34.517878784656695],
				[112.94882206449007, 34.517977325198174],
				[112.9487604468954, 34.518075865708724],
				[112.94869882915498, 34.51817440618833],
				[112.94863721126876, 34.518272946637],
				[112.9485755932368, 34.51837148705472],
				[112.94851397505906, 34.51847002744151],
				[112.94845235673554, 34.51856856779736],
				[112.94839073826626, 34.518667108122266],
				[112.94832911965122, 34.518765648416235],
				[112.9482675008904, 34.51886418867925],
				[112.9482058819838, 34.51896272891134],
				[112.94814426293144, 34.519061269112484],
				[112.94808264373329, 34.51915980928269],
				[112.94802102438936, 34.51925834942194],
				[112.94795940489968, 34.519356889530265],
				[112.9478977852642, 34.51945542960763],
				[112.94783616548297, 34.51955396965407],
				[112.94777454555594, 34.51965250966956],
				[112.94771292548315, 34.5197510496541],
				[112.94765130526456, 34.519849589607716],
				[112.9475896849002, 34.51994812953038],
				[112.94752806439006, 34.52004666942209],
				[112.94746644373413, 34.520145209282866],
				[112.94740482293241, 34.5202437491127],
				[112.94734320198492, 34.520342288911586],
				[112.94728158089164, 34.52044082867953],
				[112.94721995965257, 34.52053936841654],
				[112.94715833826773, 34.520637908122595],
				[112.94709671673708, 34.5207364477977],
				[112.94703509506067, 34.520834987441866],
				[112.94697347323844, 34.52093352705509],
				[112.94691185127044, 34.521032066637375],
				[112.94685022915665, 34.521130606188706],
				[112.94678860689706, 34.521229145709086],
				[112.94672698449168, 34.52132768519853],
				[112.9466653619405, 34.52142622465703],
				[112.94660373924354, 34.521524764084575],
				[112.94654211640076, 34.52162330348118],
				[112.94648049341221, 34.52172184284683],
				[112.94641887027785, 34.52182038218155],
				[112.9463572469977, 34.52191892148531],
				[112.94629562357176, 34.52201746075812],
				[112.946234, 34.522116]
			]
		},
		"properties": {
			"segID": 50,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.946234, 34.522116],
				[112.82451881653496, 34.603168044414794],
				[112.70458510068012, 34.68680094777846],
				[112.58440899042397, 34.77031613523243],
				[112.46398958218555, 34.85371300087533],
				[112.34332597234955, 34.936990936206435],
				[112.22241725730855, 35.020149330118024],
				[112.1012625335058, 35.10318756888795],
				[111.97986089747883, 35.1861050361722],
				[111.85821144590363, 35.26890111299748],
				[111.73631327563972, 35.35157517775408],
				[111.6141654837756, 35.43412660618864],
				[111.49176716767538, 35.51655477139718],
				[111.37679438934134, 35.60042470712674],
				[111.43739319090811, 35.72003125877582],
				[111.49817417853315, 35.839607339649255],
				[111.55913865993806, 35.95915272317899],
				[111.62028795284205, 36.07866718094917],
				[111.68162338506046, 36.19815048267643],
				[111.7431462946042, 36.31760239619006],
				[111.80485802978036, 36.43702268741176],
				[111.86675994929372, 36.556411120335206],
				[111.92885342234952, 36.67576745700545],
				[111.99113982875708, 36.79509145749805],
				[112.05362055903475, 36.91438287989778],
				[112.11629701451577, 37.033641480277375],
				[112.17917060745535, 37.15286701267576],
				[112.24224276113887, 37.27205922907619],
				[112.30551490999116, 37.39121787938403],
				[112.36898849968702, 37.510342711404306],
				[112.4326649872628, 37.62943347081896],
				[112.49654584122928, 37.748489901163865],
				[112.5606325416856, 37.86751174380556],
				[112.5828068134144, 37.995407434644285],
				[112.60267639319918, 38.12380188376257],
				[112.62261598052196, 38.25219297457704],
				[112.64262614548386, 38.38058067965072],
				[112.66270746360404, 38.508964971284485],
				[112.6828605158875, 38.63734582151382],
				[112.70308588889424, 38.765723202105484],
				[112.72338417480904, 38.89409708455404],
				[112.74375597151266, 39.02246744007847],
				[112.76420188265377, 39.15083423961863],
				[112.78472251772216, 39.279197453831664],
				[112.80531849212299, 39.40755705308848],
				[112.93323303332512, 39.47081978710245],
				[113.09006184410246, 39.51646055258135],
				[113.24709639743122, 39.561890327104216],
				[113.40433633828715, 39.60710849281059],
				[113.56178130253411, 39.65211443257919],
				[113.714676, 39.66313]
			]
		},
		"properties": {
			"segID": 51,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[113.714676, 39.66313],
				[113.56326150256608, 39.652536264710115],
				[113.40729290748259, 39.607956132002336],
				[113.25152549462436, 39.56316773106637],
				[113.09595961816868, 39.51817166177537],
				[112.9405956235175, 39.4729685247149],
				[112.8064817694187, 39.414792739829466],
				[112.78607472152723, 39.287639326024724],
				[112.76574164387236, 39.160482362949594],
				[112.74548193782427, 39.03332187942561],
				[112.72529501045479, 38.90615790399841],
				[112.70518027446637, 38.77899046494111],
				[112.68513714812228, 38.65181959025774],
				[112.66516505517778, 38.52464530768654],
				[112.64526342481219, 38.39746764470339],
				[112.62543169156208, 38.27028662852489],
				[112.60566929525538, 38.143102286111706],
				[112.58597568094638, 38.01591464417165],
				[112.56635029885163, 37.888723729162855],
				[112.50797076172766, 37.769738921351085],
				[112.44465283507326, 37.651807309309184],
				[112.38153572474401, 37.53384196270217],
				[112.31861800107173, 37.41584313123762],
				[112.25589824545894, 37.29781106255213],
				[112.19337505027117, 37.17974600223334],
				[112.13104701873014, 37.06164819384168],
				[112.06891276480816, 36.94351787893182],
				[112.00697091312357, 36.82535529707393],
				[111.94522009883735, 36.70716068587463],
				[111.8836589675507, 36.588934280997734],
				[111.82228617520366, 36.47067631618471],
				[111.76110038797496, 36.35238702327493],
				[111.70010028218265, 36.23406663222572],
				[111.6392845441859, 36.115715371132055],
				[111.5786518702878, 35.99733346624615],
				[111.51820096663923, 35.87892114199674],
				[111.45793054914346, 35.760478621008204],
				[111.39783934336207, 35.64200612411939],
				[111.30081753339422, 35.54565350470136],
				[111.17998290283231, 35.46355109974439],
				[111.05939488327324, 35.38132851746354],
				[110.93905258315971, 35.29898636677581],
				[110.81895511079739, 35.21652525401604],
				[110.6991015743983, 35.13394578294401],
				[110.57949108212392, 35.0512485547516],
				[110.46012274212727, 34.96843416807024],
				[110.34099566259455, 34.88550321897821],
				[110.22210895178591, 34.80245630100819],
				[110.10346171807588, 34.719294005154815],
				[110.07895983749118, 34.598966815240615],
				[110.074081, 34.470901]
			]
		},
		"properties": {
			"segID": 52,
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[110.074081, 34.470901],
				[110.07398826869968, 34.471060761716004],
				[110.0738955370443, 34.47122052336198],
				[110.07380280503389, 34.47138028493792],
				[110.07371007266845, 34.47154004644384],
				[110.07361733994794, 34.471699807879716],
				[110.07352460687241, 34.471859569245574],
				[110.07343187344182, 34.472019330541386],
				[110.07333913965617, 34.472179091767174],
				[110.07324640551546, 34.47233885292292],
				[110.07315367101968, 34.47249861400862],
				[110.07306093616886, 34.472658375024295],
				[110.07296820096295, 34.472818135969945],
				[110.07287546540198, 34.47297789684555],
				[110.07278272948592, 34.473137657651094],
				[110.0726899932148, 34.47329741838663],
				[110.0725972565886, 34.47345717905211],
				[110.07250451960728, 34.47361693964755],
				[110.0724117822709, 34.473776700172955],
				[110.07231904457943, 34.473936460628316],
				[110.07222630653285, 34.47409622101364],
				[110.07213356813118, 34.47425598132891],
				[110.07204082937442, 34.474415741574134],
				[110.07194809026254, 34.47457550174932],
				[110.07185535079556, 34.474735261854455],
				[110.07176261097345, 34.47489502188955],
				[110.07166987079624, 34.4750547818546],
				[110.07157713026392, 34.4752145417496],
				[110.07148438937647, 34.47537430157457],
				[110.0713916481339, 34.475534061329455],
				[110.07129890653617, 34.47569382101431],
				[110.07120616458334, 34.47585358062912],
				[110.07111342227537, 34.47601334017388],
				[110.07102067961226, 34.47617309964858],
				[110.07092793659402, 34.47633285905323],
				[110.0708351932206, 34.47649261838784],
				[110.07074244949207, 34.47665237765238],
				[110.07064970540837, 34.47681213684687],
				[110.07055696096951, 34.4769718959713],
				[110.07046421617551, 34.47713165502569],
				[110.07037147102633, 34.477291414010004],
				[110.070278725522, 34.477451172924276],
				[110.0701859796625, 34.477610931768474],
				[110.07009323344782, 34.47777069054262],
				[110.07000048687797, 34.47793044924672],
				[110.06990773995294, 34.47809020788077],
				[110.06981499267273, 34.47824996644473],
				[110.06972224503733, 34.478409724938636],
				[110.06962949704675, 34.47856948336249],
				[110.06953674870098, 34.47872924171628],
				[110.069444, 34.478889]
			]
		},
		"properties": {
			"segID": 53,
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[110.069444, 34.478889],
				[110.07710482131374, 34.60670563884408],
				[110.11041366348685, 34.7241745640728],
				[110.22892978498355, 34.80722857577294],
				[110.34768484979891, 34.89016745757997],
				[110.46667974630174, 34.97299062051946],
				[110.58591536297222, 35.05569747309092],
				[110.70539258836205, 35.13828742126023],
				[110.82511231105369, 35.22075986845221],
				[110.94507541961904, 35.303114215543296],
				[111.06528280257741, 35.38534986085422],
				[111.1857353483529, 35.46746620014286],
				[111.30643394523106, 35.54946262659712],
				[111.40055213234002, 35.647362743088024],
				[111.46057787099191, 35.76568915336792],
				[111.52078243940291, 35.88398565130242],
				[111.58116710776103, 36.00225201678442],
				[111.64173315586949, 36.12048802792919],
				[111.70248187324027, 36.238693461055654],
				[111.76341455918887, 36.35686809066741],
				[111.82453252293, 36.47501168943349],
				[111.88583708367415, 36.59312402816896],
				[111.94732957072536, 36.71120487581526],
				[112.00901132357981, 36.829253999420324],
				[112.0708836920256, 36.947271164118426],
				[112.13294803624346, 37.06525613310982],
				[112.19520572690853, 37.18320866764015],
				[112.25765814529319, 37.30112852697959],
				[112.32030668337113, 37.419015468401696],
				[112.38315274392218, 37.53686924716216],
				[112.44619774063854, 37.654689616477036],
				[112.5094430982319, 37.772476327501046],
				[112.56678119719555, 37.891521121087365],
				[112.58638405136394, 38.01855655775572],
				[112.60605498244783, 38.1455887288032],
				[112.62579453832089, 38.27261760786355],
				[112.64560327199513, 38.39964316832201],
				[112.66548174168462, 38.526665383312114],
				[112.68543051087005, 38.65368422571267],
				[112.70545014836429, 38.78069966814444],
				[112.72554122837882, 38.90771168296704],
				[112.74570433059118, 39.034720242275526],
				[112.7659400402135, 39.16172531789717],
				[112.78624894806178, 39.28872688138802],
				[112.80663165062654, 39.415724904029496],
				[112.94154417044999, 39.47324531030367],
				[113.09671944261696, 39.518392080298206],
				[113.25209610188868, 39.563332285297314],
				[113.40767380409045, 39.60806532691716],
				[113.56345219631488, 39.65259060748303],
				[113.714676, 39.66313]
			]
		},
		"properties": {
			"segID": 54,
			"vehicle": "abrupt"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[113.714676, 39.66313],
				[113.95051840450813, 39.530740062282064],
				[114.18546149341788, 39.39787536938113],
				[114.42156030069815, 39.267108320521],
				[114.67995016387614, 39.16476050906525],
				[114.93758709848717, 39.06184376635749],
				[115.19447191765092, 38.9583618296275],
				[115.45060550450418, 38.854318427389],
				[115.58734559787402, 38.6724422026027],
				[115.67372592193479, 38.45798877530849],
				[115.75959411271417, 38.24347230005602],
				[115.84495695016328, 38.028893629673796],
				[115.92982111269227, 37.81425360375751],
				[116.01419317912408, 37.59955304893527],
				[116.098079630606, 37.38479277912696],
				[116.18148685247967, 37.16997359579756],
				[116.26442113611094, 36.955096288204714],
				[116.34688868068031, 36.740161633640675],
				[116.42889559493509, 36.52517039766883],
				[116.51044789890408, 36.3101233343548],
				[116.59155152557575, 36.0950211864924],
				[116.67221232254077, 35.87986468582454],
				[116.75243605359971, 35.664654553259226],
				[116.83222840033686, 35.44939149908061],
				[116.91159496366095, 35.234076223155625],
				[116.9905412653134, 35.01870941513579],
				[117.06907274934521, 34.80329175465474],
				[117.1471947835629, 34.587823911521376],
				[117.22491266094443, 34.37230654590882],
				[117.33299022095272, 34.16763971868177],
				[117.46804002309673, 33.97260794335769],
				[117.60247150200864, 33.77742932940138],
				[117.73629153642452, 33.58210561892162],
				[117.86950693184085, 33.38663853278697],
				[118.00212442146801, 33.19102977095966],
				[118.13415066717369, 32.99528101282407],
				[118.26559226041603, 32.79939391750987],
				[118.39645572316707, 32.60337012420987],
				[118.52674750882585, 32.407211252492786],
				[118.65647400312183, 32.210918902610835],
				[118.80844194095377, 32.03098273694862],
				[119.01666342828757, 31.891897570446503],
				[119.22425606203376, 31.75247399468846],
				[119.43122362557303, 31.612714857689284],
				[119.63756990640134, 31.47262298919941],
				[119.84329869562269, 31.332201200779306],
				[119.90517694015732, 31.116008093536948],
				[119.95979265623708, 30.896097520341232],
				[120.01415805700816, 30.67616411317891],
				[120.06827642510176, 30.456208173818332],
				[120.122151, 30.23623]
			]
		},
		"properties": {
			"segID": 55,
			"vehicle": "abrupt"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[120.129104, 30.240161],
				[120.07288773969542, 30.46310223376023],
				[120.01641358494278, 30.686019253449498],
				[119.95967806404296, 30.90891173042119],
				[119.90267765848226, 31.131779331523433],
				[119.82576587336759, 31.344197556748853],
				[119.61694093372999, 31.486662169119445],
				[119.40747973860758, 31.628786756042846],
				[119.19737832682459, 31.77056837750683],
				[118.98663274109244, 31.91200407420141],
				[118.77523902855697, 32.0530908674392],
				[118.63394870566859, 32.24507303830049],
				[118.50220285939808, 32.44423979299345],
				[118.36987366619148, 32.643268788476746],
				[118.2369544394109, 32.84215834861394],
				[118.10343842046781, 33.04090677671961],
				[117.96931877784894, 33.23951235522704],
				[117.83458860613105, 33.43797334535061],
				[117.69924092498489, 33.63628798674228],
				[117.56326867816819, 33.83445449714246],
				[117.4266647325075, 34.032471072025025],
				[117.28942187686937, 34.23033588423624],
				[117.04960799215095, 34.3197655613934],
				[116.7834237923598, 34.38109046860468],
				[116.51685126774221, 34.44183820918076],
				[116.24989266111041, 34.502006628244644],
				[115.98255026430462, 34.561593582711346],
				[115.71482641822597, 34.62059694156851],
				[115.44672351285763, 34.67901458615797],
				[115.17824398727487, 34.736844410458076],
				[114.90939032964333, 34.79408432136667],
				[114.64016507720555, 34.85073223898472],
				[114.37057081625565, 34.906786096900504],
				[114.09707267272454, 34.87625313158825],
				[113.82342945215663, 34.83583168886407],
				[113.55005683868144, 34.79479809345479],
				[113.27695820214751, 34.753153888443215],
				[113.00413687321749, 34.710900635457484],
				[112.7315961430666, 34.66803991443461],
				[112.45933926309255, 34.6245733233826],
				[112.25970222446018, 34.77995384072048],
				[112.06093798733893, 34.93950205441092],
				[111.8560251623454, 35.07160769369512],
				[111.60529079306026, 34.972139799417064],
				[111.35516620341853, 34.87215780211193],
				[111.10565076682971, 34.771664856032785],
				[110.85674380587542, 34.67066410987336],
				[110.60767207898054, 34.576593518364554],
				[110.34205639796356, 34.6418949094996],
				[110.08277917799798, 34.698946723397356],
				[110.074081, 34.470901]
			]
		},
		"properties": {
			"segID": 56,
			"vehicle": "abrupt"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[119.286967, 26.072735],
				[119.28665307365229, 26.072991116640797],
				[119.28633914593132, 26.073247232602565],
				[119.28602521683703, 26.073503347885268],
				[119.28571128636943, 26.073759462488905],
				[119.28539735452851, 26.074015576413462],
				[119.28508342131424, 26.074271689658925],
				[119.2847694867266, 26.0745278022253],
				[119.28445555076557, 26.07478391411256],
				[119.28414161343116, 26.0750400253207],
				[119.28382767472333, 26.075296135849708],
				[119.28351373464206, 26.075552245699576],
				[119.28319979318732, 26.07580835487029],
				[119.2828858503591, 26.076064463361842],
				[119.2825719061574, 26.076320571174215],
				[119.2822579605822, 26.076576678307408],
				[119.28194401363348, 26.076832784761404],
				[119.28163006531118, 26.077088890536196],
				[119.28131611561535, 26.07734499563177],
				[119.28100216454592, 26.077601100048117],
				[119.2806882121029, 26.07785720378523],
				[119.28037425828627, 26.07811330684309],
				[119.280060303096, 26.078369409221686],
				[119.27974634653206, 26.078625510921025],
				[119.27943238859447, 26.07888161194107],
				[119.27911842928319, 26.07913771228183],
				[119.27880446859821, 26.07939381194329],
				[119.27849050653948, 26.079649910925436],
				[119.27817654310704, 26.07990600922826],
				[119.27786257830083, 26.08016210685175],
				[119.27754861212081, 26.080418203795894],
				[119.27723464456703, 26.080674300060682],
				[119.27692067563943, 26.080930395646106],
				[119.276606705338, 26.08118649055215],
				[119.2762927336627, 26.08144258477881],
				[119.27597876061355, 26.081698678326074],
				[119.27566478619052, 26.081954771193924],
				[119.27535081039358, 26.082210863382358],
				[119.27503683322273, 26.082466954891363],
				[119.27472285467792, 26.082723045720922],
				[119.27440887475916, 26.08297913587104],
				[119.27409489346643, 26.08323522534169],
				[119.27378091079972, 26.083491314132868],
				[119.27346692675899, 26.08374740224456],
				[119.27315294134422, 26.084003489676764],
				[119.27283895455538, 26.08425957642946],
				[119.27252496639252, 26.084515662502643],
				[119.27221097685556, 26.084771747896298],
				[119.2718969859445, 26.085027832610418],
				[119.27158299365934, 26.08528391664499],
				[119.271269, 26.08554]
			]
		},
		"properties": {
			"segID": "seg1",
			"vehicle": "short"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[119.271269, 26.08554],
				[119.27158299365934, 26.085283916644993],
				[119.2718969859445, 26.08502783261042],
				[119.27221097685556, 26.0847717478963],
				[119.27252496639252, 26.084515662502646],
				[119.27283895455538, 26.084259576429464],
				[119.2731529413442, 26.084003489676764],
				[119.27346692675896, 26.083747402244565],
				[119.27378091079969, 26.08349131413287],
				[119.27409489346643, 26.083235225341692],
				[119.27440887475916, 26.082979135871042],
				[119.27472285467792, 26.08272304572093],
				[119.27503683322271, 26.082466954891366],
				[119.27535081039358, 26.08221086338236],
				[119.27566478619052, 26.081954771193928],
				[119.27597876061355, 26.081698678326077],
				[119.2762927336627, 26.08144258477881],
				[119.276606705338, 26.081186490552152],
				[119.27692067563943, 26.080930395646106],
				[119.27723464456703, 26.080674300060682],
				[119.27754861212081, 26.080418203795894],
				[119.2778625783008, 26.08016210685175],
				[119.27817654310701, 26.07990600922826],
				[119.27849050653948, 26.079649910925436],
				[119.27880446859818, 26.07939381194329],
				[119.27911842928319, 26.079137712281835],
				[119.27943238859447, 26.07888161194108],
				[119.27974634653206, 26.07862551092103],
				[119.280060303096, 26.07836940922169],
				[119.28037425828627, 26.07811330684309],
				[119.2806882121029, 26.077857203785232],
				[119.28100216454592, 26.07760110004812],
				[119.28131611561535, 26.077344995631773],
				[119.28163006531118, 26.0770888905362],
				[119.28194401363348, 26.07683278476141],
				[119.2822579605822, 26.076576678307415],
				[119.2825719061574, 26.076320571174218],
				[119.2828858503591, 26.076064463361842],
				[119.2831997931873, 26.075808354870293],
				[119.28351373464203, 26.075552245699576],
				[119.28382767472333, 26.07529613584971],
				[119.28414161343116, 26.075040025320703],
				[119.28445555076557, 26.074783914112565],
				[119.2847694867266, 26.074527802225305],
				[119.28508342131424, 26.074271689658936],
				[119.28539735452851, 26.074015576413462],
				[119.28571128636943, 26.07375946248891],
				[119.28602521683703, 26.07350334788527],
				[119.28633914593132, 26.073247232602565],
				[119.28665307365229, 26.0729911166408],
				[119.286967, 26.072735]
			]
		},
		"properties": {
			"segID": "seg2",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[119.286967, 26.072735],
				[119.28807060393203, 26.070237618575298],
				[119.28917416079577, 26.067740228759533],
				[119.29027767059821, 26.065242830553988],
				[119.29138113334643, 26.062745423959942],
				[119.29248454904749, 26.060248008978675],
				[119.2935879177084, 26.05775058561148],
				[119.29469123933619, 26.055253153859635],
				[119.29579451393796, 26.052755713724423],
				[119.29689774152071, 26.05025826520713],
				[119.29800092209146, 26.047760808309036],
				[119.29820393304622, 26.045327923737865],
				[119.29667368315542, 26.04301938289725],
				[119.29514349352182, 26.04071082593549],
				[119.29361336413736, 26.038402252854866],
				[119.29208329499387, 26.036093663657656],
				[119.29055328608332, 26.03378505834615],
				[119.28902333739758, 26.031476436922627],
				[119.28749344892854, 26.02916779938936],
				[119.28596362066813, 26.02685914574863],
				[119.28443385260817, 26.024550476002723],
				[119.28290414474063, 26.02224179015391],
				[119.28137449705739, 26.01993308820448],
				[119.27984490955035, 26.017624370156703],
				[119.27831538221142, 26.015315636012865],
				[119.27678591503248, 26.01300688577524],
				[119.27525650800546, 26.01069811944611],
				[119.27372716112224, 26.008389337027747],
				[119.27219787437475, 26.006080538522433],
				[119.27066864775487, 26.003771723932438],
				[119.26913948125453, 26.001462893260047],
				[119.26761037486563, 25.99915404650754],
				[119.26547889266824, 25.9973193209005],
				[119.26313450004646, 25.995652179667776],
				[119.2607901739531, 25.993985000645093],
				[119.25844591438283, 25.99231778383632],
				[119.25610172133032, 25.99065052924531],
				[119.25375759479034, 25.98898323687595],
				[119.2514135347576, 25.987315906732075],
				[119.24906954122675, 25.985648538817568],
				[119.24672561419253, 25.983981133136272],
				[119.24438175364962, 25.982313689692067],
				[119.24203795959276, 25.9806462084888],
				[119.23969423201666, 25.978978689530344],
				[119.23735057091599, 25.977311132820553],
				[119.23500697628549, 25.97564353836329],
				[119.23266344811984, 25.973975906162412],
				[119.23031998641378, 25.972308236221785],
				[119.22797659116196, 25.97064052854527],
				[119.22563326235912, 25.96897278313672],
				[119.22328999999999, 25.967305]
			]
		},
		"properties": {
			"segID": "seg3",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[119.22329, 25.967305],
				[119.17242636582472, 26.0349802400511],
				[119.12150401077507, 26.10263765183329],
				[119.07052270640916, 26.170277161262636],
				[118.99612478027764, 26.21572698446879],
				[118.91796813613838, 26.25762195800668],
				[118.83975511617356, 26.29947460160634],
				[118.7614856330055, 26.341284806704177],
				[118.68315959951401, 26.383052464599555],
				[118.60477692883859, 26.424777466454913],
				[118.52633753438039, 26.46645970329597],
				[118.4478413298043, 26.50809906601186],
				[118.36928822904126, 26.54969544535531],
				[118.2906781462901, 26.591248731942837],
				[118.21201099601984, 26.632758816254903],
				[118.13328669297182, 26.67422558863612],
				[118.05863244398775, 26.720028747913243],
				[117.99948216270113, 26.78231802332085],
				[117.94026694240485, 26.844582707604996],
				[117.88098656178784, 26.906822707193808],
				[117.82164079907957, 26.96903792822988],
				[117.76222943204934, 27.031228276569106],
				[117.70275223800526, 27.09339365777944],
				[117.64320899379369, 27.15553397713977],
				[117.58359947579834, 27.21764913963866],
				[117.52392345993954, 27.2797390499732],
				[117.4645829626534, 27.34209520921013],
				[117.40809468527478, 27.406543146232263],
				[117.3515404910389, 27.47096829875134],
				[117.2949201446814, 27.53537057734298],
				[117.23823341036564, 27.599749892289555],
				[117.18148005168143, 27.664106153578853],
				[117.12465983164338, 27.72843927090278],
				[117.06777251268937, 27.79274915365597],
				[117.00527006990866, 27.85104890073715],
				[116.92275769968704, 27.88778144611953],
				[116.84018935969233, 27.92446483263182],
				[116.75756500039394, 27.961098950717517],
				[116.67488457267044, 27.997683690738068],
				[116.59214802781173, 28.034218942973403],
				[116.50935531752137, 28.07070459762251],
				[116.42650639391876, 28.107140544803926],
				[116.36405950192118, 28.165848067687563],
				[116.30628582528713, 28.229701670714658],
				[116.24844298729862, 28.2935309668323],
				[116.19053074634105, 28.357335861816047],
				[116.13254886022234, 28.421116261130127],
				[116.07449708617125, 28.484872069926038],
				[116.01637518083636, 28.54860319304117],
				[115.95818290028463, 28.61230953499747],
				[115.89992, 28.675991]
			]
		},
		"properties": {
			"segID": "seg4",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[115.89992, 28.675991],
				[115.84224958251909, 28.644446176745873],
				[115.78461385445537, 28.61287694741987],
				[115.7270127763091, 28.58128335863392],
				[115.66944630849791, 28.549665456950265],
				[115.61191441135732, 28.5180232888814],
				[115.55441704514135, 28.486356900890055],
				[115.49695417002305, 28.454666339389163],
				[115.439525746095, 28.422951650741833],
				[115.38213173336996, 28.391212881261303],
				[115.32477209178136, 28.359450077210916],
				[115.26744678118384, 28.32766328480411],
				[115.21015576135379, 28.295852550204376],
				[115.15289899198999, 28.264017919525223],
				[115.09567643271397, 28.23215943883015],
				[115.03848804307071, 28.20027715413265],
				[114.98133378252912, 28.168371111396162],
				[114.92421361048255, 28.13644135653404],
				[114.86712748624937, 28.10448793540954],
				[114.8100753690734, 28.072510893835812],
				[114.75305721812461, 28.040510277575844],
				[114.6960729924995, 28.008486132342487],
				[114.63912265122165, 27.976438503798377],
				[114.58220615324237, 27.944367437555975],
				[114.52532345744095, 27.9122729791775],
				[114.46847452262548, 27.880155174174938],
				[114.4116593075332, 27.848014068010023],
				[114.35487777083102, 27.815849706094216],
				[114.29812987111609, 27.783662133788667],
				[114.24141556691623, 27.75145139640425],
				[114.18473481669054, 27.71921753920149],
				[114.12774427213441, 27.692901520919122],
				[114.06767188782939, 27.719870032479477],
				[114.00756979559144, 27.74681259679311],
				[113.94743797544291, 27.77372917137326],
				[113.88727640751944, 27.800619713709175],
				[113.82708507207047, 27.827484181266225],
				[113.76686394945966, 27.854322531486034],
				[113.70661302016536, 27.88113472178653],
				[113.64633226478107, 27.90792070956212],
				[113.58602166401587, 27.934680452183745],
				[113.52568119869495, 27.961413906999024],
				[113.46531084976002, 27.988121031332344],
				[113.40491059826972, 28.014801782484987],
				[113.34448042540023, 28.04145611773522],
				[113.28402031244562, 28.06808399433843],
				[113.22353024081829, 28.094685369527244],
				[113.16301019204953, 28.121260200511596],
				[113.10246014778994, 28.147808444478912],
				[113.0418800898099, 28.17433005859415],
				[112.98127, 28.200825]
			]
		},
		"properties": {
			"segID": "seg5",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.98127, 28.200825],
				[112.97899006275236, 28.181415227768174],
				[112.97671095298374, 28.162005417783288],
				[112.97443266972249, 28.142595570089757],
				[112.97215521199811, 28.12318568473192],
				[112.96987857884109, 28.103775761754086],
				[112.96760276928305, 28.08436580120051],
				[112.96532778235665, 28.064955803115396],
				[112.96305361709565, 28.045545767542905],
				[112.96078027253486, 28.02613569452714],
				[112.95850774771017, 28.006725584112164],
				[112.95623604165853, 27.98731543634198],
				[112.95396515341793, 27.967905251260554],
				[112.95169508202746, 27.9484950289118],
				[112.94942582652722, 27.92908476933958],
				[112.94715738595845, 27.909674472587703],
				[112.94488975936333, 27.890264138699948],
				[112.94262294578523, 27.87085376772002],
				[112.94035694426846, 27.8514433596916],
				[112.93809175385843, 27.832032914658306],
				[112.93582737360158, 27.81262243266371],
				[112.93356380254546, 27.793211913751335],
				[112.93130103973857, 27.773801357964672],
				[112.92903908423051, 27.75439076534714],
				[112.92677793507191, 27.73498013594212],
				[112.92451759131445, 27.715569469792946],
				[112.92225805201086, 27.69615876694291],
				[112.91999931621487, 27.676748027435256],
				[112.91774138298125, 27.657337251313162],
				[112.91548425136585, 27.637926438619786],
				[112.91322792042551, 27.618515589398214],
				[112.91097238921812, 27.5991047036915],
				[112.90871765680257, 27.579693781542645],
				[112.90646372223881, 27.560282822994605],
				[112.9042105845878, 27.540871828090296],
				[112.90195824291153, 27.52146079687257],
				[112.89970669627301, 27.502049729384243],
				[112.89745594373628, 27.482638625668084],
				[112.89520598436636, 27.46322748576681],
				[112.89295681722932, 27.443816309723108],
				[112.89070844139226, 27.42440509757959],
				[112.88846085592326, 27.40499384937885],
				[112.88621405989144, 27.385582565163418],
				[112.88396805236688, 27.36617124497578],
				[112.88172283242073, 27.34675988885839],
				[112.87947839912513, 27.327348496853627],
				[112.87723475155319, 27.307937069003852],
				[112.87499188877906, 27.288525605351367],
				[112.8727498098779, 27.269114105938424],
				[112.87050851392583, 27.249702570807248],
				[112.868268, 27.230291]
			]
		},
		"properties": {
			"segID": "seg6",
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.868268, 27.230291],
				[112.86813646167425, 27.230319923010253],
				[112.86800492328017, 27.23034884589765],
				[112.86787338481774, 27.23037776866218],
				[112.86774184628696, 27.230406691303845],
				[112.86761030768785, 27.230435613822646],
				[112.86747876902042, 27.230464536218577],
				[112.86734723028464, 27.230493458491647],
				[112.86721569148051, 27.230522380641847],
				[112.86708415260804, 27.23055130266919],
				[112.86695261366725, 27.23058022457366],
				[112.86682107465812, 27.230609146355263],
				[112.86668953558063, 27.230638068014006],
				[112.86655799643484, 27.230666989549878],
				[112.86642645722068, 27.230695910962883],
				[112.86629491793819, 27.23072483225302],
				[112.86616337858736, 27.23075375342029],
				[112.8660318391682, 27.230782674464695],
				[112.8659002996807, 27.230811595386232],
				[112.86576876012487, 27.230840516184905],
				[112.8656372205007, 27.230869436860704],
				[112.86550568080818, 27.230898357413636],
				[112.86537414104735, 27.230927277843694],
				[112.86524260121817, 27.230956198150896],
				[112.86511106132066, 27.230985118335223],
				[112.86497952135481, 27.231014038396673],
				[112.86484798132062, 27.23104295833527],
				[112.86471644121809, 27.231071878150985],
				[112.86458490104725, 27.23110079784383],
				[112.86445336080806, 27.23112971741381],
				[112.86432182050054, 27.231158636860922],
				[112.86419028012467, 27.231187556185155],
				[112.86405873968047, 27.231216475386525],
				[112.86392719916795, 27.231245394465024],
				[112.86379565858708, 27.23127431342065],
				[112.86366411793789, 27.2313032322534],
				[112.86353257722035, 27.231332150963283],
				[112.8634010364345, 27.23136106955029],
				[112.8632694955803, 27.231389988014428],
				[112.86313795465776, 27.231418906355692],
				[112.86300641366691, 27.231447824574087],
				[112.86287487260772, 27.23147674266961],
				[112.86274333148017, 27.231505660642256],
				[112.86261179028432, 27.23153457849203],
				[112.86248024902012, 27.231563496218936],
				[112.8623487076876, 27.23159241382296],
				[112.86221716628674, 27.23162133130412],
				[112.86208562481755, 27.2316502486624],
				[112.86195408328003, 27.23167916589781],
				[112.86182254167419, 27.231708083010336],
				[112.861691, 27.231737]
			]
		},
		"properties": {
			"segID": "seg9",
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.861691, 27.231737],
				[112.86182254167419, 27.231708083010332],
				[112.86195408328003, 27.231679165897805],
				[112.86208562481755, 27.231650248662397],
				[112.86221716628674, 27.231621331304115],
				[112.86234870768759, 27.231592413822963],
				[112.86248024902012, 27.231563496218932],
				[112.86261179028432, 27.23153457849203],
				[112.86274333148017, 27.231505660642256],
				[112.8628748726077, 27.231476742669606],
				[112.86300641366691, 27.231447824574087],
				[112.86313795465776, 27.231418906355692],
				[112.8632694955803, 27.231389988014428],
				[112.8634010364345, 27.23136106955029],
				[112.86353257722035, 27.231332150963276],
				[112.86366411793789, 27.231303232253396],
				[112.86379565858707, 27.231274313420645],
				[112.86392719916795, 27.231245394465017],
				[112.86405873968046, 27.231216475386518],
				[112.86419028012466, 27.231187556185155],
				[112.86432182050052, 27.23115863686092],
				[112.86445336080806, 27.231129717413808],
				[112.86458490104724, 27.23110079784383],
				[112.86471644121809, 27.231071878150985],
				[112.86484798132061, 27.231042958335266],
				[112.8649795213548, 27.231014038396673],
				[112.86511106132066, 27.230985118335223],
				[112.86524260121817, 27.230956198150896],
				[112.86537414104735, 27.230927277843694],
				[112.86550568080818, 27.230898357413633],
				[112.8656372205007, 27.2308694368607],
				[112.86576876012487, 27.230840516184895],
				[112.8659002996807, 27.230811595386232],
				[112.8660318391682, 27.230782674464695],
				[112.86616337858736, 27.23075375342029],
				[112.86629491793819, 27.23072483225302],
				[112.86642645722067, 27.23069591096288],
				[112.86655799643482, 27.23066698954987],
				[112.86668953558063, 27.230638068014006],
				[112.8668210746581, 27.230609146355263],
				[112.86695261366725, 27.23058022457366],
				[112.86708415260804, 27.230551302669188],
				[112.86721569148051, 27.23052238064185],
				[112.86734723028462, 27.230493458491644],
				[112.86747876902041, 27.230464536218577],
				[112.86761030768785, 27.230435613822642],
				[112.86774184628696, 27.23040669130384],
				[112.86787338481773, 27.23037776866218],
				[112.86800492328017, 27.23034884589765],
				[112.86813646167425, 27.230319923010253],
				[112.868268, 27.230291]
			]
		},
		"properties": {
			"segID": "seg10",
			"vehicle": "abrupt"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.868268, 27.230291],
				[112.86813646167425, 27.230319923010253],
				[112.86800492328017, 27.23034884589765],
				[112.86787338481774, 27.23037776866218],
				[112.86774184628696, 27.230406691303845],
				[112.86761030768785, 27.230435613822646],
				[112.86747876902042, 27.230464536218577],
				[112.86734723028464, 27.230493458491647],
				[112.86721569148051, 27.230522380641847],
				[112.86708415260804, 27.23055130266919],
				[112.86695261366725, 27.23058022457366],
				[112.86682107465812, 27.230609146355263],
				[112.86668953558063, 27.230638068014006],
				[112.86655799643484, 27.230666989549878],
				[112.86642645722068, 27.230695910962883],
				[112.86629491793819, 27.23072483225302],
				[112.86616337858736, 27.23075375342029],
				[112.8660318391682, 27.230782674464695],
				[112.8659002996807, 27.230811595386232],
				[112.86576876012487, 27.230840516184905],
				[112.8656372205007, 27.230869436860704],
				[112.86550568080818, 27.230898357413636],
				[112.86537414104735, 27.230927277843694],
				[112.86524260121817, 27.230956198150896],
				[112.86511106132066, 27.230985118335223],
				[112.86497952135481, 27.231014038396673],
				[112.86484798132062, 27.23104295833527],
				[112.86471644121809, 27.231071878150985],
				[112.86458490104725, 27.23110079784383],
				[112.86445336080806, 27.23112971741381],
				[112.86432182050054, 27.231158636860922],
				[112.86419028012467, 27.231187556185155],
				[112.86405873968047, 27.231216475386525],
				[112.86392719916795, 27.231245394465024],
				[112.86379565858708, 27.23127431342065],
				[112.86366411793789, 27.2313032322534],
				[112.86353257722035, 27.231332150963283],
				[112.8634010364345, 27.23136106955029],
				[112.8632694955803, 27.231389988014428],
				[112.86313795465776, 27.231418906355692],
				[112.86300641366691, 27.231447824574087],
				[112.86287487260772, 27.23147674266961],
				[112.86274333148017, 27.231505660642256],
				[112.86261179028432, 27.23153457849203],
				[112.86248024902012, 27.231563496218936],
				[112.8623487076876, 27.23159241382296],
				[112.86221716628674, 27.23162133130412],
				[112.86208562481755, 27.2316502486624],
				[112.86195408328003, 27.23167916589781],
				[112.86182254167419, 27.231708083010336],
				[112.861691, 27.231737]
			]
		},
		"properties": {
			"segID": "seg11",
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.861691, 27.231737],
				[112.84503091571851, 27.395903620594577],
				[112.8208815195753, 27.567490074045146],
				[112.79665649296082, 27.73907233862417],
				[112.77235504534902, 27.91065037044368],
				[112.74797637853516, 28.08222412518713],
				[112.72351968652319, 28.253793558103094],
				[112.69898415541137, 28.425358623998857],
				[112.67436896327595, 28.59691927723388],
				[112.64967328005315, 28.768475471713177],
				[112.62489626741906, 28.940027160880597],
				[112.60003707866775, 29.111574297711964],
				[112.57509485858729, 29.283116834708146],
				[112.55006874333387, 29.45465472388794],
				[112.52495786030367, 29.626187916780964],
				[112.4997613280029, 29.797716364420264],
				[112.47447825591549, 29.969240017334975],
				[112.44910774436859, 30.140758825542722],
				[112.42364888439607, 30.31227273854193],
				[112.39810075759947, 30.48378170530413],
				[112.37246243600681, 30.655285674265873],
				[112.34673298192901, 30.826784593320767],
				[112.32091144781378, 30.998278409811263],
				[112.2949968760973, 31.16976707052028],
				[112.22839467261957, 31.33288699840015],
				[112.15993623627249, 31.49563701734087],
				[112.09123912370423, 31.65835047174778],
				[112.02230102508203, 31.821026999422628],
				[111.95311960831914, 31.983666234509236],
				[111.88369251877907, 32.14626780744238],
				[111.81401737897536, 32.3088313448958],
				[111.74409178826733, 32.471356469729486],
				[111.67391332255131, 32.63384280093601],
				[111.60347953394752, 32.79628995358619],
				[111.53278795048244, 32.9586975387738],
				[111.38290820624042, 33.068978674954046],
				[111.21101593529201, 33.164757822004255],
				[111.03874815601002, 33.260300299905865],
				[110.8661036129152, 33.35560472670586],
				[110.69308105864057, 33.45066971521455],
				[110.51967925412612, 33.5454938730157],
				[110.3458969688159, 33.640075802477604],
				[110.17173298085733, 33.73441410076495],
				[109.99718607730286, 33.82850735985151],
				[109.82225505431377, 33.922354166533665],
				[109.6979671004127, 34.05911259176473],
				[109.58137294324631, 34.202592209546985],
				[109.46438137302155, 34.345961146353424],
				[109.66382051511364, 34.391233892296384],
				[109.86652589250498, 34.435228854610756],
				[110.069444, 34.478889]
			]
		},
		"properties": {
			"segID": "seg12",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[110.06944, 34.47888],
				[110.06953282869867, 34.47872042171924],
				[110.06962565704222, 34.47856084336829],
				[110.06971848503069, 34.478401264947166],
				[110.06981131266406, 34.47824168645585],
				[110.06990413994234, 34.47808210789435],
				[110.06999696686553, 34.47792252926268],
				[110.07008979343364, 34.47776295056083],
				[110.07018261964667, 34.477603371788796],
				[110.07027544550462, 34.47744379294658],
				[110.0703682710075, 34.477284214034185],
				[110.07046109615531, 34.47712463505161],
				[110.07055392094804, 34.47696505599887],
				[110.07064674538572, 34.476805476875946],
				[110.07073956946833, 34.47664589768284],
				[110.07083239319589, 34.47648631841955],
				[110.07092521656838, 34.47632673908611],
				[110.07101803958584, 34.47616715968249],
				[110.07111086224825, 34.476007580208694],
				[110.0712036845556, 34.475848000664726],
				[110.07129650650792, 34.47568842105059],
				[110.0713893281052, 34.475528841366284],
				[110.07148214934746, 34.4753692616118],
				[110.07157497023466, 34.47520968178714],
				[110.07166779076685, 34.47505010189232],
				[110.07176061094403, 34.474890521927335],
				[110.07185343076617, 34.47473094189218],
				[110.0719462502333, 34.474571361786865],
				[110.07203906934541, 34.474411781611366],
				[110.0721318881025, 34.47425220136572],
				[110.0722247065046, 34.4740926210499],
				[110.07231752455169, 34.473933040663916],
				[110.07241034224378, 34.47377346020777],
				[110.07250315958088, 34.47361387968147],
				[110.07259597656297, 34.47345429908499],
				[110.07268879319008, 34.473294718418366],
				[110.0727816094622, 34.47313513768157],
				[110.07287442537933, 34.472975556874616],
				[110.07296724094148, 34.47281597599751],
				[110.07306005614866, 34.47265639505024],
				[110.07315287100086, 34.47249681403281],
				[110.07324568549808, 34.47233723294522],
				[110.07333849964034, 34.472177651787476],
				[110.07343131342765, 34.47201807055959],
				[110.07352412686, 34.471858489261535],
				[110.07361693993737, 34.47169890789333],
				[110.07370975265978, 34.47153932645495],
				[110.07380256502726, 34.47137974494645],
				[110.07389537703979, 34.47122016336779],
				[110.07398818869737, 34.47106058171897],
				[110.074081, 34.470901]
			]
		},
		"properties": {
			"segID": "seg13",
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[110.074081, 34.470901],
				[110.07398818869737, 34.47106058171897],
				[110.07389537703978, 34.47122016336779],
				[110.07380256502725, 34.471379744946454],
				[110.07370975265978, 34.47153932645496],
				[110.07361693993737, 34.47169890789332],
				[110.07352412685998, 34.471858489261535],
				[110.07343131342765, 34.472018070559585],
				[110.07333849964034, 34.472177651787476],
				[110.07324568549808, 34.47233723294523],
				[110.07315287100086, 34.47249681403281],
				[110.07306005614866, 34.47265639505024],
				[110.07296724094148, 34.47281597599751],
				[110.07287442537933, 34.472975556874616],
				[110.0727816094622, 34.473135137681574],
				[110.07268879319008, 34.473294718418366],
				[110.07259597656297, 34.473454299085],
				[110.07250315958086, 34.47361387968147],
				[110.07241034224377, 34.47377346020778],
				[110.07231752455169, 34.473933040663916],
				[110.0722247065046, 34.474092621049905],
				[110.0721318881025, 34.47425220136572],
				[110.07203906934541, 34.47441178161138],
				[110.0719462502333, 34.474571361786865],
				[110.07185343076617, 34.47473094189218],
				[110.07176061094403, 34.474890521927335],
				[110.07166779076685, 34.47505010189233],
				[110.07157497023466, 34.47520968178715],
				[110.07148214934746, 34.4753692616118],
				[110.0713893281052, 34.475528841366284],
				[110.07129650650792, 34.47568842105059],
				[110.0712036845556, 34.475848000664726],
				[110.07111086224825, 34.4760075802087],
				[110.07101803958584, 34.47616715968249],
				[110.07092521656838, 34.47632673908611],
				[110.07083239319589, 34.47648631841956],
				[110.07073956946832, 34.47664589768284],
				[110.07064674538572, 34.47680547687594],
				[110.07055392094804, 34.47696505599887],
				[110.07046109615531, 34.47712463505161],
				[110.0703682710075, 34.477284214034185],
				[110.07027544550462, 34.47744379294658],
				[110.07018261964667, 34.47760337178879],
				[110.07008979343364, 34.47776295056083],
				[110.06999696686553, 34.47792252926268],
				[110.06990413994234, 34.47808210789435],
				[110.06981131266406, 34.47824168645585],
				[110.06971848503069, 34.478401264947166],
				[110.06962565704222, 34.478560843368285],
				[110.06953282869866, 34.47872042171924],
				[110.06944, 34.47888]
			]
		},
		"properties": {
			"segID": "seg14",
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[110.069444, 34.478889],
				[110.06921413069988, 34.479708290552786],
				[110.06898425688497, 34.48052758067519],
				[110.0687543785551, 34.48134687036719],
				[110.06852449571, 34.48216615962877],
				[110.06829460834946, 34.48298544845991],
				[110.06806471647326, 34.48380473686058],
				[110.06783482008116, 34.48462402483075],
				[110.06760491917296, 34.48544331237043],
				[110.06737501374842, 34.486262599479566],
				[110.06714510380732, 34.48708188615816],
				[110.06691518934943, 34.48790117240617],
				[110.06668527037452, 34.48872045822359],
				[110.06645534688238, 34.48953974361039],
				[110.06622541887276, 34.49035902856655],
				[110.06599548634547, 34.49117831309206],
				[110.06576554930028, 34.49199759718687],
				[110.06553560773693, 34.49281688085098],
				[110.06530566165523, 34.49363616408438],
				[110.06507571105494, 34.494455446887024],
				[110.06484575593583, 34.495274729258895],
				[110.0646157962977, 34.49609401119997],
				[110.06438583214032, 34.496913292710246],
				[110.06415586346343, 34.497732573789676],
				[110.06392589026684, 34.49855185443826],
				[110.06369591255032, 34.499371134655966],
				[110.06346593031363, 34.50019041444277],
				[110.06323594355655, 34.50100969379864],
				[110.06300595227887, 34.501828972723594],
				[110.06277595648035, 34.50264825121757],
				[110.06254595616078, 34.503467529280556],
				[110.06231595131992, 34.50428680691254],
				[110.06208594195753, 34.50510608411349],
				[110.06185592807343, 34.5059253608834],
				[110.06162590966737, 34.50674463722224],
				[110.0613958867391, 34.50756391312998],
				[110.06116585928844, 34.50838318860659],
				[110.06093582731513, 34.50920246365209],
				[110.06070579081899, 34.5100217382664],
				[110.06047574979974, 34.510841012449546],
				[110.06024570425718, 34.51166028620149],
				[110.06001565419109, 34.51247955952221],
				[110.05978559960124, 34.513298832411685],
				[110.0595555404874, 34.51411810486989],
				[110.05932547684934, 34.51493737689681],
				[110.05909540868686, 34.515756648492406],
				[110.05886533599971, 34.516575919656674],
				[110.05863525878767, 34.51739519038959],
				[110.05840517705053, 34.518214460691134],
				[110.05817509078805, 34.519033730561276],
				[110.057945, 34.519853]
			]
		},
		"properties": {
			"segID": "seg15",
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[110.057945, 34.519853],
				[110.0584451668308, 34.52355457013622],
				[110.05894537811898, 34.527256138233476],
				[110.05944563387465, 34.53095770429135],
				[110.05994593410789, 34.53465926830935],
				[110.0604462788288, 34.53836083028701],
				[110.06094666804745, 34.54206239022388],
				[110.06144710177392, 34.5457639481195],
				[110.06194758001831, 34.54946550397339],
				[110.06244810279073, 34.553167057785096],
				[110.06294867010126, 34.55686860955415],
				[110.06344928196, 34.5605701592801],
				[110.06394993837705, 34.56427170696246],
				[110.06445063936253, 34.56797325260079],
				[110.06495138492653, 34.57167479619461],
				[110.06545217507917, 34.57537633774344],
				[110.06595300983057, 34.579077877246846],
				[110.06645388919081, 34.58277941470435],
				[110.06695481317004, 34.58648095011548],
				[110.06745578177836, 34.59018248347978],
				[110.06795679502592, 34.59388401479677],
				[110.06845785292282, 34.597585544066014],
				[110.06895895547919, 34.601287071287025],
				[110.06946010270515, 34.60498859645933],
				[110.06996129461086, 34.608690119582484],
				[110.07046253120645, 34.612391640656014],
				[110.07096381250201, 34.61609315967944],
				[110.07146513850776, 34.619794676652305],
				[110.07196650923379, 34.623496191574155],
				[110.07246792469024, 34.62719770444452],
				[110.07296938488727, 34.63089921526291],
				[110.07347088983505, 34.63460072402888],
				[110.07397243954371, 34.63830223074195],
				[110.0744740340234, 34.64200373540167],
				[110.0749756732843, 34.64570523800757],
				[110.07547735733655, 34.649406738559165],
				[110.07597908619033, 34.653108237056],
				[110.07648085985578, 34.65680973349762],
				[110.0769826783431, 34.66051122788353],
				[110.07748454166243, 34.66421272021329],
				[110.07798644982397, 34.667914210486416],
				[110.07848840283788, 34.67161569870244],
				[110.07899040071433, 34.6753171848609],
				[110.07949244346352, 34.679018668961334],
				[110.07999453109562, 34.68272015100325],
				[110.08049666362082, 34.6864216309862],
				[110.08099884104932, 34.69012310890972],
				[110.08150106339129, 34.693824584773324],
				[110.08200333065692, 34.69752605857655],
				[110.08250564285643, 34.70122753031893],
				[110.083008, 34.704929]
			]
		},
		"properties": {
			"segID": "seg16",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[110.083008, 34.704929],
				[110.13598615695324, 34.69209022493622],
				[110.18894786650459, 34.67922853251052],
				[110.24189311235148, 34.666343940830096],
				[110.29482187827249, 34.65343646801854],
				[110.34773414812753, 34.640506132215656],
				[110.40062990585758, 34.62755295157743],
				[110.45350913548481, 34.614576944275875],
				[110.50637182111245, 34.60157812849899],
				[110.55921794692482, 34.588556522450666],
				[110.61204749718725, 34.57551214435058],
				[110.66190452823322, 34.59107676445099],
				[110.71129999224136, 34.61129744425308],
				[110.76071951218196, 34.631498206838835],
				[110.81016309417427, 34.651679027477265],
				[110.8596307442606, 34.67183988142782],
				[110.9091224684061, 34.69198074394048],
				[110.95863827249859, 34.71210159025579],
				[111.00817816234824, 34.732202395604936],
				[111.0577421436874, 34.75228313520984],
				[111.1073302221703, 34.772343784283194],
				[111.15694240337284, 34.792384318028546],
				[111.2065786927924, 34.81240471164038],
				[111.25623909584749, 34.83240494030415],
				[111.30592361787765, 34.8523849791964],
				[111.3556322641431, 34.87234480348479],
				[111.40536503982455, 34.89228438832821],
				[111.45512195002297, 34.912203708876774],
				[111.50490299975934, 34.932102740272],
				[111.5547081939744, 34.951981457646816],
				[111.60453753752844, 34.97183983612562],
				[111.65439103520102, 34.99167785082436],
				[111.70426869169077, 35.01149547685067],
				[111.75417051161513, 35.031292689303875],
				[111.80409649951015, 35.05106946327507],
				[111.85404665983019, 35.07082577384721],
				[111.89962397440254, 35.06833590088308],
				[111.93942412591178, 35.036706018497085],
				[111.97919347183178, 35.00506315031715],
				[112.01893205954033, 34.973407321629594],
				[112.05863993638307, 34.94173855767624],
				[112.0983171496734, 34.910056883654356],
				[112.13796374669235, 34.87836232471684],
				[112.17757977468841, 34.84665490597222],
				[112.21716528087741, 34.81493465248477],
				[112.25672031244237, 34.783201589274555],
				[112.29624491653338, 34.75145574131752],
				[112.3357391402675, 34.71969713354556],
				[112.37520303072856, 34.687925790846606],
				[112.41463663496704, 34.65614173806469],
				[112.45404, 34.624345]
			]
		},
		"properties": {
			"segID": "seg17",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.45404, 34.624345],
				[112.49414070769414, 34.64364585477161],
				[112.53426008150004, 34.66293357741943],
				[112.57439813082442, 34.68220815237157],
				[112.61455486504286, 34.70146956404636],
				[112.6547302934994, 34.720717796852256],
				[112.69492442550663, 34.73995283518798],
				[112.73513727034545, 34.75917466344243],
				[112.77536883726502, 34.77838326599476],
				[112.81561913548256, 34.79757862721437],
				[112.85588817418339, 34.816760731460974],
				[112.89617596252062, 34.835929563084534],
				[112.93648250961513, 34.85508510642536],
				[112.97680782455548, 34.874227345814084],
				[113.01715191639774, 34.893356265571676],
				[113.05997636960414, 34.90492125313382],
				[113.1065868365395, 34.904873988946875],
				[113.15319723971935, 34.90480893082759],
				[113.19980755894397, 34.90472607884721],
				[113.24641777401399, 34.90462543309648],
				[113.29302786473052, 34.90450699368561],
				[113.33963781089518, 34.90437076074431],
				[113.38624759231026, 34.90421673442178],
				[113.43285718877875, 34.9040449148867],
				[113.47946658010444, 34.90385530232722],
				[113.52607574609208, 34.90364789695101],
				[113.57268466654732, 34.90342269898517],
				[113.61929332127693, 34.903179708676326],
				[113.66590169008884, 34.90291892629056],
				[113.71250975279226, 34.90264035211343],
				[113.75911748919769, 34.90234398645],
				[113.80572487911708, 34.902029829624766],
				[113.8523319023639, 34.901697881981725],
				[113.89893853875326, 34.90134814388436],
				[113.94554476810188, 34.90098061571558],
				[113.99215057022835, 34.900595297877814],
				[114.03875592495307, 34.90019219079293],
				[114.08536081209843, 34.899771294902244],
				[114.13196521148886, 34.89933261066657],
				[114.17856910295095, 34.898876138566166],
				[114.22517246631344, 34.89840187910075],
				[114.27177528140744, 34.8979098327895],
				[114.3183775280665, 34.89740000017104],
				[114.33463689387511, 34.877004065700746],
				[114.32495592173765, 34.83961320349888],
				[114.31528374054913, 34.802221575023346],
				[114.3056203302929, 34.76482918203458],
				[114.29596567100215, 34.72743602628855],
				[114.28631974275984, 34.69004210953677],
				[114.2766825256985, 34.652647433526354],
				[114.267054, 34.615252]
			]
		},
		"properties": {
			"segID": "seg19",
			"vehicle": "water"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[114.267054, 34.615252],
				[114.26928805065305, 34.62393171585743],
				[114.27152256871328, 34.63261139097753],
				[114.27375755442779, 34.64129102533856],
				[114.27599300804383, 34.649970618918815],
				[114.27822892980878, 34.65865017169652],
				[114.28046531997016, 34.6673296836499],
				[114.28270217877564, 34.6760091547572],
				[114.28493950647304, 34.68468858499662],
				[114.2871773033103, 34.693367974346344],
				[114.28941556953554, 34.702047322784566],
				[114.29165430539697, 34.710726630289464],
				[114.29389351114301, 34.71940589683918],
				[114.29613318702216, 34.72808512241187],
				[114.29837333328312, 34.736764306985656],
				[114.30061395017468, 34.74544345053866],
				[114.30285503794582, 34.754122553049],
				[114.30509659684563, 34.76280161449475],
				[114.30733862712334, 34.77148063485401],
				[114.3095811290284, 34.78015961410484],
				[114.31182410281029, 34.78883855222529],
				[114.31406754871874, 34.79751744919341],
				[114.31631146700353, 34.80619630498721],
				[114.31855585791465, 34.81487511958474],
				[114.32080072170223, 34.823553892963965],
				[114.32304605861651, 34.8322326251029],
				[114.32529186890791, 34.84091131597952],
				[114.32753815282697, 34.849589965571774],
				[114.3297849106244, 34.858268573857636],
				[114.33203214255101, 34.86694714081502],
				[114.33427984885785, 34.875625666421875],
				[114.33652802979599, 34.8843041506561],
				[114.33877668561672, 34.89298259349558],
				[114.34544992626705, 34.89755451345504],
				[114.35622757734653, 34.89831621321011],
				[114.3670054281974, 34.899076961648056],
				[114.37778347857936, 34.89983675872431],
				[114.38856172825201, 34.900595604394425],
				[114.39934017697499, 34.90135349861393],
				[114.41011882450779, 34.90211044133845],
				[114.42089767060992, 34.90286643252367],
				[114.43167671504084, 34.90362147212531],
				[114.44245595755993, 34.90437556009915],
				[114.45323539792653, 34.90512869640101],
				[114.4640150359, 34.905880880986786],
				[114.47479487123957, 34.90663211381243],
				[114.48557490370446, 34.9073823948339],
				[114.49635513305384, 34.90813172400727],
				[114.50713555904684, 34.90888010128864],
				[114.51791618144256, 34.90962752663414],
				[114.528697, 34.910374]
			]
		},
		"properties": {
			"segID": "seg20",
			"vehicle": "water"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[114.528697, 34.910374],
				[114.53149335620607, 34.910093861103505],
				[114.53428969332694, 34.90981365815737],
				[114.53708601135857, 34.909533391162704],
				[114.53988231029692, 34.90925306012059],
				[114.54267859013794, 34.90897266503215],
				[114.54547485087764, 34.9086922058985],
				[114.54827109251195, 34.908411682720725],
				[114.55106731503686, 34.90813109549995],
				[114.55386351844832, 34.90785044423724],
				[114.55665970274232, 34.90756972893376],
				[114.5594558679148, 34.907288949590566],
				[114.56225201396175, 34.9070081062088],
				[114.56504814087914, 34.906727198789554],
				[114.56784424866294, 34.90644622733394],
				[114.57064033730909, 34.90616519184306],
				[114.5734364068136, 34.90588409231801],
				[114.57623245717242, 34.905602928759926],
				[114.57902848838152, 34.90532170116989],
				[114.5818245004369, 34.90504040954903],
				[114.58462049333447, 34.904759053898445],
				[114.58741646707026, 34.90447763421924],
				[114.5902124216402, 34.90419615051253],
				[114.5930083570403, 34.90391460277943],
				[114.59493681488452, 34.90449625192038],
				[114.59513399118637, 34.9068007846779],
				[114.5953311785565, 34.90910531711697],
				[114.59552837699644, 34.911409849237536],
				[114.59572558650781, 34.913714381039554],
				[114.59592280709211, 34.916018912522965],
				[114.59612003875095, 34.91832344368776],
				[114.59631728148592, 34.92062797453386],
				[114.59651453529858, 34.92293250506124],
				[114.59671180019045, 34.925237035269845],
				[114.59690907616317, 34.92754156515962],
				[114.59710636321827, 34.92984609473055],
				[114.59730366135733, 34.93215062398256],
				[114.59750097058192, 34.934455152915625],
				[114.59769829089359, 34.93675968152968],
				[114.59789562229396, 34.93906420982469],
				[114.59809296478456, 34.94136873780062],
				[114.59829031836699, 34.94367326545741],
				[114.59848768304279, 34.945977792795034],
				[114.59868505881356, 34.948282319813416],
				[114.59888244568086, 34.95058684651253],
				[114.59907984364627, 34.952891372892324],
				[114.59927725271136, 34.95519589895276],
				[114.59947467287772, 34.9575004246938],
				[114.59967210414688, 34.95980495011538],
				[114.59986954652045, 34.96210947521746],
				[114.600067, 34.964414]
			]
		},
		"properties": {
			"segID": "seg21",
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[114.600067, 34.964414],
				[114.59938674565622, 34.95647404840583],
				[114.59870662310139, 34.94853409301982],
				[114.59802663227114, 34.94059413384382],
				[114.59734677310121, 34.93265417087967],
				[114.59666704552724, 34.924714204129224],
				[114.59598744948508, 34.91677423359434],
				[114.59530798491048, 34.90883425927687],
				[114.59807918018069, 34.904795331170476],
				[114.60707200514086, 34.907789364509064],
				[114.61606548589324, 34.910782735408795],
				[114.62505962241346, 34.913775443747596],
				[114.63405441467712, 34.91676748940343],
				[114.64304986265975, 34.919758872254235],
				[114.6520459663368, 34.92274959217796],
				[114.66104272568359, 34.92573964905255],
				[114.67004014067543, 34.928729042755954],
				[114.67903821128748, 34.931717773166135],
				[114.68803693749486, 34.934705840161044],
				[114.69703631927258, 34.937693243618625],
				[114.70603635659562, 34.94067998341687],
				[114.71503704943875, 34.943666059433696],
				[114.72403839777687, 34.9466514715471],
				[114.73304040158457, 34.94963621963503],
				[114.74204306083651, 34.95262030357547],
				[114.75104637550723, 34.95560372324638],
				[114.76005034557114, 34.958586478525724],
				[114.76905497100262, 34.96156856929148],
				[114.77806025177597, 34.96454999542164],
				[114.78706618786535, 34.96753075679418],
				[114.7958888495064, 34.97065778686409],
				[114.79929514983402, 34.97811185383361],
				[114.80270207030767, 34.98556582566443],
				[114.80610961120418, 34.99301970231287],
				[114.80951777280048, 35.000473483735234],
				[114.81292655537358, 35.007927169887786],
				[114.81633595920076, 35.0153807607268],
				[114.81974598455929, 35.02283425620849],
				[114.82315663172665, 35.03028765628907],
				[114.82656790098045, 35.03774096092471],
				[114.8299797925984, 35.045194170071625],
				[114.83339230685834, 35.0526472836859],
				[114.8368054440383, 35.0601003017237],
				[114.8402192044164, 35.067553224141115],
				[114.8436335882708, 35.07500605089421],
				[114.84704859588001, 35.082458781939074],
				[114.8504642275225, 35.0899114172317],
				[114.85388048347686, 35.09736395672813],
				[114.85729736402195, 35.10481640038435],
				[114.86071486943663, 35.11226874815632],
				[114.86413299999998, 35.119721]
			]
		},
		"properties": {
			"segID": "seg22",
			"vehicle": "water"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[114.864133, 35.119721],
				[114.87090714135512, 35.12543590767355],
				[114.87768223339337, 35.131150438391636],
				[114.88445827638697, 35.13686459202143],
				[114.89123527060814, 35.14257836843009],
				[114.8980132163292, 35.148291767484686],
				[114.90479211382252, 35.1540047890523],
				[114.91157196336046, 35.15971743299993],
				[114.91835276521547, 35.165429699194554],
				[114.92513451966003, 35.17114158750309],
				[114.93191722696665, 35.17685309779241],
				[114.93870088740789, 35.18256422992936],
				[114.9454855012564, 35.18827498378074],
				[114.95227106878475, 35.19398535921327],
				[114.95905759026572, 35.199695356093684],
				[114.96584506597202, 35.20540497428864],
				[114.9726334961764, 35.21111421366474],
				[114.9794228811517, 35.21682307408858],
				[114.98621322117081, 35.22253155542668],
				[114.99300451650663, 35.22823965754552],
				[114.9997967674321, 35.233947380311555],
				[115.00658997422023, 35.23965472359118],
				[115.01338413714403, 35.24536168725076],
				[115.02017925647664, 35.25106827115658],
				[115.02697533249113, 35.256774475174936],
				[115.03377236546072, 35.26248029917203],
				[115.04057035565856, 35.268185743014065],
				[115.04736930335797, 35.27389080656716],
				[115.0541692088322, 35.279595489697414],
				[115.06097007235465, 35.28529979227089],
				[115.06777189419863, 35.29100371415356],
				[115.07457467463762, 35.296707255211416],
				[115.08137841394506, 35.30241041531036],
				[115.0881831123945, 35.30811319431627],
				[115.09498877025945, 35.31381559209496],
				[115.10179538781357, 35.31951760851224],
				[115.10860296533043, 35.32521924343385],
				[115.11541150308376, 35.33092049672546],
				[115.1222210013473, 35.33662136825275],
				[115.12903146039478, 35.342321857881316],
				[115.13584288050006, 35.34802196547672],
				[115.14265526193695, 35.35372169090449],
				[115.14946860497939, 35.359421034030106],
				[115.15628290990126, 35.365119994719],
				[115.16309817697665, 35.37081857283655],
				[115.16991440647949, 35.37651676824812],
				[115.17673159868389, 35.38221458081898],
				[115.18354975386397, 35.38791201041442],
				[115.19036887229387, 35.393609056899614],
				[115.19718895424779, 35.39930572013978],
				[115.20400999999998, 35.405002]
			]
		},
		"properties": {
			"segID": "seg23",
			"vehicle": "water"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[115.20401, 35.405002],
				[115.15722396179413, 35.377825677644786],
				[115.11046943876133, 35.35063133278258],
				[115.06374639886221, 35.323418995653654],
				[115.01705481001716, 35.29618869646131],
				[114.97039464010658, 35.26894046537184],
				[114.92376585697133, 35.24167433251468],
				[114.87716842841303, 35.21439032798223],
				[114.83060232219447, 35.18708848183],
				[114.78406750603979, 35.15976882407649],
				[114.73756394763501, 35.132431384703295],
				[114.6910916146283, 35.10507619365503],
				[114.64465047463027, 35.077703280839366],
				[114.59824049521436, 35.05031267612703],
				[114.55186164391718, 35.0229044093518],
				[114.50551388823887, 34.9954785103105],
				[114.45919719564333, 34.96803500876302],
				[114.41291153355868, 34.940573934432294],
				[114.36665686937754, 34.91309531700434],
				[114.31585987996282, 34.89742799810513],
				[114.25876451121033, 34.89804899463571],
				[114.20166829767678, 34.89864329334867],
				[114.14457127644991, 34.89921089326751],
				[114.08747348462278, 34.89975179345955],
				[114.03037495929348, 34.90026599303596],
				[113.97327573756493, 34.90075349115171],
				[113.91617585654463, 34.901214287005665],
				[113.85907535334441, 34.90164837984055],
				[113.8019742650802, 34.90205576894292],
				[113.74487262887178, 34.90243645364324],
				[113.6877704818425, 34.9027904333158],
				[113.63066786111912, 34.9031177073788],
				[113.57356480383145, 34.90341827529432],
				[113.51646134711223, 34.90369213656832],
				[113.45935752809677, 34.90393929075062],
				[113.40225338392283, 34.90415973743501],
				[113.34514895173024, 34.904353476259075],
				[113.28804426866076, 34.90452050690436],
				[113.2309393718578, 34.9046608290963],
				[113.17383429846616, 34.90477444260425],
				[113.1167290856318, 34.9048613472414],
				[113.05962377050163, 34.90492154286492],
				[113.03371773699659, 34.8735463122064],
				[113.02221695140948, 34.8276749106078],
				[113.01072897094969, 34.78180242796204],
				[112.9992537598404, 34.73592886731489],
				[112.98779128241424, 34.690054231702646],
				[112.97634150311283, 34.6441785241522],
				[112.96490438648648, 34.59830174768104],
				[112.95347989719352, 34.55242390529735],
				[112.942068, 34.506545]
			]
		},
		"properties": {
			"segID": "seg24",
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.94206, 34.50654],
				[112.94316728009208, 34.506791502258054],
				[112.94427456686677, 34.50704299452632],
				[112.94538186032385, 34.507294476804645],
				[112.94648916046319, 34.50754594909287],
				[112.94759646728463, 34.507797411390854],
				[112.94870378078798, 34.50804886369843],
				[112.94981110097311, 34.50830030601545],
				[112.95091842783984, 34.50855173834175],
				[112.95202576138801, 34.50880316067719],
				[112.95313310161745, 34.509054573021615],
				[112.95424044852803, 34.509305975374865],
				[112.95534780211953, 34.50955736773677],
				[112.95645516239186, 34.50980875010721],
				[112.9575625293448, 34.51006012248601],
				[112.9586699029782, 34.51031148487301],
				[112.95977728329193, 34.51056283726807],
				[112.96088467028578, 34.51081417967102],
				[112.9619920639596, 34.511065512081736],
				[112.96309946431326, 34.51131683450003],
				[112.96420687134656, 34.51156814692576],
				[112.96531428505936, 34.51181944935878],
				[112.96642170545148, 34.51207074179893],
				[112.96752913252278, 34.51232202424605],
				[112.96863656627308, 34.512573296700005],
				[112.96942190653839, 34.51201229241255],
				[112.97013562267043, 34.511270690505526],
				[112.97084932609914, 34.51052908444794],
				[112.97156301682499, 34.509787474239964],
				[112.97227669484849, 34.50904585988181],
				[112.97299036017019, 34.50830424137363],
				[112.97370401279053, 34.507562618715646],
				[112.97441765271007, 34.50682099190803],
				[112.9751312799293, 34.506079360950984],
				[112.97584489444873, 34.50533772584467],
				[112.97655849626885, 34.504596086589316],
				[112.9772720853902, 34.503854443185084],
				[112.97798566181326, 34.50311279563216],
				[112.97869922553853, 34.50237114393075],
				[112.97941277656655, 34.501629488081036],
				[112.9801263148978, 34.500887828083194],
				[112.9808398405328, 34.50014616393744],
				[112.98155335347205, 34.499404495643944],
				[112.98226685371607, 34.498662823202885],
				[112.98298034126535, 34.49792114661447],
				[112.9836938161204, 34.4971794658789],
				[112.98440727828174, 34.496437780996324],
				[112.98512072774986, 34.49569609196696],
				[112.98583416452527, 34.494954398791],
				[112.98654758860847, 34.49421270146861],
				[112.987261, 34.493471]
			]
		},
		"properties": {
			"segID": "seg25",
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.987261, 34.493471],
				[112.98744135837089, 34.49507194123536],
				[112.98762172366776, 34.496672882205694],
				[112.98780209589128, 34.49827382291101],
				[112.98798247504216, 34.49987476335125],
				[112.98816286112107, 34.50147570352641],
				[112.98834325412868, 34.50307664343645],
				[112.98852365406567, 34.50467758308137],
				[112.98870406093272, 34.506278522461116],
				[112.98888447473053, 34.50787946157566],
				[112.98906489545975, 34.509480400425005],
				[112.98924532312108, 34.5110813390091],
				[112.9894257577152, 34.512682277327926],
				[112.98960619924279, 34.51428321538146],
				[112.9897866477045, 34.51588415316967],
				[112.98996710310105, 34.51748509069253],
				[112.9901475654331, 34.519086027950024],
				[112.99032803470136, 34.52068696494211],
				[112.99050851090647, 34.52228790166878],
				[112.99147376080087, 34.52351919206021],
				[112.99305671605873, 34.52445952461678],
				[112.99463970705942, 34.525399836751824],
				[112.99622273380426, 34.526340128464135],
				[112.9978057962945, 34.52728039975257],
				[112.99938889453144, 34.52822065061593],
				[113.00097202851637, 34.52916088105302],
				[113.00255519825059, 34.53010109106271],
				[113.00413840373538, 34.53104128064378],
				[113.00572164497201, 34.53198144979507],
				[113.00730492196178, 34.532921598515394],
				[113.00888823470598, 34.533861726803565],
				[113.01047158320588, 34.534801834658424],
				[113.01205496746277, 34.53574192207876],
				[113.01363838747795, 34.536681989063425],
				[113.01522184325272, 34.53762203561122],
				[113.01680533478833, 34.53856206172098],
				[113.0183888620861, 34.53950206739152],
				[113.01997242514727, 34.54044205262165],
				[113.02155602397318, 34.541382017410214],
				[113.02313965856509, 34.54232196175599],
				[113.02472332892428, 34.54326188565785],
				[113.02630703505204, 34.54420178911457],
				[113.02789077694968, 34.545141672125],
				[113.02947455461845, 34.54608153468795],
				[113.03105836805966, 34.54702137680223],
				[113.03264221727459, 34.54796119846668],
				[113.03422610226451, 34.54890099968011],
				[113.03581002303073, 34.549840780441336],
				[113.03739397957453, 34.55078054074918],
				[113.03897797189718, 34.55172028060246],
				[113.040562, 34.55266]
			]
		},
		"properties": {
			"segID": "seg26",
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[113.040562, 34.55266],
				[113.20352804202567, 34.479333890860566],
				[113.37120689249383, 34.412014435564],
				[113.53861558563914, 34.34446655648277],
				[113.70575432892132, 34.27669119799715],
				[113.87262333974135, 34.208689303345295],
				[114.0392228453412, 34.140461814593785],
				[114.20555308270355, 34.0720096726085],
				[114.3716142984518, 34.00333381702598],
				[114.53740674875026, 33.93443518622527],
				[114.70293069920442, 33.86531471730019],
				[114.8681864247616, 33.795973346032014],
				[115.03317420961181, 33.72641200686271],
				[115.19789434708859, 33.65663163286848],
				[115.36234713957057, 33.58663315573386],
				[115.52653289838285, 33.51641750572619],
				[115.69045194369895, 33.445985611670565],
				[115.85410460444298, 33.37533840092517],
				[116.01749121819205, 33.304476799357104],
				[116.18061213107906, 33.23340173131856],
				[116.3434676976958, 33.16211411962354],
				[116.50605828099647, 33.09061488552486],
				[116.66838425220149, 33.0189049486917],
				[116.83044599070155, 32.946985227187476],
				[116.99224388396232, 32.87485663744822],
				[117.1537783274293, 32.80252009426126],
				[117.31504972443318, 32.72997651074443],
				[117.47605848609562, 32.65722679832557],
				[117.63680503123535, 32.5842718667225],
				[117.79728978627479, 32.51111262392349],
				[117.95751318514701, 32.437749976167815],
				[118.11747566920333, 32.36418482792709],
				[118.27717768712111, 32.29041808188677],
				[118.43661969481215, 32.216450638928045],
				[118.59580215533151, 32.14228339811019],
				[118.75411979951325, 32.06714303042155],
				[118.89672936485738, 31.97210255746076],
				[119.03904367557872, 31.876902974155648],
				[119.18106394148614, 31.781545196318806],
				[119.32279137339056, 31.68603013575022],
				[119.46422718302698, 31.590358700248007],
				[119.605372582978, 31.494531793619508],
				[119.7462287865983, 31.398550315692408],
				[119.86195127809266, 31.2893212042946],
				[119.89947389089036, 31.138911642559915],
				[119.93687766442798, 30.988491238960894],
				[119.97416366709864, 30.83806009173935],
				[120.01133295759335, 30.68761829823109],
				[120.04838658502553, 30.53716595487768],
				[120.08532558905323, 30.386703157238063],
				[120.122151, 30.23623]
			]
		},
		"properties": {
			"segID": "seg27",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[120.122151, 30.23623],
				[120.12229005455, 30.236308623597466],
				[120.12242910932243, 30.23638724704811],
				[120.12256816431729, 30.236465870351932],
				[120.12270721953458, 30.236544493508916],
				[120.12284627497434, 30.236623116519095],
				[120.12298533063652, 30.236701739382426],
				[120.12312438652116, 30.23678036209894],
				[120.12326344262821, 30.236858984668626],
				[120.12340249895773, 30.236937607091473],
				[120.12354155550969, 30.237016229367505],
				[120.1236806122841, 30.237094851496686],
				[120.12381966928096, 30.237173473479054],
				[120.12395872650025, 30.23725209531459],
				[120.124097783942, 30.237330717003285],
				[120.1242368416062, 30.237409338545145],
				[120.12437589949283, 30.237487959940182],
				[120.12451495760193, 30.237566581188375],
				[120.12465401593347, 30.237645202289738],
				[120.12479307448746, 30.23772382324426],
				[120.12493213326391, 30.237802444051948],
				[120.12507119226278, 30.237881064712802],
				[120.12521025148415, 30.23795968522681],
				[120.12534931092793, 30.23803830559399],
				[120.12548837059418, 30.238116925814317],
				[120.12562743048291, 30.238195545887812],
				[120.12576649059406, 30.238274165814463],
				[120.12590555092767, 30.238352785594277],
				[120.12604461148374, 30.23843140522724],
				[120.12618367226227, 30.238510024713364],
				[120.12632273326327, 30.238588644052644],
				[120.12646179448669, 30.23866726324508],
				[120.12660085593261, 30.23874588229068],
				[120.12673991760096, 30.238824501189423],
				[120.12687897949179, 30.23890311994132],
				[120.12701804160507, 30.23898173854638],
				[120.12715710394082, 30.23906035700458],
				[120.12729616649901, 30.23913897531593],
				[120.1274352292797, 30.23921759348044],
				[120.1275742922828, 30.2392962114981],
				[120.1277133555084, 30.239374829368895],
				[120.12785241895646, 30.23945344709285],
				[120.127991482627, 30.239532064669955],
				[120.12813054652, 30.2396106821002],
				[120.12826961063544, 30.239689299383596],
				[120.12840867497337, 30.239767916520133],
				[120.12854773953376, 30.23984653350982],
				[120.12868680431662, 30.239925150352654],
				[120.12882586932194, 30.240003767048634],
				[120.12896493454974, 30.240082383597745],
				[120.129104, 30.240161]
			]
		},
		"properties": {
			"segID": "seg28",
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[120.129104, 30.240161],
				[120.12896493454974, 30.240082383597752],
				[120.12882586932194, 30.240003767048623],
				[120.12868680431662, 30.23992515035266],
				[120.12854773953376, 30.23984653350982],
				[120.12840867497337, 30.23976791652014],
				[120.12826961063544, 30.239689299383596],
				[120.12813054652, 30.23961068210021],
				[120.127991482627, 30.23953206466996],
				[120.12785241895646, 30.23945344709285],
				[120.1277133555084, 30.239374829368902],
				[120.12757429228283, 30.2392962114981],
				[120.1274352292797, 30.239217593480447],
				[120.12729616649904, 30.23913897531594],
				[120.12715710394082, 30.23906035700458],
				[120.12701804160508, 30.238981738546386],
				[120.12687897949179, 30.23890311994132],
				[120.12673991760099, 30.238824501189423],
				[120.12660085593261, 30.23874588229068],
				[120.12646179448672, 30.238667263245087],
				[120.12632273326327, 30.23858864405266],
				[120.12618367226227, 30.238510024713374],
				[120.12604461148376, 30.23843140522724],
				[120.1259055509277, 30.238352785594277],
				[120.12576649059406, 30.238274165814467],
				[120.12562743048291, 30.238195545887812],
				[120.12548837059418, 30.238116925814325],
				[120.12534931092793, 30.23803830559399],
				[120.12521025148415, 30.23795968522681],
				[120.12507119226281, 30.237881064712806],
				[120.12493213326391, 30.237802444051958],
				[120.12479307448747, 30.23772382324426],
				[120.12465401593347, 30.237645202289745],
				[120.12451495760193, 30.237566581188382],
				[120.12437589949285, 30.237487959940182],
				[120.1242368416062, 30.237409338545152],
				[120.124097783942, 30.237330717003292],
				[120.12395872650028, 30.23725209531459],
				[120.12381966928096, 30.237173473479054],
				[120.1236806122841, 30.237094851496707],
				[120.12354155550972, 30.237016229367505],
				[120.12340249895773, 30.236937607091473],
				[120.12326344262824, 30.236858984668626],
				[120.12312438652116, 30.23678036209894],
				[120.12298533063652, 30.236701739382433],
				[120.12284627497434, 30.236623116519095],
				[120.12270721953458, 30.236544493508916],
				[120.12256816431729, 30.236465870351932],
				[120.12242910932243, 30.236387247048118],
				[120.12229005455, 30.236308623597473],
				[120.122151, 30.23623]
			]
		},
		"properties": {
			"segID": "seg29",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[120.122228, 30.236455],
				[120.0879698911312, 30.199896780778175],
				[120.0537372200275, 30.163329663037672],
				[120.01952993668102, 30.126753666430567],
				[119.98534799115403, 30.090168810570074],
				[119.95119133357879, 30.05357511503067],
				[119.91705991415765, 30.01697259934822],
				[119.88295368316278, 29.98036128302003],
				[119.8488725909363, 29.94374118550495],
				[119.81481658788995, 29.907112326223505],
				[119.7807856245052, 29.870474724557923],
				[119.74677965133317, 29.833828399852315],
				[119.71279861899434, 29.79717337141271],
				[119.67884247817875, 29.760509658507182],
				[119.64491117964569, 29.723837280365917],
				[119.61100467422374, 29.687156256181332],
				[119.57712291281068, 29.650466605108168],
				[119.54326584637329, 29.613768346263562],
				[119.5094334259474, 29.577061498727186],
				[119.47562560263779, 29.540346081541294],
				[119.44184232761805, 29.50362211371084],
				[119.40808355213048, 29.466889614203588],
				[119.37434922748606, 29.430148601950144],
				[119.34063930506437, 29.393399095844142],
				[119.30695373631345, 29.35664111474225],
				[119.27329247274976, 29.319874677464323],
				[119.23965546595802, 29.283099802793465],
				[119.20604266759129, 29.246316509476134],
				[119.17245402937061, 29.209524816222228],
				[119.13888950308521, 29.1727247417052],
				[119.1053490405922, 29.135916304562095],
				[119.0718325938166, 29.099099523393708],
				[119.03920557186079, 29.06172388776625],
				[119.00942074955664, 29.02254776329355],
				[118.97965851903368, 28.98336507522617],
				[118.94991883056299, 28.94417583910757],
				[118.92020163450299, 28.904980070447994],
				[118.89050688129946, 28.86577778472461],
				[118.86083452148517, 28.826568997381617],
				[118.83118450567976, 28.787353723830265],
				[118.8015567845896, 28.748131979449052],
				[118.77195130900742, 28.708903779583764],
				[118.74236802981237, 28.669669139547555],
				[118.71280689796961, 28.630428074621086],
				[118.68326786453025, 28.591180600052596],
				[118.65375088063104, 28.55192673105801],
				[118.62425589749427, 28.512666482821007],
				[118.59478286642761, 28.47339987049315],
				[118.56533173882373, 28.43412690919396],
				[118.5359024661604, 28.394847614011],
				[118.506495, 28.355562]
			]
		},
		"properties": {
			"segID": "seg30",
			"vehicle": "short"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[118.506495, 28.355562],
				[118.50598549691435, 28.35435676633823],
				[118.50547600539645, 28.353151530782892],
				[118.50496652544544, 28.351946293334123],
				[118.50445705706049, 28.350741053992063],
				[118.5039476002408, 28.349535812756855],
				[118.50343815498557, 28.348330569628633],
				[118.50292872129391, 28.347125324607532],
				[118.50241929916504, 28.345920077693695],
				[118.50190988859809, 28.344714828887255],
				[118.5014004895923, 28.34350957818836],
				[118.50089110214677, 28.34230432559714],
				[118.50038172626071, 28.341099071113735],
				[118.49987236193331, 28.339893814738286],
				[118.49936300916372, 28.338688556470924],
				[118.49885366795111, 28.33748329631179],
				[118.49834433829469, 28.33627803426103],
				[118.49783502019359, 28.335072770318774],
				[118.497325713647, 28.333867504485163],
				[118.4968164186541, 28.332662236760328],
				[118.49630713521407, 28.331456967144423],
				[118.49579786332608, 28.330251695637575],
				[118.49528860298928, 28.329046422239923],
				[118.49477935420288, 28.327841146951606],
				[118.49427011696602, 28.32663586977276],
				[118.4937608912779, 28.325430590703522],
				[118.4932516771377, 28.32422530974404],
				[118.49274247454457, 28.323020026894447],
				[118.49223328349771, 28.321814742154878],
				[118.49172410399628, 28.32060945552546],
				[118.49121493603946, 28.319404167006358],
				[118.49070577962641, 28.318198876597688],
				[118.49019663475632, 28.316993584299592],
				[118.48968750142835, 28.31578829011222],
				[118.48917837964171, 28.3145829940357],
				[118.48866926939554, 28.313377696070173],
				[118.48816017068903, 28.312172396215768],
				[118.48765108352134, 28.310967094472634],
				[118.48714200789168, 28.309761790840913],
				[118.48663294379917, 28.308556485320725],
				[118.48612389124304, 28.307351177912224],
				[118.48561485022243, 28.306145868615538],
				[118.48510582073655, 28.304940557430815],
				[118.48459680278454, 28.30373524435818],
				[118.48408779636559, 28.30252992939778],
				[118.48357880147887, 28.30132461254976],
				[118.48306981812358, 28.30011929381423],
				[118.48256084629887, 28.29891397319136],
				[118.48205188600392, 28.297708650681273],
				[118.48154293723789, 28.296503326284103],
				[118.481034, 28.295298]
			]
		},
		"properties": {
			"segID": "seg31",
			"vehicle": "short"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[118.481034, 28.295298],
				[118.47055790392025, 28.239509238052335],
				[118.46009275928748, 28.18371967848958],
				[118.44963852928066, 28.12792932400483],
				[118.43919517719512, 28.072138177282568],
				[118.42876266644195, 28.01634624099878],
				[118.41834096054752, 27.960553517820895],
				[118.40793002315291, 27.904760010407905],
				[118.39752981801328, 27.848965721410366],
				[118.38714030899756, 27.79317065347045],
				[118.37676146008762, 27.737374809221986],
				[118.36639323537807, 27.68157819129048],
				[118.3560355990754, 27.62578080229319],
				[118.34568851549767, 27.569982644839133],
				[118.33535194907401, 27.514183721529143],
				[118.32502586434389, 27.45838403495589],
				[118.3147102259568, 27.402583587703955],
				[118.30440499867169, 27.346782382349815],
				[118.29411014735636, 27.29098042146193],
				[118.28382563698712, 27.235177707600762],
				[118.27355143264809, 27.179374243318794],
				[118.26328749953092, 27.123570031160618],
				[118.25303380293401, 27.0677650736629],
				[118.2427903082623, 27.01195937335449],
				[118.23255698102655, 26.956152932756407],
				[118.22233378684295, 26.900345754381902],
				[118.21212069143265, 26.844537840736496],
				[118.20191766062118, 26.78872919431798],
				[118.19172466033804, 26.732919817616512],
				[118.18154165661616, 26.677109713114604],
				[118.20659515828139, 26.636246963277042],
				[118.2613873354419, 26.607995102612012],
				[118.31615244123878, 26.579722269584458],
				[118.37089050234134, 26.551428500377796],
				[118.42560154548474, 26.52311383114607],
				[118.48028559746966, 26.494778298013923],
				[118.53494268516181, 26.46642193707657],
				[118.58957283549186, 26.43804478439975],
				[118.64417607545484, 26.40964687601969],
				[118.69875243210998, 26.381228247943096],
				[118.75330193258027, 26.352788936147082],
				[118.80782460405229, 26.32432897657916],
				[118.8623204737756, 26.29584840515722],
				[118.91678956906271, 26.267347257769455],
				[118.97123191728858, 26.238825570274376],
				[119.0256475458903, 26.21028337850075],
				[119.08003648236681, 26.181720718247604],
				[119.13439875427858, 26.153137625284135],
				[119.1887343892472, 26.12453413534973],
				[119.2430434149552, 26.09591028415394],
				[119.298821, 26.07097]
			]
		},
		"properties": {
			"segID": "seg32",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[119.286967, 26.072735],
				[119.28720408350166, 26.07269970948837],
				[119.28744116686045, 26.072664418589454],
				[119.2876782500763, 26.072629127303237],
				[119.28791533314924, 26.07259383562974],
				[119.28815241607928, 26.072558543568935],
				[119.28838949886641, 26.07252325112085],
				[119.28862658151063, 26.072487958285475],
				[119.28886366401196, 26.07245266506281],
				[119.28910074637035, 26.07241737145285],
				[119.28933782858583, 26.07238207745561],
				[119.28957491065837, 26.072346783071083],
				[119.28981199258801, 26.072311488299274],
				[119.29004907437475, 26.07227619314017],
				[119.29028615601854, 26.07224089759379],
				[119.29052323751944, 26.072205601660116],
				[119.29076031887739, 26.072170305339174],
				[119.29099740009244, 26.072135008630944],
				[119.29123448116455, 26.072099711535436],
				[119.29147156209373, 26.072064414052644],
				[119.29170864288, 26.072029116182577],
				[119.29194572352331, 26.07199381792523],
				[119.2921828040237, 26.071958519280606],
				[119.29241988438118, 26.07192322024871],
				[119.29265696459571, 26.071887920829532],
				[119.2928940446673, 26.07185262102308],
				[119.29313112459596, 26.071817320829357],
				[119.2933682043817, 26.07178202024836],
				[119.2936052840245, 26.071746719280085],
				[119.29384236352433, 26.07171141792455],
				[119.29407944288126, 26.07167611618174],
				[119.2943165220952, 26.071640814051662],
				[119.29455360116623, 26.071605511534308],
				[119.29479068009431, 26.071570208629694],
				[119.29502775887944, 26.071534905337806],
				[119.29526483752163, 26.071499601658655],
				[119.29550191602087, 26.07146429759224],
				[119.29573899437716, 26.071428993138557],
				[119.29597607259052, 26.071393688297615],
				[119.29621315066092, 26.071358383069406],
				[119.29645022858834, 26.071323077453936],
				[119.29668730637282, 26.071287771451203],
				[119.29692438401436, 26.07125246506121],
				[119.29716146151291, 26.07121715828396],
				[119.29739853886853, 26.07118185111945],
				[119.29763561608117, 26.071146543567682],
				[119.29787269315086, 26.071111235628656],
				[119.29810977007759, 26.071075927302378],
				[119.29834684686136, 26.07104061858884],
				[119.29858392350218, 26.071005309488047],
				[119.298821, 26.07097]
			]
		},
		"properties": {
			"segID": "seg33",
			"vehicle": "short"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[119.29882, 26.07097],
				[119.29858292350018, 26.071005289488046],
				[119.29834584685747, 26.071040578588832],
				[119.29810877007189, 26.07107586730237],
				[119.2978716931434, 26.071111155628653],
				[119.29763461607206, 26.071146443567685],
				[119.29739753885784, 26.07118173111945],
				[119.29716046150072, 26.07121701828396],
				[119.29692338400073, 26.07125230506121],
				[119.29668630635788, 26.071287591451203],
				[119.29644922857213, 26.071322877453934],
				[119.29621215064353, 26.071358163069398],
				[119.29597507257203, 26.07139344829761],
				[119.2957379943577, 26.071428733138553],
				[119.29550091600046, 26.07146401759224],
				[119.29526383750039, 26.07149930165865],
				[119.2950267588574, 26.071534585337805],
				[119.29478968007159, 26.071569868629688],
				[119.2945526011429, 26.071605151534307],
				[119.29431552207136, 26.071640434051655],
				[119.29407844285696, 26.07167571618174],
				[119.29384136349967, 26.071710997924548],
				[119.29360428399953, 26.071746279280088],
				[119.29336720435653, 26.07178156024836],
				[119.2931301245707, 26.071816840829356],
				[119.29289304464199, 26.071852121023078],
				[119.29265596457043, 26.071887400829528],
				[119.29241888435602, 26.071922680248704],
				[119.29218180399876, 26.071957959280606],
				[119.29194472349864, 26.071993237925223],
				[119.29170764285568, 26.072028516182574],
				[119.29147056206989, 26.072063794052642],
				[119.2912334811412, 26.072099071535433],
				[119.29099640006972, 26.07213434863094],
				[119.29075931885538, 26.072169625339175],
				[119.29052223749817, 26.07220490166012],
				[119.29028515599813, 26.072240177593788],
				[119.29004807435525, 26.072275453140172],
				[119.28981099256956, 26.072310728299264],
				[119.289573910641, 26.072346003071086],
				[119.28933682856962, 26.07238127745561],
				[119.28909974635538, 26.07241655145285],
				[119.28886266399833, 26.072451825062807],
				[119.28862558149844, 26.07248709828547],
				[119.28838849885572, 26.07252237112085],
				[119.28815141607016, 26.072557643568935],
				[119.28791433314179, 26.072592915629734],
				[119.28767725007059, 26.07262818730324],
				[119.28744016685654, 26.07266345858945],
				[119.28720308349968, 26.072698729488373],
				[119.286966, 26.072734]
			]
		},
		"properties": {
			"segID": "segnull",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[119.286967, 26.072735],
				[119.23008533314055, 26.10274302893429],
				[119.17317447705727, 26.13272873451889],
				[119.11623439985627, 26.162692075703347],
				[119.05926506971679, 26.192633011401202],
				[119.00226645489151, 26.22255150049002],
				[118.945238523707, 26.252447501811453],
				[118.88818124456414, 26.282320974171252],
				[118.83109458593846, 26.312171876339306],
				[118.77397851638074, 26.342000167049697],
				[118.71683300451711, 26.371805805000733],
				[118.65965801904986, 26.401588748854973],
				[118.60245352875752, 26.431348957239308],
				[118.54521950249543, 26.461086388744935],
				[118.48795590919617, 26.49080100192748],
				[118.43066271786995, 26.520492755306975],
				[118.373339897605, 26.55016160736794],
				[118.31598741756808, 26.579807516559406],
				[118.25860524700484, 26.609430441294972],
				[118.20119335524024, 26.63903033995285],
				[118.1830221785806, 26.685277952181824],
				[118.19367787142679, 26.74375641677397],
				[118.2043445304223, 26.802234084168212],
				[118.21502219461102, 26.86071095151529],
				[118.22571090316143, 26.91918701595676],
				[118.23641069536727, 26.977662274624947],
				[118.24712161064825, 27.036136724642915],
				[118.25784368855051, 27.094610363124392],
				[118.26857696874741, 27.153083187173767],
				[118.27932149104002, 27.211555193886003],
				[118.2900772953578, 27.270026380346607],
				[118.30084442175934, 27.328496743631593],
				[118.3116229104327, 27.386966280807403],
				[118.3224128016964, 27.445434988930906],
				[118.33321413599984, 27.503902865049312],
				[118.34402695392396, 27.562369906200143],
				[118.35485129618205, 27.620836109411172],
				[118.36568720362014, 27.67930147170038],
				[118.37653471721794, 27.73776599007593],
				[118.42841764799356, 27.77054211881869],
				[118.48713482722036, 27.799034213932867],
				[118.54588278953246, 27.827501471480613],
				[118.6046615612572, 27.85594384850201],
				[118.66347116862205, 27.88436130200511],
				[118.72231163775409, 27.912753788966004],
				[118.78118299467945, 27.941121266328906],
				[118.84008526532298, 27.96946369100624],
				[118.89901847550763, 27.99778101987871],
				[118.957982650954, 28.02607320979539],
				[119.01697781727994, 28.0543402175738],
				[119.076004, 28.082582]
			]
		},
		"properties": {
			"segID": "seg34",
			"vehicle": "water"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[119.076004, 28.082582],
				[119.00040777621766, 28.10855378588823],
				[118.92477496565085, 28.13448410145308],
				[118.84910556932887, 28.160372881434295],
				[118.77339958856413, 28.186220060579146],
				[118.69765702495282, 28.212025573642812],
				[118.62187788037569, 28.23778935538884],
				[118.54606215699887, 28.263511340589577],
				[118.47020985727454, 28.289191464026523],
				[118.39432098394168, 28.314829660490833],
				[118.31839554002694, 28.340425864783686],
				[118.2424335288452, 28.36598001171674],
				[118.16643495400045, 28.391492036112542],
				[118.08675549755063, 28.396671874503518],
				[118.00550442168232, 28.393058910552107],
				[117.92425892153607, 28.389397750699075],
				[117.84301906973626, 28.38568840563478],
				[117.76178493884161, 28.38193088618798],
				[117.68055660134429, 28.37812520332568],
				[117.5993341296691, 28.374271368153046],
				[117.51811759617276, 28.370369391913247],
				[117.43690707314296, 28.366419285987373],
				[117.35570263279762, 28.36242106189426],
				[117.27450434728404, 28.358374731290382],
				[117.19331228867811, 28.354280305969745],
				[117.1121265289835, 28.350137797863695],
				[117.03094714013082, 28.345947219040852],
				[116.94977419397684, 28.341708581706932],
				[116.88575508842801, 28.365443802693655],
				[116.8451395406313, 28.42745443286617],
				[116.80447637932753, 28.489452995573544],
				[116.76376543466736, 28.551439445406213],
				[116.72300653629648, 28.61341373679997],
				[116.68219951335352, 28.675375824035164],
				[116.64134419446803, 28.737325661235996],
				[116.60044040775831, 28.799263202369726],
				[116.55948798082946, 28.861188401245958],
				[116.51848674077112, 28.923101211515835],
				[116.47743651415554, 28.98500158667132],
				[116.43633712703533, 29.046889480044406],
				[116.39518840494149, 29.108764844806352],
				[116.35399017288115, 29.170627633966884],
				[116.31274225533556, 29.232477800373466],
				[116.27144447625788, 29.29431529671048],
				[116.2300966590711, 29.35614007549844],
				[116.18869862666588, 29.41795208909324],
				[116.14725020139834, 29.479751289685307],
				[116.10575120508801, 29.541537629298848],
				[116.06420145901556, 29.603311059791036],
				[116.02260078392071, 29.66507153285119],
				[115.980949, 29.726819]
			]
		},
		"properties": {
			"segID": "seg35",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[115.980949, 29.726819],
				[115.91807140694858, 29.75905465342012],
				[115.85515336653376, 29.791260554597773],
				[115.79219483737562, 29.823436645541516],
				[115.72919577823359, 29.85558286820136],
				[115.66615614800742, 29.887699164468838],
				[115.60307590573788, 29.91978547617716],
				[115.5399550106078, 29.95184174510124],
				[115.47679342194284, 29.983867912957884],
				[115.41359109921237, 30.015863921405852],
				[115.35034800203029, 30.047829712045992],
				[115.28706409015611, 30.0797652264213],
				[115.22373932349552, 30.111670406017097],
				[115.1603736621016, 30.143545192261126],
				[115.0969670661754, 30.17538952652362],
				[115.03351949606706, 30.207203350117474],
				[114.97003091227656, 30.23898660429836],
				[114.90650127545467, 30.270739230264777],
				[114.84293054640386, 30.302461169158274],
				[114.77931868607916, 30.334152362063502],
				[114.715665655589, 30.365812750008352],
				[114.65197141619632, 30.397442273964117],
				[114.58823592931918, 30.429040874845544],
				[114.52298432597212, 30.455593167957286],
				[114.449458548238, 30.454026305942413],
				[114.37593516601187, 30.45241822044193],
				[114.30241424125822, 30.450768915464206],
				[114.22889583591706, 30.449078395120022],
				[114.15538001190335, 30.4473466636224],
				[114.08186683110631, 30.445573725286643],
				[114.00835635538884, 30.443759584530266],
				[113.93484864658693, 30.44190424587292],
				[113.86134376650904, 30.44000771393641],
				[113.78784177693547, 30.43806999344459],
				[113.71434273961776, 30.436091089223353],
				[113.64084671627808, 30.43407100620056],
				[113.56735376860864, 30.432009749406024],
				[113.49386395827108, 30.429907323971406],
				[113.42037734689579, 30.427763735130203],
				[113.34895344344778, 30.43419445239781],
				[113.28244766831048, 30.461258364143685],
				[113.21590495429932, 30.488288523816344],
				[113.1493252871962, 30.5152848762016],
				[113.08270865298537, 30.542247366063023],
				[113.0160550378541, 30.56917593814213],
				[112.94936442819348, 30.596070537158663],
				[112.88263681059915, 30.622931107810853],
				[112.81587217187209, 30.649757594775583],
				[112.74907049901937, 30.676549942708736],
				[112.68223177925485, 30.703308096245372],
				[112.615356, 30.730032]
			]
		},
		"properties": {
			"segID": "seg36",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.615356, 30.730032],
				[112.59935676754657, 30.754710335167076],
				[112.58334933216311, 30.779386706044395],
				[112.5673336822509, 30.804061109697834],
				[112.55130980619649, 30.82873354318897],
				[112.53527769237158, 30.853404003575175],
				[112.51923732913306, 30.878072487909552],
				[112.50318870482306, 30.90273899324094],
				[112.48713180776875, 30.9274035166139],
				[112.47106662628245, 30.95206605506872],
				[112.4549931486616, 30.976726605641414],
				[112.43891136318864, 31.001385165363665],
				[112.42282125813105, 31.026041731262882],
				[112.40672282174143, 31.05069630036215],
				[112.39061604225721, 31.075348869680226],
				[112.37450090790088, 31.099999436231556],
				[112.35837740687985, 31.124647997026205],
				[112.34224552738642, 31.14929454906994],
				[112.32610525759782, 31.173939089364143],
				[112.30995658567609, 31.19858161490584],
				[112.29379949976814, 31.223222122687687],
				[112.27763398800566, 31.247860609697945],
				[112.26146003850518, 31.27249707292049],
				[112.24527763936793, 31.297131509334815],
				[112.22908677867991, 31.321763915915987],
				[112.21288744451184, 31.34639428963466],
				[112.19667962491907, 31.371022627457062],
				[112.1804633079417, 31.395648926345004],
				[112.16423848160434, 31.420273183255834],
				[112.14800513391634, 31.444895395142446],
				[112.13176325287155, 31.46951555895331],
				[112.1155128264484, 31.494133671632376],
				[112.09925384260983, 31.51874973011915],
				[112.08298628930335, 31.543363731348663],
				[112.06671015446085, 31.567975672251418],
				[112.05042542599878, 31.592585549753423],
				[112.03413209181794, 31.617193360776188],
				[112.01783013980355, 31.641799102236703],
				[112.00151955782528, 31.666402771047405],
				[111.98520033373704, 31.691004364116218],
				[111.96887245537711, 31.71560387834649],
				[111.95253591056812, 31.740201310637033],
				[111.93619068711689, 31.76479665788209],
				[111.91983677281455, 31.789389916971327],
				[111.90347415543643, 31.81398108478982],
				[111.88710282274204, 31.83857015821808],
				[111.8707227624751, 31.863157134131953],
				[111.8543339623634, 31.887742009402753],
				[111.83793641011896, 31.912324780897105],
				[111.82153009343779, 31.936905445477063],
				[111.805115, 31.961484]
			]
		},
		"properties": {
			"segID": "seg37",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[111.805115, 31.961484],
				[111.79404612515565, 31.970688928434154],
				[111.78297503034256, 31.979892896175357],
				[111.77190171455314, 31.989095902687243],
				[111.76082617677962, 31.998297947433162],
				[111.74974841601403, 32.007499029876215],
				[111.73866843124813, 32.01669914947924],
				[111.72758622147357, 32.02589830570483],
				[111.71650178568171, 32.035096498015314],
				[111.70541512286373, 32.04429372587275],
				[111.69432623201061, 32.05348998873895],
				[111.68323511211311, 32.06268528607547],
				[111.67214176216179, 32.07187961734359],
				[111.66104618114699, 32.08107298200434],
				[111.64994836805886, 32.09026537951849],
				[111.63884832188737, 32.09945680934655],
				[111.6277460416222, 32.10864727094876],
				[111.6166415262529, 32.117836763785135],
				[111.60553477476877, 32.12702528731538],
				[111.59442578615895, 32.13621284099898],
				[111.58331455941233, 32.145399424295135],
				[111.57220109351762, 32.1545850366628],
				[111.5610853874633, 32.163769677560644],
				[111.54996744023767, 32.172953346447116],
				[111.53884725082878, 32.18213604278038],
				[111.52772481822458, 32.19131776601832],
				[111.51660014141268, 32.2004985156186],
				[111.50547321938056, 32.20967829103859],
				[111.49434405111552, 32.21885709173542],
				[111.4832126356046, 32.22803491716595],
				[111.47207897183463, 32.23721176678675],
				[111.4609430587923, 32.2463876400542],
				[111.44980489546406, 32.25556253642433],
				[111.43866448083611, 32.264736455352974],
				[111.42752181389456, 32.27390939629568],
				[111.4163768936252, 32.28308135870773],
				[111.40522971901366, 32.292252342044144],
				[111.39408028904542, 32.3014223457597],
				[111.38292860270566, 32.310591369308874],
				[111.37177465897945, 32.3197594121459],
				[111.36061845685158, 32.32892647372477],
				[111.34945999530669, 32.338092553499195],
				[111.33829927332923, 32.3472576509226],
				[111.32713628990335, 32.35642176544818],
				[111.31597104401314, 32.365584896528844],
				[111.30480353464239, 32.37474704361726],
				[111.2936337607747, 32.38390820616582],
				[111.2824617213935, 32.39306838362664],
				[111.27128741548202, 32.40222757545159],
				[111.26011084202324, 32.41138578109226],
				[111.248932, 32.420543]
			]
		},
		"properties": {
			"segID": "seg38",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[111.248932, 32.420543],
				[111.31074934656523, 32.45390940136699],
				[111.3726124764423, 32.487245579644394],
				[111.43452144082342, 32.52055147356686],
				[111.49647629076294, 32.553827021793],
				[111.55847707717633, 32.587072162905436],
				[111.62052385083904, 32.62028683541089],
				[111.68261666238553, 32.65347097774028],
				[111.74475556230817, 32.68662452824875],
				[111.8069406009562, 32.71974742521583],
				[111.86917182853458, 32.75283960684546],
				[111.93144929510304, 32.785901011266105],
				[111.99377305057492, 32.81893157653085],
				[112.05614314471609, 32.85193124061747],
				[112.11855962714387, 32.88489994142855],
				[112.181022547326, 32.917837616791545],
				[112.24353195457947, 32.95074420445892],
				[112.30608789806945, 32.9836196421082],
				[112.36869042680819, 33.0164638673421],
				[112.4313395896539, 33.049276817688636],
				[112.4940354353097, 33.08205843060119],
				[112.55677801232241, 33.114808643458645],
				[112.61956736908154, 33.147527393565476],
				[112.68240355381806, 33.18021461815188],
				[112.74528661460336, 33.212870254373854],
				[112.80821659934807, 33.245494239313345],
				[112.87119355580097, 33.2780865099783],
				[112.93421753154783, 33.31064700330286],
				[112.99728857401024, 33.34317565614744],
				[113.06040673044453, 33.37567240529883],
				[113.12357204794056, 33.40813718747033],
				[113.1867845734206, 33.440569939301895],
				[113.25004435363819, 33.472970597360224],
				[113.2783013265652, 33.51735567649008],
				[113.26056735173893, 33.57749589727012],
				[113.24280864654123, 33.63763358532743],
				[113.22502512104292, 33.69776873134478],
				[113.20721668496621, 33.75790132596808],
				[113.18938324768285, 33.81803135980614],
				[113.17152471821242, 33.8781588234305],
				[113.1536410052203, 33.9382837073752],
				[113.13573201701585, 33.998406002136605],
				[113.11779766155063, 34.0585256981732],
				[113.09983784641635, 34.11864278590532],
				[113.08185247884303, 34.178757255715055],
				[113.06384146569715, 34.23886909794598],
				[113.04580471347955, 34.29897830290288],
				[113.02774212832372, 34.3590848608517],
				[113.00965361599361, 34.41918876201919],
				[112.99153908188187, 34.47928999659276],
				[112.942068, 34.506545]
			]
		},
		"properties": {
			"segID": "seg39",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.942068, 34.506545],
				[112.82292634298722, 34.59102426765184],
				[112.70354231767185, 34.675387514387026],
				[112.58391500034227, 34.75963413733387],
				[112.46404346702246, 34.843763530986465],
				[112.34392679351244, 34.92777508719638],
				[112.22356405542926, 35.01166819516445],
				[112.1029543282489, 35.09544224143259],
				[111.9820966873486, 35.179096609875714],
				[111.86099020805013, 35.26263068169371],
				[111.73963396566361, 35.346043835403606],
				[111.61802703553222, 35.429335446831736],
				[111.49616849307738, 35.51250488910596],
				[111.374360377863, 35.59561246866637],
				[111.43501785512653, 35.71535026954252],
				[111.49585786373761, 35.8350575421975],
				[111.5568817153028, 35.95473405939456],
				[111.61809073146611, 36.07437959204188],
				[111.67948624400798, 36.193993909172754],
				[111.74106959494523, 36.31357677792559],
				[111.80284213663217, 36.4331279635236],
				[111.86480523186266, 36.55264722925434],
				[111.92696025397335, 36.672134336448885],
				[111.9893085869479, 36.79158904446085],
				[112.0518516255224, 36.911011110645134],
				[112.11459077529182, 37.03040029033643],
				[112.1775274528176, 37.149756336827366],
				[112.24066308573644, 37.26907900134657],
				[112.30399911287017, 37.3883680330363],
				[112.36753698433677, 37.5076231789299],
				[112.43127816166253, 37.62684418392892],
				[112.49522411789565, 37.74603079078005],
				[112.55937633772064, 37.86518274005166],
				[112.58244021117241, 37.99303423586447],
				[112.60233014228969, 38.12156834312279],
				[112.6222902233699, 38.25009908524661],
				[112.64232102628476, 38.37862643471377],
				[112.66242312834645, 38.50715036373886],
				[112.6825971123759, 38.63567084427002],
				[112.7028435667722, 38.76418784798545],
				[112.72316308558287, 38.8927013462901],
				[112.74355626857529, 39.02121131031216],
				[112.76402372130913, 39.14971771089947],
				[112.78456605520988, 39.278220518616045],
				[112.80518388764354, 39.40671970373833],
				[112.93238102820251, 39.47057109484035],
				[113.08937934397285, 39.516262515526265],
				[113.24658385145476, 39.56174248889752],
				[113.4039941944994, 39.60701039507343],
				[113.56161000780646, 39.65206561491556],
				[113.714676, 39.66313]
			]
		},
		"properties": {
			"segID": "seg40",
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[113.714676, 39.66313],
				[113.7146287166771, 39.66303088046968],
				[113.71458143348983, 39.66293176092019],
				[113.71453415043821, 39.66283264135152],
				[113.71448686752224, 39.662733521763684],
				[113.7144395847419, 39.662634402156684],
				[113.7143923020972, 39.6625352825305],
				[113.71434501958812, 39.66243616288514],
				[113.7142977372147, 39.662337043220624],
				[113.7142504549769, 39.66223792353693],
				[113.71420317287475, 39.66213880383407],
				[113.71415589090823, 39.66203968411202],
				[113.71410860907736, 39.66194056437081],
				[113.7140613273821, 39.661841444610424],
				[113.71401404582248, 39.66174232483087],
				[113.71396676439848, 39.66164320503214],
				[113.71391948311013, 39.66154408521425],
				[113.71387220195739, 39.661444965377186],
				[113.71382492094028, 39.661345845520955],
				[113.71377764005882, 39.66124672564555],
				[113.71373035931296, 39.66114760575096],
				[113.71368307870274, 39.66104848583723],
				[113.71363579822815, 39.6609493659043],
				[113.71358851788919, 39.66085024595221],
				[113.71354123768583, 39.66075112598096],
				[113.71349395761811, 39.660652005990535],
				[113.71344667768601, 39.660552885980934],
				[113.71339939788953, 39.66045376595216],
				[113.71335211822867, 39.66035464590423],
				[113.71330483870342, 39.66025552583712],
				[113.7132575593138, 39.66015640575085],
				[113.71321028005981, 39.6600572856454],
				[113.71316300094142, 39.659958165520784],
				[113.71311572195864, 39.659859045377004],
				[113.71306844311148, 39.659759925214054],
				[113.71302116439995, 39.65966080503193],
				[113.71297388582401, 39.65956168483064],
				[113.71292660738371, 39.659462564610195],
				[113.712879329079, 39.65936344437057],
				[113.71283205090991, 39.659264324111774],
				[113.71278477287643, 39.65916520383381],
				[113.71273749497855, 39.659066083536686],
				[113.71269021721629, 39.658966963220394],
				[113.71264293958963, 39.65886784288493],
				[113.7125956620986, 39.65876872253029],
				[113.71254838474314, 39.65866960215651],
				[113.71250110752331, 39.65857048176354],
				[113.71245383043907, 39.6584713613514],
				[113.71240655349044, 39.65837224092011],
				[113.71235927667742, 39.65827312046962],
				[113.712312, 39.658174]
			]
		},
		"properties": {
			"segID": "seg41",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[113.712312, 39.658174],
				[113.64796044344142, 39.67663418268251],
				[113.57010056338333, 39.65448497132178],
				[113.49229062211177, 39.63228380924434],
				[113.41453066496774, 39.61003077072868],
				[113.33682073674606, 39.58772593009993],
				[113.25916088169633, 39.5653693617291],
				[113.18155114352422, 39.542961140032176],
				[113.10399156539248, 39.52050133946932],
				[113.02648218992218, 39.49799003454396],
				[112.94902305919382, 39.47542729980205],
				[112.87161421474849, 39.45281320983111],
				[112.80764497938897, 39.422026494712],
				[112.7974567343228, 39.35861654096835],
				[112.78728696888828, 39.29520570051358],
				[112.77713560826439, 39.231793976950165],
				[112.76700257798745, 39.168381373863284],
				[112.75688780394893, 39.10496789482091],
				[112.74679121239316, 39.041553543373986],
				[112.73671272991517, 38.97813832305641],
				[112.72665228345858, 38.91472223738526],
				[112.7166098003133, 38.85130528986086],
				[112.70658520811347, 38.78788748396685],
				[112.69657843483535, 38.724468823170305],
				[112.68658940879507, 38.66104931092188],
				[112.67661805864672, 38.5976289506559],
				[112.66666431338014, 38.5342077457904],
				[112.65672810231877, 38.470785699727266],
				[112.64680935511781, 38.40736281585238],
				[112.63690800176202, 38.34393909753565],
				[112.6270239725637, 38.280514548131144],
				[112.61715719816074, 38.21708917097718],
				[112.60730760951459, 38.15366296939642],
				[112.59747513790826, 38.09023594669599],
				[112.58765971494438, 38.026808106167515],
				[112.5778612725432, 37.96337945108729],
				[112.56807974294072, 37.899949984716336],
				[112.61151306373199, 37.87030136569345],
				[112.69208279782053, 37.86419574505428],
				[112.7726391225672, 37.85803523297031],
				[112.85318192324344, 37.85181985079388],
				[112.93371108530573, 37.8455496200577],
				[113.01422649439708, 37.83922456247455],
				[113.09472803634833, 37.832844699936885],
				[113.17521559717976, 37.82641005451658],
				[113.25568906310238, 37.81992064846454],
				[113.33614832051936, 37.81337650421036],
				[113.41659325602751, 37.80677764436203],
				[113.4970237564186, 37.80012409170551],
				[113.57743970868077, 37.793415869204516],
				[113.657841, 37.786653]
			]
		},
		"properties": {
			"segID": "seg42",
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[113.657841, 37.786653],
				[113.66086791530607, 37.78910168200494],
				[113.66389503122524, 37.79155028656883],
				[113.66692234778215, 37.79399881367972],
				[113.66994986500147, 37.79644726332563],
				[113.67297758290788, 37.79889563549461],
				[113.676005501526, 37.80134393017465],
				[113.67903362088055, 37.80379214735383],
				[113.68206194099614, 37.80624028702012],
				[113.68509046189746, 37.808688349161564],
				[113.68811918360917, 37.811136333766186],
				[113.69114810615598, 37.81358424082198],
				[113.6941772295625, 37.816032070317],
				[113.69720655385345, 37.81847982223925],
				[113.70023607905348, 37.820927496576694],
				[113.70326580518727, 37.823375093317416],
				[113.7062957322795, 37.82582261244939],
				[113.70932586035487, 37.828270053960615],
				[113.71235618943804, 37.830717417839104],
				[113.71538671955368, 37.83316470407288],
				[113.7184174507265, 37.8356119126499],
				[113.7214483829812, 37.838059043558225],
				[113.72447951634241, 37.8405060967858],
				[113.72751085083488, 37.84295307232066],
				[113.73054238648328, 37.84539997015076],
				[113.73357412331228, 37.84784679026413],
				[113.7366060613466, 37.85029353264875],
				[113.73963820061094, 37.8527401972926],
				[113.74267054113, 37.855186784183665],
				[113.74570308292846, 37.85763329330995],
				[113.74873582603102, 37.860079724659435],
				[113.7517687704624, 37.8625260782201],
				[113.7548019162473, 37.864972353979915],
				[113.75783526341043, 37.867418551926875],
				[113.76086881197648, 37.86986467204895],
				[113.76390256197018, 37.8723107143341],
				[113.76693651341623, 37.87475667877032],
				[113.76997066633935, 37.87720256534558],
				[113.77300502076422, 37.87964837404784],
				[113.77603957671562, 37.88209410486507],
				[113.77907433421822, 37.88453975778524],
				[113.78210929329674, 37.88698533279632],
				[113.78514445397595, 37.88943082988627],
				[113.7881798162805, 37.89187624904305],
				[113.79121538023516, 37.894321590254606],
				[113.79425114586465, 37.89676685350891],
				[113.79728711319369, 37.89921203879392],
				[113.80032328224702, 37.90165714609758],
				[113.80335965304936, 37.90410217540784],
				[113.80639622562543, 37.90654712671266],
				[113.809433, 37.908992]
			]
		},
		"properties": {
			"segID": "seg43",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[113.809433, 37.908992],
				[113.74984281800778, 37.86097264513603],
				[113.69033025848336, 37.8129232983737],
				[113.61948539238692, 37.78988621061747],
				[113.53490179365917, 37.79697130285082],
				[113.45030203804721, 37.80399591284498],
				[113.36568625699357, 37.81096001377855],
				[113.28105458218192, 37.81786357904748],
				[113.1964071455353, 37.82470658226557],
				[113.11174407921438, 37.83148899726483],
				[113.02706551561553, 37.83821079809602],
				[112.94237158736915, 37.844871959029035],
				[112.85766242733769, 37.85147245455328],
				[112.7729381686139, 37.85801225937828],
				[112.68819894451899, 37.864491348433866],
				[112.60344488860075, 37.870909696870804],
				[112.56956594830294, 37.9095945611827],
				[112.57985850922003, 37.97631721279427],
				[112.59016980006614, 38.04303896594675],
				[112.60049989980233, 38.10975981684029],
				[112.61084888777683, 38.176479761656275],
				[112.62121684372751, 38.243198796557266],
				[112.63160384778446, 38.30991691768683],
				[112.64200998047254, 38.37663412116949],
				[112.65243532271387, 38.44335040311047],
				[112.66287995583048, 38.51006575959571],
				[112.67334396154689, 38.57678018669166],
				[112.68382742199276, 38.64349368044517],
				[112.69433041970545, 38.71020623688335],
				[112.70485303763284, 38.776917852013476],
				[112.71539535913583, 38.843628521822794],
				[112.72595746799115, 38.91033824227848],
				[112.73653944839408, 38.97704700932743],
				[112.7471413849612, 39.04375481889614],
				[112.75776336273309, 39.11046166689062],
				[112.76840546717719, 39.177167549196184],
				[112.77906778419059, 39.243872461677405],
				[112.78975040010286, 39.31057640017786],
				[112.8004534016789, 39.37727936052009],
				[112.82103459829368, 39.43800129236093],
				[112.90242937528015, 39.4618234083725],
				[112.98387982333735, 39.48558874755024],
				[113.06538589447271, 39.50929722304745],
				[113.14694754003403, 39.53294874806783],
				[113.22856471070793, 39.556543235866606],
				[113.31023735651839, 39.58008059975152],
				[113.3919654268252, 39.60356075308399],
				[113.47374887032257, 39.62698360928018],
				[113.55558763503764, 39.650349081812074],
				[113.637481668329, 39.67365708420857],
				[113.714676, 39.66313]
			]
		},
		"properties": {
			"segID": "seg44",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[113.714676, 39.66313],
				[113.56055118301263, 39.65176385097887],
				[113.40187931051054, 39.60640399778551],
				[113.2434156813682, 39.560828601389694],
				[113.08516066813573, 39.51503829349627],
				[112.92711463396424, 39.46903370657186],
				[112.80435192394786, 39.40154376311756],
				[112.78359900478657, 39.27218174973939],
				[112.76292257173463, 39.142816066385606],
				[112.7423219952154, 39.01344674336754],
				[112.72179665174968, 38.88407381070143],
				[112.70134592387863, 38.75469729811213],
				[112.68096920008779, 38.625317235036874],
				[112.66066587473223, 38.49593365062884],
				[112.64043534796288, 38.36654657376082],
				[112.62027702565382, 38.237156033028704],
				[112.6001903193307, 38.107762056754936],
				[112.58017464610019, 37.97836467299203],
				[112.55161308157545, 37.850786090579355],
				[112.48705605159573, 37.73082987725046],
				[112.42270787139384, 37.610838573097276],
				[112.35856702774282, 37.49081244251932],
				[112.29463201935197, 37.37075174768197],
				[112.2309013567483, 37.25065674854065],
				[112.16737356215967, 37.13052770286463],
				[112.10404716939871, 37.01036486626069],
				[112.04092072374844, 36.89016849219634],
				[111.97799278184856, 36.76993883202287],
				[111.91526191158347, 36.649676134998145],
				[111.85272669197106, 36.52938064830897],
				[111.79038571305286, 36.40905261709333],
				[111.72823757578531, 36.2886922844624],
				[111.66628089193215, 36.16829989152206],
				[111.60451428395797, 36.04787567739447],
				[111.5429363849228, 35.92741987923913],
				[111.48154583837797, 35.80693273227381],
				[111.42034129826283, 35.68641446979522],
				[111.4045927622841, 35.57511084987554],
				[111.52819344239018, 35.492193912170286],
				[111.6515390901394, 35.409151191584996],
				[111.7746306272488, 35.32598333191779],
				[111.89746897577388, 35.24269097423132],
				[112.02005505805967, 35.15927475686001],
				[112.1423897966928, 35.07573531541725],
				[112.2644741144539, 34.99207328280286],
				[112.38630893427123, 34.9082892892106],
				[112.50789517917454, 34.8243839621357],
				[112.62923377225015, 34.74035792638256],
				[112.75032563659637, 34.65621180407257],
				[112.87117169527981, 34.571946214652],
				[113.003943, 34.519651]
			]
		},
		"properties": {
			"segID": "seg45",
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[113.003943, 34.519651],
				[113.0036677921825, 34.519602715120975],
				[113.00339258468401, 34.51955442962472],
				[113.00311737750457, 34.51950614351127],
				[113.00284217064416, 34.519457856780605],
				[113.00256696410278, 34.519409569432746],
				[113.00229175788047, 34.51936128146767],
				[113.00201655197719, 34.51931299288539],
				[113.00174134639298, 34.51926470368592],
				[113.0014661411278, 34.519216413869245],
				[113.00119093618169, 34.51916812343537],
				[113.00091573155464, 34.519119832384305],
				[113.00064052724665, 34.51907154071604],
				[113.00036532325772, 34.51902324843059],
				[113.00009011958787, 34.51897495552796],
				[112.99981491623709, 34.51892666200813],
				[112.99953971320538, 34.5188783678711],
				[112.99926451049276, 34.518830073116916],
				[112.99898930809921, 34.51878177774553],
				[112.99871410602476, 34.51873348175697],
				[112.99843890426939, 34.51868518515123],
				[112.99816370283311, 34.51863688792831],
				[112.99788850171593, 34.51858859008822],
				[112.99761330091785, 34.51854029163095],
				[112.99733810043887, 34.51849199255651],
				[112.99706290027899, 34.518443692864906],
				[112.99678770043822, 34.51839539255614],
				[112.99651250091655, 34.5183470916302],
				[112.996237301714, 34.51829879008708],
				[112.99596210283057, 34.51825048792682],
				[112.99568690426626, 34.51820218514939],
				[112.99541170602107, 34.51815388175481],
				[112.995136508095, 34.51810557774307],
				[112.99486131048808, 34.51805727311418],
				[112.99458611320028, 34.51800896786812],
				[112.99431091623161, 34.51796066200492],
				[112.99403571958209, 34.517912355524565],
				[112.99376052325171, 34.517864048427064],
				[112.99348532724046, 34.51781574071242],
				[112.99321013154837, 34.51776743238064],
				[112.99293493617543, 34.51771912343171],
				[112.99265974112163, 34.51767081386563],
				[112.992384546387, 34.51762250368243],
				[112.99210935197154, 34.51757419288208],
				[112.99183415787523, 34.51752588146461],
				[112.99155896409809, 34.517477569429985],
				[112.99128377064012, 34.51742925677824],
				[112.99100857750133, 34.51738094350937],
				[112.9907333846817, 34.51733262962337],
				[112.99045819218126, 34.517284315120236],
				[112.990183, 34.517236]
			]
		},
		"properties": {
			"segID": "seg46",
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.990183, 34.517236],
				[112.98984472818432, 34.51717662284392],
				[112.98950645685082, 34.51711724475538],
				[112.98916818599952, 34.5170578657344],
				[112.98882991563038, 34.51699848578095],
				[112.98849164574345, 34.516939104895066],
				[112.98815337633873, 34.51687972307672],
				[112.98781510741622, 34.51682034032594],
				[112.98747683897591, 34.51676095664273],
				[112.98713857101784, 34.516701572027074],
				[112.98680030354198, 34.51664218647898],
				[112.98646203654836, 34.51658279999847],
				[112.98612377003698, 34.51652341258552],
				[112.98578550400784, 34.516464024240165],
				[112.98544723846095, 34.516404634962385],
				[112.98510897339631, 34.51634524475219],
				[112.98477070881394, 34.51628585360957],
				[112.98443244471382, 34.51622646153456],
				[112.98409418109598, 34.516167068527125],
				[112.98375591796042, 34.516107674587296],
				[112.98341765530715, 34.51604827971507],
				[112.98307939313618, 34.51598888391045],
				[112.9827411314475, 34.515929487173445],
				[112.98240287024112, 34.51587008950405],
				[112.98206460951704, 34.51581069090227],
				[112.98172634927526, 34.5157512913681],
				[112.98138808951582, 34.51569189090156],
				[112.98104983023869, 34.51563248950264],
				[112.9807115714439, 34.51557308717135],
				[112.98037331313145, 34.5155136839077],
				[112.98003505530136, 34.51545427971167],
				[112.9796967979536, 34.51539487458329],
				[112.97935854108817, 34.51533546852256],
				[112.97902028470513, 34.51527606152946],
				[112.97868202880446, 34.515216653604014],
				[112.97834377338614, 34.51515724474623],
				[112.9780055184502, 34.51509783495609],
				[112.97766726399665, 34.51503842423362],
				[112.9773290100255, 34.51497901257881],
				[112.97699075653672, 34.51491959999166],
				[112.97665250353036, 34.514860186472184],
				[112.9763142510064, 34.51480077202038],
				[112.97597599896484, 34.51474135663626],
				[112.97563774740571, 34.514681940319804],
				[112.97529949632901, 34.51462252307104],
				[112.97496124573473, 34.514563104889966],
				[112.9746229956229, 34.51450368577658],
				[112.97428474599349, 34.51444426573089],
				[112.97394649684655, 34.51438484475289],
				[112.97360824818205, 34.514325422842596],
				[112.97327, 34.514266]
			]
		},
		"properties": {
			"segID": "seg47",
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.97327, 34.514266],
				[112.97292326519326, 34.51429148400238],
				[112.97257653017444, 34.514316967025096],
				[112.97222979494352, 34.51434244906814],
				[112.97188305950051, 34.51436793013153],
				[112.97153632384546, 34.514393410215234],
				[112.97118958797832, 34.51441888931927],
				[112.97084285189912, 34.51444436744365],
				[112.97049611560789, 34.51446984458835],
				[112.97014937910461, 34.51449532075337],
				[112.9698026423893, 34.514520795938715],
				[112.96945590546197, 34.514546270144386],
				[112.9691091683226, 34.51457174337037],
				[112.96876243097125, 34.514597215616675],
				[112.96841569340788, 34.51462268688329],
				[112.96806895563253, 34.514648157170235],
				[112.96772221764519, 34.51467362647748],
				[112.96737547944586, 34.514699094805046],
				[112.96702874103457, 34.51472456215293],
				[112.96668200241132, 34.51475002852111],
				[112.96633526357613, 34.514775493909596],
				[112.96598852452897, 34.51480095831841],
				[112.96564178526988, 34.5148264217475],
				[112.96529504579885, 34.514851884196915],
				[112.96494830611591, 34.51487734566662],
				[112.96460156622105, 34.514902806156634],
				[112.96425482611428, 34.514928265666946],
				[112.96390808579562, 34.51495372419755],
				[112.96356134526505, 34.51497918174845],
				[112.96321460452262, 34.515004638319645],
				[112.9628678635683, 34.515030093911136],
				[112.96252112240211, 34.515055548522916],
				[112.96217438102407, 34.515081002154986],
				[112.96182763943416, 34.51510645480734],
				[112.96148089763243, 34.51513190647998],
				[112.96113415561884, 34.51515735717291],
				[112.96078741339342, 34.51518280688613],
				[112.9604406709562, 34.51520825561962],
				[112.96009392830716, 34.5152337033734],
				[112.9597471854463, 34.51525915014744],
				[112.95940044237365, 34.51528459594178],
				[112.95905369908922, 34.51531004075638],
				[112.95870695559299, 34.51533548459126],
				[112.95836021188501, 34.515360927446416],
				[112.95801346796524, 34.51538636932184],
				[112.95766672383371, 34.515411810217536],
				[112.95731997949045, 34.5154372501335],
				[112.95697323493543, 34.515462689069736],
				[112.95662649016867, 34.51548812702622],
				[112.9562797451902, 34.51551356400298],
				[112.955933, 34.515539]
			]
		},
		"properties": {
			"segID": "seg48",
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.955933, 34.515539],
				[112.95580254260418, 34.51557294339787],
				[112.95567208510205, 34.515606886657075],
				[112.95554162749364, 34.51564082977758],
				[112.95541116977893, 34.515674772759404],
				[112.95528071195791, 34.51570871560254],
				[112.95515025403061, 34.515742658307005],
				[112.955019795997, 34.51577660087277],
				[112.95488933785713, 34.515810543299864],
				[112.95475887961092, 34.51584448558826],
				[112.95462842125843, 34.51587842773796],
				[112.95449796279966, 34.51591236974899],
				[112.9543675042346, 34.51594631162132],
				[112.95423704556322, 34.51598025335497],
				[112.95410658678557, 34.51601419494993],
				[112.95397612790161, 34.516048136406205],
				[112.95384566891137, 34.51608207772379],
				[112.95371520981482, 34.516116018902686],
				[112.953584750612, 34.51614995994289],
				[112.95345429130288, 34.5161839008444],
				[112.95332383188745, 34.51621784160724],
				[112.95319337236575, 34.51625178223137],
				[112.95306291273774, 34.51628572271682],
				[112.95293245300344, 34.516319663063584],
				[112.95280199316286, 34.51635360327164],
				[112.95267153321598, 34.51638754334102],
				[112.95254107316282, 34.51642148327171],
				[112.95241061300335, 34.516455423063704],
				[112.9522801527376, 34.516489362716996],
				[112.95214969236557, 34.516523302231604],
				[112.95201923188723, 34.51655724160752],
				[112.9518887713026, 34.51659118084475],
				[112.9517583106117, 34.51662511994327],
				[112.95162784981451, 34.51665905890311],
				[112.95149738891101, 34.516692997724256],
				[112.95136692790123, 34.516726936406705],
				[112.95123646678518, 34.51676087495046],
				[112.9511060055628, 34.516794813355524],
				[112.95097554423417, 34.51682875162189],
				[112.95084508279923, 34.51686268974956],
				[112.95071462125802, 34.51689662773853],
				[112.9505841596105, 34.516930565588815],
				[112.9504536978567, 34.5169645033004],
				[112.95032323599662, 34.51699844087329],
				[112.95019277403026, 34.51703237830748],
				[112.9500623119576, 34.51706631560298],
				[112.94993184977865, 34.51710025275978],
				[112.94980138749341, 34.51713418977788],
				[112.9496709251019, 34.51716812665728],
				[112.94954046260409, 34.51720206339799],
				[112.94941, 34.517236]
			]
		},
		"properties": {
			"segID": "seg49",
			"vehicle": "short"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.949315, 34.517189],
				[112.94925338357142, 34.517287540758055],
				[112.94919176699709, 34.51738608148517],
				[112.94913015027699, 34.51748462218136],
				[112.94906853341114, 34.5175831628466],
				[112.94900691639951, 34.5176817034809],
				[112.94894529924213, 34.51778024408427],
				[112.94888368193898, 34.517878784656695],
				[112.94882206449007, 34.517977325198174],
				[112.9487604468954, 34.518075865708724],
				[112.94869882915498, 34.51817440618833],
				[112.94863721126876, 34.518272946637],
				[112.9485755932368, 34.51837148705472],
				[112.94851397505906, 34.51847002744151],
				[112.94845235673554, 34.51856856779736],
				[112.94839073826626, 34.518667108122266],
				[112.94832911965122, 34.518765648416235],
				[112.9482675008904, 34.51886418867925],
				[112.9482058819838, 34.51896272891134],
				[112.94814426293144, 34.519061269112484],
				[112.94808264373329, 34.51915980928269],
				[112.94802102438936, 34.51925834942194],
				[112.94795940489968, 34.519356889530265],
				[112.9478977852642, 34.51945542960763],
				[112.94783616548297, 34.51955396965407],
				[112.94777454555594, 34.51965250966956],
				[112.94771292548315, 34.5197510496541],
				[112.94765130526456, 34.519849589607716],
				[112.9475896849002, 34.51994812953038],
				[112.94752806439006, 34.52004666942209],
				[112.94746644373413, 34.520145209282866],
				[112.94740482293241, 34.5202437491127],
				[112.94734320198492, 34.520342288911586],
				[112.94728158089164, 34.52044082867953],
				[112.94721995965257, 34.52053936841654],
				[112.94715833826773, 34.520637908122595],
				[112.94709671673708, 34.5207364477977],
				[112.94703509506067, 34.520834987441866],
				[112.94697347323844, 34.52093352705509],
				[112.94691185127044, 34.521032066637375],
				[112.94685022915665, 34.521130606188706],
				[112.94678860689706, 34.521229145709086],
				[112.94672698449168, 34.52132768519853],
				[112.9466653619405, 34.52142622465703],
				[112.94660373924354, 34.521524764084575],
				[112.94654211640076, 34.52162330348118],
				[112.94648049341221, 34.52172184284683],
				[112.94641887027785, 34.52182038218155],
				[112.9463572469977, 34.52191892148531],
				[112.94629562357176, 34.52201746075812],
				[112.946234, 34.522116]
			]
		},
		"properties": {
			"segID": "seg50",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[112.946234, 34.522116],
				[112.82451881653496, 34.603168044414794],
				[112.70458510068012, 34.68680094777846],
				[112.58440899042397, 34.77031613523243],
				[112.46398958218555, 34.85371300087533],
				[112.34332597234955, 34.936990936206435],
				[112.22241725730855, 35.020149330118024],
				[112.1012625335058, 35.10318756888795],
				[111.97986089747883, 35.1861050361722],
				[111.85821144590363, 35.26890111299748],
				[111.73631327563972, 35.35157517775408],
				[111.6141654837756, 35.43412660618864],
				[111.49176716767538, 35.51655477139718],
				[111.37679438934134, 35.60042470712674],
				[111.43739319090811, 35.72003125877582],
				[111.49817417853315, 35.839607339649255],
				[111.55913865993806, 35.95915272317899],
				[111.62028795284205, 36.07866718094917],
				[111.68162338506046, 36.19815048267643],
				[111.7431462946042, 36.31760239619006],
				[111.80485802978036, 36.43702268741176],
				[111.86675994929372, 36.556411120335206],
				[111.92885342234952, 36.67576745700545],
				[111.99113982875708, 36.79509145749805],
				[112.05362055903475, 36.91438287989778],
				[112.11629701451577, 37.033641480277375],
				[112.17917060745535, 37.15286701267576],
				[112.24224276113887, 37.27205922907619],
				[112.30551490999116, 37.39121787938403],
				[112.36898849968702, 37.510342711404306],
				[112.4326649872628, 37.62943347081896],
				[112.49654584122928, 37.748489901163865],
				[112.5606325416856, 37.86751174380556],
				[112.5828068134144, 37.995407434644285],
				[112.60267639319918, 38.12380188376257],
				[112.62261598052196, 38.25219297457704],
				[112.64262614548386, 38.38058067965072],
				[112.66270746360404, 38.508964971284485],
				[112.6828605158875, 38.63734582151382],
				[112.70308588889424, 38.765723202105484],
				[112.72338417480904, 38.89409708455404],
				[112.74375597151266, 39.02246744007847],
				[112.76420188265377, 39.15083423961863],
				[112.78472251772216, 39.279197453831664],
				[112.80531849212299, 39.40755705308848],
				[112.93323303332512, 39.47081978710245],
				[113.09006184410246, 39.51646055258135],
				[113.24709639743122, 39.561890327104216],
				[113.40433633828715, 39.60710849281059],
				[113.56178130253411, 39.65211443257919],
				[113.714676, 39.66313]
			]
		},
		"properties": {
			"segID": "seg51",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[113.714676, 39.66313],
				[113.56326150256608, 39.652536264710115],
				[113.40729290748259, 39.607956132002336],
				[113.25152549462436, 39.56316773106637],
				[113.09595961816868, 39.51817166177537],
				[112.9405956235175, 39.4729685247149],
				[112.8064817694187, 39.414792739829466],
				[112.78607472152723, 39.287639326024724],
				[112.76574164387236, 39.160482362949594],
				[112.74548193782427, 39.03332187942561],
				[112.72529501045479, 38.90615790399841],
				[112.70518027446637, 38.77899046494111],
				[112.68513714812228, 38.65181959025774],
				[112.66516505517778, 38.52464530768654],
				[112.64526342481219, 38.39746764470339],
				[112.62543169156208, 38.27028662852489],
				[112.60566929525538, 38.143102286111706],
				[112.58597568094638, 38.01591464417165],
				[112.56635029885163, 37.888723729162855],
				[112.50797076172766, 37.769738921351085],
				[112.44465283507326, 37.651807309309184],
				[112.38153572474401, 37.53384196270217],
				[112.31861800107173, 37.41584313123762],
				[112.25589824545894, 37.29781106255213],
				[112.19337505027117, 37.17974600223334],
				[112.13104701873014, 37.06164819384168],
				[112.06891276480816, 36.94351787893182],
				[112.00697091312357, 36.82535529707393],
				[111.94522009883735, 36.70716068587463],
				[111.8836589675507, 36.588934280997734],
				[111.82228617520366, 36.47067631618471],
				[111.76110038797496, 36.35238702327493],
				[111.70010028218265, 36.23406663222572],
				[111.6392845441859, 36.115715371132055],
				[111.5786518702878, 35.99733346624615],
				[111.51820096663923, 35.87892114199674],
				[111.45793054914346, 35.760478621008204],
				[111.39783934336207, 35.64200612411939],
				[111.30081753339422, 35.54565350470136],
				[111.17998290283231, 35.46355109974439],
				[111.05939488327324, 35.38132851746354],
				[110.93905258315971, 35.29898636677581],
				[110.81895511079739, 35.21652525401604],
				[110.6991015743983, 35.13394578294401],
				[110.57949108212392, 35.0512485547516],
				[110.46012274212727, 34.96843416807024],
				[110.34099566259455, 34.88550321897821],
				[110.22210895178591, 34.80245630100819],
				[110.10346171807588, 34.719294005154815],
				[110.07895983749118, 34.598966815240615],
				[110.074081, 34.470901]
			]
		},
		"properties": {
			"segID": "seg52",
			"vehicle": "walk"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[110.074081, 34.470901],
				[110.07398826869968, 34.471060761716004],
				[110.0738955370443, 34.47122052336198],
				[110.07380280503389, 34.47138028493792],
				[110.07371007266845, 34.47154004644384],
				[110.07361733994794, 34.471699807879716],
				[110.07352460687241, 34.471859569245574],
				[110.07343187344182, 34.472019330541386],
				[110.07333913965617, 34.472179091767174],
				[110.07324640551546, 34.47233885292292],
				[110.07315367101968, 34.47249861400862],
				[110.07306093616886, 34.472658375024295],
				[110.07296820096295, 34.472818135969945],
				[110.07287546540198, 34.47297789684555],
				[110.07278272948592, 34.473137657651094],
				[110.0726899932148, 34.47329741838663],
				[110.0725972565886, 34.47345717905211],
				[110.07250451960728, 34.47361693964755],
				[110.0724117822709, 34.473776700172955],
				[110.07231904457943, 34.473936460628316],
				[110.07222630653285, 34.47409622101364],
				[110.07213356813118, 34.47425598132891],
				[110.07204082937442, 34.474415741574134],
				[110.07194809026254, 34.47457550174932],
				[110.07185535079556, 34.474735261854455],
				[110.07176261097345, 34.47489502188955],
				[110.07166987079624, 34.4750547818546],
				[110.07157713026392, 34.4752145417496],
				[110.07148438937647, 34.47537430157457],
				[110.0713916481339, 34.475534061329455],
				[110.07129890653617, 34.47569382101431],
				[110.07120616458334, 34.47585358062912],
				[110.07111342227537, 34.47601334017388],
				[110.07102067961226, 34.47617309964858],
				[110.07092793659402, 34.47633285905323],
				[110.0708351932206, 34.47649261838784],
				[110.07074244949207, 34.47665237765238],
				[110.07064970540837, 34.47681213684687],
				[110.07055696096951, 34.4769718959713],
				[110.07046421617551, 34.47713165502569],
				[110.07037147102633, 34.477291414010004],
				[110.070278725522, 34.477451172924276],
				[110.0701859796625, 34.477610931768474],
				[110.07009323344782, 34.47777069054262],
				[110.07000048687797, 34.47793044924672],
				[110.06990773995294, 34.47809020788077],
				[110.06981499267273, 34.47824996644473],
				[110.06972224503733, 34.478409724938636],
				[110.06962949704675, 34.47856948336249],
				[110.06953674870098, 34.47872924171628],
				[110.069444, 34.478889]
			]
		},
		"properties": {
			"segID": "seg53",
			"vehicle": "long"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[110.069444, 34.478889],
				[110.07710482131374, 34.60670563884408],
				[110.11041366348685, 34.7241745640728],
				[110.22892978498355, 34.80722857577294],
				[110.34768484979891, 34.89016745757997],
				[110.46667974630174, 34.97299062051946],
				[110.58591536297222, 35.05569747309092],
				[110.70539258836205, 35.13828742126023],
				[110.82511231105369, 35.22075986845221],
				[110.94507541961904, 35.303114215543296],
				[111.06528280257741, 35.38534986085422],
				[111.1857353483529, 35.46746620014286],
				[111.30643394523106, 35.54946262659712],
				[111.40055213234002, 35.647362743088024],
				[111.46057787099191, 35.76568915336792],
				[111.52078243940291, 35.88398565130242],
				[111.58116710776103, 36.00225201678442],
				[111.64173315586949, 36.12048802792919],
				[111.70248187324027, 36.238693461055654],
				[111.76341455918887, 36.35686809066741],
				[111.82453252293, 36.47501168943349],
				[111.88583708367415, 36.59312402816896],
				[111.94732957072536, 36.71120487581526],
				[112.00901132357981, 36.829253999420324],
				[112.0708836920256, 36.947271164118426],
				[112.13294803624346, 37.06525613310982],
				[112.19520572690853, 37.18320866764015],
				[112.25765814529319, 37.30112852697959],
				[112.32030668337113, 37.419015468401696],
				[112.38315274392218, 37.53686924716216],
				[112.44619774063854, 37.654689616477036],
				[112.5094430982319, 37.772476327501046],
				[112.56678119719555, 37.891521121087365],
				[112.58638405136394, 38.01855655775572],
				[112.60605498244783, 38.1455887288032],
				[112.62579453832089, 38.27261760786355],
				[112.64560327199513, 38.39964316832201],
				[112.66548174168462, 38.526665383312114],
				[112.68543051087005, 38.65368422571267],
				[112.70545014836429, 38.78069966814444],
				[112.72554122837882, 38.90771168296704],
				[112.74570433059118, 39.034720242275526],
				[112.7659400402135, 39.16172531789717],
				[112.78624894806178, 39.28872688138802],
				[112.80663165062654, 39.415724904029496],
				[112.94154417044999, 39.47324531030367],
				[113.09671944261696, 39.518392080298206],
				[113.25209610188868, 39.563332285297314],
				[113.40767380409045, 39.60806532691716],
				[113.56345219631488, 39.65259060748303],
				[113.714676, 39.66313]
			]
		},
		"properties": {
			"segID": "seg54",
			"vehicle": "abrupt"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[113.714676, 39.66313],
				[113.95051840450813, 39.530740062282064],
				[114.18546149341788, 39.39787536938113],
				[114.42156030069815, 39.267108320521],
				[114.67995016387614, 39.16476050906525],
				[114.93758709848717, 39.06184376635749],
				[115.19447191765092, 38.9583618296275],
				[115.45060550450418, 38.854318427389],
				[115.58734559787402, 38.6724422026027],
				[115.67372592193479, 38.45798877530849],
				[115.75959411271417, 38.24347230005602],
				[115.84495695016328, 38.028893629673796],
				[115.92982111269227, 37.81425360375751],
				[116.01419317912408, 37.59955304893527],
				[116.098079630606, 37.38479277912696],
				[116.18148685247967, 37.16997359579756],
				[116.26442113611094, 36.955096288204714],
				[116.34688868068031, 36.740161633640675],
				[116.42889559493509, 36.52517039766883],
				[116.51044789890408, 36.3101233343548],
				[116.59155152557575, 36.0950211864924],
				[116.67221232254077, 35.87986468582454],
				[116.75243605359971, 35.664654553259226],
				[116.83222840033686, 35.44939149908061],
				[116.91159496366095, 35.234076223155625],
				[116.9905412653134, 35.01870941513579],
				[117.06907274934521, 34.80329175465474],
				[117.1471947835629, 34.587823911521376],
				[117.22491266094443, 34.37230654590882],
				[117.33299022095272, 34.16763971868177],
				[117.46804002309673, 33.97260794335769],
				[117.60247150200864, 33.77742932940138],
				[117.73629153642452, 33.58210561892162],
				[117.86950693184085, 33.38663853278697],
				[118.00212442146801, 33.19102977095966],
				[118.13415066717369, 32.99528101282407],
				[118.26559226041603, 32.79939391750987],
				[118.39645572316707, 32.60337012420987],
				[118.52674750882585, 32.407211252492786],
				[118.65647400312183, 32.210918902610835],
				[118.80844194095377, 32.03098273694862],
				[119.01666342828757, 31.891897570446503],
				[119.22425606203376, 31.75247399468846],
				[119.43122362557303, 31.612714857689284],
				[119.63756990640134, 31.47262298919941],
				[119.84329869562269, 31.332201200779306],
				[119.90517694015732, 31.116008093536948],
				[119.95979265623708, 30.896097520341232],
				[120.01415805700816, 30.67616411317891],
				[120.06827642510176, 30.456208173818332],
				[120.122151, 30.23623]
			]
		},
		"properties": {
			"segID": "seg55",
			"vehicle": "abrupt"
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "LineString",
			"coordinates": [
				[120.129104, 30.240161],
				[120.07288773969542, 30.46310223376023],
				[120.01641358494278, 30.686019253449498],
				[119.95967806404296, 30.90891173042119],
				[119.90267765848226, 31.131779331523433],
				[119.82576587336759, 31.344197556748853],
				[119.61694093372999, 31.486662169119445],
				[119.40747973860758, 31.628786756042846],
				[119.19737832682459, 31.77056837750683],
				[118.98663274109244, 31.91200407420141],
				[118.77523902855697, 32.0530908674392],
				[118.63394870566859, 32.24507303830049],
				[118.50220285939808, 32.44423979299345],
				[118.36987366619148, 32.643268788476746],
				[118.2369544394109, 32.84215834861394],
				[118.10343842046781, 33.04090677671961],
				[117.96931877784894, 33.23951235522704],
				[117.83458860613105, 33.43797334535061],
				[117.69924092498489, 33.63628798674228],
				[117.56326867816819, 33.83445449714246],
				[117.4266647325075, 34.032471072025025],
				[117.28942187686937, 34.23033588423624],
				[117.04960799215095, 34.3197655613934],
				[116.7834237923598, 34.38109046860468],
				[116.51685126774221, 34.44183820918076],
				[116.24989266111041, 34.502006628244644],
				[115.98255026430462, 34.561593582711346],
				[115.71482641822597, 34.62059694156851],
				[115.44672351285763, 34.67901458615797],
				[115.17824398727487, 34.736844410458076],
				[114.90939032964333, 34.79408432136667],
				[114.64016507720555, 34.85073223898472],
				[114.37057081625565, 34.906786096900504],
				[114.09707267272454, 34.87625313158825],
				[113.82342945215663, 34.83583168886407],
				[113.55005683868144, 34.79479809345479],
				[113.27695820214751, 34.753153888443215],
				[113.00413687321749, 34.710900635457484],
				[112.7315961430666, 34.66803991443461],
				[112.45933926309255, 34.6245733233826],
				[112.25970222446018, 34.77995384072048],
				[112.06093798733893, 34.93950205441092],
				[111.8560251623454, 35.07160769369512],
				[111.60529079306026, 34.972139799417064],
				[111.35516620341853, 34.87215780211193],
				[111.10565076682971, 34.771664856032785],
				[110.85674380587542, 34.67066410987336],
				[110.60767207898054, 34.576593518364554],
				[110.34205639796356, 34.6418949094996],
				[110.08277917799798, 34.698946723397356],
				[110.074081, 34.470901]
			]
		},
		"properties": {
			"segID": "seg56",
			"vehicle": "abrupt"
		}
	}]
};
var tripActive = {};

var idActive;
var animationID;

var segmentNumber = 50;

window.onload = function() {

	var html = "<div class='slide pad1' id='intro'><h2>重温笑傲江湖</h2></div>";;
	// load years
	$('#sidebar').html(html);

	events.features.forEach(function(event) {

		if (event.properties.people.length === 1) {
			var icons = "<img class='lg' src='./people_" + event.properties.people[0] + ".svg'>";
		} else {
			var icons = "<img src='./people_" + event.properties.people[0] + ".svg'><img src='./people_" + event.properties.people[1] + ".svg'>";
		};

		// add slides to html
		html = "<div class='slide pad1' id=" + event.properties.segID + "><div class='col4 center'>" + icons + "</div><div class='col8'><p><strong>第" + event.properties.chapter + "回 </strong>" + event.properties.event + "</p></div></div>";
		$('#sidebar').append(html);
	});
	// add footer
	html = "<div id='footer' class='fill-gray pad1' style='background-color: #ddd;'><p>Information about the athletes is from <a href='https://en.wikipedia.org/wiki/Refugee_Olympic_Team_at_the_2016_Summer_Olympics'>Wikipedia</a>, <a href='https://www.olympic.org/news/refugee-olympic-team-to-shine-spotlight-on-worldwide-refugee-crisis'>olympic.org</a>, <a href='https://www.rio2016.com/en/search-news?q=olympic+refugee+team'>rio2016.com</a>, and <a href='http://www.unhcr.org/uk/news/latest/2016/6/575154624/10-refugees-compete-2016-olympics-rio.html'>UNHCR</a>. You can also read about how this map was made in <a href='http://mapbox.com/blog/team-refugee-rio2016/'>our blog</a>. <p class='show-mobile'>And view the desktop version to see more!</p></div>";
	$('#slideshow').append(html)

	// on mobile, set #intro differently
	if (isMobile) {};

	$('#intro').addClass('active');

	// createArcs();
	// console.log(JSON.stringify(trips));
	// console.log(JSON.stringify(events));
};

map.on('load', function() {

	addLayers();

	function addLayers() {
		map.addSource("schools", {
			"type": "geojson",
			"data": schools
		});
		map.addSource("trips-static", {
			"type": "geojson",
			"data": trips
		});
		map.addSource("trips-active", {
			"type": "geojson",
			"data": empty
		});
		map.addSource("events", {
			"type": "geojson",
			"data": events
		});

		//trips-static
		map.addLayer({
			"id": "trips-static",
			"type": "line",
			"source": "trips-static",
			"paint": {
				"line-color": {
					property: "vehicle",
					type: "categorical",
					stops: [
						["water", "#8bb"],
						["short", "#ba8"],
						["long", "#b88"],
						["walk", "#ab8"],
						["abrupt", "#666"]
					]
				},
				"line-opacity": .8,
				"line-width": 3
			}
		});
		//trips-active
		map.addLayer({
			"id": "trips-active",
			"type": "line",
			"source": "trips-active",
			"paint": {
				"line-color": {
					property: "vehicle",
					type: "categorical",
					stops: [
						["water", "#8bb"],
						["short", "#ba8"],
						["long", "#b88"],
						["walk", "#ab8"],
						["abrupt", "#666"]
					]
				},
				"line-opacity": .8,
				"line-width": 3
			}
		});
		//event points
		map.addLayer({
			"id": "events",
			"type": "circle",
			"source": "events",
			"paint": {
				"circle-color": "#d68",
				"circle-opacity": .4,
			}
		});
		//schools
		map.addLayer({
			"id": "schools",
			"type": "symbol",
			"source": "schools",
			"layout": {
				"icon-image": "castle-15",
				"icon-allow-overlap": true,
				"icon-ignore-placement": true,
				"text-field": "{name}",
				"text-size": 11,
				"text-offset": [0, 1],
				"text-anchor": "top"
			},
		});
	};

	$(".slide").click(function() {
		idActive = this.id;
		animateJourney(idActive);
	});
});

function createArcs() {
	// start over drawing all arcs

	trips_straight.features.forEach(function(trip) {
		// A simple line from origin to destination.
		var route = {
			"type": "FeatureCollection",
			"features": [{
				"type": "Feature",
				"geometry": {
					"type": "LineString",
					"coordinates": trip.geometry.coordinates[0]
				}
			}]
		};

		// Calculate the distance in kilometers between route start/end point.
		var lineDistance = turf.lineDistance(route.features[0], 'kilometers');

		var arc = [];

		// Draw an arc between the `origin` & `destination` of the two points
		for (var i = 0; i <= segmentNumber; i++) {
			var segment = turf.along(route.features[0], i * lineDistance / segmentNumber, 'kilometers');
			arc.push(segment.geometry.coordinates);
		}

		// Update the route with calculated arc coordinates
		route.features[0].geometry.coordinates = arc;
		// update event properties
		route.features[0].properties = trip.properties;
		trip.properties.segID = 'seg' + trip.properties.segID;

		// Add the route to paths 
		trips.features.push(route.features[0]);
	});

	//btw... convert segID for events
	events.features.forEach(function(event) {
		event.properties.segID = 'seg' + event.properties.segID;
	});
};

function animateJourney(idActive) {

	// cancel the current animation if any
	cancelAnimationFrame(animationID);

	// update the background static layers
	updateStatic();
	function updateStatic() {
		map.getSource('trips-static').setData(empty);
	};
	
    var tripIndex;
    // get the index of the given segID in trips
    trips.features.forEach(function(trip, i) {
        if (trip.properties.segID === idActive) {
            tripIndex = i;
	        tripActive = JSON.parse( JSON.stringify(trip) );
	        tripActive.geometry.coordinates = [];
	    };
	    
    });

    var counter = 0;
	// recursively animate each round of animations
	animate();

	function animate() {

		if (counter === segmentNumber + 1) {

			cancelAnimationFrame(animationID);	

		} else {

			tripActive.geometry.coordinates.push(trips.features[tripIndex].geometry.coordinates[counter]);
			// Update the source with this new data.
			map.getSource('trips-active').setData(tripActive);

			animationID = requestAnimationFrame(animate);
			counter++;
		};
	};
};