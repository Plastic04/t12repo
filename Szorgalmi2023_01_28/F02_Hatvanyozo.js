let szam=prompt("Adj meg egy számot:");
let hatvany=prompt("Add meg a szám hatványát:");
//let eredmeny=szam**hatvany;
let eredmeny=Math.pow(szam, hatvany);
document.write(`A ${szam}<sup>${hatvany}</sup> = ${eredmeny}`)