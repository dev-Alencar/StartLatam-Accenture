function verificador() {
    const idade = document.querySelector('#idade')
    const resposta = document.querySelector('#result')
  
      if(idade.value <= 1){
        resposta.innerHTML = 'iniciante'
      } else if(idade.value > 1 && idade.value  <= 3){
        resposta.innerHTML = 'intermediário'
        } else if(idade.value > 3 && idade.value <= 6){
          resposta.innerHTML = 'Avançado'
          } else {
              resposta.innerHTML = 'Jedi Master'
           }
  }

  function salarial() {
    const salario = document.getElementById('salario').value
    const variavelNova = document.querySelector("#resultado")
      switch(salario){
         case "900":
             variavelNova.innerHTML= "Precisa de aumento urgente"
            break;

         case "1100":
            variavelNova.innerHTML="Precisa de aumento o mais rápido que puder"
            break;

            case "2500":
                variavelNova.innerHTML= "Precisa  de aumento  mas dá pra esperar"
            break;

            case "3600":
                variavelNova.innerHTML= "Ano que vem"
            break;

            case "4900":
                variavelNova.innerHTML="Daqui a dois anos"
            break;
      }
  }




