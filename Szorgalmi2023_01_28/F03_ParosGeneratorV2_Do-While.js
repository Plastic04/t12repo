let also=Number(prompt("Adj meg egy alsó határértéket:"));
let felso=Number(prompt("Adj meg egy felső határértéket:"));
//let generaltParosSzam=0;
do{
	let generaltParosSzam=Math.round(Math.random()*(felso-also))+also;
}while(generaltParosSzam%2==1)
document.write(`Generált páros szám a(z) ${also}-${felso} intervallumban: ${generaltParosSzam}`);