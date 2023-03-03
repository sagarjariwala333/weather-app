import {
	createWithClass,
	createWithClassWithText,
	createWithoutClass,
	createInLoopWithText,
	createRowHeader,
	createNormal,
	createInLoopWithTextWithClass
} 
from './ForecastModule.js';

import {getD,dname,getData,setData, getFinalTime} from './DateAndTime.js';


let left=$("#list-example");
let right=$("#scroll_list");
let data;
let offset;
let daily;
let txt;
$(document).ready(()=>{
	history.back(2)
	
	if("http://localhost:8080/dailyForecast"==window.location.href.toString())
	{
		txt=$("#data").attr("value");
		localStorage.setItem("txt",txt);
	}
	else if("https://spring-weather-web.herokuapp.com/dailyForecast"==window.location.href.toString())
	{
		txt=$("#data").attr("value");
		localStorage.setItem("txt",txt);
	}
	else
	{
		txt=localStorage.getItem("txt");	
	}
	data=JSON.parse(txt);
	offset=data.timezone_offset;
	daily=data.daily;
	

	createHTML();
});

function createHTML()
{
	for(let i=0;i<daily.length;i++)
	{
		createList(i);
		createScrollList(i);
	}
}

function createList(i)
{
	let curr=daily[i];
	
	let form1=createWithClass("form",left,"d-flex flex-column d-grid gap-2");
	let btn1=createWithClass("button",form1,"btn btn-primary");
	let div1=createWithClass("div",btn1,"row");
	
	let dt=getD(curr.dt+offset);
	let dstr=dt.getDate()+"/"+dt.getMonth()+"/"+dt.getFullYear();
	
	let temp=curr.temp;
	
	
	let atemp=(temp.day+temp.night+temp.eve+temp.morn)/4;
	atemp=atemp.toFixed(2);
	
	let day=dname(dt.getDay());
	
	let ele=$("<p>"+atemp+"&#8451;</p>");
	let tstr=ele.text();
	
	createInLoopWithText(["p","h1","p"],[dstr,tstr,day],div1);
	
	form1.attr("action","#item"+i);
	form1.attr("method","get");
	btn1.attr("type","submit");
	
	
}

function createScrollList(i)
{
	createItem(i);
}

function createItem(i)
{
	let curr=daily[i];
	let dt=getD(curr.dt+offset);
	
	let div1=createWithClass("div",right,"card text-bg-light mb-3 right-card1");
	let div2=createWithClass("div",div1,"card-body scrollIntemCardBody"+i);
	div1.attr("id","item"+i);
	
	createRow0(i);
	createRow1(i);
	
	let d=getD(curr.sunrise+offset);
	let st=d.getUTCHours();
	let sarr=[
		["Sunrise",getFinalTime(curr.sunrise+offset),"Sunset",getFinalTime(curr.sunset+offset)],
		["Moonise",getFinalTime(curr.moonrise+offset),"Moonset",getFinalTime(curr.moonset+offset)],
		["Wind",curr.wind_speed+" m/s","Pressure",curr.pressure+" hPa"],
		["Humidity",curr.humidity+" %","UV index",curr.uvi],
		["Clouds",curr.clouds+" %","DEW point",curr.dew_point+" km"]
	];
	
	for(let ii=0;ii<sarr.length;ii++)
	{
		createNormal(i,"div",sarr[ii],["col","col","col","col"]);
	}
	
	createRow7(i);
	createRow8(i);
}

function createRow8(i)
{
	let curr=daily[i];
	let wea=curr.weather[0];
	let div=createRowHeader(i);
	createInLoopWithTextWithClass("div",["Description",wea.description],div,["col","col"]);
}

function createRow7(i)
{
	let div=createRowHeader(i);
	createInLoopWithTextWithClass("div",["Moon-phase","Last quarter moon"],div,["col","col"]);
}

function createRow1(i)
{
	let curr=daily[i];
	let t=curr.temp;
	
	let ele=$("<p>"+"&#8451;</p>");
	let c=ele.text();
	
	let day
	
	let p=createRowHeader(i);
	let time=["Morning","Day","Evening","Night"];
	let temp=[t.morn.toFixed()+c,t.day.toFixed()+c,t.eve.toFixed()+c,t.night.toFixed()+c];
	for(let i=0;i<temp.length;i++)
	{
		let div1=createWithClass("div",p,"col");
		let div2=createWithClass("div",div1,"row");
		let div3=createWithClass("div",div2,"col");
		div3.text(time[i]);
		let h11=createWithoutClass("h1",div3);
		h11.text(temp[i]);
	}
}


function createRow0(i)
{
	let curr=daily[i];
	
	let div2=createRowHeader(i);
	let div3=createWithClass("div",div2,"container");
	let div4=createWithClass("div",div3,"row");
	
	let date=getD(curr.dt+offset);
	let arr1=["Date",date.getUTCDate()+"/"+date.getUTCMonth()+"/"+date.getUTCFullYear(),
	"Day",dname(date.getDay())];
	for(let i=0;i<4;i++)
	{
		createWithClassWithText("div",arr1[i],div4,"col");
	}
}