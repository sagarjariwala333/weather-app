export function createForm(parent)
{
	let nav=$("<nav></nav>").appendTo(parent);
	nav.addClass("nav flex-column bg-white opacity-75 pt-2 pe-3 ps-0");

	let maps=["Normal","Clouds","Precipitation","Pressure","Wind","Temperature"];
	for(let i=0;i<6;i++)
	{
		createRadioButton(nav,i,maps[i]);
	}
}

export function createRadioButton(nav,idx,map)
{
	let div=$("<div></div>").appendTo(nav);
	div.addClass("form-check");
	
	let i=$("<input></input>").appendTo(div);
	i.attr("type","radio");
	i.attr("name","flexRadioDefault");
	i.attr("id","flexRadioDefault"+idx);
	i.attr("value",map);
	i.addClass("rad");
	
	let l=$("<label></label>");
	i.after(l);
	l.addClass("form-check-label");
	l.attr("for","flexRadioDefault"+idx);
	l.text(map);
}