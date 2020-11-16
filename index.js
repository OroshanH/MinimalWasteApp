register.onclick = function(){
    document.getElementById("registerSide").style = "position: static; right: 0%";
    document.getElementById("mainSide").style = "position: absolute; right: 150%";
    document.getElementById("back").style.opacity = 1;
    document.getElementById("back").disabled = false; 

}
login.onclick = function(){
    document.getElementById("loginSide").style = "position: static; right: 0%";
    document.getElementById("mainSide").style = "position: absolute; right: 150%";
    document.getElementById("back").style.opacity = 1;
    document.getElementById("back").disabled = false; 



}


var kode = "XYZ";
var alertTekst = document.getElementById("alertTekst");
var alertTekst2 = document.getElementById("alertTekst2");
var alertTekst3 = document.getElementById("alertTekst3");
var alertTekstX9 = document.getElementById("alertTekst9");

var navn;
var password;
var sjekkCode;

back.onclick = function(){
    document.getElementById("registerSide").style = "position: absolute; right: 150%";
    document.getElementById("loginSide").style = "position: absolute; right: 150%";
    document.getElementById("mainSide").style = "position: static; right: 0%";
    document.getElementById("back").style.opacity = 0;
    document.getElementById("back").disabled = true; 
    alertTekst.innerHTML="";
    alertTekst2.innerHTML="";
    alertTekst3.innerHTML="";
    alertTekst5.innerHTML="";
}

knapp.onclick = function(){
    
    navn = document.getElementById("username").value;
    password = document.getElementById("password").value;
    sjekkCode = document.getElementById("code").value;

    

    alertTekst.innerHTML = "";
    alertTekst2.innerHTML = "";
    alertTekst3.innerHTML = "";
    if(sjekkCode != kode && navn == "" && password == "" ){
        alertTekst.innerHTML="NAME CANNOT BE EMPTY";        
        alertTekst2.innerHTML="PASSWORD CANNOT BE EMPTY";
        alertTekst3.innerHTML="INVALID CODE";
        
    } 
     if(sjekkCode == kode && navn == "" && password == ""){
        alertTekst.innerHTML="NAME CANNOT BE EMPTY";    
        alertTekst2.innerHTML="PASSWORD CANNOT BE EMPTY";
    } 
     if(sjekkCode != kode && navn != "" && password == ""){
        alertTekst3.innerHTML="INVALID CODE";
        alertTekst2.innerHTML="PASSWORD CANNOT BE EMPTY";
    } 
     if(sjekkCode != kode && navn == "" && password != ""){
        alertTekst3.innerHTML="INVALID CODE";
        alertTekst.innerHTML="NAME CANNOT BE EMPTY";
    }  
    if(sjekkCode == kode && navn == "" && password != ""){
        alertTekst.innerHTML="NAME CANNOT BE EMPTY";
    }  if(sjekkCode == kode && navn != "" && password == ""){
        alertTekst2.innerHTML="PASSWORD CANNOT BE EMPTY";
    }  
     if(sjekkCode != kode && navn != "" && password != ""){
        alertTekst3.innerHTML="INVALID CODE";
    } 
     if(sjekkCode == kode && navn != "" && password != ""){
        document.getElementById("knapp").disabled=true;
        alertTekst9.innerHTML="SUCCESSFULLY REGISTERED!";
    } 
    
}



var alertTekst4 = document.getElementById("alertTekst4");
var alertTekst5 = document.getElementById("alertTekst5");

knappL.onclick=function(){
    var navnSjekk = document.getElementById("username2").value;
    var passordSjekk = document.getElementById("password2").value;
    
    if(navnSjekk != navn && passordSjekk != password){
        alertTekst5.innerHTML="INVALID LOGIN";
    }
    if(navnSjekk == navn && passordSjekk != password){
        alertTekst5.innerHTML="INVALID LOGIN";
    }
    if(navnSjekk != navn && passordSjekk == password){
        alertTekst5.innerHTML="INVALID LOGIN";
    }
    if(navnSjekk == navn && passordSjekk == password){
        window.location.href = "mainSide.html";

    }






}


