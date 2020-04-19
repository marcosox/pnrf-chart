const viewExtent = [0, -25000, 1000000, 25000];

const Mhz2Pixel = 100;
const pixel2Mhz = 1 / Mhz2Pixel;	// 0.01
const Khz2Pixel = Mhz2Pixel / 1000;	// 0.1
const pixel2Khz = pixel2Mhz * 1000;	// 10

const DEFAULT_BANDWIDTH = 0.010;

let bands = [
	pnrf,
	pnrf_notes,
	pnrf_notes2,
	pnrf_notes3,
	pnrf_notes4,
];

let channels = [
	pnrf_channels,
	pnrf_channels2,
];

let chart;
let tooltip;

const layers = {
	bandsLayer: {
		name: "bands", visible: true
	},
	channelsLayer: {
		name: "channels", visible: true
	},
	frequencyAxisLayer: {
		name: "frequencyAxis", visible: true
	},
	ticks1000000Layer: {
		name: "ticks1Ghz", visible: true
	},
	ticks100000Layer: {
		name: "ticks100Mhz", visible: true
	},
	ticks50000Layer: {
		name: "ticks50Mhz", visible: false
	},
	ticks10000Layer: {
		name: "ticks10Mhz", visible: false
	},
	ticks5000Layer: {
		name: "ticks5Mhz", visible: false
	},
	ticks1000Layer: {
		name: "ticks1Mhz", visible: false
	},
	ticks100Layer: {
		name: "ticks100Khz", visible: false
	},
	// ticks50Layer: {
	// 	name: "ticks50Khz", visible: false
	// },
	// ticks10Layer: {
	// 	name: "ticks10Khz", visible: false
	// }
};


let settings = {
	baseY: 50,
	maxZoom: 20,
	startZoom: 0,
	startFrequency: 0,
	bands: {
		defaultColor: "rgb(255, 0, 0, 0.5)",
		defaultHeight: 50
	},
	channels: {
		defaultColor: "black",
		defaultBandColor: "rgb(0,0,0,0.6)",
		defaultHeight: 15
	},
	frequencyAxis: {
		axisColor: "black",
		ticks: {
			"1000000": {	// 1 GHz
				color: "black",
				tickLength: 10000,
				width: 2,
				textScale: 2,
				labelMinZoomLevel: 0,
				tickMinZoomLevel: 0
			},
			"100000": {		// 100 MHz
				color: "black",
				tickLength: 4000,
				width: 1.5,
				textScale: 1.75,
				labelMinZoomLevel: 1,
				tickMinZoomLevel: 0
			},
			"50000": {		// 50 MHz
				color: "black",
				tickLength: 2000,
				width: 1.25,
				textScale: 1.5,
				labelMinZoomLevel: 4,
				tickMinZoomLevel: 2
			},
			"10000": {		// 10 MHz
				color: "black",
				tickLength: 400,
				width: 2,
				textScale: 1.5,
				labelMinZoomLevel: 4,
				tickMinZoomLevel: 3
			},
			"5000": {	// 5 MHz
				color: "black",
				tickLength: 200,
				width: 1,
				textScale: 1.25,
				labelMinZoomLevel: 7,
				tickMinZoomLevel: 4
			},
			"1000": {	// 1 MHz
				color: "black",
				tickLength: 50,
				width: 1,
				textScale: 1.25,
				labelMinZoomLevel: 7,
				tickMinZoomLevel: 5
			},
			"100": {		// 100 KHz
				color: "black",
				tickLength: 5,
				width: 1,
				textScale: 1.25,
				labelMinZoomLevel: 11,
				tickMinZoomLevel: 8
			},
			// This starts to slow down the page load time by about ten seconds...
			// "50": {
			// 	color: "black",
			// 	tickLength: 2,
			// 	tickMinZoomLevel: 12
			// },
			// ... and with this chrome just gives up
			// "10": {
			// 	color: "black",
			// 	tickLength: 1,
			// 	tickMinZoomLevel: 14
			// }
		}
	}
};

/**
 * Axis ticks style function
 * @param feature
 * @returns ol.style.Style
 */
