import {createForm} from './radio.js';
import {createButtons} from './slidebar.js';
import {getData,getMdata} from './markerData.js';
let la="normal";
const map = L.map('map',{"zoomControl":false}).setView([20.5937, 78.9629], 4);
normal();

let marker=L.marker([0,0])
    .addTo(map);
 
function setLatLngData(latlng)
{
	marker
	.bindPopup("Latitude: "+latlng.lat+
		"<br>"+
		"Logtitude: "+latlng.lng)
	.openPopup();	
} 

function setMarkerData(latlng)
{
	getData(latlng.lat,latlng.lng,la);
	let data=getMdata();
	marker
	.bindPopup(data)
	.openPopup();
}
    
function moveMarker(latlng)
{
	marker.setLatLng(latlng)
	if(la=="normal")
	{
		setLatLngData(latlng);
	}
	else
	{
		setMarkerData(latlng.wrap());
	}
}  
    
map.on('click', (ev)=>{
	if(!map.hasLayer(marker))
	{
		map.addLayer(marker);	
	}
    moveMarker(ev.latlng);
});

var info = L.control();

info.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
  let ele=this._div;
  L.DomEvent.on(ele, 'click', L.DomEvent.stopPropagation);
  
   this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function () {
	createForm(this._div);
};

info.addTo(map);

var info1 = L.control({position: 'topleft'});

info1.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info1 m-0 p-0'); // create a div with a class "info"
  let ele=this._div;
  //ele.addClass("m-0 p-0");
  L.DomEvent.on(ele, 'click', L.DomEvent.stopPropagation);
  
   this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info1.update = function () {
    createButtons(this._div);
};

info1.addTo(map);


$(document).ready(()=>{
	
	$("#flexRadioDefault0").prop("checked","true");
	
	$('.rad').change(()=>{
		let mapname=$(".rad:checked").val();
		chgMap(mapname.toLowerCase());
	});
	
	$("<link/>", {
   	rel: "stylesheet",
   type: "text/css",
   href: "../css/slidebar.css"
	}).appendTo("head");
	
	$("#sidebarCollapse").click(()=>{
		
		$("#sidebar").css("left","0");
		$(".col2").css("position","relative");
		$(".col2").css("left","15%");	
	
	});
	
	$("#map").click(()=>{
		let px=$("#sidebar").css("left").toString();
		if(px.toLowerCase()=="0px".toLowerCase())
		{
			$(".col2").css("position","relative");
		$(".col2").css("left","0%");	
			$("#sidebar").css("left","-15%");	
		}
	});
});

function chgMap(mapname)
{
	map.removeLayer(marker);
	

	switch(mapname)
	{
		case "normal":
		la="normal";
		normal();
		break;
		
		case "clouds":
		la="clouds_new";
		special3("clouds_new");
		break;
		
		case "precipitation":
		la="precipitation_new";
		special2("precipitation_new");
		break;
		
		case "pressure":
		la="pressure_new";
		special1("pressure_new");
		break;
		
		case "wind":
		la="wind_new";
		special2("wind_new");
		break;
		
		case "temperature":
		la="temp_new";
		special1("temp_new");
		break;
	}	
}

function normal()
{
	//const tileUrl='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
	const tileUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	const tiles=L.tileLayer(tileUrl/*,{attribution}*/);
	tiles.addTo(map);
	//tiles.remove(map);
}

function special1(layer)
{	
	const tileUrl1='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	const tileUrl2=
	'https://tile.openweathermap.org/map/'+layer+'/{z}/{x}/{y}.png?appid=abb394535f022ddaf973e51508ad6840';
	const tiles1=L.tileLayer(tileUrl1);
	const tiles2=L.tileLayer(tileUrl2);
	tiles1.addTo(map);
	tiles2.addTo(map);
}

function special2(layer)
{	
	const tileUrl1='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
	const tileUrl2=
	'https://tile.openweathermap.org/map/'+layer+'/{z}/{x}/{y}.png?appid=abb394535f022ddaf973e51508ad6840';
	const tiles1=L.tileLayer(tileUrl1);
	const tiles2=L.tileLayer(tileUrl2);
	tiles1.addTo(map);
	tiles2.addTo(map);
}

function special3(layer)
{	
	const tileUrl1='https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=292fecb779e74d8d8959eb2088c74233';
	const tileUrl2=
	'https://tile.openweathermap.org/map/'+layer+'/{z}/{x}/{y}.png?appid=abb394535f022ddaf973e51508ad6840';
	const tiles1=L.tileLayer(tileUrl1);
	const tiles2=L.tileLayer(tileUrl2);
	tiles1.addTo(map);
	tiles2.addTo(map);
}
