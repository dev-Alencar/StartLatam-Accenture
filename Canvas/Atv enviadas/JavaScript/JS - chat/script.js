
function primeiroBotao(){
    var variavel1 = document.querySelector(".primeira").value
    var newVar1 = document.createElement("h6");
    newVar1.innerHTML =`A: ${variavel1}`;
    document.querySelector(".chat").appendChild (newVar1);


    if(variavel1 === "socorro" || variavel1 ==="SOCORRO"){
        alert("BOMBEIROS")
    } 
    
}





function segundoBotao(){
    var variavel2 = document.querySelector(".segunda").value
    var newVar2 = document.createElement("p");
    newVar2.innerHTML = `B: ${variavel2}`
    document.querySelector(".chat").appendChild(newVar2);


    if(variavel2 === "socorro" || variavel2 === "SOCORRO"){
        alert("BOMBEIROS")
    }
}