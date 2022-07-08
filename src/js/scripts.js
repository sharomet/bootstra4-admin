$(document).ready(function () {

	// Flot Standart
	$.plot('#flot-placeholder', [
		{
			data: [[0,0],[1,2],[2,4],[3,3],[4,5],[5,7],[6,9],[7,10],[8,8],[9,12]],
			color: '#57A1BD',
			label: 'Params'
		}],{
		series: {
			lines: { show: true, fill: true, fillColor: 'rgba(87, 161, 189, 0.2)' },
			points: {show: true}
		},
		grid: {
			color: 'transparent',
			hoverable: true,
			clickable: true
		},
		xaxis: {
			color: 'rgba(87, 161, 189, 0.1)',
			min: 0,
			max: 9
		},
		yaxis: {
			color: 'rgba(87, 161, 189, 0.1)',
			min: 0,
			max: 15
		},
	});

	// Flot Double
	$.plot('#flot-placeholder-double', [
		{
			data: [[0,5],[1,8],[2,1],[3,2],[4,4],[5,2],[6,1],[7,5],[8,2],[9,5]],
			color: '#57A1BD',
			label: 'Params 1'
		},
		{
			data: [[0,0],[1,3],[2,2],[3,5],[4,2],[5,5],[6,8],[7,9],[8,12],[9,9]],
			color: '#3CBC5D',
			label: 'Params 2'
		}],{
		series: {
			lines: { show: true },
			points: {show: true}
		},
		grid: {
			color: 'transparent',
			hoverable: true,
			clickable: true
		},
		xaxis: {
			color: 'rgba(87, 161, 189, 0.1)',
			min: 0,
			max: 9
		},
		yaxis: {
			color: 'rgba(87, 161, 189, 0.1)',
			min: 0,
			max: 15
		},
	});

	// Flot Stack
	$.plot('#flot-placeholder-stack', [
		{
			data: [[0,5],[1,8],[2,1],[3,2],[4,4],[5,2],[6,1],[7,5],[8,2]],
			color: '#57A1BD',
			label: 'Params 1'
		},
		{
			data: [[0,0],[1,3],[2,2],[3,5],[4,2],[5,5],[6,8],[7,9],[8,12]],
			color: '#3CBC5D',
			label: 'Params 2'
		}],{
		series: {
			stack: 0,
			lines: {
				show: false,
				fill: true,
				steps: false
			},
			bars: {
				show: true,
				barWidth: 0.6
			}
		},
		grid: {
			color: 'transparent',
			hoverable: true,
			clickable: true
		},
		xaxis: {
			color: 'rgba(87, 161, 189, 0.1)',
			min: 0,
			max: 9
		},
		yaxis: {
			color: 'rgba(87, 161, 189, 0.1)',
			min: 0,
			max: 15
		},
	});

	// Flot Realtime
	var data = [],
		totalPoints = 300,
		updateInterval = 30;

	function getRandomData() {
		if (data.length > 0)
			data = data.slice(1);
		while (data.length < totalPoints) {
			var prev = data.length > 0 ? data[data.length - 1] : 50,
				y = prev + Math.random() * 10 - 5;
			if (y < 0) {
				y = 0;
			} else if (y > 100) {
				y = 100;
			}
			data.push(y);
		}
		var res = [];
		for (var i = 0; i < data.length; ++i) {
			res.push([i, data[i]])
		}
		return res;
	}
	var plot = $.plot('#flot-placeholder-realtime', [getRandomData()],
		{
		series: {
			shadowSize: 0
		},
		colors: ['#57A1BD'],
		grid: {
			color: 'transparent',
			hoverable: true,
			clickable: true
		},
		xaxis: {
			show: false
		},
		yaxis: {
			color: 'rgba(87, 161, 189, 0.1)',
			min: 0,
			max: 100
		},
	});
	function update() {
		plot.setData([getRandomData()]);
		plot.draw();
		setTimeout(update, updateInterval);
	}
	update();


	$('.flot-container').resizable({
		maxWidth: 900,
		maxHeight: 500,
		minWidth: 450,
		minHeight: 250
	});

});