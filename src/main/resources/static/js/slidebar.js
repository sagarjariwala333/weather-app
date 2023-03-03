export function createButtons(parent)
{
	
	let con=createWithClass("div",parent,"container m-0 p-0");
	let row=createWithClass("div",con,"row gx-3 cls");
	
	createNavBar(row);
	createToggleBtn(row);
	createInput(row);
	
}

export function createToggleBtn(parent)
{
	let col=createWithClass("div",parent,"col-auto col1");
	let div=createWithClass("div",col,"p-3 pe-0 ps-0");
	
	let btn=createWithClass("button",div,"btn toggle-btn border-light ps-0 ms-0");
	btn.attr("id","sidebarCollapse");
	btn.attr("type","button");
	
	let h6=createWithClass("h6",btn,"h6 btn btn-primary opacity-75");
	let i=createWithClass("i",h6,"bi bi-list");
}

export function createInput(parent)
{
	let col=createWithClass("div",parent,"col-auto col2");
	let div=createWithClass("div",col,"p-3 ps-0");
	
	let form=createWithClass("form",div,"row gx-1 g-3");
	form.attr("method","post");
	form.attr("action","geoCode");
	
	let div1=createWithClass("div",form,"col-auto");
	let input=createWithClass("input",div1,"form-control city opacity-75");
	input.attr("type","text");
	input.attr("id","formGroupExampleInput");
	input.attr("placeholder","City name");
	input.attr("name","city");
	
	
	let div2=createWithClass("div",form,"col-auto");
	let sub=createWithClass("button",div2,"btn btn-primary mb-3 submit opacity-75");
	sub.attr("id","btn1");
	sub.attr("type","submit");
	sub.attr("value","submit");
	sub.attr("name","submit");
	sub.text("Enter");
}

function createWithClass(tag,parent,classes)
{
	let ele=$("<"+tag+"></"+tag+">").addClass(classes).appendTo(parent);
	return ele;
}


export function createNavBar(parent)
{
	let col=createWithClass("div",parent,"col-auto col0");
	let ele=createWithClass("div",col,"p-0");
	
	let div=$("<div></div>").addClass("vertical-nav bg-dark").appendTo(ele);
	div.attr("id","sidebar");
	
	let ul=createWithClass("ul",div,"nav flex-column mb-0 mt-0 navinner");
	
	
	let li=createWithClass("li",ul,"nav-item");
	let a=createWithClass("p",li,"nav-link text-white navheader");
	a.text("Weather web");
	
	let arr=["Home","Profile","Update Profile","Delete Account","Sign up","Sign in","Sign out"];
	let links=["/",
				"/user/profile",
				"/user/updateProfile",
				"/user/deleteAccount",
				"/signup",
				"/login",
				"/user/logout"];
	
	for(let i=0;i<arr.length;i++)
	{
		let li=createWithClass("li",ul,"nav-item");
		let a=createWithClass("a",li,"nav-link text-white");
		a.text(arr[i]);
		a.attr("href",links[i]);
	}
}


