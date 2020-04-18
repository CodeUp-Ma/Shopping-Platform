window.onload = function(){
	
};
function ygr(account,password){
	this.account = account;
	this.passwod = password;
	
}
function login(){
	let account = window.document.getElementById("手机号").value
	let password = window.document.getElementById("密码").value
	if(account.length == 0){
		window.alert("手机号不能为空")
		
	}else if(password == 0){
		window.alert("密码不能为空")
	}else{
		let ygr = new ygr(account,password);
		sessionStorage.setItem("op",JSON.stringify(ygr) );
		window.location.replace("main.html");
	}
	
}
