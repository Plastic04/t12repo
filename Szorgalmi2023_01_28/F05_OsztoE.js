let szam=Number(prompt("Adj meg egy számot:"));
let oszto=Number(prompt("Adj meg egy osztót:"));
if(szam%oszto==0){
	document.write(`A ${oszto} osztója ${szam} értéknek`);
}
else{
	document.write(`A ${oszto} NEM osztója ${szam} értéknek`);
}