function verificaIdade() {
    const idade = document.querySelector('#idade')
    const resultado = document.querySelector('#result')
  
      if(idade.value <= 12){
        resultado.innerHTML = 'Criança'
      } else if(idade.value > 12 && idade.value <= 18){
        resultado.innerHTML = 'adolescente'
        } else if(idade.value > 18 && idade.value <= 50){
          resultado.innerHTML = 'adulto'
          } else {
              resultado.innerHTML = 'idoso'
           }
  }