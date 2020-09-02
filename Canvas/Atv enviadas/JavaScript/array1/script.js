var mensagemSecreta =[
    'Aprender ',
    'não ',
    'é ',
    'sobre ',
    'o ',
    'que ',
    'você ',
    'consegue ',
    'facilmente ',
    'fazer ',
    'na ',
    'primeira ',
    'vez, ' , 'mas ',
    'sobre ',
    'o ',
    'que ',
    'você ',
    'pode ',
    'descobrir. ',
    '-2015 ',
    'Chris ',
    'Pine ',
    'recife'];
    mensagemSecreta.pop()
    mensagemSecreta.push(' Aprenda', '  a', ' programar')
    
    
    
    for(let i = 0;i < mensagemSecreta.length;i++){
        let msg = document.createElement("span")
        msg.innerHTML = mensagemSecreta[i]
      document.querySelector(".boxInterno").appendChild(msg)
      }

