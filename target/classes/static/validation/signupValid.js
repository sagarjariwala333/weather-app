$(document).ready(()=>{
	
	$.validator.addMethod("testPassword",(value)=>{
		return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
		.test(value);
	});
	
	
	$("#signup").validate({
		
		 rules : {
	         firstname : "required",
	         lastname : "required",
	         address: "required",
	         country: "required",
	         state: "required",
	         city: "required",
	         phone_number:"required",
	         
	         confirm_password:{
			 required:true,
			 equalTo: "#password"
			 },
	         
	         phone_number:{
			 required:true,
			 minlength:	10,
			 maxlength: 10
			 },
	         
	         password:{
			 required:true,
			 testPassword:true
			 },
	         
	         email : {
	         required : true,
	         email : true,
	         remote:{
				url:"/checkEmail",
				type:"post",
				data:{
					data:function (){
						return $("#email_address").val(); 
						}
					}
				}
	         }
         },
         
         messages:{
		 	firstname:"Please enter your firstname",
		 	lastname:"Please enter your lastname",
		 	email:"Please enter your email",
		 	country:"Please enter your country",
		 	state:"Please enter your state",
		 	city:"Please enter your city",
		 	password:{
				required:"Please enter your password",
				testPassword:"One uppercase, one lowercase, length 8 characters, one digit/special character"
			},
			email:{
				required:"Please enter your email",
				remote:"Email alredy registred",
			},
			phone_number:{
				required:"Please enter phone number",
				minlength:"Phone number must be length of 10",
				maxlength:"Phone number must be length of 10"
			},
			confirm_password:{
				required:"Please enter password again",
				equalTo:"Password and confirm password not same"
			}
		 }		
     
	});
});
