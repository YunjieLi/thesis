mapboxgl.accessToken = 'pk.eyJ1IjoieXVuamllIiwiYSI6ImNpZnd0ZjZkczNjNHd0Mm0xcGRoc21nY28ifQ.8lFXo9aC9PfoKQF9ywWW-g';
var map = new mapboxgl.Map({
	container: 'map', // container id
	style: 'mapbox://styles/mapbox/light-v9', //stylesheet location
	center: [111.87163056653998, 33.76161539482898], // starting position
	zoom: 4.14 // starting zoom
});

var schools = {
	"type": "FeatureCollection",
	"features": [{
		"type": "Feature",
		"geometry": {
			"type": "Point",
			"coordinates": [113.00394, 34.51965]
		},
		"properties": {
			"cartodb_id": 1,
			"labelid": 0,
			"haslabel": -1,
			"altmode": -1,
			"symbolid": 1,
			"popupinfo": null,
			"snippet": null,
			"folderpath": "Louis Cha/Schools",
			"name": "中岳嵩山",
			"base": 0
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "Point",
			"coordinates": [110.06944, 34.47888]
		},
		"properties": {
			"cartodb_id": 2,
			"labelid": 0,
			"haslabel": -1,
			"altmode": -1,
			"symbolid": 1,
			"popupinfo": null,
			"snippet": null,
			"folderpath": "Louis Cha/Schools",
			"name": "西岳华山",
			"base": 0
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "Point",
			"coordinates": [112.719912, 27.251833]
		},
		"properties": {
			"cartodb_id": 3,
			"labelid": 0,
			"haslabel": -1,
			"altmode": -1,
			"symbolid": 1,
			"popupinfo": null,
			"snippet": null,
			"folderpath": "Louis Cha/Schools",
			"name": "南岳衡山",
			"base": 0
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "Point",
			"coordinates": [117.104015, 36.25607]
		},
		"properties": {
			"cartodb_id": 4,
			"labelid": 0,
			"haslabel": -1,
			"altmode": -1,
			"symbolid": 1,
			"popupinfo": null,
			"snippet": null,
			"folderpath": "Louis Cha/Schools",
			"name": "东岳泰山",
			"base": 0
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "Point",
			"coordinates": [113.71467, 39.66312]
		},
		"properties": {
			"cartodb_id": 5,
			"labelid": 0,
			"haslabel": -1,
			"altmode": -1,
			"symbolid": 1,
			"popupinfo": null,
			"snippet": null,
			"folderpath": "Louis Cha/Schools",
			"name": "北岳恒山",
			"base": 0
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "Point",
			"coordinates": [112.94206, 34.50654]
		},
		"properties": {
			"cartodb_id": 6,
			"labelid": 0,
			"haslabel": -1,
			"altmode": -1,
			"symbolid": 1,
			"popupinfo": null,
			"snippet": null,
			"folderpath": "Louis Cha/Schools",
			"name": "少林寺",
			"base": 0
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "Point",
			"coordinates": [111.029267, 32.423668]
		},
		"properties": {
			"cartodb_id": 7,
			"labelid": 0,
			"haslabel": -1,
			"altmode": -1,
			"symbolid": 1,
			"popupinfo": null,
			"snippet": null,
			"folderpath": "Louis Cha/Schools",
			"name": "武当山",
			"base": 0
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "Point",
			"coordinates": [113.80943, 37.90899]
		},
		"properties": {
			"cartodb_id": 8,
			"labelid": 0,
			"haslabel": -1,
			"altmode": -1,
			"symbolid": 1,
			"popupinfo": null,
			"snippet": null,
			"folderpath": "Louis Cha/Schools",
			"name": "黑木崖",
			"base": 0
		}
	}]
}

