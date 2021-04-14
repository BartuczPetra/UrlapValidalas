window.addEventListener("load", init);

function ID(nev){
    return document.getElementById(nev);
}
function $(nev){
    return document.querySelectorAll(nev);
}

function init(){
//    console.log("hahó")
    ID("kuld").addEventListener("click", validalas);
}

function validalas(){
    console.log("validálás");
    //név beviteli mezőt ellenőrizzük
    //Nagybetűvel kezdődik
    //vannak e benne szóközök
    //betűt adott-e meg?
    //egy karakternél hosszabb legyen
    
    var urlapAdatok="";
    var hiba="";
    var filter=/[A-Z]+[a-z]{2,}/;
    var emailFilter=/[a-z]{2,}\.[a-z]{2,}\@[a-z]{2,}\.[a-z]/;
    var telFilter=/\d{2}\-\d{2}\-\d{3}\-\d{4}/;
    //nev
    if(!filter.test(ID("nev").value)){
        hiba+="A név nagybetűvel kezdődjön! <br> Legalább 3 karakter hosszú legyen a név!";
        ID("nev").style.border="3px solid red";
    }else{
        ID("nev").style.border="none";
        urlapAdatok+="Név: "+ID("nev").value+"<br>";
    }    
   //email
    if(!emailFilter.test(ID("email1").value)){
        hiba+="Az e-mail címnek így kell kinéznie: valaki@vmi.hu, minden elem min. 3 karakter!";
        ID("email1").style.border="3px solid red";
    }else{
        ID("email1").style.border="none";
        urlapAdatok+="Email: "+ID("email1").value+"<br>";
    }
    //email ujra
    if((ID("email2").value!==ID("email1").value)){
        hiba+="Nem azonos az e-mail cím az előzővel!";
        ID("email2").style.border="3px solid red";
    }else{
        ID("email2").style.border="none";
    }
    //tel
    if(!telFilter.test(ID("tel").value)){
        hiba+="Nem helyes a formátum' (36-30-000-0000)";
        ID("tel").style.border="3px solid red";
    }else{
        ID("tel").style.border="none";
    }
    console.log(hiba);
    $("aside section:nth-child(1) p")[0].innerHTML=hiba;  
    $("aside section:nth-child(2) p")[0].innerHTML=urlapAdatok;
}


