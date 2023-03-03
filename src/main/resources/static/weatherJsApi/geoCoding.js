let button=document.querySelector('.submit');

button.addEventListener('click',()=>{
	//alert("Surat hello");
	let url="http://api.openweathermap.org/geo/1.0/direct?q=surat&limit=1&appid=abb394535f022ddaf973e51508ad6840";
	
	let f=fetch(url);
	
	f.then(res=>res.json()).then(d=>alert(d)).catch(err=>alert(err));
});