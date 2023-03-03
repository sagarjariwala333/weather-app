let mData;
export function getData(lat,lng,layer)
{
	let data;
	let arr;
	
	if(lng>180 || lng<-180)
	{
		console.log(typeof lng);
		lng*=-1;
		console.log(lng);
	}
	
	let url=
				"http://api.openweathermap.org/data/2.5/onecall?"
				+ "lat="+lat
				+ "&lon="+lng
				+ "&units=metric"
				+ "&exclude=hourly,daily,alerts,minutely&appid=abb394535f022ddaf973e51508ad6840";
				
	$.ajax({
		method:'GET',
		url:url,
		async: false,
		dataType:'json'
		})
		.done((data)=>{
			let val=getResult(data.current,layer);
			setMdata(val);
		});
}

function setMdata(val)
{
	mData=val;
}

export function getMdata()
{
	return mData;
}

function getResult(curr,layer)
{
	let ret=null;
	switch(layer)
	{
		case "clouds_new":
		ret="Cloudiness: "+curr.clouds+" %"
		break;
		
		case "precipitation_new":
		ret="Temp";
		break;
		
		case "pressure_new":
		ret="Pressure: "+curr.pressure+" hPa"
		break;
		
		case "wind_new":
		ret="Wind speed: "+curr.wind_speed+" meter/second";
		break;
		
		case "temp_new":
		ret="Temperature: "+curr.temp;
		break;
		
		//return ret;
	}
	return ret;
	//console.log(ret);
}