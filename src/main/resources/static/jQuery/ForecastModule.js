function createWithClass(tag,parent,classes)
{
	let ele=$("<"+tag+"></"+tag+">").addClass(classes).appendTo(parent);
	return ele;
}

function createWithoutClass(tag,parent)
{
	let ele=$("<"+tag+"></"+tag+">").appendTo(parent);
	return ele;
}

function createWithClassWithText(tag,txt,parent,cls)
{
	let ele=$("<"+tag+"></"+tag+">").addClass(cls).appendTo(parent);
	ele.text(txt);
}

function createInLoopWithTextWithClass(tag,texts,parent,classes)
{
	for(let i=0;i<classes.length;i++)
	{
		createWithClassWithText(tag,texts[i],parent,classes[i]);
	}
}

function createInLoopWithText(tags,texts,parent)
{
	for(let i=0;i<tags.length;i++)
	{
		let ele=$("<"+tags[i]+"></"+tags[i]+">").appendTo(parent);
		ele.text(texts[i]);
	}
}

function createRowHeader(i)
{
	let cd=$(".scrollIntemCardBody"+i);
	let div1=createWithClass("div",cd,"container");
	let div2=createWithClass("div",div1,"row");
	return div2;
}

function createNormal(i,tag,texts,classes)
{
	let div=createRowHeader(i);
	createInLoopWithTextWithClass("div",texts,div,classes);
}

export {
createWithClass,
createWithClassWithText,
createWithoutClass,
createInLoopWithText,
createInLoopWithTextWithClass,
createNormal,
createRowHeader
};