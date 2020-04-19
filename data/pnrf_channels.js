let pnrf_channels = [
	{
		"frequency": 0.457,
		"bandwidth": 0.0001,
		"metadata": {
			"description": "Rilevazione di emergenza di vittime sepolte e oggetti di valore"
		},
		"style": {
			"label": "Localizzazione vittime sepolte",
			"bandColor": "#ff0000"
		}
	},
	{
		"frequency": 0.49,
		"metadata": {
			"description": "Avvisi ai naviganti e meteorologici e informazioni urgenti alle navi per mezzo telegrafia a stampa a banda stretta"
		},
		"style": {
			"label": "NAVTEX",
			"bandColor": "#0000ff"
		}
	},
	{
		"frequency": 0.518,
		"metadata": {
			"description": "Avvisi ai naviganti e meteorologici e informazioni urgenti alle navi per mezzo telegrafia a stampa a banda stretta"
		},
		"style": {
			"label": "NAVTEX",
			"bandColor": "#0000ff"
		}
	},
	{
		"frequency": 2.1745,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Frequenza internazionale di soccorso per la telegrafia a stampa a banda stretta (TELEX)"
		},
		"style": {
			"label": "TELEX GMDSS",
			"bandColor": "#0000ff"
		}
	},
	{
		"frequency": 2.182,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Frequenza internazionale di soccorso e chiamata in radiotelefonia, ricerca e soccorso di veicoli spaziali con pilota"
		},
		"style": {
			"label": "SAR GMDSS",
			"bandColor": "#ff00ff"
		}
	},
	{
		"frequency": 2.1875,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Frequenza internazionale di soccorso per la chiamata selettiva numerica"
		},
		"style": {
			"label": "DSC GMDSS",
			"bandColor": "#ff0000"
		}
	},
	{
		"frequency": 3.023,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Ricerca e soccorso di veicoli spaziali con pilota, stazioni del servizio mobile marittimo impiegate in operazioni coordinate di ricerca e salvataggio"
		},
		"style": {
			"label": "SAR Spaziale\nSAR marittimo",
			"bandColor": "#aa00ff"
		}
	},
	{
		"frequency": 4.125,
		"bandwidth": 0.001,
		"metadata": {
			"description": "GMDSS marittimo"
		},
		"style": {
			"label": "GMDSS marittimo",
			"bandColor": "#0000ff"
		}
	},
	{
		"frequency": 4.1775,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Frequenza internazionale di soccorso per la telegrafia a stampa a banda stretta (TELEX)"
		},
		"style": {
			"label": "TELEX GMDSS",
			"bandColor": "#0000ff"
		}
	},
	{
		"frequency": 4.2075,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Frequenza internazionale di soccorso per la chiamata selettiva numerica"
		},
		"style": {
			"label": "DSC GMDSS",
			"bandColor": "#ff0000"
		}
	},
	{
		"frequency": 4.2095,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Avvisi ai naviganti e meteorologici e informazioni urgenti alle navi per mezzo telegrafia a stampa a banda stretta"
		},
		"style": {
			"label": "NAVTEX",
			"bandColor": "#0000ff"
		}
	},
	{
		"frequency": 4.21,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Frequenza internazionale per la trasmissione di informazioni per la sicurezza marittima"
		},
		"style": {
			"label": "Informazioni marittime",
			"bandColor": "#0000ff"
		}
	},
	{
		"frequency": 4.234,
		"metadata": {
			"description": "Frequenza centrale di apparati a corto raggio in ausilio al traffico ferroviario",
			"normative": [
				"CEPT ERC/REC 70-03 (Annesso 4)"
			]
		},
		"style": {
			"label": "Traffico ferroviario",
			"bandColor": "#8fbf28"
		}
	},
	{
		"frequency": 5.68,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Ricerca e soccorso di veicoli spaziali con pilota, stazioni del servizio mobile marittimo impiegate in operazioni coordinate di ricerca e salvataggio"
		},
		"style": {
			"label": "SAR Spaziale\nSAR marittimo",
			"bandColor": "#aa00ff"
		}
	},
	{
		"frequency": 6.215,
		"bandwidth": 0.001,
		"metadata": {
			"description": "GMDSS marittimo"
		},
		"style": {
			"label": "GMDSS marittimo",
			"bandColor": "#0000ff"
		}
	},
	{
		"frequency": 6.268,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Frequenza internazionale di soccorso per la telegrafia a stampa a banda stretta (TELEX)"
		},
		"style": {
			"label": "TELEX GMDSS",
			"bandColor": "#0000ff"
		}
	},
	{
		"frequency": 6.312,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Frequenza internazionale di soccorso per la chiamata selettiva numerica"
		},
		"style": {
			"label": "DSC GMDSS",
			"bandColor": "#ff0000"
		}
	},
	{
		"frequency": 6.314,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Frequenza internazionale per la trasmissione di informazioni per la sicurezza marittima"
		},
		"style": {
			"label": "Informazioni marittime",
			"bandColor": "#0000ff"
		}
	},
	{
		"frequency": 8.291,
		"bandwidth": 0.001,
		"metadata": {
			"description": "GMDSS"
		},
		"style": {
			"label": "GMDSS",
			"bandColor": "#ff0000"
		}
	},
	{
		"frequency": 8.364,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Ricerca e soccorso di veicoli spaziali con pilota"
		},
		"style": {
			"label": "SAR Spaziale",
			"bandColor": "#aa00ff"
		}
	},
	{
		"frequency": 8.3765,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Frequenza internazionale di soccorso per la telegrafia a stampa a banda stretta (TELEX)"
		},
		"style": {
			"label": "TELEX GMDSS",
			"bandColor": "#0000ff"
		}
	},
	{
		"frequency": 8.4145,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Frequenza internazionale di soccorso per la chiamata selettiva numerica"
		},
		"style": {
			"label": "DSC GMDSS",
			"bandColor": "#ff0000"
		}
	},
	{
		"frequency": 8.4165,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Frequenza internazionale per la trasmissione di informazioni per la sicurezza marittima"
		},
		"style": {
			"label": "Informazioni marittime",
			"bandColor": "#0000ff"
		}
	},
	{
		"frequency": 10.003,
		"bandwidth": 0.006,
		"metadata": {
			"description": "Ricerca e soccorso di veicoli spaziali con pilota"
		},
		"style": {
			"label": "SAR Spaziale",
			"bandColor": "#aa00ff"
		}
	},
	{
		"frequency": 12.29,
		"bandwidth": 0.001,
		"metadata": {
			"description": "GMDSS"
		},
		"style": {
			"label": "GMDSS",
			"bandColor": "#ff0000"
		}
	},
	{
		"frequency": 12.52,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Frequenza internazionale di soccorso per la telegrafia a stampa a banda stretta (TELEX)"
		},
		"style": {
			"label": "TELEX GMDSS",
			"bandColor": "#0000ff"
		}
	},
	{
		"frequency": 12.577,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Frequenza internazionale di soccorso per la chiamata selettiva numerica"
		},
		"style": {
			"label": "DSC GMDSS",
			"bandColor": "#ff0000"
		}
	},
	{
		"frequency": 12.579,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Frequenza internazionale per la trasmissione di informazioni per la sicurezza marittima"
		},
		"style": {
			"label": "Informazioni marittime",
			"bandColor": "#0000ff"
		}
	},
	{
		"frequency": 13.547,
		"metadata": {
			"description": "Frequenza centrale di apparati a corto raggio in ausilio al traffico ferroviario",
			"normative": [
				"CEPT ERC/REC 70-03 (Annesso 4)"
			]
		},
		"style": {
			"label": "Traffico ferroviario",
			"bandColor": "#8fbf28"
		}
	},
	{
		"frequency": 14.993,
		"bandwidth": 0.006,
		"metadata": {
			"description": "Ricerca e soccorso di veicoli spaziali con pilota"
		},
		"style": {
			"label": "SAR Spaziale",
			"bandColor": "#aa00ff"
		}
	},
	{
		"frequency": 16.42,
		"bandwidth": 0.001,
		"metadata": {
			"description": "GMDSS"
		},
		"style": {
			"label": "GMDSS",
			"bandColor": "#ff0000"
		}
	},
	{
		"frequency": 16.695,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Frequenza internazionale di soccorso per la telegrafia a stampa a banda stretta (TELEX)"
		},
		"style": {
			"label": "TELEX GMDSS",
			"bandColor": "#0000ff"
		}
	},
	{
		"frequency": 16.8045,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Frequenza internazionale di soccorso per la chiamata selettiva numerica"
		},
		"style": {
			"label": "DSC GMDSS",
			"bandColor": "#ff0000"
		}
	},
	{
		"frequency": 16.8065,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Frequenza internazionale per la trasmissione di informazioni per la sicurezza marittima"
		},
		"style": {
			"label": "Informazioni marittime",
			"bandColor": "#0000ff"
		}
	},
	{
		"frequency": 19.6805,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Frequenza internazionale per la trasmissione di informazioni per la sicurezza marittima"
		},
		"style": {
			"label": "Informazioni marittime",
			"bandColor": "#0000ff"
		}
	},
	{
		"frequency": 19.993,
		"bandwidth": 0.006,
		"metadata": {
			"description": "Ricerca e soccorso di veicoli spaziali con pilota"
		},
		"style": {
			"label": "SAR Spaziale",
			"bandColor": "#aa00ff"
		}
	},
	{
		"frequency": 22.376,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Frequenza internazionale per la trasmissione di informazioni per la sicurezza marittima"
		},
		"style": {
			"label": "Informazioni marittime",
			"bandColor": "#0000ff"
		}
	},
	{
		"frequency": 26.1005,
		"bandwidth": 0.001,
		"metadata": {
			"description": "Frequenza internazionale per la trasmissione di informazioni per la sicurezza marittima"
		},
		"style": {
			"label": "Informazioni marittime",
			"bandColor": "#0000ff"
		}
	},
	{
		"frequency": 26.190,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Ricerca persone (chiamata)"
		},
		"style": {
			"bandColor": "#ff00ff",
			"label": "Ricerca persone (chiamata)"
		}
	},
	{
		"frequency": 26.200,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Ricerca persone (chiamata)"
		},
		"style": {
			"bandColor": "#ff00ff",
			"label": "Ricerca persone (chiamata)"
		}
	},
	{
		"frequency": 26.210,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Ricerca persone (chiamata)"
		},
		"style": {
			"bandColor": "#ff00ff",
			"label": "Ricerca persone (chiamata)"
		}
	},
	{
		"frequency": 26.340,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Ricerca persone (chiamata)"
		},
		"style": {
			"bandColor": "#ff00ff",
			"label": "Ricerca persone (chiamata)"
		}
	},
	{
		"frequency": 26.350,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Ricerca persone (chiamata)"
		},
		"style": {
			"bandColor": "#ff00ff",
			"label": "Ricerca persone (chiamata)"
		}
	},
	{
		"frequency": 26.360,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Ricerca persone (chiamata)"
		},
		"style": {
			"bandColor": "#ff00ff",
			"label": "Ricerca persone (chiamata)"
		}
	},
	{
		"frequency": 26.490,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Ricerca persone (chiamata)"
		},
		"style": {
			"bandColor": "#ff00ff",
			"label": "Ricerca persone (chiamata)"
		}
	},
	{
		"frequency": 26.500,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Ricerca persone (chiamata)"
		},
		"style": {
			"bandColor": "#ff00ff",
			"label": "Ricerca persone (chiamata)"
		}
	},
	{
		"frequency": 26.510,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Ricerca persone (chiamata)"
		},
		"style": {
			"bandColor": "#ff00ff",
			"label": "Ricerca persone (chiamata)"
		}
	},
	{
		"frequency": 26.855,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Ausilio alle attività professionali sanitarie ed alle attività direttamente ad esse collegate",
			"mode": "Modulazione angolare"
		},
		"style": {
			"label": "Attività sanitarie",
			"bandColor": "#ff7ca7"
		}
	},
	{
		"frequency": 26.865,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Ausilio alle attività professionali sanitarie ed alle attività direttamente ad esse collegate",
			"mode": "Modulazione angolare"
		},
		"style": {
			"label": "Attività sanitarie",
			"bandColor": "#ff7ca7"
		}
	},
	{
		"frequency": 26.875,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Ausilio al traffico, trasporto su strada e rotaia, sicurezza e soccorso sulle strade, foreste, caccia, pesca, sicurezza notturna"
		},
		"style": {
			"label": "Traffico, caccia, pesca, treni, metronotte",
			"bandColor": "#ff0c27"
		}
	},
	{
		"frequency": 26.885,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Ausilio al traffico, trasporto su strada e rotaia, sicurezza e soccorso sulle strade, foreste, caccia, pesca, sicurezza notturna"
		},
		"style": {
			"label": "Traffico, caccia, pesca, treni, metronotte",
			"bandColor": "#ff0c27"
		}
	},
	{
		"frequency": 26.895,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Ausilio alle imprese industriali, commerciali, artigiane ed agrarie"
		},
		"style": {
			"label": "Industrie",
			"bandColor": "#008817"
		}
	},
	{
		"frequency": 26.905,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Ausilio alle imprese industriali, commerciali, artigiane ed agrarie"
		},
		"style": {
			"label": "Industrie",
			"bandColor": "#008817"
		}
	},
	{
		"frequency": 26.915,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Collegamenti riguardanti la sicurezza della vita umana in mare, o comunque di emergenza,\nfra piccole imbarcazioni e stazioni base collocate presso sedi di organizzazioni nautiche,\nnonché di collegamenti di servizio fra diversi punti di una stessa nave",
			"mode": "Modulazione angolare"
		},
		"style": {
			"label": "Radio marittima",
			"bandColor": "#2556ff"
		}
	},
	{
		"frequency": 26.925,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Collegamenti riguardanti la sicurezza della vita umana in mare, o comunque di emergenza,\nfra piccole imbarcazioni e stazioni base collocate presso sedi di organizzazioni nautiche,\nnonché di collegamenti di servizio fra diversi punti di una stessa nave",
			"mode": "Modulazione angolare"
		},
		"style": {
			"label": "Radio marittima",
			"bandColor": "#2556ff"
		}
	},
	{
		"frequency": 26.935,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Collegamenti riguardanti la sicurezza della vita umana in mare, o comunque di emergenza,\nfra piccole imbarcazioni e stazioni base collocate presso sedi di organizzazioni nautiche,\nnonché di collegamenti di servizio fra diversi punti di una stessa nave",
			"mode": "Modulazione angolare"
		},
		"style": {
			"label": "Radio marittima",
			"bandColor": "#2556ff"
		}
	},
	{
		"frequency": 26.945,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Ausilio alle attività agonistiche e sportive",
			"mode": "Modulazione angolare"
		},
		"style": {
			"label": "Uso sportivo",
			"bandColor": "#c4ff49"
		}
	},
	{
		"frequency": 26.955,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Ausilio alle attività agonistiche e sportive",
			"mode": "Modulazione angolare"
		},
		"style": {
			"label": "Uso sportivo",
			"bandColor": "#c4ff49"
		}
	},
	{
		"frequency": 26.965,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 26.975,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 26.985,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 26.995,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo, da apparati a corto raggio, per telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03",
			"normative": [
				"CEPT ERC/REC 70-03"
			]
		},
		"style": {
			"label": "Telecomandi dilettantistici",
			"bandColor": "#ff955b"
		}
	},
	{
		"frequency": 27.005,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.015,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.025,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.035,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.045,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo, da apparati a corto raggio, per telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03",
			"normative": [
				"CEPT ERC/REC 70-03"
			]
		},
		"style": {
			"label": "Telecomandi dilettantistici",
			"bandColor": "#ff955b"
		}
	},
	{
		"frequency": 27.055,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.065,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.075,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.085,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.095,
		"bandwidth": 0.01,
		"metadata": {
			"code": "Balise/Eurobalise/Loop/Euroloop tele-powering/downlink",
			"description": "Uso collettivo da apparati a corto raggio in ausilio al traffico ferroviario aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03",
			"utilizzi": [
				"uso collettivo, da apparati a corto raggio, per telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03",
				"uso collettivo da apparati a corto raggio in ausilio al traffico ferroviario aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03"
			]
		},
		"style": {
			"label": "Traffico Ferroviario",
			"bandColor": "#5effb4"
		}
	},
	{
		"frequency": 27.105,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.115,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.125,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.135,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.145,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo, da apparati a corto raggio, per telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03",
			"normative": [
				"CEPT ERC/REC 70-03"
			]
		},
		"style": {
			"label": "Telecomandi dilettantistici",
			"bandColor": "#ff955b"
		}
	},
	{
		"frequency": 27.155,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.165,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.175,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.185,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.195,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo, da apparati a corto raggio, per telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03",
			"normative": [
				"CEPT ERC/REC 70-03"
			]
		},
		"style": {
			"label": "Telecomandi dilettantistici",
			"bandColor": "#ff955b"
		}
	},
	{
		"frequency": 27.205,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.215,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.225,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.235,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.245,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.255,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.265,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.275,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.285,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.295,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.305,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.315,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.325,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.335,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.345,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.355,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.365,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.375,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.385,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.395,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.405,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Uso collettivo da apparati potenza per comunicazioni in banda cittadina"
		},
		"style": {
			"label": "Comunicazioni cittadine",
			"bandColor": "#87acff"
		}
	},
	{
		"frequency": 27.515,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 27.525,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 27.535,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 27.545,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 27.555,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 27.565,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 27.575,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 27.585,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 27.9,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Apparati a corto raggio max potenza 10mW",
			"mode": "AM"
		},
		"style": {
			"label": "Radiogiocattoli",
			"bandColor": "#8fff56"
		}
	},
	{
		"frequency": 29.7,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Apparati a corto raggio destinati esclusivamente all'impiego quali 'radiogiocattoli'"
		},
		"style": {
			"label": "Radiogiocattoli",
			"bandColor": "#ff7627"
		}
	},
	{
		"frequency": 29.815,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 29.825,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 29.835,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 29.845,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 29.855,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 29.865,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 29.875,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 29.885,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 30.8625,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 30.875,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 30.8875,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 30.9,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 30.9125,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 30.925,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 30.9375,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 30.95,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Apparati a corto raggio destinati ad essere utilizzati come radiocomandi per apriporte, apricancelli e applicazioni analoghe"
		},
		"style": {
			"label": "Apriporte",
			"bandColor": "#FFAC50"
		}
	},
	{
		"frequency": 40.0125,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ricerca persone (chiamata)"
		},
		"style": {
			"bandColor": "#ff00ff",
			"label": "Ricerca persone (chiamata)"
		}
	},
	{
		"frequency": 40.0250,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ricerca persone (chiamata)"
		},
		"style": {
			"bandColor": "#ff00ff",
			"label": "Ricerca persone (chiamata)"
		}
	},
	{
		"frequency": 40.0375,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ricerca persone (chiamata)"
		},
		"style": {
			"bandColor": "#ff00ff",
			"label": "Ricerca persone (chiamata)"
		}
	},
	{
		"frequency": 40.0500,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ricerca persone (chiamata)"
		},
		"style": {
			"bandColor": "#ff00ff",
			"label": "Ricerca persone (chiamata)"
		}
	},
	{
		"frequency": 40.0625,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ricerca persone (chiamata)"
		},
		"style": {
			"bandColor": "#ff00ff",
			"label": "Ricerca persone (chiamata)"
		}
	},
	{
		"frequency": 40.0750,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ricerca persone (chiamata)"
		},
		"style": {
			"bandColor": "#ff00ff",
			"label": "Ricerca persone (chiamata)"
		}
	},
	{
		"frequency": 40.0875,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ricerca persone (chiamata)"
		},
		"style": {
			"bandColor": "#ff00ff",
			"label": "Ricerca persone (chiamata)"
		}
	},
	{
		"frequency": 40.665,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03"
		},
		"style": {
			"label": "Telecomandi dilettantistici",
			"bandColor": "#ff955b"
		}
	},
	{
		"frequency": 40.675,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03"
		},
		"style": {
			"label": "Telecomandi dilettantistici",
			"bandColor": "#ff955b"
		}
	},
	{
		"frequency": 40.685,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03"
		},
		"style": {
			"label": "Telecomandi dilettantistici",
			"bandColor": "#ff955b"
		}
	},
	{
		"frequency": 40.695,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03"
		},
		"style": {
			"label": "Telecomandi dilettantistici",
			"bandColor": "#ff955b"
		}
	},
	{
		"frequency": 40.715,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03"
		},
		"style": {
			"label": "Telecomandi dilettantistici",
			"bandColor": "#ff955b"
		}
	},
	{
		"frequency": 40.725,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03"
		},
		"style": {
			"label": "Telecomandi dilettantistici",
			"bandColor": "#ff955b"
		}
	},
	{
		"frequency": 40.735,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03"
		},
		"style": {
			"label": "Telecomandi dilettantistici",
			"bandColor": "#ff955b"
		}
	},
	{
		"frequency": 40.765,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03"
		},
		"style": {
			"label": "Telecomandi dilettantistici",
			"bandColor": "#ff955b"
		}
	},
	{
		"frequency": 40.775,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03"
		},
		"style": {
			"label": "Telecomandi dilettantistici",
			"bandColor": "#ff955b"
		}
	},
	{
		"frequency": 40.785,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03"
		},
		"style": {
			"label": "Telecomandi dilettantistici",
			"bandColor": "#ff955b"
		}
	},
	{
		"frequency": 40.815,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03"
		},
		"style": {
			"label": "Telecomandi dilettantistici",
			"bandColor": "#ff955b"
		}
	},
	{
		"frequency": 40.825,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03"
		},
		"style": {
			"label": "Telecomandi dilettantistici",
			"bandColor": "#ff955b"
		}
	},
	{
		"frequency": 40.835,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03"
		},
		"style": {
			"label": "Telecomandi dilettantistici",
			"bandColor": "#ff955b"
		}
	},
	{
		"frequency": 40.865,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03"
		},
		"style": {
			"label": "Telecomandi dilettantistici",
			"bandColor": "#ff955b"
		}
	},
	{
		"frequency": 40.875,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03"
		},
		"style": {
			"label": "Telecomandi dilettantistici",
			"bandColor": "#ff955b"
		}
	},
	{
		"frequency": 43.3,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ausilio al traffico, trasporto su strada e rotaia, sicurezza e soccorso sulle strade, foreste, caccia, pesca, sicurezza notturna"
		},
		"style": {
			"label": "Traffico, caccia, pesca, treni, metronotte",
			"bandColor": "#ff0c27"
		}
	},
	{
		"frequency": 43.3125,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ausilio al traffico, trasporto su strada e rotaia, sicurezza e soccorso sulle strade, foreste, caccia, pesca, sicurezza notturna"
		},
		"style": {
			"label": "Traffico, caccia, pesca, treni, metronotte",
			"bandColor": "#ff0c27"
		}
	},
	{
		"frequency": 43.3250,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ausilio al traffico, trasporto su strada e rotaia, sicurezza e soccorso sulle strade, foreste, caccia, pesca, sicurezza notturna"
		},
		"style": {
			"label": "Traffico, caccia, pesca, treni, metronotte",
			"bandColor": "#ff0c27"
		}
	},
	{
		"frequency": 43.3375,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ausilio al traffico, trasporto su strada e rotaia, sicurezza e soccorso sulle strade, foreste, caccia, pesca, sicurezza notturna"
		},
		"style": {
			"label": "Traffico, caccia, pesca, treni, metronotte",
			"bandColor": "#ff0c27"
		}
	},
	{
		"frequency": 43.35,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ausilio al traffico, trasporto su strada e rotaia, sicurezza e soccorso sulle strade, foreste, caccia, pesca, sicurezza notturna"
		},
		"style": {
			"label": "Traffico, caccia, pesca, treni, metronotte",
			"bandColor": "#ff0c27"
		}
	},
	{
		"frequency": 43.3625,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ausilio al traffico, trasporto su strada e rotaia, sicurezza e soccorso sulle strade, foreste, caccia, pesca, sicurezza notturna"
		},
		"style": {
			"label": "Traffico, caccia, pesca, treni, metronotte",
			"bandColor": "#ff0c27"
		}
	},
	{
		"frequency": 43.375,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ausilio alle imprese industriali, commerciali, artigiane ed agrarie"
		},
		"style": {
			"label": "Industrie",
			"bandColor": "#008817"
		}
	},
	{
		"frequency": 43.3875,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ausilio alle imprese industriali, commerciali, artigiane ed agrarie"
		},
		"style": {
			"label": "Industrie",
			"bandColor": "#008817"
		}
	},
	{
		"frequency": 43.4,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ausilio alle imprese industriali, commerciali, artigiane ed agrarie"
		},
		"style": {
			"label": "Industrie",
			"bandColor": "#008817"
		}
	},
	{
		"frequency": 43.4125,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ausilio alle imprese industriali, commerciali, artigiane ed agrarie"
		},
		"style": {
			"label": "Industrie",
			"bandColor": "#008817"
		}
	},
	{
		"frequency": 43.4250,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ausilio alle imprese industriali, commerciali, artigiane ed agrarie"
		},
		"style": {
			"label": "Industrie",
			"bandColor": "#008817"
		}
	},
	{
		"frequency": 43.4375,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ausilio alle imprese industriali, commerciali, artigiane ed agrarie"
		},
		"style": {
			"label": "Industrie",
			"bandColor": "#008817"
		}
	},
	{
		"frequency": 43.45,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Collegamenti riguardanti la sicurezza della vita umana in mare, o comunque di emergenza,\nfra piccole imbarcazioni e stazioni base collocate presso sedi di organizzazioni nautiche,\nnonché di collegamenti di servizio fra diversi punti di una stessa nave",
			"mode": "Modulazione angolare"
		},
		"style": {
			"label": "Radio marittima",
			"bandColor": "#2556ff"
		}
	},
	{
		"frequency": 43.4625,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Collegamenti riguardanti la sicurezza della vita umana in mare, o comunque di emergenza,\nfra piccole imbarcazioni e stazioni base collocate presso sedi di organizzazioni nautiche,\nnonché di collegamenti di servizio fra diversi punti di una stessa nave",
			"mode": "Modulazione angolare"
		},
		"style": {
			"label": "Radio marittima",
			"bandColor": "#2556ff"
		}
	},
	{
		"frequency": 43.475,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Collegamenti riguardanti la sicurezza della vita umana in mare, o comunque di emergenza,\nfra piccole imbarcazioni e stazioni base collocate presso sedi di organizzazioni nautiche,\nnonché di collegamenti di servizio fra diversi punti di una stessa nave",
			"mode": "Modulazione angolare"
		},
		"style": {
			"label": "Radio marittima",
			"bandColor": "#2556ff"
		}
	},
	{
		"frequency": 43.4875,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Collegamenti riguardanti la sicurezza della vita umana in mare, o comunque di emergenza,\nfra piccole imbarcazioni e stazioni base collocate presso sedi di organizzazioni nautiche,\nnonché di collegamenti di servizio fra diversi punti di una stessa nave",
			"mode": "Modulazione angolare"
		},
		"style": {
			"label": "Radio marittima",
			"bandColor": "#2556ff"
		}
	},
	{
		"frequency": 43.5,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ausilio alle attività agonistiche e sportive",
			"mode": "Modulazione angolare"
		},
		"style": {
			"label": "Uso sportivo",
			"bandColor": "#c4ff49"
		}
	},
	{
		"frequency": 43.5125,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ausilio alle attività agonistiche e sportive",
			"mode": "Modulazione angolare"
		},
		"style": {
			"label": "Uso sportivo",
			"bandColor": "#c4ff49"
		}
	},
	{
		"frequency": 43.525,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ausilio alle attività agonistiche e sportive",
			"mode": "Modulazione angolare"
		},
		"style": {
			"label": "Uso sportivo",
			"bandColor": "#c4ff49"
		}
	},
	{
		"frequency": 43.5375,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ausilio alle attività agonistiche e sportive",
			"mode": "Modulazione angolare"
		},
		"style": {
			"label": "Uso sportivo",
			"bandColor": "#c4ff49"
		}
	},
	{
		"frequency": 43.55,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ausilio alle attività professionali sanitarie ed alle attività direttamente ad esse collegate",
			"mode": "Modulazione angolare"
		},
		"style": {
			"label": "Attività sanitarie",
			"bandColor": "#ff7ca7"
		}
	},
	{
		"frequency": 43.5625,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ausilio alle attività professionali sanitarie ed alle attività direttamente ad esse collegate",
			"mode": "Modulazione angolare"
		},
		"style": {
			"label": "Attività sanitarie",
			"bandColor": "#ff7ca7"
		}
	},
	{
		"frequency": 43.575,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ausilio alle attività professionali sanitarie ed alle attività direttamente ad esse collegate",
			"mode": "Modulazione angolare"
		},
		"style": {
			"label": "Attività sanitarie",
			"bandColor": "#ff7ca7"
		}
	},
	{
		"frequency": 43.5875,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ausilio alle attività professionali sanitarie ed alle attività direttamente ad esse collegate",
			"mode": "Modulazione angolare"
		},
		"style": {
			"label": "Attività sanitarie",
			"bandColor": "#ff7ca7"
		}
	},
	{
		"frequency": 68.75,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Soccorso alpino da impiegare su tutto il territorio nazionale salvo la Valle d'Aosta"
		},
		"style": {
			"label": "Soccorso alpino",
			"bandColor": "#ff49a3"
		}
	},
	{
		"frequency": 71.5,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Soccorso alpino da impiegare su tutto il territorio nazionale anche per il collegamento con elicottero"
		},
		"style": {
			"label": "Soccorso alpino",
			"bandColor": "#ff49a3"
		}
	},
	{
		"frequency": 71.55,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Soccorso alpino da impiegare su tutto il territorio nazionale anche per il collegamento con elicottero"
		},
		"style": {
			"label": "Soccorso alpino",
			"bandColor": "#ff49a3"
		}
	},
	{
		"frequency": 71.575,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Soccorso alpino da impiegare solo in Valle d'Aosta"
		},
		"style": {
			"label": "Soccorso alpino",
			"bandColor": "#ff49a3"
		}
	},
	{
		"frequency": 72.08,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03"
		},
		"style": {
			"label": "Telecomandi dilettantistici",
			"bandColor": "#ff955b"
		}
	},
	{
		"frequency": 72.24,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Telecomandi dilettantistici, aventi le caratteristiche tecniche della raccomandazione CEPT ERC/REC 70-03"
		},
		"style": {
			"label": "Telecomandi dilettantistici",
			"bandColor": "#ff955b"
		}
	},
	{
		"frequency": 72.975,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Soccorso alpino da impiegare solo in Valle d'Aosta"
		},
		"style": {
			"label": "Soccorso alpino",
			"bandColor": "#ff49a3"
		}
	},
	{
		"frequency": 75,
		"bandwidth": 0.003,
		"metadata": {
			"mode": "AM",
			"modulation": "OOK",
			"description": "ILS Marker beacon"
		},
		"style": {
			"label": "ILS Marker",
			"bandColor": "#3718ff"
		}
	},
	{
		"frequency": 121.5,
		"bandwidth": 0.00833,
		"metadata": {
			"description": "Frequenza aeronautica ausiliaria d'emergenza (COSPAS-SARSAT), ricerca e soccorso di veicoli spaziali con pilota"
		},
		"style": {
			"label": "Emergenza",
			"bandColor": "#5d45ff"
		}
	},
	{
		"frequency": 123.1,
		"bandwidth": 0.00833,
		"metadata": {
			"description": "Frequenza aeronautica ausiliaria"
		},
		"style": {
			"label": "Ausiliaria",
			"bandColor": "#3164ff"
		}
	},
	{
		"frequency": 130,
		"bandwidth": 0.00833,
		"metadata": {
			"description": "Frequenza aeronautica di montagna in caso di mancato contatto ATC",
			"normative": [
				"Art. 11 comma 4 del d.M. 1 Febbraio 2006 'Norme di attuazione della legge 2 aprile 1968, n. 518, concernente la liberalizzazione dell'uso delle aree di atterraggio'"
			]
		},
		"style": {
			"label": "Unicom Montagna",
			"bandColor": "#3164ff"
		}
	},
	{
		"frequency": 156,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 0 marittimo"
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 0 marittimo"
		}
	},
	{
		"frequency": 156.025,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 60 marittimo"
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 60 marittimo"
		}
	},
	{
		"frequency": 156.05,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 1 marittimo",
			"utilizzi": [
				"Public Correspondence (Ship-to-Shore full-duplex), Independent radio networks"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 1 marittimo"
		}
	},
	{
		"frequency": 156.075,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 61 marittimo"
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 61 marittimo"
		}
	},
	{
		"frequency": 156.1,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 2 marittimo",
			"utilizzi": [
				"Public Correspondence (Ship-to-Shore full-duplex), Independent radio networks"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 2 marittimo"
		}
	},
	{
		"frequency": 156.15,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 3 marittimo",
			"utilizzi": [
				"Public Correspondence (Ship-to-Shore full-duplex), Independent radio networks, Customs Coast Guard, search and rescue"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 3 marittimo"
		}
	},
	{
		"frequency": 156.2,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 4 marittimo",
			"utilizzi": [
				"Public Correspondence (Ship-to-Shore full-duplex), Independent radio networks, Customs Coast Guard, search and rescue"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 4 marittimo"
		}
	},
	{
		"frequency": 156.25,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 5 marittimo",
			"utilizzi": [
				"Public Correspondence (Ship-to-Shore full-duplex), Independent radio networks, authorities responsible"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 5 marittimo"
		}
	},
	{
		"frequency": 156.3,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 6 marittimo",
			"utilizzi": [
				"Ship-to-ship + Ship-to-Air"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 6 marittimo"
		}
	},
	{
		"frequency": 156.35,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 7 marittimo",
			"utilizzi": [
				"Navy"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 7 marittimo"
		}
	},
	{
		"frequency": 156.4,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 8 marittimo",
			"utilizzi": [
				"Ship-to-ship"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 8 marittimo"
		}
	},
	{
		"frequency": 156.45,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 9 marittimo",
			"utilizzi": [
				"Marina pilots, Marina Operations, Ship in a marina"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 9 marittimo"
		}
	},
	{
		"frequency": 156.5,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 10 marittimo",
			"utilizzi": [
				"International waters Ship-to-ship ; Customs Coast Guard, Navy"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 10 marittimo"
		}
	},
	{
		"frequency": 156.525,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Frequenza internazionale di soccorso, sicurezza e chiamata per il servizio mobile marittimo radiotelefonico ad onde metriche per la chiamata selettiva (DSC)"
		},
		"style": {
			"label": "Soccorso marittimo",
			"bandColor": "#ff003c"
		}
	},
	{
		"frequency": 156.55,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 11 marittimo",
			"utilizzi": [
				"Navy"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 11 marittimo"
		}
	},
	{
		"frequency": 156.6,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 12 marittimo",
			"utilizzi": [
				"Commercial port operations, fishing port operations, pilots, Ship in a fishing port, Ship in a Commercial port"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 12 marittimo"
		}
	},
	{
		"frequency": 156.65,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 13 marittimo",
			"utilizzi": [
				"Ship-to-ship (limited to 1 watt)"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 13 marittimo"
		}
	},
	{
		"frequency": 156.7,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 14 marittimo",
			"utilizzi": [
				"Port Operations"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 14 marittimo"
		}
	},
	{
		"frequency": 156.75,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 15 marittimo",
			"utilizzi": [
				"Radiocommunications on board a ship or in a group of boats towed or pushed, as well as those concerning the instructions for the maneuver bullish and docking. (limited to 1 watt)"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 15 marittimo"
		}
	},
	{
		"frequency": 156.775,
		"bandwidth": 0.025,
		"metadata": {
			"description": "Ricezione messaggi AIS 27 (downlink AIS-Sat)"
		},
		"style": {
			"label": "downlink AIS-Sat",
			"bandColor": "#ff4200"
		}
	},
	{
		"frequency": 156.8,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 16 - Frequenza internazionale di soccorso, sicurezza e chiamata per il servizio mobile marittimo radiotelefonico ad onde metriche (GMDSS)\nRicerca e soccorso di veicoli spaziali con pilota"
		},
		"style": {
			"label": "Canale 16 marittimo Soccorso (GMDSS), SAR spaziale",
			"bandColor": "#ff003c"
		}
	},
	{
		"frequency": 156.825,
		"bandwidth": 0.025,
		"metadata": {
			"description": "Ricezione messaggi AIS 27 (downlink AIS-Sat)"
		},
		"style": {
			"label": "downlink AIS-Sat",
			"bandColor": "#ff4200"
		}
	},
	{
		"frequency": 156.85,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 17 marittimo",
			"utilizzi": [
				"Port Operations, Navy, Maritime Gendarmerie"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 17 marittimo"
		}
	},
	{
		"frequency": 156.9,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 18 marittimo",
			"utilizzi": [
				"Public Correspondence (Ship-to-Shore full-duplex), Independent radio networks"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 18 marittimo"
		}
	},
	{
		"frequency": 156.95,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 19 marittimo",
			"utilizzi": [
				"Public Correspondence (Ship-to-Shore full-duplex), Port Operations"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 19 marittimo"
		}
	},
	{
		"frequency": 157,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 20 marittimo",
			"utilizzi": [
				"Port Operations, Public Correspondence (Ship-to-Shore full-duplex)"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 20 marittimo"
		}
	},
	{
		"frequency": 157.05,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 21 marittimo",
			"utilizzi": [
				"Port Operations"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 21 marittimo"
		}
	},
	{
		"frequency": 157.1,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 22 marittimo",
			"utilizzi": [
				"Port Operations, Public Correspondence (Ship-to-Shore full-duplex)"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 22 marittimo"
		}
	},
	{
		"frequency": 157.15,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 23 marittimo",
			"utilizzi": [
				"Port Operations, Public Correspondence (Ship-to-Shore full-duplex)"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 23 marittimo"
		}
	},
	{
		"frequency": 157.2,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 24 marittimo",
			"utilizzi": [
				"Public Correspondence (Ship-to-Shore full-duplex), Independent radio networks"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 24 marittimo"
		}
	},
	{
		"frequency": 157.25,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 25 marittimo",
			"utilizzi": [
				"Public Correspondence (Ship-to-Shore full-duplex), Independent radio networks"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 25 marittimo"
		}
	},
	{
		"frequency": 157.3,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 26 marittimo",
			"utilizzi": [
				"Public Correspondence (Ship-to-Shore full-duplex), Independent radio networks"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 26 marittimo"
		}
	},
	{
		"frequency": 157.35,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 27 marittimo",
			"utilizzi": [
				"Public Correspondence (Ship-to-Shore full-duplex), Independent radio networks"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 27 marittimo"
		}
	},
	{
		"frequency": 157.4,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 28 marittimo",
			"utilizzi": [
				"Public Correspondence (Ship-to-Shore full-duplex), Independent radio networks"
			]
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 28 marittimo"
		}
	},
	{
		"frequency": 157.55,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 31 marittimo"
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 31 marittimo"
		}
	},
	{
		"frequency": 157.85,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "M1/37A"
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "M1/37A"
		}
	},
	{
		"frequency": 159.375,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 159.425,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 159.5,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 159.525,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 159.5375,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 159.55,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 159.5625,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 159.625,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 159.6375,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 159.65,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 159.6875,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 159.7,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 159.75,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 159.7625,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 159.775,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 159.7875,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 159.8,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 159.825,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 159.9125,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 159.925,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 161,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ricerca persone (risposta)"
		},
		"style": {
			"bandColor": "#ff00ff",
			"label": "Ricerca persone (risposta)"
		}
	},
	{
		"frequency": 161.1,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ricerca persone (risposta)"
		},
		"style": {
			"bandColor": "#ff00ff",
			"label": "Ricerca persone (risposta)"
		}
	},
	{
		"frequency": 161.3,
		"bandwidth": 0.01,
		"metadata": {
			"description": "Soccorso alpino da impiegare solo in Valle d'Aosta"
		},
		"style": {
			"label": "Soccorso alpino",
			"bandColor": "#ff49a3"
		}
	},
	{
		"frequency": 161.975,
		"bandwidth": 0.025,
		"metadata": {
			"description": "AIS (ch. 87B)",
			"mode": "NFM"
		},
		"style": {
			"bandColor": "red",
			"label": "AIS (ch. 87B)"
		}
	},
	{
		"frequency": 162.025,
		"bandwidth": 0.025,
		"metadata": {
			"description": "AIS (ch. 88B)",
			"mode": "NFM"
		},
		"style": {
			"bandColor": "red",
			"label": "AIS (ch. 88B)"
		}
	},
	{
		"frequency": 163.975,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 164.025,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 164.1,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 164.125,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 164.1375,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 164.15,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 164.1625,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 164.225,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 164.2375,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 164.25,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 164.2875,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 164.3,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 164.35,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 164.3625,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 164.375,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 164.3875,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 164.4,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 164.425,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 164.5125,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 164.525,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 169.8125,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Soccorso alpino da impiegare su tutto il territorio nazionale salvo la Valle d'Aosta"
		},
		"style": {
			"label": "Soccorso alpino",
			"bandColor": "#ff49a3"
		}
	},
	{
		"frequency": 177.5,
		"bandwidth": 7,
		"metadata": {
			"description": "Canale 5 televisivo"
		},
		"style": {
			"label": "Canale 5 TV",
			"bandColor": "#36b1ff"
		}
	},
	{
		"frequency": 184.5,
		"bandwidth": 7,
		"metadata": {
			"description": "Canale 6 televisivo"
		},
		"style": {
			"label": "Canale 6 TV",
			"bandColor": "#36b1ff"
		}
	},
	{
		"frequency": 191.5,
		"bandwidth": 7,
		"metadata": {
			"description": "Canale 7 televisivo"
		},
		"style": {
			"label": "Canale 7 TV",
			"bandColor": "#36b1ff"
		}
	},
	{
		"frequency": 198.5,
		"bandwidth": 7,
		"metadata": {
			"description": "Canale 8 televisivo"
		},
		"style": {
			"label": "Canale 8 TV",
			"bandColor": "#36b1ff"
		}
	},
	{
		"frequency": 205.5,
		"bandwidth": 7,
		"metadata": {
			"description": "Canale 9 televisivo"
		},
		"style": {
			"label": "Canale 9 TV",
			"bandColor": "#36b1ff"
		}
	},
	{
		"frequency": 212.5,
		"bandwidth": 7,
		"metadata": {
			"description": "Canale 10 televisivo"
		},
		"style": {
			"label": "Canale 10 TV",
			"bandColor": "#36b1ff"
		}
	},
	{
		"frequency": 219.5,
		"bandwidth": 7,
		"metadata": {
			"description": "Canale 11 televisivo"
		},
		"style": {
			"label": "Canale 11 TV",
			"bandColor": "#36b1ff"
		}
	},
	{
		"frequency": 226.5,
		"bandwidth": 7,
		"metadata": {
			"description": "Canale 12 televisivo riservato alla radiodiffusione sonora numerica di terra",
			"normative": [
				"Conferenza Regionale delle Radiocomunicazioni per la pianificazione del servizio di radiodiffusione digitale terrestre, Ginevra 2006"
			]
		},
		"style": {
			"label": "Canale 12 TV",
			"bandColor": "#36b1ff"
		}
	},
	{
		"frequency": 243,
		"metadata": {
			"description": "Stazioni di mezzi di salvataggio e ad apparecchi e dispositivi da utilizzarsi a scopi di salvataggio (COSPAS-SARSAT)\nRicerca e soccorso di veicoli spaziali con pilota"
		},
		"style": {
			"label": "Salvataggio, SAR spaziale",
			"bandColor": "#ff0003"
		}
	},
	{
		"frequency": 400.1,
		"bandwidth": 0.05,
		"metadata": {
			"description": "Frequenza campione"
		},
		"style": {
			"bandColor": "#000000",
			"label": "Frequenza campione"
		}
	},
	{
		"frequency": 406,
		"metadata": {
			"description": "COSPAS-SARSAT"
		},
		"style": {
			"bandColor": "#ff75d7",
			"label": "COSPAS-SARSAT"
		}
	},
	{
		"frequency": 446.00625,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 1 PMR446"
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 1 PMR446"
		}
	},
	{
		"frequency": 446.01875,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 2 PMR446"
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 2 PMR446"
		}
	},
	{
		"frequency": 446.03125,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 3 PMR446"
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 3 PMR446"
		}
	},
	{
		"frequency": 446.04375,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 4 PMR446"
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 4 PMR446"
		}
	},
	{
		"frequency": 446.05625,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 5 PMR446"
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 5 PMR446"
		}
	},
	{
		"frequency": 446.06875,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 6 PMR446"
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 6 PMR446"
		}
	},
	{
		"frequency": 446.08125,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 7 PMR446"
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 7 PMR446"
		}
	},
	{
		"frequency": 446.09375,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 8 PMR446"
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 8 PMR446"
		}
	},
	{
		"frequency": 446.10625,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 9 PMR446"
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 9 PMR446"
		}
	},
	{
		"frequency": 446.11875,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 10 PMR446"
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 10 PMR446"
		}
	},
	{
		"frequency": 446.13125,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 11 PMR446"
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 11 PMR446"
		}
	},
	{
		"frequency": 446.14375,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 12 PMR446"
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 12 PMR446"
		}
	},
	{
		"frequency": 446.15625,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 13 PMR446"
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 13 PMR446"
		}
	},
	{
		"frequency": 446.16875,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 14 PMR446"
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 14 PMR446"
		}
	},
	{
		"frequency": 446.18125,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 15 PMR446"
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 15 PMR446"
		}
	},
	{
		"frequency": 446.19375,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Canale 16 PMR446"
		},
		"style": {
			"bandColor": "#0000ff",
			"label": "Canale 16 PMR446"
		}
	},
	{
		"frequency": 450.00675,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.01925,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.03175,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.04425,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.05675,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.06925,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.08175,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.09425,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.10675,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.11925,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.13175,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.14425,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.15675,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.16925,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.18175,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.19425,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.20675,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.21925,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.23175,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.24425,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.25675,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.26925,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.28175,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.29425,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.30675,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.31925,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.33175,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.34425,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.35675,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.36925,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 450.4,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 450.7,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 450.7375,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 457.5375,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Comunicazioni a bordo di imbarcazione"
		},
		"style": {
			"bandColor": "#4376ff",
			"label": "Comunicazioni a bordo di imbarcazione"
		}
	},
	{
		"frequency": 457.55,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Comunicazioni a bordo di imbarcazione"
		},
		"style": {
			"bandColor": "#4376ff",
			"label": "Comunicazioni a bordo di imbarcazione"
		}
	},
	{
		"frequency": 457.5325,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Comunicazioni a bordo di imbarcazione"
		},
		"style": {
			"bandColor": "#4376ff",
			"label": "Comunicazioni a bordo di imbarcazione"
		}
	},
	{
		"frequency": 459.275,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 459.65,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ricerca persone (chiamata)"
		},
		"style": {
			"bandColor": "#ff00ff",
			"label": "Ricerca persone (chiamata)"
		}
	},
	{
		"frequency": 460.00675,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.01925,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.03175,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.04425,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.05675,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.06925,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.08175,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.09425,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.10675,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.11925,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.13175,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.14425,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.15675,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.16925,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.18175,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.19425,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.20675,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.21925,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.23175,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.24425,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.25675,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.26925,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.28175,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.29425,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.30675,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.31925,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.33175,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.34425,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.35675,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.36925,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Servizio Sanitario Nazionale, utilizzabile anche a bordo di elicotteri (Elisoccorso) al di sotto dei 150mt dal suolo"
		},
		"style": {
			"bandColor": "#ff488d",
			"label": "Ambulanza/Elisoccorso"
		}
	},
	{
		"frequency": 460.4,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 460.7,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 460.7375,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 466.075,
		"metadata": {
			"description": "Servizio mobile pubblico di radioavviso"
		},
		"style": {
			"bandColor": "#ff2327",
			"label": "Servizio mobile pubblico di radioavviso"
		}
	},
	{
		"frequency": 467.5375,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Comunicazioni a bordo di imbarcazione"
		},
		"style": {
			"bandColor": "#4376ff",
			"label": "Comunicazioni a bordo di imbarcazione"
		}
	},
	{
		"frequency": 467.55,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Comunicazioni a bordo di imbarcazione"
		},
		"style": {
			"bandColor": "#4376ff",
			"label": "Comunicazioni a bordo di imbarcazione"
		}
	},
	{
		"frequency": 467.5625,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Comunicazioni a bordo di imbarcazione"
		},
		"style": {
			"bandColor": "#4376ff",
			"label": "Comunicazioni a bordo di imbarcazione"
		}
	},
	{
		"frequency": 469.275,
		"metadata": {
			"description": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "Protezione civile, utilizzata anche a bordo di elicotteri sino a 150mt dal suolo"
		}
	},
	{
		"frequency": 459.65,
		"bandwidth": 0.0125,
		"metadata": {
			"description": "Ricerca persone (chiamata)"
		},
		"style": {
			"bandColor": "#ff00ff",
			"label": "Ricerca persone (chiamata)"
		}
	},
	{
		"frequency": 1090,
		"bandwidth": 2.3,
		"metadata": {
			"description": "ADS-B"
		},
		"style": {
			"bandColor": "#FF7CE0",
			"label": "ADS-B"
		}
	}
];