function tickStyle(feature) {
	let textVisible = chart.getView().getZoom() >= feature.get("labelMinZoomLevel");
	return new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: feature.get("color"),
			width: feature.get("width")
		}),
		text: new ol.style.Text({
			text: textVisible ? feature.get("text") : "",
			color: feature.get("color"),
			scale: feature.get("textScale"),
			textAlign: "left",
			offsetY: 10
		})
	})
}

function bandsStyle(feature) {
	let color = feature.get('style', {})['color'] || settings.bands.defaultColor;
	const alpha = 0.5;
	// if #hex color, convert to rgb() and add alpha
	if (color[0] === '#') {
		let r = parseInt(color.substr(1, 2), 16);
		let g = parseInt(color.substr(3, 2), 16);
		let b = parseInt(color.substr(5, 2), 16);
		color = "rgb(" + r + "," + g + "," + b + "," + alpha + ")";
	}
	return new ol.style.Style({
		fill: new ol.style.Fill({
			color: color,
		}),
		stroke: new ol.style.Stroke({
			color: "black",
			width: 1
		}),
		text: new ol.style.Text({
			text: feature.get('style', {})['label'],
			scale: 1.2,
			fill: new ol.style.Fill({
				color: "white"
			}),
			stroke: new ol.style.Stroke({
				color: "black"
			})
		})
	})
}

/**
 * Draws the main frequency axis and relative ticks
 */
function drawFrequencyGuide() {
	// Axis
	const xAxis = new ol.Feature(
		new ol.geom.LineString([
			[0, settings.baseY], [viewExtent[2], settings.baseY]
		])
	);
	xAxis.setStyle(new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: settings.frequencyAxis.axisColor
		})
	}));
	layers.frequencyAxisLayer.getSource().addFeature(xAxis, {});

	// Ticks
	const ticksClasses = Object.keys(settings.frequencyAxis.ticks);
	ticksClasses.sort(function (a, b) {
		return (+b) - (+a)
	});
	for (let pixel = 0; pixel < viewExtent[2]; pixel += (+(ticksClasses[ticksClasses.length - 1]) * Khz2Pixel)) {
		const khz = pixel * pixel2Khz;
		for (let ticksClassIndex = 0; ticksClassIndex < ticksClasses.length; ticksClassIndex++) {
			const tickKhz = +ticksClasses[ticksClassIndex];
			if (khz % (+tickKhz) === 0) {
				let layerConfig = settings.frequencyAxis.ticks[tickKhz];

				const xTick = new ol.Feature(
					new ol.geom.LineString([
						[pixel, settings.baseY], [pixel, settings.baseY - layerConfig.tickLength]
					])
				);

				xTick.setStyle(tickStyle);

				xTick.set("color", layerConfig.color);
				xTick.set("width", layerConfig.width);
				xTick.set("textScale", layerConfig.textScale);
				xTick.set("labelMinZoomLevel", layerConfig.labelMinZoomLevel);
				xTick.set("text", "" + (pixel / Mhz2Pixel));

				layers['ticks' + tickKhz + "Layer"].getSource().addFeature(xTick, {});
				break;	// if I draw a tick for a layer, don't draw the other ones
			}
		}
	}
}

/**
 * Returns a formatted string showing the specified frequency in human format
 * @param frequency Frequency to show
 * @param precision number of digits
 */
function getFormattedFrequency(frequency, precision) {
	const digits = precision || 4;
	return (frequency < 1.0) ? (frequency * 1000).toFixed(digits) + "KHz" : frequency.toFixed(digits) + "MHz";
}

/**
 * Populate the html of the popup when cursor is over a band rectangle
 * @param feature band feature
 * @param position cursor position
 */
