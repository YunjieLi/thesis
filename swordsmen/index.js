mapboxgl.accessToken = 'pk.eyJ1IjoieXVuamllIiwiYSI6ImNpZnd0ZjZkczNjNHd0Mm0xcGRoc21nY28ifQ.8lFXo9aC9PfoKQF9ywWW-g';
var map = new mapboxgl.Map({
	container: 'map', // container id
	style: 'mapbox://styles/mapbox/light-v9', //stylesheet location
	center: [111.87163056653998, 33.76161539482898], // starting position
	zoom: 4.14 // starting zoom
});

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

var trips = {
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
		"geometry": null,
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

var events = {
	"features": [{
		"type": "Feature",
		"properties": {
			"name": "福威镖局",
			"event": "林平之出门打猎",
			"chapter": "1",
			"pointID": 14,
			"segID": 0,
			"people": "Pingzhi"
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
			"event": "遇岳灵珊，误杀余沧海之子。",
			"chapter": "1",
			"pointID": 31,
			"segID": 1,
			"people": "Pingzhi, Lingshan"
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
			"event": "镖局中人接连离奇死亡。林振南全家出逃被抓。",
			"chapter": "1",
			"pointID": 14,
			"segID": 2,
			"people": "Pingzhi"
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
			"event": "林振南夫妇被擒，林平之逃跑。",
			"chapter": "1",
			"pointID": 5,
			"segID": 3,
			"people": "Pingzhi"
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
			"event": "已毁。",
			"chapter": "2",
			"pointID": 38,
			"segID": 4,
			"people": "Pingzhi"
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
			"event": "听说金盆洗手大会，折而赴衡山。",
			"chapter": "2",
			"pointID": 2,
			"segID": 5,
			"people": "Pingzhi"
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
			"event": "刘正风宅，仪琳叙述令狐冲相救经过。令狐冲\b伤重。",
			"chapter": "2",
			"pointID": 20,
			"segID": 6,
			"people": "Yilin, Chong"
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
			"event": "令狐冲养伤，仪琳相伴。",
			"chapter": "5",
			"pointID": 21,
			"segID": 9,
			"people": "Yilin, Chong"
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
			"event": "刘正风金盆洗手大会。",
			"chapter": "6",
			"pointID": 20,
			"segID": 10,
			"people": "Narrator"
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
			"event": "刘正风、曲洋死。令狐冲受托笑傲江湖曲。令狐冲受托转告林振南遗言。",
			"chapter": "7",
			"pointID": 21,
			"segID": 11,
			"people": "Chong, Yilin"
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
			"event": "回归华山。",
			"chapter": "7",
			"pointID": 4,
			"segID": 12,
			"people": "Chong, Lingshan"
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
			"event": "思过。风清扬授独孤九剑。",
			"chapter": "8",
			"pointID": 1,
			"segID": 13,
			"people": "Chong"
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
			"event": "剑气之争。华山派外出避乱。陆大有被杀。",
			"chapter": "10",
			"pointID": 4,
			"segID": 14,
			"people": "Chong, Lingshan"
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
			"event": "不戒出场。令狐冲伤日重。",
			"chapter": "12",
			"pointID": 3,
			"segID": 15,
			"people": "Chong"
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
			"event": "令狐冲以独孤九剑破剑宗弟子、十五蒙面客。",
			"chapter": "12",
			"pointID": 6,
			"segID": 16,
			"people": "Chong, Lingshan, Pingzhi"
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
			"event": "华山派拜访金刀王元霸。绿竹巷重闻笑傲江湖曲。令狐冲学琴。",
			"chapter": "13",
			"pointID": 24,
			"segID": 17,
			"people": "Chong, Yingying"
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
			"event": "平一指居遇桃谷六仙。",
			"chapter": "14",
			"pointID": 15,
			"segID": 19,
			"people": "Chong, Lingshan, Pingzhi"
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
			"event": "与祖千秋论杯。",
			"chapter": "14",
			"pointID": 12,
			"segID": 20,
			"people": "Chong"
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
			"event": "令狐冲放血救治老头子之女。",
			"chapter": "15",
			"pointID": 35,
			"segID": 21,
			"people": "Chong"
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
			"event": "蓝凤凰以药酒相赠，水蛭取血疗伤。",
			"chapter": "16",
			"pointID": 32,
			"segID": 22,
			"people": "Chong, Lingshan, Pingzhi"
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
			"event": "群雄聚会为令狐冲治伤。令狐冲又见婆婆，得悉任盈盈真容。",
			"chapter": "17",
			"pointID": 18,
			"segID": 23,
			"people": "Chong, Yingying"
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
			"event": "任盈盈负令狐冲上少林。令狐冲为华山逐出门墙，不愿改投他派，拜别少林。",
			"chapter": "18",
			"pointID": 19,
			"segID": 24,
			"people": "Chong"
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
			"event": "向问天独斗群豪，令狐冲出手相助。",
			"chapter": "18",
			"pointID": 39,
			"segID": 25,
			"people": "Chong"
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
			"event": "向问天与令狐冲摆脱追击。",
			"chapter": "18",
			"pointID": 37,
			"segID": 26,
			"people": "Chong"
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
			"event": "与梅庄四友比剑。",
			"chapter": "19",
			"pointID": 10,
			"segID": 27,
			"people": "Chong"
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
			"event": "被困西湖牢底，习得吸星大法。",
			"chapter": "20",
			"pointID": 0,
			"segID": 28,
			"people": "Chong"
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
			"event": "拒绝任我行入教邀请，前往福州。",
			"chapter": "21",
			"pointID": 10,
			"segID": 29,
			"people": "Chong"
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
			"event": "化装吴天德将军，助恒山弟子脱困。",
			"chapter": "22",
			"pointID": 27,
			"segID": 30,
			"people": "Chong, Yilin"
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
			"event": "恒山派再遭突袭，令狐冲出手相助。",
			"chapter": "23",
			"pointID": 13,
			"segID": 31,
			"people": "Chong"
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
			"event": "辟邪剑谱重现江湖，令狐冲受伤。",
			"chapter": "24",
			"pointID": 34,
			"segID": 32,
			"people": "Chong, Lingshan, Pingzhi"
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
			"event": "辟邪剑谱被盗，令狐冲与华山派嫌隙日深。",
			"chapter": "24",
			"pointID": 14,
			"segID": 33,
			"people": "Chong"
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
			"event": "令狐冲再助恒山脱困。",
			"chapter": "25",
			"pointID": 26,
			"segID": 34,
			"people": "Chong"
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
			"event": "得知任盈盈被困少林，令狐冲转赴少林。",
			"chapter": "25",
			"pointID": 36,
			"segID": 35,
			"people": "Chong, Yilin"
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
			"event": "遇莫大。令狐冲独自前往少林。",
			"chapter": "25",
			"pointID": 28,
			"segID": 36,
			"people": "Chong"
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
			"event": "推举令狐冲为武林盟主，相救圣姑。",
			"chapter": "26",
			"pointID": 16,
			"segID": 37,
			"people": "Chong"
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
			"event": "令狐冲破武当太极剑。",
			"chapter": "26",
			"pointID": 8,
			"segID": 38,
			"people": "Chong"
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
			"event": "令狐冲来到少林，三战后任我行脱困。令狐冲再聚如日月神教之邀。",
			"chapter": "26",
			"pointID": 19,
			"segID": 39,
			"people": "Chong, Yingying"
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
			"event": "令狐冲接任恒山掌门。",
			"chapter": "29",
			"pointID": 11,
			"segID": 40,
			"people": "Chong, Yilin"
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
			"event": "方正、冲虚解释辟邪剑谱原委。",
			"chapter": "30",
			"pointID": 33,
			"segID": 41,
			"people": "Chong"
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
			"event": "任我行等人谋划重返黑木崖。",
			"chapter": "30",
			"pointID": 30,
			"segID": 42,
			"people": "Chong, Yingying"
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
			"event": "恶斗东方不败，任我行重夺日月神教教主。",
			"chapter": "31",
			"pointID": 17,
			"segID": 43,
			"people": "Chong, Yingying"
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
			"event": "率恒山派前往嵩山。",
			"chapter": "32",
			"pointID": 11,
			"segID": 44,
			"people": "Chong"
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
			"event": "封禅台五岳并派，岳不群夺得五岳盟主。",
			"chapter": "32",
			"pointID": 7,
			"segID": 45,
			"people": "Chong, Lingshan"
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
			"event": "林平之挑衅余沧海。",
			"chapter": "35",
			"pointID": 29,
			"segID": 46,
			"people": "Pingzhi"
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
			"event": "林平之再挑衅余沧海。",
			"chapter": "35",
			"pointID": 23,
			"segID": 47,
			"people": "Pingzhi"
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
			"event": "林平之杀余沧海、木高峰。",
			"chapter": "35",
			"pointID": 22,
			"segID": 48,
			"people": "Pingzhi"
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
			"event": "林平之对岳灵珊说出岳不群盗取辟邪剑谱真相。",
			"chapter": "35",
			"pointID": 9,
			"segID": 49,
			"people": "Yingying, Pingzhi, Lingshan"
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
			"event": "岳灵珊为林平之杀死。宁中则自尽。",
			"chapter": "36",
			"pointID": 25,
			"segID": 50,
			"people": "Chong, Lingshan"
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
			"event": "仪琳吐露真情。",
			"chapter": "37",
			"pointID": 11,
			"segID": 51,
			"people": "Yilin"
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
			"event": "群雄被困思过崖。令狐冲脱险，仪琳杀岳不群。",
			"chapter": "38",
			"pointID": 1,
			"segID": 52,
			"people": "Chong"
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
			"event": "任我行驾临华山。",
			"chapter": "39",
			"pointID": 4,
			"segID": 53,
			"people": "Chong"
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
			"event": "任我行逝世，日月神教与武林正教尽释前嫌。",
			"chapter": "40",
			"pointID": 11,
			"segID": 54,
			"people": "Chong"
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
			"event": "令狐冲、任盈盈成亲。",
			"chapter": "40",
			"pointID": 10,
			"segID": 55,
			"people": "Chong, Yingying"
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
			"event": "令狐冲、任盈盈同游华山。全书完。",
			"chapter": "40",
			"pointID": 4,
			"segID": 56,
			"people": "Chong, Yingying"
		},
		"geometry": {
			"coordinates": [110.069444, 34.478889],
			"type": "Point"
		},
		"id": "559d6c3cd47831e3eeab123cf15a2c58"
	}],
	"type": "FeatureCollection"
};

map.on('load', function() {
	map.addSource("schools", {
		"type": "geojson",
		"data": schools
	});

	map.addSource("trips", {
		"type": "geojson",
		"data": trips
	});

	map.addSource("events", {
		"type": "geojson",
		"data": events
	});

	map.addLayer({
		"id": "trips",
		"type": "line",
		"source": "trips",
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

	map.addLayer({
		"id": "events",
		"type": "circle",
		"source": "events",
		"paint": {
			"circle-color": "#d68",
			"circle-opacity": .4,
		}
	});

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
});