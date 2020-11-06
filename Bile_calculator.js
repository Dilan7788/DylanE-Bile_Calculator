function checkBill(){
	let units = Number(document.getElementById('txt').value);
	let a;
	 if(units== " ")
	{
		alert("please enter valid number!")
	}
	else if(units<0)
	{

		alert("Invalid Number!")
	}
	else if(units>0 && units<=30)
	{
		a=units*7.85;
	}
	else if(units>30 && units<=60)
	{
		a=30*7.85+(units-30)*7.65;
	}
	else if(units>60 && units<=90)
	{
		a=30*7.85+30*7.65+(units-60)*10;
	}
	else if(units>90 && units<=120)
	{
		a=30*7.85+30*7.85+30*10+(units-90)*27.75;
	}
	else
	{
		a=30*7.85+30*7.85+30*10+30*27.75+(units-120)*32;
	}
	
	let txt = document.getElementById('calculate');
	txt.innerHTML = "Your Bill amount is :"+a;
	
 }