function populateTooltip(feature, position) {
	if (feature.get("metadata")) {
		const bandMetadata = feature.get("metadata");
		const tableBody = document.querySelector("#popup-table");
		tableBody.innerHTML = "";
		Object.keys(bandMetadata).forEach(function (item) {
			const metadataKey = item;

			if (metadataKey !== "description") {
				const metadataValue = bandMetadata[metadataKey] || [];
				let metadataTableRow = document.createElement("tr");
				let firstColumn = document.createElement("td");
				let secondColumn = document.createElement("td");
				firstColumn.innerHTML = "<b>" + metadataKey + ":</b>";
				if (typeof (metadataValue) !== "string" && metadataValue.length > 0) {
					let valuesList = document.createElement("ul");
					secondColumn.appendChild(valuesList);
					for (let i = 0; i < metadataValue.length; i++) {
						let valueListItem = document.createElement("li");
						valueListItem.innerText = metadataValue[i];
						valuesList.appendChild(valueListItem);
					}
				} else {
					secondColumn.innerText = metadataValue;
				}
				metadataTableRow.appendChild(firstColumn);
				metadataTableRow.appendChild(secondColumn);
				tableBody.appendChild(metadataTableRow);
			}
		});
	}
	// Title and main text
	if (feature.get("type") === "band") {
		document.querySelector("#popup-title").textContent = getFormattedFrequency(feature.get("frequency_min")) + " - " + getFormattedFrequency(feature.get("frequency_max"));
		document.querySelector("#popup-text").innerText = (feature.get("metadata") || {})['description'];
	} else if (feature.get("type") === "channel") {
		let title = getFormattedFrequency(feature.get("frequency"));
		if (feature.get("bandwidth")) {
			title += " (" + getFormattedFrequency(feature.get("bandwidth"), 1) + ")";
		}
		document.querySelector("#popup-title").textContent = title;
		document.querySelector("#popup-text").innerText = (feature.get("metadata") || {})['description'];
	}
	tooltip.setPosition(position);
}

/**
 * Shows the tooltip on mouse hover
 * @param pixel cursor coordinates
 */
function showFeatureTooltip(pixel) {
	const feature = chart.forEachFeatureAtPixel(pixel, function (feature) {
		return feature;
	});
	if (feature && feature.get("type")) {
		populateTooltip(feature, chart.getCoordinateFromPixel(pixel));
	} else {
		tooltip.setPosition(undefined);
		document.querySelector("#popup-table").innerHTML = "";
		document.querySelector("#popup-text").innerHTML = "";
		document.querySelector("#popup-title").innerHTML = "";
	}
}

/**
 * Draw the frequency bands
 */
function drawBands() {
	for (let i = 0; i < bands.length; i++) {
		bands[i].forEach(function drawBand(band) {
			let defaultHeight = settings.bands.defaultHeight;
			if (band['frequency_min'] < 45) {
				defaultHeight = 5;
			} else if (band['frequency_min'] < 470) {
				defaultHeight = 25;
			} else if (band['frequency_min'] < 960){
				defaultHeight = 100;
			} else if (band['frequency_min'] < 4990){
				defaultHeight = 500;
			} else {
				defaultHeight = 1500;
			}
			const bandHeight = ((band['style'] || {})['height '] || defaultHeight);
			const startY = settings.baseY + (bandHeight * i) + ((band['style'] || {})['y'] || 0);
			const bandFeature = new ol.Feature(
				new ol.geom.Polygon([[
					[band['frequency_min'] * Mhz2Pixel, startY],
					[band['frequency_min'] * Mhz2Pixel, startY + bandHeight],
					[band['frequency_max'] * Mhz2Pixel, startY + bandHeight],
					[band['frequency_max'] * Mhz2Pixel, startY],
					[band['frequency_min'] * Mhz2Pixel, startY]
				]]),
				{}
			);
			bandFeature.setStyle(bandsStyle);
			bandFeature.setProperties(band);
			bandFeature.set("type", "band");
			layers.bandsLayer.getSource().addFeature(bandFeature);
		});
	}
}

/**
 * Draws the channel bars
 */
