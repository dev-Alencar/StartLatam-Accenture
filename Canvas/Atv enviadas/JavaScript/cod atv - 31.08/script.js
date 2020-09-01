function calculo(){

    let primeiraVar = document.querySelector("#numero1").value
 
    let segundaVar = document.querySelector("#numero2").value
 
    let resultado = document.querySelector(".resultado")


     if (isNaN(primeiraVar) || isNaN(segundaVar)){
        resultado.innerHTML = `Esse valor não é um número - isNaN`
    }   else if (primeiraVar == undefined || segundaVar == undefined) {
        resultado.innerHTML = `Esse valor é UNDEFINED`
    }   else if ( primeiraVar== null || segundaVar ==null){
        resultado.innerHTML = `Esse valor é null`
    }   else if ( primeiraVar == "" || segundaVar == ""){
        resultado.innerHTML = `SEM VALOR`
        }else {
        let primeiraAux= Number(primeiraVar)
        let segundaAux= Number(segundaVar)
        let soma=  primeiraAux * segundaAux
        resultado.innerHTML =  `A soma entre ${primeiraVar} é ${segundaVar} é igual a ${soma}`

    }
    

  } 