function calculateTip(){
	let bill = document.getElementById("bill").value;
	let tipRate = document.getElementById("tipRate").value;
	let nop = document.getElementById("nop").value;
	let tipAmount =0;
	let total = 0;
	if(bill && tipRate && nop){
		tipAmount = ((bill*tipRate)/100)/nop;
		total = tipAmount + (bill/nop);
		document.getElementById("tipPerPerson").innerText = tipAmount.toFixed(2)+ " $";
		document.getElementById("totalPerPerson").innerText = total.toFixed(2) + " $";
	}
}
		
function setTipRate(e){
	document.getElementById("tipRate").value = e;
	calculateTip();
}
		
function resetTipCalc(){
	document.getElementById("tipPerPerson").innerText = "0.00 $";
	document.getElementById("totalPerPerson").innerText = "0.00 $";
}