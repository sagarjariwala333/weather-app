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
let hourly;
let txt;

/*$(window).on('popstate', function(event) {
 alert("pop");
});*/

$(document).ready(()=>{
	
	 function disableBack() {
                window.history.forward()
            }
            window.onload = disableBack();
            window.onpageshow = function(e) {
                if (e.persisted)
                    disableBack();
            }
	
	
	if("http://localhost:8080/hourlyForecast"==window.location.href.toString())
	{
		txt=$("#data").attr("value");
		localStorage.setItem("txt",txt);
	}
	else if("https://spring-weather-web.herokuapp.com/hourlyForecast"==window.location.href.toString())
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
	hourly=data.hourly;
	createHTML();
});

function createHTML()
{
	for(let i=0;i<hourly.length;i++)
	{
		createList(i);
		createScrollList(i);
	}
}

function createList(i)
{
	let curr=hourly[i];
	
	
	let temp=curr.temp;
	temp=temp.toFixed(2);
	
	let form1=createWithClass("form",left,"d-flex flex-column d-grid gap-2");
	let btn1=createWithClass("button",form1,"btn btn-primary");
	let div1=createWithClass("div",btn1,"row");
	
	let ele=$("<p>"+temp+"&#8451;</p>");
	let tstr=ele.text();
	
	let date=getD(curr.dt+offset);
	createInLoopWithText(["p","h1","p"],[date.getUTCDate()+"/"+date.getUTCMonth()+"/"+date.getUTCFullYear(),
	tstr,getFinalTime(curr.dt+offset)],div1);
	
	form1.attr("action","#item"+i);
	btn1.attr("type","submit");
}

function createScrollList(i)
{
	createItem(i);
}

function createItem(i)
{
	let curr=hourly[i];
	
	let div1=createWithClass("div",right,"card text-bg-light mb-3 right-card1");
	let div2=createWithClass("div",div1,"card-body scrollIntemCardBody"+i);
	div1.attr("id","item"+i);
	
	//createRow0(i);
	createRow1(i);
	
	let sarr=[
		["Wind",curr.wind_speed+" m/s","Pressure",curr.pressure+" hPa"],
		["Humidity",curr.humidity+" %","UV index",curr.uvi],
		["Clouds",curr.clouds+" %","Visisbility",curr.visibility+" km"]
	];
	
	for(let ii=0;ii<sarr.length;ii++)
	{
		createNormal(i,"div",sarr[ii],["col","col","col","col"]);
	}
	
	createRow8(i);
}

function createRow8(i)
{
	let curr=hourly[i];;
	let wea=curr.weather[0];
	
	let div=createRowHeader(i);
	createInLoopWithTextWithClass("div",["Description",wea.description],div,["col","col"]);
}

function createRow1(i)
{
	let curr=hourly[i];
	let p=createRowHeader(i);
	let temp=[curr.temp];
	
	for(let i=0;i<temp.length;i++)
	{
		let div1=createWithClass("div",p,"col");
		let div2=createWithClass("div",div1,"row");
		
		let div3=createWithClass("div",div2,"col");
		let h11=createWithoutClass("h1",div3);
		//h11.text(temp[i]);
		h11.html("<p>"+temp[i]+"&#8451;</p>");
		h11.before("Temp")
		
		let div4=createWithClass("div",div2,"col");
		
		let date=getD(curr.dt+offset);
		let txt1="Date: "+date.getUTCDate()+"/"+date.getUTCMonth()+"/"+date.getUTCFullYear();
		let txt2="Day: "+dname(date.getUTCDay());
		createRow1Right("span",txt1,txt2,div4,"row",i);
	}
}

function createRow1Right(tag,txt1,txt2,parent,cls,i)
{
	let curr=hourly[i];
	let ele=$("<"+tag+"></"+tag+">").addClass(cls).appendTo(parent);
	ele.html("<p>"+txt1+"<br>"+txt2+"</p>");
	
	let date=getD(curr.dt+offset);
	ele.before(" ");
	//ele.before(date.getUTCDate()+"/"+date.getUTCMonth()+"/"+date.getUTCFullYear());
}


function createRow0(i)
{
	let div2=createRowHeader(i);
	let div3=createWithClass("div",div2,"container");
	let div4=createWithClass("div",div3,"row");
	
	
	let arr1=["Date","28/05/2022","Day","Thursday"];
	for(let i=0;i<4;i++)
	{
		createWithClassWithText("div",arr1[i],div4,"col");
	}
}