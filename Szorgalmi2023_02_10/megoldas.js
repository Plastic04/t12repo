<script>



//Készítő

function keszito()
{
	document.write("Készítő:");
	document.write("<br>Kovács Kristóf");
    document.write("<br>Junior Frontend és Webfejlesztő");
    document.write("<br>#Team12");
}
keszito()

//Hatvány
function hatvanyozo(szam, hatvany)
{
	return szam**hatvany;
}
document.write("<br><br>Hatvány:");
document.write("<br>Megoldás:" +hatvanyozo(2,3));
document.write("<br>Megoldás:" +hatvanyozo(5,3));

 //Pároslétrehoz
function parosLetrehoz(also, felso)
{
 	let paros=false;
    let generaltSzam=0;
    while(paros==false)
    {
		generaltSzam=Math.round(Math.random()*(felso-also))+also;
    	if(generaltSzam%2==0)
    	{
        	paros=true;
    	}
    }
    return generaltSzam;
    	
}
document.write("<br><br>Pároslétrehoz:");
document.write("<br>Megoldás:"+parosLetrehoz(1,100));

//testTomegIndex
function testTomegIndex(suly, magassag)
{
	let tti=suly/(magassag*magassag);
    if(tti<16)
    {
    	return "sulyosSovanysag";
    }
    else if(tti<17)
    {
    	return "mersekeltSovanysag";
    }
    else if(tti<18.5)
    {
    	return "enyheSovanysag";
    }
    else if(tti<25)
    {
    	return "normalisTestsuly";
    }
    else if(tti<30)
    {
    	return "tulsulyos";
    }
    else if(tti<35)
    {
    	return "IfokuElhizas";
    }
    else if (tti<40)
    {
    	return "IIfokuElhizas";
    }
    else {
    	return "IIIfokuSulyosElhizas";
    }
}
document.write("<br><br>testTomegIndex:")
document.write("<br>Megoldás:"+testTomegIndex(200,2));
document.write("<br>Megoldás:"+testTomegIndex(45,1.5));
document.write("<br>Megoldás:"+testTomegIndex(25,1.2));

//egeszOsztoE
function egeszOsztoE(szam, oszto)
{
	if(szam%oszto==0){
    	return true;
    }
    else{
    	return false;
    }
}
document.write("<br><br>egeszOsztoE:");
document.write("<br>Megoldás:"+egeszOsztoE(25,5));
document.write("<br>Megoldás:"+egeszOsztoE(1050,7));
document.write("<br>Megoldás:"+egeszOsztoE(2048,3));


</script>
