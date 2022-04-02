
function generate(){
    let amount=document.getElementById("amount").value;
    let min=document.getElementById("min").value;
    let max=document.getElementById("max").value;
    amount=Number(amount);
    min=Number(min);
    max=Number(max);
    var aa=max-min;
    var outputpre=[];
    var outputu="";
    for(a=0;a<amount;a++){
        outputpre[a]=Math.floor(Math.random()*aa)+min;
    }
    for(a=0;a<amount;a++){
        outputu+=outputpre[a]+'\n';
    }
    document.getElementById("output").innerHTML=outputu;
}