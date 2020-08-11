function bitclick(){
    var menu = document.getElementById('texto').value;

       switch(menu){

            case "1":
               alert("Código: 100 /Cachorro quente. R$ 1,70")
            break;

            case "2":
                alert("Código: 101 /Bauru simples. R$ 2,30")
            break;

            case "3":
               alert("Código: 102 /Bauru com ovo. R$ 2,60")
            break;

            case "4":
               alert("Código: 103 /Hamburguer. R$ 2,40")
            break;

            case "5":
               alert("Código: 104 /Cheeseburguer. R$ 2,50")
            break;

            case "6":
               alert("Código: 105 /Refrigerante. R$ 1,0")
            break;

            default:
            alert(`ESCOLHA UM CÓDIGO`);

        }
   }