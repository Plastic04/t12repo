let also=Number(prompt("Adj meg egy alsó határértéket:"));
let felso=Number(prompt("Adj meg egy felső határértéket:"));
let megvan=false;
let generaltParosSzam=0;
while(megvan==false){
	generaltParosSzam=Math.round(Math.random()*(felso-also))+also;
    if(generaltParosSzam%2==0){
    	megvan=true;
    }
}
document.write(`Generált páros szám a(z) ${also}-${felso} intervallumban: ${generaltParosSzam}`);