function bootclicar(){
    var variavel1 = document.querySelector(".inicia").value
    var newVar = document.createElement("h1");
    

    if (variavel1% 3 === 0 && variavel1% 5 === 0 && variavel1 != 0 ){

        newVar. innerHTML = `BORA DALE JavaScript <br>`
        document.querySelector(".container").appendChild(newVar)


        newVar.style.color = "#6959CD"

    } else if (variavel1%3 === 0  && variavel1 != 0){
        newVar. innerHTML = `BORA<br>`

      document.querySelector(".container").appendChild(newVar)

       newVar.style.color = "#00FA9A"


    }else if (variavel1%5 === 0 && variavel1 != 0 ){
        newVar. innerHTML = `DALE <br>`
       document.querySelector(".container").appendChild(newVar)

        newVar.style.color = "#FF1493"

    } else  {
        newVar. innerHTML = `${variavel1} <br>`
        document.querySelector(".container").appendChild(newVar)

    }


}




function limpa(){
   let segundo  = document.querySelector(".container")
   segundo.innerHTML = " "
}





