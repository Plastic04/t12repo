let kor=Number(prompt("Adj meg egy életkort:"));
if(kor<=0 || kor>=120){
	document.write(`${kor} kor érték, Hibás Adat!`);
}
else if(kor<6){
	document.write(`${kor} évesen kisgyermekkorban vagy.`);
}
else if(kor<12){
	document.write(`${kor} évesen gyermekkorban vagy.`);
}
else if(kor<16){
	document.write(`${kor} évesen serdülőkorban vagy.`);
}
else if(kor<20){
	document.write(`${kor} évesen ifjúkorban vagy.`);
}
else if(kor<30){
	document.write(`${kor} évesen fiatal felnőtt korban vagy.`);
}
else if(kor<60){
	document.write(`${kor} évesen felnőtt korban vagy.`);
}
else{
	document.write(`${kor} évesen aggkorban vagy.`);
}