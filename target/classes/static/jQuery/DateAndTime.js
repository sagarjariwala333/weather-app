let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let info;
export function setData(data)
{
	info=data;
}
export function getData()
{
	return info;
}
export function getD(ts)
{
	let d=new Date(ts*1000);
	return d;
}
export function dname(idx)
{
	return days[idx];
}

export function getFinalTime(ts)
{
	let date=getD(ts);
	let h=date.getUTCHours();
	let m=date.getUTCMinutes();
	let ampm=h >= 12 ? 'PM' : 'AM';
	h=h%12;
	h = h ? h : 12;
	m = m < 10 ? '0'+m : m;	
	var strTime = h + ':' + m + ' ' + ampm;
  	return strTime;
}