var trips = {
	"type": "FeatureCollection",
	"features": [{
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
			"segid": 2
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
			"segid": 3
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
			"segid": 5
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
			"segid": 6
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
			"segid": 12
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
			"segid": 13
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
			"segid": 14
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
			"segid": 15
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
			"segid": 16
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
			"segid": 17
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
			"segid": 19
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
			"segid": 20
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
			"segid": 21
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
			"segid": 22
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
			"segid": 23
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
			"segid": 24
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
			"segid": 25
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
			"segid": 26
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
			"segid": 27
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
			"segid": 30
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
			"segid": 31
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
			"segid": 32
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
			"segid": 33
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
			"segid": 35
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
			"segid": 36
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
			"segid": 37
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
			"segid": 38
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
			"segid": 39
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
			"segid": 40
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
			"segid": 41
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
			"segid": 42
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
			"segid": 43
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
			"segid": 44
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
			"segid": 48
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
			"segid": 47
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
			"segid": 50
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
			"segid": 51
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
			"segid": 52
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
			"segid": 53
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
			"segid": 55
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
			"segid": 56
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
			"segid": 10
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
			"segid": 49
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
			"segid": 9
		}
	}, {
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
			"segid": 1
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
			"segid": 4
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
			"segid": 54
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
			"segid": 45
		}
	}, {
		"type": "Feature",
		"geometry": null,
		"properties": {
			"segid": null
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
			"segid": 11
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
			"segid": 28
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
			"segid": 29
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
			"segid": 46
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
			"segid": 34
		}
	}]
}

