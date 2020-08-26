function verificaIdade() {
    const idade = document.querySelector('#idade')
    const resposta = document.querySelector('#result')
  
      if(idade.value <= 12){
        resposta.innerHTML = 'Criança'
      } else if(idade.value > 12 && idade.value <= 18){
        resposta.innerHTML = 'adolescente'
        } else if(idade.value > 18 && idade.value <= 50){
          resposta.innerHTML = 'adulto'
          } else {
              resposta.innerHTML = 'idoso'
           }
  }