function drawChannels() {
	for (let i = 0; i < channels.length; i++) {
		channels[i].forEach(function drawChannel(channel) {
			const frequency = channel['frequency'] * Mhz2Pixel;
			const channelHeight = (channel['style'] || {})['height'] || settings.channels.defaultHeight;
			// const base = settings.baseY + (channelHeight * i); // channels stacked up (inside the frequency bands)
			const base = settings.baseY - (channelHeight * (i + 1)); // channels stacked down
			const bandwidth = channel['bandwidth'] || DEFAULT_BANDWIDTH;

			// centerline
			const centerLine = new ol.Feature(new ol.geom.LineString([
				[frequency, base], [frequency, base + channelHeight]
			]), {});
			centerLine.setStyle(new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: (channel['style'] || {})['color'] || settings.channels.defaultColor,
					lineDash: [5, 3]
				}),
				text: new ol.style.Text({
					text: (channel['style'] || {})['label'],
					scale: 1.5,
					fill: new ol.style.Fill({
						color: "white"
					}),
					stroke: new ol.style.Stroke({
						color: "black"
					}),
					placement: "line"
				})
			}));

			centerLine.setProperties(channel);
			centerLine.set("type", "channel");
			layers.channelsLayer.getSource().addFeature(centerLine);

			// channel band rectangle
			const channelBand = new ol.Feature(new ol.geom.Polygon([[
				[frequency - (bandwidth * Mhz2Pixel / 2.0), base],
				[frequency - (bandwidth * Mhz2Pixel / 2.0), base + channelHeight],
				[frequency + (bandwidth * Mhz2Pixel / 2.0), base + channelHeight],
				[frequency + (bandwidth * Mhz2Pixel / 2.0), base],
				[frequency - (bandwidth * Mhz2Pixel / 2.0), base]
			]]), {});

			channelBand.setProperties(channel);
			channelBand.set("type", "channel");
			channelBand.setStyle(new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: "black"
				}),
				fill: new ol.style.Fill({
					color: (channel['style'] || {})['bandColor'] || settings.channels.defaultBandColor
				})
			}));
			layers.channelsLayer.getSource().addFeature(channelBand);
		});
	}
}

/**
 * Manages layers visibility at different zoom levels to prevent axis cluttering
 * @param evt zoom event
 */
function zoomHandler(evt) {
	const zoom = evt.map.getView().getZoom();
	Object.keys(settings.frequencyAxis.ticks).forEach(function (tickKhz) {
		layers['ticks' + tickKhz + 'Layer'].setVisible(zoom >= settings.frequencyAxis.ticks[tickKhz].tickMinZoomLevel);
	});
}

/**
 * Mouse position coordinates widget definition
 */
let mousePositionControl = new ol.control.MousePosition({
	coordinateFormat: function (coords) {
		return (coords[0] / 100).toFixed(5) + " MHz";
	},
	projection: 'EPSG:4326',
	undefinedHTML: '&nbsp;'
});

/**
 * Initializes the openlayers map
 */
function initChart() {
	// setup view and map objects
	const projection = new ol.proj.Projection({
		code: 'spectrum-chart',
		units: 'pixels',
		extent: [0, 0, 100000, 1000],	// 1 pixel = 10khz
	});
	chart = new ol.Map({
		layers: [],
		controls: ol.control.defaults().extend([mousePositionControl]),
		target: 'chart',
		view: new ol.View({
			projection: projection,
			extent: viewExtent,
			center: [(settings.startFrequency * Mhz2Pixel), 0] || ol.extent.getCenter(viewExtent),
			zoom: settings.startZoom || 0,
			maxZoom: settings.maxZoom
		})
	});

	// initialize map layers
	Object.keys(layers).forEach(function (layerName) {
		const name = layers[layerName].name;
		const isVisibleOnStart = layers[layerName].visible;
		layers[layerName] = new ol.layer.Vector({
			source: new ol.source.Vector(),
			name: name,
			updateWhileInteracting: true
		});
		chart.addLayer(layers[layerName]);
		layers[layerName].setVisible(isVisibleOnStart)

	});

	// Create tooltip object
	tooltip = new ol.Overlay({
		element: document.getElementById("popup"),
		position: undefined,
		offset: [10, 10]
	});
	chart.addOverlay(tooltip);
	tooltip.getElement().style.display = "block";

	// add event handlers
	chart.on("pointermove", function (evt) {
		showFeatureTooltip(chart.getEventPixel(evt.originalEvent));
	});
	chart.on("moveend", zoomHandler);

	// draw the chart
	drawFrequencyGuide();
	drawBands();
	drawChannels();
}
