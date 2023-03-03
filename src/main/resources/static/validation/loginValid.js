$(document).ready(()=>{
	
	$("#loginForm").validate({
		
		rules:{
			username:{
				required:true,
				email:true,
				remote:{
					url:"/checkEmailLogin",
					type:"post",
					data:{
						data:function (){
							return $("#username").val(); 
							}
						}
					}
			},
			password:"required"
		},
		
		messages:{
			username:{
				required:"Please enter email",
				email:"Please enter valid email address",
				remote:"Account doesn`t exist"
			},
			password:"Please enter password"
		}
	});
});