var events = {
	"features": [{
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "27",
			"Name": "西湖牢底",
			"Chapter": "20",
			"SegID": "28",
			"Event": "被困西湖牢底，习得吸星大法。",
			"笑傲江湖_plot_csv_Name": "西湖牢底",
			"people": []
		},
		"geometry": {
			"coordinates": [120.129103, 30.24016],
			"type": "Point"
		},
		"id": "04a9920736328116f4e12fed4dacf1ae"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "2",
			"PointID": "12",
			"Name": "华山思过崖",
			"Chapter": "8",
			"SegID": "13",
			"Event": "思过。风清扬授独孤九剑。",
			"笑傲江湖_plot_csv_Name": "华山思过崖",
			"people": []
		},
		"geometry": {
			"coordinates": [110.074081, 34.470901],
			"type": "Point"
		},
		"id": "0799138fc1312e1dd26f51b3e7858762"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "0",
			"Pingzhi": "1",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "6",
			"Name": "福威镖局长沙分局",
			"Chapter": "2",
			"SegID": "5",
			"Event": "听说金盆洗手大会，折而赴衡山。",
			"笑傲江湖_plot_csv_Name": "福威镖局长沙分局",
			"people": []
		},
		"geometry": {
			"coordinates": [112.98127, 28.200824],
			"type": "Point"
		},
		"id": "17d29974164b2677c65a2d6b258182b7"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "2",
			"PointID": "14",
			"Name": "华山脚下",
			"Chapter": "12",
			"SegID": "15",
			"Event": "不戒出场。令狐冲伤日重。",
			"笑傲江湖_plot_csv_Name": "华山脚下",
			"people": []
		},
		"geometry": {
			"coordinates": [110.057945, 34.519851],
			"type": "Point"
		},
		"id": "1cdc34d44f7a95d5ec82defb346ee58c"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "1",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "52",
			"Name": "华山",
			"Chapter": "39",
			"SegID": "53",
			"Event": "任我行驾临华山。",
			"笑傲江湖_plot_csv_Name": "华山",
			"people": []
		},
		"geometry": {
			"coordinates": [110.069444, 34.478889],
			"type": "Point"
		},
		"id": "1eaf169f827c1cb50b3fd1876fd54a21"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "0",
			"Pingzhi": "1",
			"Narrator": "0",
			"Confidence": "3",
			"PointID": "4",
			"Name": "乡间饭铺",
			"Chapter": "1",
			"SegID": "3",
			"Event": "林振南夫妇被擒，林平之逃跑。",
			"笑傲江湖_plot_csv_Name": "乡间饭铺",
			"people": []
		},
		"geometry": {
			"coordinates": [119.223289, 25.967304],
			"type": "Point"
		},
		"id": "205be0641a2aa1ea90d0a8e29fddcdad"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "2",
			"PointID": "15",
			"Name": "药王庙",
			"Chapter": "12",
			"SegID": "16",
			"Event": "令狐冲以独孤九剑破剑宗弟子、十五蒙面客。",
			"笑傲江湖_plot_csv_Name": "药王庙",
			"people": []
		},
		"geometry": {
			"coordinates": [110.083007, 34.704929],
			"type": "Point"
		},
		"id": "221b2bcc8ad459df2b203da0270aab2e"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "44",
			"Name": "嵩山",
			"Chapter": "32",
			"SegID": "45",
			"Event": "封禅台五岳并派，岳不群夺得五岳盟主。",
			"笑傲江湖_plot_csv_Name": "嵩山",
			"people": []
		},
		"geometry": {
			"coordinates": [113.003943, 34.519649],
			"type": "Point"
		},
		"id": "2eb1e601e6b3d1542028e986b7e12146"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "2",
			"PointID": "37",
			"Name": "武当山脚",
			"Chapter": "26",
			"SegID": "38",
			"Event": "令狐冲颇武当太极剑。",
			"笑傲江湖_plot_csv_Name": "武当山脚",
			"people": []
		},
		"geometry": {
			"coordinates": [111.248931, 32.420543],
			"type": "Point"
		},
		"id": "310c8ac1029df057ab319c2e9d22eb1e"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "1",
			"Yilin": "0",
			"Chong": "0",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "3",
			"PointID": "48",
			"Name": "官道上",
			"Chapter": "35",
			"SegID": "49",
			"Event": "林平之对岳灵珊说出岳不群盗取辟邪剑谱真相。",
			"笑傲江湖_plot_csv_Name": "官道上",
			"people": []
		},
		"geometry": {
			"coordinates": [112.949409, 34.517234],
			"type": "Point"
		},
		"id": "3625d275108fae95a51e38334eada7fa"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "28",
			"Name": "西湖梅庄",
			"Chapter": "21",
			"SegID": "29",
			"Event": "拒绝任我行入教邀请，前往福州。",
			"笑傲江湖_plot_csv_Name": "西湖梅庄",
			"people": []
		},
		"geometry": {
			"coordinates": [120.122151, 30.23623],
			"type": "Point"
		},
		"id": "3b4d32589419c4598b10f67ac4aafcc2"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "43",
			"Name": "恒山",
			"Chapter": "32",
			"SegID": "44",
			"Event": "率恒山派前往嵩山。",
			"笑傲江湖_plot_csv_Name": "恒山",
			"people": []
		},
		"geometry": {
			"coordinates": [113.714675, 39.663127],
			"type": "Point"
		},
		"id": "3dc783c94f637b0496934cd2b3f5b60f"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "2",
			"PointID": "19",
			"Name": "黄河舟中",
			"Chapter": "14",
			"SegID": "20",
			"Event": "与祖千秋论杯。",
			"笑傲江湖_plot_csv_Name": "黄河舟中",
			"people": []
		},
		"geometry": {
			"coordinates": [114.528696, 34.910373],
			"type": "Point"
		},
		"id": "3f13074dbd44ee91d6ecd73f39eea1d0"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "30",
			"Name": "廿八铺",
			"Chapter": "23",
			"SegID": "31",
			"Event": "恒山派再遭突袭，令狐冲出手相助。",
			"笑傲江湖_plot_csv_Name": "廿八铺",
			"people": []
		},
		"geometry": {
			"coordinates": [118.481034, 28.295297],
			"type": "Point"
		},
		"id": "47a2e9032bec72561c9f8b2e89bb8b64"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "32",
			"Name": "福威镖局",
			"Chapter": "24",
			"SegID": "33",
			"Event": "辟邪剑谱被盗，令狐冲与华山派嫌隙日深。",
			"笑傲江湖_plot_csv_Name": "福威镖局",
			"people": []
		},
		"geometry": {
			"coordinates": [119.286966, 26.072734],
			"type": "Point"
		},
		"id": "4d08ad375c9b03b7b4263d3790658ab2"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "1",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "55",
			"Name": "华山",
			"Chapter": "40",
			"SegID": "56",
			"Event": "令狐冲、任盈盈同游华山。全书完。",
			"笑傲江湖_plot_csv_Name": "华山",
			"people": []
		},
		"geometry": {
			"coordinates": [110.069444, 34.478889],
			"type": "Point"
		},
		"id": "559d6c3cd47831e3eeab123cf15a2c58"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "18",
			"Name": "朱仙镇",
			"Chapter": "14",
			"SegID": "19",
			"Event": "平一指居遇桃谷六仙。",
			"笑傲江湖_plot_csv_Name": "朱仙镇",
			"people": []
		},
		"geometry": {
			"coordinates": [114.267054, 34.615253],
			"type": "Point"
		},
		"id": "566bec5f3e286fdda81ad4da54229c94"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "11",
			"Name": "华山",
			"Chapter": "7",
			"SegID": "12",
			"Event": "回归华山。",
			"笑傲江湖_plot_csv_Name": "华山",
			"people": []
		},
		"geometry": {
			"coordinates": [110.069444, 34.478889],
			"type": "Point"
		},
		"id": "586ab8dfe48e61c2307c88008084e71a"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "2",
			"PointID": "36",
			"Name": "黄保坪",
			"Chapter": "26",
			"SegID": "37",
			"Event": "推举令狐冲为武林盟主，相救圣姑。",
			"笑傲江湖_plot_csv_Name": "黄保坪",
			"people": []
		},
		"geometry": {
			"coordinates": [111.805114, 31.961483],
			"type": "Point"
		},
		"id": "595ed9e22b40a4eb6b80ecf5ba96a4e6"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "3",
			"PointID": "42",
			"Name": "黑木崖",
			"Chapter": "31",
			"SegID": "43",
			"Event": "恶斗东方不败，任我行重夺日月神教教主。",
			"笑傲江湖_plot_csv_Name": "黑木崖",
			"people": []
		},
		"geometry": {
			"coordinates": [113.809433, 37.908992],
			"type": "Point"
		},
		"id": "5b7bc22f94a2c4a8bb2a8e7ae9fb98c5"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "39",
			"Name": "恒山",
			"Chapter": "29",
			"SegID": "40",
			"Event": "令狐冲接任恒山掌门",
			"笑傲江湖_plot_csv_Name": "恒山",
			"people": []
		},
		"geometry": {
			"coordinates": [113.714675, 39.663127],
			"type": "Point"
		},
		"id": "62340fafc48b1f59fc1e90d4da01454f"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "2",
			"PointID": "22",
			"Name": "五霸岗",
			"Chapter": "17",
			"SegID": "23",
			"Event": "群雄聚会为令狐冲治伤。令狐冲又见婆婆，得悉任盈盈真容。",
			"笑傲江湖_plot_csv_Name": "五霸岗",
			"people": []
		},
		"geometry": {
			"coordinates": [115.20401, 35.405002],
			"type": "Point"
		},
		"id": "66999b91bc3f5238df47d39a1e4785db"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "23",
			"Name": "少林寺",
			"Chapter": "18",
			"SegID": "24",
			"Event": "任盈盈负令狐冲上少林。令狐冲为华山逐出门墙，不愿改投他派，拜别少林。",
			"笑傲江湖_plot_csv_Name": "少林寺",
			"people": []
		},
		"geometry": {
			"coordinates": [112.942068, 34.506546],
			"type": "Point"
		},
		"id": "6c69cf330ea4129654d255bd64d54116"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "0",
			"Pingzhi": "0",
			"Narrator": "1",
			"Confidence": "1",
			"PointID": "11",
			"Name": "衡山城",
			"Chapter": "6",
			"SegID": "10",
			"Event": "刘正风金盆洗手大会。",
			"笑傲江湖_plot_csv_Name": "衡山城",
			"people": []
		},
		"geometry": {
			"coordinates": [112.868268, 27.230291],
			"type": "Point"
		},
		"id": "6f96ecc65ffb4d2cf10e040e3481bf1f"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "1",
			"Chong": "0",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "2",
			"PointID": "10",
			"Name": "城外荒山",
			"Chapter": "5",
			"SegID": "9",
			"Event": "令狐冲养伤，仪琳相伴。",
			"笑傲江湖_plot_csv_Name": "城外荒山",
			"people": []
		},
		"geometry": {
			"coordinates": [112.86169, 27.231737],
			"type": "Point"
		},
		"id": "734571a72f13fba733285d5d06f005d5"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "0",
			"Pingzhi": "0",
			"Narrator": "1",
			"Confidence": "1",
			"PointID": "54",
			"Name": "西湖梅庄",
			"Chapter": "40",
			"SegID": "55",
			"Event": "令狐冲、任盈盈成亲。",
			"笑傲江湖_plot_csv_Name": "西湖梅庄",
			"people": []
		},
		"geometry": {
			"coordinates": [120.122151, 30.23623],
			"type": "Point"
		},
		"id": "73fb4e663bc392a32406e0a23b573172"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "1",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "50",
			"Name": "恒山",
			"Chapter": "37",
			"SegID": "51",
			"Event": "仪琳吐露真情。",
			"笑傲江湖_plot_csv_Name": "恒山",
			"people": []
		},
		"geometry": {
			"coordinates": [113.714675, 39.663127],
			"type": "Point"
		},
		"id": "784cf46d92f91665961b771f31ca78bd"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "0",
			"Pingzhi": "0",
			"Narrator": "1",
			"Confidence": "1",
			"PointID": "53",
			"Name": "恒山",
			"Chapter": "40",
			"SegID": "54",
			"Event": "任我行逝世，日月神教与武林正教尽释前嫌。",
			"笑傲江湖_plot_csv_Name": "恒山",
			"people": []
		},
		"geometry": {
			"coordinates": [113.714675, 39.663127],
			"type": "Point"
		},
		"id": "7955307e262ee6ac4e0cd44f757e5c57"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "38",
			"Name": "少林寺",
			"Chapter": "26",
			"SegID": "39",
			"Event": "令狐冲来到少林，三战后任我行脱困。令狐冲再聚如日月神教之邀。",
			"笑傲江湖_plot_csv_Name": "少林寺",
			"people": []
		},
		"geometry": {
			"coordinates": [112.942068, 34.506546],
			"type": "Point"
		},
		"id": "7b86e102c0965d180e9d573cbd2c2e8a"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "0",
			"Pingzhi": "1",
			"Narrator": "0",
			"Confidence": "3",
			"PointID": "47",
			"Name": "路边草棚",
			"Chapter": "35",
			"SegID": "48",
			"Event": "林平之杀余沧海、木高峰。",
			"笑傲江湖_plot_csv_Name": "路边草棚",
			"people": []
		},
		"geometry": {
			"coordinates": [112.955932, 34.515537],
			"type": "Point"
		},
		"id": "7f5cfd50ec7843f026fbbac3d65d8632"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "26",
			"Name": "西湖梅庄",
			"Chapter": "19",
			"SegID": "27",
			"Event": "与梅庄四友比剑。",
			"笑傲江湖_plot_csv_Name": "西湖梅庄",
			"people": []
		},
		"geometry": {
			"coordinates": [120.122151, 30.23623],
			"type": "Point"
		},
		"id": "877622c5deca76083d9c4de7be2230dd"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "0",
			"Pingzhi": "1",
			"Narrator": "0",
			"Confidence": "3",
			"PointID": "46",
			"Name": "江边市镇",
			"Chapter": "35",
			"SegID": "47",
			"Event": "林平之再挑衅余沧海。",
			"笑傲江湖_plot_csv_Name": "江边市镇",
			"people": []
		},
		"geometry": {
			"coordinates": [112.97327, 34.514267],
			"type": "Point"
		},
		"id": "87a71b91a440c975cf74a93db3e53b71"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "16",
			"Name": "洛阳",
			"Chapter": "13",
			"SegID": "17",
			"Event": "华山派拜访金刀王元霸。绿竹巷重闻笑傲江湖曲。令狐冲学琴。",
			"笑傲江湖_plot_csv_Name": "洛阳",
			"people": []
		},
		"geometry": {
			"coordinates": [112.45404, 34.624343],
			"type": "Point"
		},
		"id": "89b9a5279e3202aeefcb934ce1e7338d"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "3",
			"PointID": "49",
			"Name": "无名荒谷",
			"Chapter": "36",
			"SegID": "50",
			"Event": "岳灵珊为林平之杀死。宁中则自尽。",
			"笑傲江湖_plot_csv_Name": "无名荒谷",
			"people": []
		},
		"geometry": {
			"coordinates": [112.946233, 34.522113],
			"type": "Point"
		},
		"id": "89bf155dddf1d41b3543be5f3d8919dc"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "33",
			"Name": "龙泉铸剑谷",
			"Chapter": "25",
			"SegID": "34",
			"Event": "令狐冲再助恒山脱困。得知圣姑被困少林，前往相救。",
			"笑傲江湖_plot_csv_Name": "龙泉铸剑谷",
			"people": []
		},
		"geometry": {
			"coordinates": [119.076004, 28.082582],
			"type": "Point"
		},
		"id": "915ac2623a2c3c683811a69fdc74ba4c"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "29",
			"Name": "仙霞岭",
			"Chapter": "22",
			"SegID": "30",
			"Event": "化装吴天德将军，助恒山弟子脱困。",
			"笑傲江湖_plot_csv_Name": "仙霞岭",
			"people": []
		},
		"geometry": {
			"coordinates": [118.506495, 28.355562],
			"type": "Point"
		},
		"id": "9559efe9702b26a5e7ee79ae48108bf5"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "2",
			"PointID": "51",
			"Name": "华山思过崖",
			"Chapter": "38",
			"SegID": "52",
			"Event": "群雄被困思过崖。令狐冲脱险，仪琳杀岳不群。",
			"笑傲江湖_plot_csv_Name": "华山思过崖",
			"people": []
		},
		"geometry": {
			"coordinates": [110.074081, 34.470901],
			"type": "Point"
		},
		"id": "999c5f435d9432b4897ff35ce66bacd5"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "13",
			"Name": "华山",
			"Chapter": "10",
			"SegID": "14",
			"Event": "剑气之争。华山派外出避乱。陆大有被杀。",
			"笑傲江湖_plot_csv_Name": "华山",
			"people": []
		},
		"geometry": {
			"coordinates": [110.069444, 34.478889],
			"type": "Point"
		},
		"id": "a741ebd7f0b137b544a13b5a78309317"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "2",
			"PointID": "35",
			"Name": "鸡鸣渡",
			"Chapter": "25",
			"SegID": "36",
			"Event": "遇莫大。令狐冲独自前往少林。",
			"笑傲江湖_plot_csv_Name": "鸡鸣渡",
			"people": []
		},
		"geometry": {
			"coordinates": [112.615356, 30.730032],
			"type": "Point"
		},
		"id": "b07a9583ce4b8a4b010ee54361a6873b"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "0",
			"Pingzhi": "1",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "3",
			"Name": "福威镖局",
			"Chapter": "1",
			"SegID": "2",
			"Event": "镖局中人接连离奇死亡。林振南全家出逃被抓。",
			"笑傲江湖_plot_csv_Name": "福威镖局",
			"people": []
		},
		"geometry": {
			"coordinates": [119.286966, 26.072734],
			"type": "Point"
		},
		"id": "b4ddbc5f06ee963e4c1c919856e3f13e"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "0",
			"Pingzhi": "1",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "1",
			"Name": "福威镖局",
			"Chapter": "1",
			"SegID": "0",
			"Event": "林平之出门打猎",
			"笑傲江湖_plot_csv_Name": "福威镖局",
			"people": []
		},
		"geometry": {
			"coordinates": [119.286966, 26.072734],
			"type": "Point"
		},
		"id": "bd08c70d464cb7770d87e54988eb5b19"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "0",
			"Pingzhi": "1",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "7",
			"Name": "衡山城",
			"Chapter": "2",
			"SegID": "6",
			"Event": "刘正风宅，仪琳叙述令狐冲相救经过。令狐冲\b伤重。",
			"笑傲江湖_plot_csv_Name": "衡山城",
			"people": []
		},
		"geometry": {
			"coordinates": [112.868268, 27.230291],
			"type": "Point"
		},
		"id": "bda7c6388edf660057f130f34fc39d5b"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "0",
			"Pingzhi": "1",
			"Narrator": "0",
			"Confidence": "2",
			"PointID": "45",
			"Name": "山下小镇",
			"Chapter": "35",
			"SegID": "46",
			"Event": "林平之挑衅余沧海。",
			"笑傲江湖_plot_csv_Name": "山下小镇",
			"people": []
		},
		"geometry": {
			"coordinates": [112.990183, 34.517234],
			"type": "Point"
		},
		"id": "be447bca9f0a211b302bd9cda4e6609b"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "41",
			"Name": "平定州",
			"Chapter": "30",
			"SegID": "42",
			"Event": "任我行等人谋划重返黑木崖。",
			"笑傲江湖_plot_csv_Name": "平定州",
			"people": []
		},
		"geometry": {
			"coordinates": [113.657841, 37.786651],
			"type": "Point"
		},
		"id": "bff61120edae0c219480204745deb4ed"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "0",
			"Pingzhi": "1",
			"Narrator": "0",
			"Confidence": "2",
			"PointID": "2",
			"Name": "乡间茶肆",
			"Chapter": "1",
			"SegID": "1",
			"Event": "遇岳灵珊，误杀余沧海之子。",
			"笑傲江湖_plot_csv_Name": "乡间茶肆",
			"people": []
		},
		"geometry": {
			"coordinates": [119.271268, 26.08554],
			"type": "Point"
		},
		"id": "c0016fcb85b1942b99f88cbacf750b45"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "3",
			"PointID": "21",
			"Name": "黄河舟中续",
			"Chapter": "16",
			"SegID": "22",
			"Event": "蓝凤凰以药酒相赠，水蛭取血疗伤。",
			"笑傲江湖_plot_csv_Name": "黄河舟中续",
			"people": []
		},
		"geometry": {
			"coordinates": [114.864132, 35.11972],
			"type": "Point"
		},
		"id": "cb33895d1478b2bc901088cfa7976b28"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "40",
			"Name": "恒山悬空寺",
			"Chapter": "30",
			"SegID": "41",
			"Event": "方正、冲虚解释辟邪剑谱原委。",
			"笑傲江湖_plot_csv_Name": "恒山悬空寺",
			"people": []
		},
		"geometry": {
			"coordinates": [113.712312, 39.658172],
			"type": "Point"
		},
		"id": "cea2c08805493e8a81cb71ec1d9285d8"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "31",
			"Name": "福州向阳巷老宅",
			"Chapter": "24",
			"SegID": "32",
			"Event": "辟邪剑谱重现江湖，令狐冲受伤。",
			"笑傲江湖_plot_csv_Name": "福州向阳巷老宅",
			"people": []
		},
		"geometry": {
			"coordinates": [119.29882, 26.07097],
			"type": "Point"
		},
		"id": "df0854ece5d27879b67d1394a4b3bf7a"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "2",
			"PointID": "20",
			"Name": "老头子居",
			"Chapter": "15",
			"SegID": "21",
			"Event": "令狐冲放血救治老头子之女。",
			"笑傲江湖_plot_csv_Name": "老头子居",
			"people": []
		},
		"geometry": {
			"coordinates": [114.600067, 34.964412],
			"type": "Point"
		},
		"id": "df6b669cbbf33aff5c0a4ed40f0f5d92"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "34",
			"Name": "九江",
			"Chapter": "25",
			"SegID": "35",
			"Event": "得知任盈盈被困少林，令狐冲转赴少林。",
			"笑傲江湖_plot_csv_Name": "九江",
			"people": []
		},
		"geometry": {
			"coordinates": [115.980949, 29.726818],
			"type": "Point"
		},
		"id": "eb465fd418d367fbc4f44f14a31bcc60"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "1",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "2",
			"PointID": "10",
			"Name": "城外荒山",
			"Chapter": "7",
			"SegID": "11",
			"Event": "刘正风、曲洋死。令狐冲受托笑傲江湖曲。令狐冲受托转告林振南遗言。",
			"笑傲江湖_plot_csv_Name": "城外荒山",
			"people": []
		},
		"geometry": {
			"coordinates": [112.86169, 27.231737],
			"type": "Point"
		},
		"id": "f242205c43dbd8c63f31cba3f4561a4a"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "3",
			"PointID": "25",
			"Name": "仙愁峡",
			"Chapter": "18",
			"SegID": "26",
			"Event": "向问天与令狐冲摆脱追击。",
			"笑傲江湖_plot_csv_Name": "仙愁峡",
			"people": []
		},
		"geometry": {
			"coordinates": [113.040561, 34.552658],
			"type": "Point"
		},
		"id": "f37862013772e75437a637321575cec0"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "0",
			"Pingzhi": "1",
			"Narrator": "0",
			"Confidence": "1",
			"PointID": "5",
			"Name": "福威镖局南昌分局",
			"Chapter": "2",
			"SegID": "4",
			"Event": "已毁。",
			"笑傲江湖_plot_csv_Name": "福威镖局南昌分局",
			"people": []
		},
		"geometry": {
			"coordinates": [115.89992, 28.675991],
			"type": "Point"
		},
		"id": "f5d9cb43b5a993e9d220a35fcff65e70"
	}, {
		"type": "Feature",
		"properties": {
			"Yinyin": "0",
			"Yilin": "0",
			"Chong": "1",
			"Pingzhi": "0",
			"Narrator": "0",
			"Confidence": "2",
			"PointID": "24",
			"Name": "山下凉亭",
			"Chapter": "18",
			"SegID": "25",
			"Event": "向问天独斗群豪，令狐冲出手相助。",
			"笑傲江湖_plot_csv_Name": "山下凉亭",
			"people": []
		},
		"geometry": {
			"coordinates": [112.98726, 34.493469],
			"type": "Point"
		},
		"id": "f78a54f1ce69d7ee6335b73fe46ca50e"
	}],
	"type": "FeatureCollection"
}

// trips.features.forEach(function(feature){
// 	var segid = feature.properties.segid; 
// 	feature.properties = {"segid": segid};
// });

// events.features.forEach(function(feature){
// 	var people = [];
// 	var list = ["yilin", "yingying", "pingzhi", "chong", "narrator"];
// 	list.forEach(function(name) {
// 		feature.properties.name ? people.push(name) : null;
// 		delete feature.properties.name;
// 	});
// 	feature.properties.people = people;
// });

// console.log( JSON.stringify( trips ) );
// console.log( JSON.stringify( events ) );

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
			"line-color": "#b88",
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
			"icon-image": "mountain-15",
			"icon-allow-overlap": true,
			"icon-ignore-placement": true,
			"text-field": "{name}",
			"text-size": 11,
			"text-offset": [0, 1],
			"text-anchor": "top"
		}
	});
});